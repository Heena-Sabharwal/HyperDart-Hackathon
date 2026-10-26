import React, { useEffect, useState } from "react";
import { getEmbedding } from "./semanticSimilarity.js";
import {
  Box,
  Chip,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const NPM_REGISTRY = "https://registry.npmjs.org";
const NPM_SEARCH = `${NPM_REGISTRY}/-/v1/search`;

const IGNORED_WORDS = new Set([
  "about", "above", "after", "again", "also", "among", "been", "being",
  "below", "between", "both", "based", "build", "built", "common", "could",
  "each", "from", "have", "into", "just", "library", "lightweight", "modern",
  "more", "most", "other", "package", "provides", "simple", "some", "support",
  "that", "their", "them", "then", "there", "these", "they", "this", "those",
  "through", "using", "very", "with", "without", "your", "javascript",
  "typescript", "node", "nodejs", "module", "modules", "tool", "tools",
  "best", "good", "recommended", "popular", "top", "find", "search", "for", "in"
]);

function normalizeText(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s@/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMeaningfulWords(value) {
  return new Set(
    normalizeText(value)
      .split(/\s+/)
      .filter(
        (word) =>
          word.length > 2 &&
          !IGNORED_WORDS.has(word) &&
          !word.startsWith("@")
      )
  );
}

function getPackageKeywords(pkg) {
  if (!Array.isArray(pkg?.keywords)) {
    return [];
  }

  return pkg.keywords
    .filter((keyword) => typeof keyword === "string")
    .map((keyword) => keyword.toLowerCase().trim())
    .filter(Boolean);
}

function calculateRelevance(original, candidate, npmScore = 0) {
  const originalKeywords = new Set(getPackageKeywords(original));
  const candidateKeywords = new Set(getPackageKeywords(candidate));

  let score = 0;

  for (const keyword of originalKeywords) {
    if (candidateKeywords.has(keyword)) {
      score += 4;
    }
  }

  const originalWords = getMeaningfulWords(original.description || "");
  const candidateWords = getMeaningfulWords(candidate.description || "");

  let sharedWords = 0;

  for (const word of originalWords) {
    if (candidateWords.has(word)) {
      sharedWords += 1;
    }
  }

  score += Math.min(sharedWords, 8);

  if (originalWords.size > 0 && candidateWords.size > 0) {
    const overlapRatio =
      sharedWords / Math.max(1, Math.min(originalWords.size, candidateWords.size));

    score += overlapRatio * 3;
  }

  if (Number.isFinite(npmScore)) {
    score += Math.max(0, npmScore) * 2;
  }

  return score;
}

function buildSearchQueries(original) {
  const name = (original.name || "").toLowerCase();
  const keywords = getPackageKeywords(original);
  const description = normalizeText(original.description);

  const domainQueries = [];

  const hasAny = (terms) =>
    terms.some((term) => keywords.includes(term) || description.includes(term));

  if (
    name === "moment" ||
    hasAny(["date", "datetime", "date-time", "date manipulation", "time"])
  ) {
    domainQueries.push(
      "javascript date library",
      "date parsing formatting manipulation",
      "date-fns",
      "dayjs",
      "luxon",
      "javascript datetime"
    );
  }

  if (hasAny(["http", "http client", "request", "fetch", "ajax"])) {
    domainQueries.push(
      "javascript http client",
      "promise based http requests",
      "fetch api alternative"
    );
  }

  if (hasAny(["utility", "utilities", "functional programming"])) {
    domainQueries.push(
      "javascript utility library",
      "functional programming utilities"
    );
  }

  if (hasAny(["validation", "schema", "validator"])) {
    domainQueries.push(
      "javascript schema validation",
      "object validation library"
    );
  }

  const keywordQueries = keywords
    .filter((keyword) => keyword.length >= 3)
    .slice(0, 5);

  const descriptionWords = [...getMeaningfulWords(original.description)];
  const descriptionQueries = [
    descriptionWords.slice(0, 4).join(" "),
    descriptionWords.slice(2, 6).join(" "),
  ].filter((query) => query.trim().length >= 2);

  const queries = [
    `${name} alternative`,
    ...domainQueries,
    ...keywordQueries,
    ...descriptionQueries,
  ];

  return [...new Set(queries.map((query) => query.trim()).filter(Boolean))]
    .slice(0, 12);
}

async function fetchLatestPackage(name) {
  const response = await fetch(
    `${NPM_REGISTRY}/${encodeURIComponent(name)}/latest`
  );

  if (!response.ok) {
    throw new Error(`Could not fetch metadata for "${name}".`);
  }

  return response.json();
}

async function searchNpm(query) {
  const response = await fetch(
    `${NPM_SEARCH}?text=${encodeURIComponent(query)}&size=20`
  );

  if (!response.ok) {
    throw new Error("Could not search npm. Please try again.");
  }

  return response.json();
}

function getDependencyNames(metadata) {
  return [
    ...Object.keys(metadata.dependencies || {}),
    ...Object.keys(metadata.peerDependencies || {}),
    ...Object.keys(metadata.optionalDependencies || {}),
  ].map((name) => name.toLowerCase());
}

function evaluateRelationship(originalName, candidate, metadata) {
  const original = originalName.toLowerCase();
  const candidateName = (candidate.name || "").toLowerCase();
  const description = (candidate.description || "").toLowerCase();
  const dependencies = getDependencyNames(metadata);

  let penalty = 0;
  const reasons = [];

  if (dependencies.includes(original)) {
    penalty += 8;
    reasons.push("depends on the original package");
  }

  const integrationTerms = [
    "adapter",
    "wrapper",
    "integration",
    "plugin",
    "react component",
    "extension for",
    "bridge for",
  ];

  const mentionsOriginal =
    candidateName.includes(original) || description.includes(original);

  const describesIntegration = integrationTerms.some((term) =>
    description.includes(term)
  );

  if (mentionsOriginal && describesIntegration) {
    penalty += 4;
    reasons.push("may be an integration or wrapper");
  }

  return { penalty, reasons };
}

function isUseCaseQuery(query) {
  const normalized = normalizeText(query);
  const useCaseKeywords = [
    "best", "package for", "library for", "tool for", "how to", "parsing",
    "formatting", "generator", "utility for", "framework for", "wrapper for"
  ];

  const hasUseCaseWord = useCaseKeywords.some((kw) => normalized.includes(kw));
  const wordCount = normalized.split(/\s+/).length;

  return hasUseCaseWord || wordCount >= 4;
}

function NewComponent(props) {
  const [packageInfo, setPackageInfo] = useState(null);
  const [comparisonResults, setComparisonResults] = useState([]);
  const [useCaseResults, setUseCaseResults] = useState([]);
  const [useCaseTopic, setUseCaseTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [alternativeResults, setAlternativeResults] = useState([]);

  // Extract search query passed from HyperDart top search bar
  const activeQuery =
    props?.query ||
    props?.searchQuery ||
    props?.searchTerm ||
    props?.data?.query ||
    props?.searchData?.query ||
    props?.entities?.[0]?.word ||
    "";

  useEffect(() => {
    props?.messageHandlers?.componentLoaded?.();
  }, []);

  // Run search whenever HyperDart passes a new query
  useEffect(() => {
    if (activeQuery && activeQuery.trim()) {
      executeSearch(activeQuery.trim());
    }
  }, [activeQuery]);

  async function fetchPackageInfo(name) {
    let response;

    try {
      response = await fetch(
        `${NPM_REGISTRY}/${encodeURIComponent(name)}/latest`
      );
    } catch {
      throw new Error(
        "Network error. Please check your internet connection and try again."
      );
    }

    if (response.status === 404) {
      throw new Error(`Package "${name}" not found. Please check the name.`);
    }

    if (!response.ok) {
      throw new Error(
        "Could not fetch package information. Please try again."
      );
    }

    return response.json();
  }

  async function fetchUseCaseRecommendations(userQuery) {
    const words = [...getMeaningfulWords(userQuery)];

    const searchPhrases = [
      userQuery,
      words.join(" "),
      words.slice(0, 3).join(" "),
    ].filter(Boolean);

    const searchSettled = await Promise.allSettled(
      searchPhrases.map((q) => searchNpm(q))
    );

    const successfulSearches = searchSettled
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value);

    const candidateMap = new Map();

    for (const searchResult of successfulSearches) {
      for (const item of searchResult.objects || []) {
        const pkg = item.package;
        if (!pkg || typeof pkg.name !== "string") continue;

        const key = pkg.name.toLowerCase();
        const searchScore = Number(item.score?.final) || 0;
        const existing = candidateMap.get(key);

        if (!existing || searchScore > existing.searchScore) {
          candidateMap.set(key, { ...pkg, searchScore });
        }
      }
    }

    const candidatePool = [...candidateMap.values()]
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(0, 40);

    if (candidatePool.length === 0) {
      throw new Error(`No npm packages found for use-case "${userQuery}".`);
    }

    const queryEmbedding = await getEmbedding(`Goal: ${userQuery}. JavaScript library package.`);

    const semanticSettled = await Promise.allSettled(
      candidatePool.map(async (candidate) => {
        const candidateText = [
          `Package name: ${candidate.name}.`,
          candidate.description,
          `Topics: ${(Array.isArray(candidate.keywords) ? candidate.keywords : []).join(", ")}.`,
        ]
          .filter(Boolean)
          .join(" ");

        const candidateEmbedding = await getEmbedding(candidateText);
        let semanticScore = 0;

        for (let i = 0; i < queryEmbedding.length; i++) {
          semanticScore += queryEmbedding[i] * candidateEmbedding[i];
        }

        return {
          ...candidate,
          semanticScore,
          relevanceScore: semanticScore * 100 + candidate.searchScore * 5,
        };
      })
    );

    const rankedCandidates = semanticSettled
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 4);

    const enrichedSettled = await Promise.allSettled(
      rankedCandidates.map(async (candidate) => {
        try {
          const metadata = await fetchLatestPackage(candidate.name);
          return {
            ...candidate,
            ...metadata,
            homepage: metadata.homepage || candidate.links?.homepage || candidate.links?.repository || "",
          };
        } catch {
          return {
            ...candidate,
            homepage: candidate.links?.homepage || candidate.links?.repository || "",
          };
        }
      })
    );

    return enrichedSettled
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value);
  }

  async function fetchAlternatives(packageName) {
    const original = await fetchPackageInfo(packageName);
    const queries = buildSearchQueries(original);

    if (queries.length === 0) {
      throw new Error(
        `Not enough package metadata to discover alternatives to "${packageName}".`
      );
    }

    const searchSettled = await Promise.allSettled(
      queries.map((query) => searchNpm(query))
    );

    const successfulSearches = searchSettled
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    if (successfulSearches.length === 0) {
      throw new Error(
        "Could not discover alternatives because npm searches failed. Please try again."
      );
    }

    const candidateMap = new Map();

    for (const searchResult of successfulSearches) {
      for (const item of searchResult.objects || []) {
        const pkg = item.package;
        if (!pkg || typeof pkg.name !== "string") continue;

        const key = pkg.name.toLowerCase();
        const searchScore = Number(item.score?.final) || 0;
        const existing = candidateMap.get(key);

        if (!existing || searchScore > existing.searchScore) {
          candidateMap.set(key, { ...pkg, searchScore });
        }
      }
    }

    const originalName = (original.name || packageName).toLowerCase();
    const originalText = [
      `Purpose of package ${original.name || packageName}.`,
      original.description,
      `Package topics: ${(Array.isArray(original.keywords) ? original.keywords : []).join(", ")}.`,
    ]
      .filter(Boolean)
      .join(" ");

    const candidatePool = [...candidateMap.values()]
      .filter((pkg) => pkg.name.toLowerCase() !== originalName)
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(0, 60);

    if (candidatePool.length === 0) return [];

    const originalEmbedding = await getEmbedding(originalText);

    const semanticSettled = await Promise.allSettled(
      candidatePool.map(async (candidate) => {
        const candidateText = [
          `Purpose of package ${candidate.name}.`,
          candidate.description,
          `Package topics: ${(Array.isArray(candidate.keywords) ? candidate.keywords : []).join(", ")}.`,
        ]
          .filter(Boolean)
          .join(" ");

        const candidateEmbedding = await getEmbedding(candidateText);
        let semanticScore = 0;

        for (let i = 0; i < originalEmbedding.length; i++) {
          semanticScore += originalEmbedding[i] * candidateEmbedding[i];
        }

        const lexicalScore = calculateRelevance(
          original,
          candidate,
          candidate.searchScore
        );

        const normalizedCandidateName = candidate.name.toLowerCase();
        const normalizedOriginalName = originalName.toLowerCase();
        const looksLikeForkOrMiniVariant =
          normalizedCandidateName.startsWith(`${normalizedOriginalName}-`) ||
          normalizedCandidateName.startsWith(`${normalizedOriginalName}.`) ||
          normalizedCandidateName === `${normalizedOriginalName}js` ||
          normalizedCandidateName === `${normalizedOriginalName}-mini`;

        return {
          ...candidate,
          semanticScore,
          relevanceScore:
            semanticScore * 100 +
            Math.min(lexicalScore, 10) * 0.5 +
            candidate.searchScore * 2 -
            (looksLikeForkOrMiniVariant ? 12 : 0),
        };
      })
    );

    const rankedCandidates = semanticSettled
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value)
      .sort((a, b) => b.relevanceScore - a.relevanceScore);

    if (rankedCandidates.length === 0) {
      throw new Error(
        "Could not calculate semantic similarity. Check your connection and try again."
      );
    }

    const shortlist = rankedCandidates.slice(0, 15);

    const enrichedSettled = await Promise.allSettled(
      shortlist.map(async (candidate) => {
        const metadata = await fetchLatestPackage(candidate.name);
        const relationship = evaluateRelationship(
          originalName,
          candidate,
          metadata
        );

        return {
          ...candidate,
          ...metadata,
          homepage:
            metadata.homepage ||
            candidate.links?.homepage ||
            candidate.links?.repository ||
            "",
          relevanceScore: candidate.relevanceScore - relationship.penalty,
          relationshipNotes: relationship.reasons,
        };
      })
    );

    const enrichedCandidates = enrichedSettled
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    const enrichedNames = new Set(
      enrichedCandidates.map((pkg) => pkg.name.toLowerCase())
    );

    const fallbackCandidates = shortlist
      .filter((pkg) => !enrichedNames.has(pkg.name.toLowerCase()))
      .map((pkg) => ({
        ...pkg,
        homepage: pkg.links?.homepage || pkg.links?.repository || "",
        relationshipNotes: [],
      }));

    return [...enrichedCandidates, ...fallbackCandidates]
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 5);
  }

  async function executeSearch(query) {
    const alternativeMatch = query.match(
      /^(?:find\s+)?(?:alternatives|alternative packages|similar packages)\s+(?:to|for)\s+(.+)$/i
    );

    const comparisonRequested = /^\s*compare\b/i.test(query);
    const cleanedQuery = query.replace(/^\s*compare\s+/i, "");

    const names = cleanedQuery
      .split(/,\s*|\s+(?:and|vs\.?)\s+/i)
      .map((name) => name.trim())
      .filter(Boolean);

    const shouldCompare = comparisonRequested || names.length > 1;

    setLoading(true);
    setError("");
    setPackageInfo(null);
    setComparisonResults([]);
    setAlternativeResults([]);
    setUseCaseResults([]);

    try {
      if (alternativeMatch) {
        const targetPackage = alternativeMatch[1].trim();
        const results = await fetchAlternatives(targetPackage);

        if (results.length === 0) {
          throw new Error(
            `No suitable alternative candidates found for "${targetPackage}".`
          );
        }

        setAlternativeResults(results);
      } else if (shouldCompare) {
        if (names.length < 2 || names.length > 3) {
          throw new Error(
            "Please compare 2 or 3 packages, for example: Compare React and Vue."
          );
        }

        const results = await Promise.all(
          names.map((name) => fetchPackageInfo(name))
        );

        setComparisonResults(results);
      } else if (isUseCaseQuery(query)) {
        const results = await fetchUseCaseRecommendations(query);
        setUseCaseTopic(query);
        setUseCaseResults(results);
      } else {
        try {
          const info = await fetchPackageInfo(query);
          setPackageInfo(info);
        } catch {
          const results = await fetchUseCaseRecommendations(query);
          setUseCaseTopic(query);
          setUseCaseResults(results);
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function PackageCard({ info }) {
    return (
      <Box
        sx={{
          p: 2,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          minWidth: 0,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ overflowWrap: "anywhere" }}
        >
          {info.name}
        </Typography>

        <Chip
          label={`Latest: ${info.version || "Unknown"}`}
          color="primary"
          size="small"
          sx={{ mt: 1 }}
        />

        <Typography sx={{ mt: 2 }}>
          {info.description || "No description provided."}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>License:</strong> {info.license || "Not specified"}
        </Typography>

        {info.homepage && (
          <Typography
            variant="body2"
            sx={{ mt: 1, overflowWrap: "anywhere" }}
          >
            <strong>Homepage:</strong>{" "}
            <a href={info.homepage} target="_blank" rel="noreferrer">
              {info.homepage}
            </a>
          </Typography>
        )}

        {Array.isArray(info.relationshipNotes) &&
          info.relationshipNotes.length > 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Note: {info.relationshipNotes.join("; ")}.
            </Typography>
          )}
      </Box>
    );
  }

  function ComparisonTable({ results }) {
    return (
      <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "20%" }}>Feature</TableCell>
              {results.map((pkg) => (
                <TableCell key={pkg.name} sx={{ fontWeight: "bold" }}>
                  {pkg.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                Latest Version
              </TableCell>
              {results.map((pkg) => (
                <TableCell key={pkg.name}>
                  <Chip
                    label={pkg.version || "Unknown"}
                    color="primary"
                    size="small"
                  />
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                Description
              </TableCell>
              {results.map((pkg) => (
                <TableCell key={pkg.name}>
                  {pkg.description || "No description provided."}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                License
              </TableCell>
              {results.map((pkg) => (
                <TableCell key={pkg.name}>{pkg.license || "Not specified"}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                Homepage
              </TableCell>
              {results.map((pkg) => (
                <TableCell key={pkg.name} sx={{ overflowWrap: "anywhere" }}>
                  {pkg.homepage ? (
                    <a href={pkg.homepage} target="_blank" rel="noreferrer">
                      {pkg.homepage}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      {!activeQuery && (
        <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
          Enter a query in the top search bar (e.g. "compare react and vue" or "best package for date formatting").
        </Typography>
      )}

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" role="alert" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {packageInfo && <PackageCard info={packageInfo} />}

      {comparisonResults.length > 0 && (
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Package Comparison
          </Typography>

          <ComparisonTable results={comparisonResults} />
        </Box>
      )}

      {useCaseResults.length > 0 && (
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Top Package Recommendations
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Ranked options for: <strong>"{useCaseTopic}"</strong>
          </Typography>

          <ComparisonTable results={useCaseResults} />
        </Box>
      )}

      {alternativeResults.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Alternative Package Candidates
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
            }}
          >
            {alternativeResults.map((info) => (
              <PackageCard key={info.name} info={info} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default NewComponent;
