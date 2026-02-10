// @ts-check
// Deployment trigger: test commit
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://vleonel-junior.github.io',
  base: '/Portfolio-main/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap(), preact()]
});