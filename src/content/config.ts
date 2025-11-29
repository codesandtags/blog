import { defineCollection, z } from 'astro:content';

/**
 * Blog post schema
 * Handles Jekyll frontmatter fields and ensures date is always present
 *
 * Note: If date is missing from frontmatter, it should be extracted from filename
 * (YYYY-MM-DD-title.md format). This is handled during migration.
 */
const blogSchema = z.object({
  title: z.string(),
  date: z.coerce.date(), // Coerce string dates to Date objects (handles ISO strings, timestamps, etc.)
  author: z.string().default('codesandtags'),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  // Jekyll-specific fields that we'll ignore but allow for compatibility
  layout: z.string().optional(),
  // Support excerpt separator (<!--more-->) - handled in markdown processing
  excerpt_separator: z.string().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  blog,
};

