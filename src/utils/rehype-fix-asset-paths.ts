import type { Root } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

interface Options {
  base?: string;
}

/**
 * Rehype plugin to fix asset paths in markdown images
 * Adds the base path to image src attributes that start with /assets/
 */
export function rehypeFixAssetPaths(options: Options = {}): Plugin<[Options?], Root> {
  const baseUrl = options.base || import.meta.env.BASE_URL || '/blog/';

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties?.src) {
        const src = String(node.properties.src);
        // Only fix paths that start with /assets/ (absolute paths)
        // Skip if already includes base path or is a full URL
        if (
          src.startsWith('/assets/') &&
          !src.startsWith(baseUrl) &&
          !src.startsWith('http') &&
          !src.startsWith('//')
        ) {
          // Remove leading slash and add base path
          node.properties.src = `${baseUrl}${src.slice(1)}`;
        }
      }
    });

    return tree;
  };
}

