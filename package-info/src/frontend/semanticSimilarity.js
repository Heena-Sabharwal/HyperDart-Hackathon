
import { pipeline } from "@huggingface/transformers";

let extractorPromise = null;

async function getExtractor() {
  if (!extractorPromise) {
    extractorPromise = pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    ).catch((error) => {
      extractorPromise = null;
      throw error;
    });
  }

  return extractorPromise;
}

export async function getEmbedding(text) {
  const extractor = await getExtractor();

  const output = await extractor(text, {
    pooling: "mean",
    normalize: true,
  });

  return output.data;
}

export async function calculateSemanticSimilarity(textA, textB) {
  const [embeddingA, embeddingB] = await Promise.all([
    getEmbedding(textA),
    getEmbedding(textB),
  ]);

  let similarity = 0;

  for (let i = 0; i < embeddingA.length; i++) {
    similarity += embeddingA[i] * embeddingB[i];
  }

  return similarity;
}
