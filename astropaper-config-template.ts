/**
 * AstroPaper Configuration Template
 *
 * This is the configuration you'll need to paste into your new AstroPaper project's
 * src/config.ts file after initialization.
 *
 * Based on your current Jekyll/Astro configuration:
 * - Site: codesandtags
 * - Author: Edwin Torres
 * - URL: https://codesandtags.github.io
 * - Email: hello@codesandtags.com
 * - Twitter: codesandtags
 * - GitHub: codesandtags
 */

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  TITLE: "codesandtags",
  DESCRIPTION:
    "The space for Edwin Torres to share his knowledge and experience in programming.",
  AUTHOR: "Edwin Torres",
  LOGO: "/assets/img/logo.png", // Update this path if needed
  EMAIL: "hello@codesandtags.com",
  NUM_POSTS_ON_HOMEPAGE: 10,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_POSTS_PER_PAGE: 10,
};

export const LOCALE: { lang: string; dateFormat: string } = {
  lang: "en", // html lang code. Use "en" for English, "es" for Spanish, etc.
  dateFormat: "yyyy-MM-dd", // Date format for your posts
};

export const METADATA: Metadata = {
  TITLE: "codesandtags",
  DESCRIPTION:
    "The space for Edwin Torres to share his knowledge and experience in programming.",
  URL: "https://codesandtags.github.io",
  OG_IMAGE: "/assets/img/logo.png", // Update this path if needed
  SITE_NAME: "codesandtags",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://twitter.com/codesandtags",
    ISHIDDEN: false,
  },
  {
    NAME: "github",
    HREF: "https://github.com/codesandtags",
    ISHIDDEN: false,
  },
  {
    NAME: "email",
    HREF: "mailto:hello@codesandtags.com",
    ISHIDDEN: false,
  },
];

/**
 * Note: AstroPaper uses these social icon names:
 * - twitter, github, email, linkedin, youtube, facebook, instagram,
 *   telegram, mastodon, threads, x (formerly twitter)
 *
 * You can add more social links as needed.
 */
