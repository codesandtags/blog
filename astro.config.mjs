import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeFixAssetPaths } from "./src/utils/rehype-fix-asset-paths";

// https://astro.build/config
export default defineConfig({
  site: "https://codesandtags.io",
  base: "/blog/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    remarkPlugins: [remarkSlug],
    rehypePlugins: [
      // Fix asset paths to include base path (runs after markdown is converted to HTML)
      [
        rehypeFixAssetPaths,
        {
          base: "/blog/",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            class: "anchor-link",
          },
        },
      ],
    ],
  },
});
