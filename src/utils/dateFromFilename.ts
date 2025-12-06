/**
 * Utility to extract date from Jekyll-style filenames
 * Format: YYYY-MM-DD-title.md
 *
 * Note: This function is kept for backward compatibility with migration scripts.
 * Blog posts no longer have dates in their filenames - dates are stored in frontmatter.
 */
export function extractDateFromFilename(filename: string): Date | null {
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-/);
  if (match) {
    const [, year, month, day] = match;
    return new Date(`${year}-${month}-${day}`);
  }
  return null;
}

/**
 * Generate slug from filename
 * Removes .md extension (and date prefix if present for backward compatibility)
 */
export function slugFromFilename(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.mdx?$/, "");
}
