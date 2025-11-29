#!/usr/bin/env node

/**
 * Migration script to copy Jekyll posts to Astro content collection
 *
 * Usage: node scripts/migrate-posts.js
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const POSTS_SOURCE = join(rootDir, '_posts');
const POSTS_DEST = join(rootDir, 'src', 'content', 'blog');

/**
 * Extract date from filename (YYYY-MM-DD-title.md)
 */
function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-/);
  if (match) {
    const [, year, month, day] = match;
    return `${year}-${month}-${day}`;
  }
  return null;
}

/**
 * Process a Jekyll post file
 */
async function processPost(filename) {
  const sourcePath = join(POSTS_SOURCE, filename);
  const content = await readFile(sourcePath, 'utf-8');

  // Check if date is in frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  let frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

  // Extract date from filename if not in frontmatter
  if (!frontmatter.includes('date:')) {
    const dateFromFilename = extractDateFromFilename(filename);
    if (dateFromFilename) {
      // Add date to frontmatter
      frontmatter = `date: ${dateFromFilename}\n${frontmatter}`;
      // Reconstruct content with new frontmatter
      const body = content.replace(/^---\n[\s\S]*?\n---\n/, '');
      const newContent = `---\n${frontmatter}\n---\n${body}`;
      return { filename, content: newContent, modified: true };
    }
  }

  return { filename, content, modified: false };
}

/**
 * Main migration function
 */
async function migratePosts() {
  try {
    // Ensure destination directory exists
    await mkdir(POSTS_DEST, { recursive: true });

    // Read all markdown files from _posts
    const files = (await readdir(POSTS_SOURCE))
      .filter(file => file.endsWith('.md'));

    console.log(`Found ${files.length} posts to migrate...\n`);

    let migrated = 0;
    let modified = 0;

    for (const file of files) {
      const { filename, content, modified: wasModified } = await processPost(file);
      const destPath = join(POSTS_DEST, filename);

      await writeFile(destPath, content, 'utf-8');
      migrated++;

      if (wasModified) {
        modified++;
        console.log(`✓ ${filename} (added date from filename)`);
      } else {
        console.log(`✓ ${filename}`);
      }
    }

    console.log(`\n✅ Migration complete!`);
    console.log(`   - Migrated: ${migrated} posts`);
    if (modified > 0) {
      console.log(`   - Modified: ${modified} posts (added dates)`);
    }
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Review the migrated posts in src/content/blog/`);
    console.log(`   2. Run 'npm run dev' to test locally`);
    console.log(`   3. Check for any frontmatter issues`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migratePosts();

