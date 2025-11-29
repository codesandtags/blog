Act as a Senior Frontend Architect and Astro Expert. I am migrating a technical blog from **Jekyll (Ruby)** to **Astro v5 (Node.js)**.

The goal is to modernize the tech stack while preserving the content, SEO value, and the general "look and feel" of my current theme (Jekyll Chirpy).

### 1. SOURCE CONTEXT (JEKYLL)

**My current `_config.yml`:**
[Paste the content of your _config.yml here]

**My current Project Structure:**

- `_posts/`: Contains markdown files named `YYYY-MM-DD-title.md`.
- `_tabs/`: Contains static pages like about, tags, categories.
- `assets/`: Images and static resources.
- `_data/`: Local data files.
- Theme: `jekyll-theme-chirpy` (Features a left sidebar, main content, and right TOC).

### 2. DESTINATION REQUIREMENTS (ASTRO)

I need a high-performance, database-free solution:

- **Framework:** Astro (latest version) with TypeScript.
- **Styling:** Tailwind CSS (to easily replicate the Clean/Chirpy layout).
- **Content:** Astro Content Collections (Strict Schema Validation).
- **Format:** MDX (for future interactive components).
- **Search:** `Pagefind` (Static search, no external services).
- **Analytics:** Google Analytics 4 (migrate the ID from config).
- **SEO:** Robust SEO tags (canonical, Open Graph) replicating the logic in my `_config.yml`.

### 3. STEP-BY-STEP MIGRATION PLAN

Please guide me through this migration by generating the code and instructions for the following steps.

#### STEP A: Project Initialization & Configuration

1. Provide the exact `npm create astro` command to initialize the project with **Tailwind**, **MDX**, and **Sitemap** integrations.
2. Create a `src/consts.ts` (or `site.config.ts`) file. Translate the relevant data from my `_config.yml` (Title, tagline, author, social links, GA ID) into exported TypeScript constants.

#### STEP B: Content Collections & Schemas

1. Create `src/content/config.ts`.
2. Define a strict `zod` schema for the `blog` collection.
   - **Crucial:** Jekyll posts often rely on the filename (`2023-07-17-title.md`) for the date. Please write a transform or loader logic (or provide instructions) to ensure Astro captures the date correctly, even if it's missing from the frontmatter.
   - Handle legacy frontmatter fields like `categories` (array), `tags` (array), and `image`.

#### STEP C: File Migration Strategy

Explain clearly where to move my existing files:

- `_posts/*.md` -> `src/content/blog/` (Do I need to rename them to remove dates?)
- `assets/` -> `src/assets/` (For Astro image optimization) vs `public/`.
- `_tabs/*.md` -> `src/pages/`.

#### STEP D: Layout Components (Chirpy Replication)

Generate the Astro/Tailwind code for:

1.  `BaseLayout.astro`: `<head>`, SEO metadata, and Global Styles.
2.  `Sidebar.astro`: Left column containing the Avatar, Title, Tagline, and Social Links (from `consts.ts`).
3.  `PostLayout.astro`: The layout for individual articles. It must include the Title, Date, Author, and a right-side **Table of Contents (TOC)** (using the Astro remark plugin or similar).

#### STEP E: Routing & Pagination

1.  `src/pages/index.astro`: The homepage listing the latest posts with pagination (similar to `paginate: 10` in Jekyll).
2.  `src/pages/posts/[...slug].astro`: The dynamic route for posts. Ensure it handles slug generation correctly from the content.

---

Please start by executing **STEP A** and **STEP B**.
