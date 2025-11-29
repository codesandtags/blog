#!/usr/bin/env node

/**
 * Frontmatter Transformation Script for AstroPaper Migration
 * 
 * This script transforms Jekyll-style frontmatter to AstroPaper's schema:
 * - Renames `date` to `pubDatetime` (converts to ISO format)
 * - Merges `categories` into `tags`
 * - Adds `featured: false` (default)
 * - Adds `draft: false` (default, or preserves existing)
 * - Generates `postSlug` from filename
 * - Removes Jekyll-specific fields (`layout`, `author`)
 * 
 * Usage: node scripts/migrate-to-astropaper.js [source-dir] [target-dir]
 * 
 * Example:
 *   node scripts/migrate-to-astropaper.js ../blog/src/content/blog ./src/content/blog
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Get source and target directories from command line args
const sourceDir = process.argv[2] || join(rootDir, 'src', 'content', 'blog');
const targetDir = process.argv[3] || join(rootDir, '..', 'blog-astropaper', 'src', 'content', 'blog');

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterText = match[1];
  const body = match[2];

  // Simple YAML parser for basic key-value pairs
  const frontmatter = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.substring(0, colonIndex).trim();
    let value = trimmed.substring(colonIndex + 1).trim();

    // Handle array values
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim().replace(/^["']|["']$/g, ''))
        .filter(v => v);
    }
    // Handle boolean values
    else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }
    // Handle string values (remove quotes)
    else {
      value = value.replace(/^["']|["']$/g, '');
    }

    frontmatter[key] = value;
  }

  return { frontmatter, body };
}

/**
 * Convert date string to ISO format
 * Handles formats like:
 * - "2023-07-17 20:15 -0500"
 * - "2023-07-17"
 * - ISO strings
 */
function convertToPubDatetime(dateString) {
  if (!dateString) return null;

  try {
    // Try parsing as-is first (handles ISO strings)
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
  } catch (e) {
    // Continue to manual parsing
  }

  // Handle "YYYY-MM-DD HH:mm ±TZ" format
  const dateTimeRegex = /^(\d{4}-\d{2}-\d{2})(?:\s+(\d{2}:\d{2})(?:\s+([+-]\d{4}))?/;
  const match = dateString.match(dateTimeRegex);
  
  if (match) {
    const [, datePart, timePart, tzPart] = match;
    const isoString = timePart 
      ? `${datePart}T${timePart}:00${tzPart || ''}`
      : `${datePart}T00:00:00`;
    
    const date = new Date(isoString);
    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
  }

  // Fallback: try direct Date parsing
  const date = new Date(dateString);
  return !isNaN(date.getTime()) ? date.toISOString() : null;
}

/**
 * Generate postSlug from filename
 * Removes date prefix and extension
 */
function generatePostSlug(filename) {
  // Remove extension
  const withoutExt = basename(filename, extname(filename));
  
  // Remove date prefix (YYYY-MM-DD-)
  const slug = withoutExt.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  
  return slug;
}

/**
 * Merge categories into tags
 */
function mergeCategoriesIntoTags(tags = [], categories = []) {
  const allTags = [...(Array.isArray(tags) ? tags : [tags].filter(Boolean))];
  const allCategories = [...(Array.isArray(categories) ? categories : [categories].filter(Boolean))];
  
  // Merge and deduplicate
  const merged = [...allTags, ...allCategories];
  const unique = [...new Set(merged.map(tag => tag.toLowerCase()))];
  
  // Preserve original case from first occurrence
  return merged.filter((tag, index, self) => 
    self.findIndex(t => t.toLowerCase() === tag.toLowerCase()) === index
  );
}

/**
 * Transform frontmatter from Jekyll to AstroPaper format
 */
function transformFrontmatter(oldFrontmatter, filename) {
  const newFrontmatter = {};

  // Required fields
  newFrontmatter.title = oldFrontmatter.title || 'Untitled';
  
  // Convert date to pubDatetime
  const pubDatetime = convertToPubDatetime(oldFrontmatter.date);
  if (pubDatetime) {
    newFrontmatter.pubDatetime = pubDatetime;
  } else {
    // Try to extract from filename
    const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-/);
    if (dateMatch) {
      newFrontmatter.pubDatetime = new Date(dateMatch[1] + 'T00:00:00').toISOString();
    } else {
      console.warn(`⚠️  No date found for ${filename}, using current date`);
      newFrontmatter.pubDatetime = new Date().toISOString();
    }
  }

  // Generate postSlug
  newFrontmatter.postSlug = generatePostSlug(filename);

  // Merge categories into tags
  newFrontmatter.tags = mergeCategoriesIntoTags(
    oldFrontmatter.tags,
    oldFrontmatter.categories
  );

  // Add featured (default: false)
  newFrontmatter.featured = oldFrontmatter.featured || false;

  // Preserve draft status or default to false
  newFrontmatter.draft = oldFrontmatter.draft === true || oldFrontmatter.draft === 'true';

  // Optional fields
  if (oldFrontmatter.image) {
    newFrontmatter.ogImage = oldFrontmatter.image;
  }

  // Add description if present (AstroPaper supports it)
  if (oldFrontmatter.description) {
    newFrontmatter.description = oldFrontmatter.description;
  }

  return newFrontmatter;
}

/**
 * Convert frontmatter object to YAML string
 */
function frontmatterToYAML(obj) {
  const lines = [];
  
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}: [${value.map(v => `"${v}"`).join(', ')}]`);
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === 'string') {
      // Escape quotes in strings
      const escaped = value.replace(/"/g, '\\"');
      lines.push(`${key}: "${escaped}"`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }

  return lines.join('\n');
}

/**
 * Process a single markdown file
 */
async function processFile(filePath, targetDir) {
  try {
    const content = await readFile(filePath, 'utf-8');
    const filename = basename(filePath);
    
    const { frontmatter, body } = parseFrontmatter(content);
    const newFrontmatter = transformFrontmatter(frontmatter, filename);
    
    // Generate new content
    const newContent = `---\n${frontmatterToYAML(newFrontmatter)}\n---\n\n${body}`;
    
    // Write to target directory
    const targetPath = join(targetDir, filename);
    await writeFile(targetPath, newContent, 'utf-8');
    
    return {
      filename,
      success: true,
      changes: {
        dateToPubDatetime: !!frontmatter.date,
        categoriesMerged: !!(frontmatter.categories && frontmatter.categories.length > 0),
        postSlugGenerated: true,
      }
    };
  } catch (error) {
    return {
      filename: basename(filePath),
      success: false,
      error: error.message
    };
  }
}

/**
 * Main migration function
 */
async function migrate() {
  try {
    console.log('🚀 Starting AstroPaper frontmatter migration...\n');
    console.log(`📂 Source: ${sourceDir}`);
    console.log(`📂 Target: ${targetDir}\n`);

    // Ensure target directory exists
    await mkdir(targetDir, { recursive: true });

    // Read all markdown files
    const files = (await readdir(sourceDir))
      .filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

    if (files.length === 0) {
      console.log('❌ No markdown files found in source directory');
      process.exit(1);
    }

    console.log(`📝 Found ${files.length} files to process...\n`);

    const results = [];
    for (const file of files) {
      const filePath = join(sourceDir, file);
      const result = await processFile(filePath, targetDir);
      results.push(result);

      if (result.success) {
        const changes = [];
        if (result.changes.dateToPubDatetime) changes.push('date→pubDatetime');
        if (result.changes.categoriesMerged) changes.push('categories→tags');
        if (result.changes.postSlugGenerated) changes.push('postSlug');
        
        console.log(`✅ ${file}${changes.length > 0 ? ` (${changes.join(', ')})` : ''}`);
      } else {
        console.log(`❌ ${file}: ${result.error}`);
      }
    }

    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    console.log(`\n📊 Migration Summary:`);
    console.log(`   ✅ Successful: ${successful}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`\n✨ Migration complete!`);
    console.log(`\n📋 Next steps:`);
    console.log(`   1. Review the migrated files in: ${targetDir}`);
    console.log(`   2. Check for any frontmatter issues`);
    console.log(`   3. Test the blog with: npm run dev`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();

