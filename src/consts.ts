/**
 * Site configuration constants
 * Migrated from Jekyll _config.yml
 */

export const SITE = {
  title: "codesandtags",
  tagline: "",
  description:
    "The space for Edwin Torres to share his knowledge and experience in programming.",
  url: "https://codesandtags.io",
  baseUrl: "/blog/",
  lang: "en",
} as const;

export const AUTHOR = {
  name: "codesandtags",
  fullName: "Edwin Torres",
  email: "hello@codesandtags.com",
  avatar: "https://avatars.githubusercontent.com/u/5404833",
  url: "https://codesandtags.io",
  twitter: "codesandtags",
  github: "codesandtags",
} as const;

export const SOCIAL_LINKS = [
  "https://twitter.com/codesandtags",
  "https://github.com/codesandtags",
] as const;

export const GOOGLE_ANALYTICS = {
  id: "G-Y2Y45JXYBM",
} as const;

export const PAGINATION = {
  postsPerPage: 10,
} as const;

export const FEATURES = {
  toc: true,
  comments: false, // Can be enabled later with Disqus/Utterances/Giscus
} as const;
