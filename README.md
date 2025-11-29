# Codes and Tags Blog

This is the repository for my personal blog, where I document technical stuff and knowledge that I want to share with the world.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/codesandtags/blog.git
cd blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The blog will be available at `http://localhost:4321`

## 📝 Adding a New Post

To add a new post, create a new markdown file in the `src/content/blog/` directory. The file name should follow the format `YYYY-MM-DD-title.md`.

Example post structure:

```markdown
---
title: "Title of the post"
date: 2024-01-15
author: codesandtags
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
draft: false
---

Content of your post goes here...
```

### Post Frontmatter

- `title` (required): The post title
- `date` (required): Publication date (YYYY-MM-DD format)
- `author` (optional): Author name (defaults to "codesandtags")
- `categories` (optional): Array of category names
- `tags` (optional): Array of tag names
- `image` (optional): Path to featured image
- `draft` (optional): Set to `true` to hide from production

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes Pagefind search index)
- `npm run preview` - Preview production build locally
- `npm run migrate:posts` - Run post migration script

## 🏗️ Build & Deploy

Build the site:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy to GitHub Pages or any static hosting service.

## 🎨 Tech Stack

- [Astro](https://astro.build/) - Static site framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Pagefind](https://pagefind.app/) - Static search library
- [MDX](https://mdxjs.com/) - Markdown with JSX components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📁 Project Structure

```
blog/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Blog posts (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── utils/          # Utility functions
├── public/             # Static assets
└── scripts/            # Migration and utility scripts
```

## 📄 License

See [LICENSE](LICENSE) file for details.
