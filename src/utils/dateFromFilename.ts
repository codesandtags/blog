/**
 * Utility to extract date from Jekyll-style filenames
 * Format: YYYY-MM-DD-title.md
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
 * Removes date prefix and .md extension
 */
export function slugFromFilename(filename: string): string {
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.mdx?$/, '');
}

