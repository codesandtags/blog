![Blog build status](https://github.com/codesandtags/blog/actions/workflows/jekyll.yml/badge.svg)

# Codes and Tags Blog

This is the repository for my personal blog, here I document technical stuffs and knowledge that I want to share with the world.

## Start up the blog

To start the blog locally, you need to have Ruby installed on your machine. Then you can run the following commands:

```bash
bundle install
bundle exec jekyll serve
```

## Add new post

To add a new post, you can create a new markdown file in the `_posts` directory. The file name should be in the format `YYYY-MM-DD-title.md`. The content of the file should be like this:

```bash
bundle exec jekyll post "amazon senior frontend interview"
```

```markdown
---
layout: post
title: "Title of the post"
date: 2021-09-01 12:00:00 +0700
categories: category1 category2
---

Content
```

## What I use

- [Jekyll](https://jekyllrb.com/)
- [GitHub Pages](https://pages.github.com/)
- [Jekyll Theme Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
