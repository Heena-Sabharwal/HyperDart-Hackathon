
import pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,

  triggers: {
    keywords: [
      'npm',
      'package info',
      'npm package',
      'compare packages',
      'alternatives to',
      'similar packages',
      'package for',
      'react',
      'vue',
      'angular',
      'svelte',
      'framework',
      'library',
      'tool',
      'best package',
      'best library',
      'best framework',
      'best tool',
      'best npm package',
      'best npm library',
      'best npm framework',
      'best npm tool',
      'moment'
    ]
  },

  query_format: {
    regex: [
      '^(?:npm\\s+)?[a-zA-Z0-9@._/-]+$',
      '^compare\\s+.+$',
      '^alternatives\\s+to\\s+.+$',
      '^alternative packages\\s+(?:to|for)\\s+.+$',
      '^similar packages\\s+(?:to|for)\\s+.+$',
      '^(?:best\\s+)?(?:npm\\s+)?(?:package|library|tool|framework)\\s+for\\s+.+$',
      '.*'
    ]
  },

  client: {
    location: pkg.module,
    moduleName: pkg.umdName || 'HD' + pkg.name,
    baseURL: '/' + pkg.name
  },

  format: {
    mainline: true,
    sidebar: true
  },

  permissions: {},

  info: {},

  github: 'https://github.com/Heena-Sabharwal/HyperDart-Hackathon',
  demovideo: 'https://youtu.be/QiHUYv7twB8'
}
