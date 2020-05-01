---
title: Creating my blog with Gatsby and Github Pages
author: Edwin Torres
date: 2020-05-01
hero: ./images/hero.jpg
excerpt: How to create your own blog using Gatsby and Github Pages.
---

Alright! Today is a great day, many years after I lost my old blog, I've decided to start from scratch
and create again one blog to publish my experiences and don't fall in the inertia. Here I will describe my experience creating my own blog using **Gatsby** and **Github Pages**.

This article will be structured in 

## What you will learn?

1. Overview of Gatsby and GitHub Pages
2. Creating your project with Gatsby
3. Publishing your project in Github Pages
4. Adding Travis CI to automate the deploy process
5. Next steps

## 1. Overview of Gatsby and GitHub Pages

First things first. Before to explain you, how to create your site I will tell you more about Gatsby and Github Pages, if you alreay know about them, go ahead to the next step.

Taken from the official website [Gatsby](https://www.gatsbyjs.org/) is:

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.

So we can use the power of 
[React](https://es.reactjs.org/), [GraphQL](https://graphql.org/), [Markdown](https://es.wikipedia.org/wiki/Markdown) and some data sources
to create really fast web sites, re-using lots of [plugins](https://www.gatsbyjs.org/plugins/) and publishing in many Web hosting, in my case I will deploy in Github Pages.

In other words [Github Pages](https://pages.github.com/) is a free option to deploy hosted repositories 
in Github, also it give us an easy way to automate this process with some platforms like [Travis CI](http://travis-ci.org/). 
  
  
## 2. Creating your project with Gatsby

After I reviewd some tutorials and content in Internet, about how to create my own site with Gatsby, here are my steps.

1. Follow the [quick-start](https://www.gatsbyjs.org/docs/quick-start/) with Gatsby to install the `gatsby-cli`.
2. Once you have installed the Gatsby CLI can create your Gatsby project based on some [Gatsby templates](https://www.gatsbyjs.org/starters/?v=2). 
To be honest, the simplest way to create your own site is using a template instead of creating everything from scratch. 
Also you can find [some examples made with Gatsby](https://github.com/gatsbyjs/gatsby/tree/master/examples) and other technologies.  
3. In my case I've created my site based on the beautiful [narative theme](https://github.com/narative/gatsby-theme-novela). 
Once of the benefits of using this template are: 
* Really good structure to add author and post
* Can be integrated with Contentful to create dynamic post instead of static post (commits in Github)
* Can be integrated with Mailchimp to reuse tue Subscriptions for newsletter
* The styles can be modifies based on the [theme-ui](https://theme-ui.com/)
* The metadata and social networks can be modified in a simple way.
* Is open source.   

If you want to see more templates, you can visit [this link](https://jamstackthemes.dev/#ssg=gatsby).

## 3. Publishing your project in Github Pages

I will no describe the step by step to publish your site in Github Pages, because in the [official page](https://pages.github.com/) is described really well.
However I can provide you some learned lessons.

* I recommend to install the [gh-pages dependency](https://www.npmjs.com/package/gh-pages) to avoid doing many manual things.
* Don't forget to create the `gh-pages` branch in your repo.
* If you are trying to select your `gh-pages` branch, please follow the [next link](https://help.github.com/en/enterprise/2.14/user/articles/configuring-a-publishing-source-for-github-pages).
* Please review the [How Gatsby works with Github pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). 

## 4. Adding Travis CI to automate the deploy process

In few words, [Travis CI]() is

> Easily sync your projects with Travis CI and you’ll be testing your code in minutes!
  
To be honest, this have changed my perspective and life when is needed to automate the deploy process based on commits in a branch.
To deploy your site using Travis CI you need to create a `.travis.yml` file in your root folder project and add the next configuration.

```yaml
language: node_js
cache:
  directories:
    - ~/.npm
notifications:
  email:
    recipients:
      - [THE EMAIL WHERE WILL BE SENT THE NOTIFICATIONS]
    on_success: always
    on_failure: always
node_js:
  - '12.13.1'
git:
  depth: 3
script:
  - npm run build
deploy:
  provider: pages
  skip_cleanup: true
  keep_history: true
  github_token: $GITHUB_TOKEN
  local_dir: public
  on:
    branch: master
```

You also can follow [this article](https://snyk.io/blog/deploying-a-gatsby-site-to-github-pages-from-travis-ci/) to get more details.

* You can achieve the same result using [Circle CI](https://circleci.com/)

## 5. Next steps

It's hard to tell you all things you can do with Gatsby, however you can start reviwing: 
* Review [Gatsby Plugins](https://www.gatsbyjs.org/plugins/)
* Review [Gatsby Resources](https://www.gatsbyjs.org/docs/awesome-gatsby-resources/)
* Connect Gatsby with [Contentful in five minutes](https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/)
* Publish your site in other hosting like [netlify](https://www.netlify.com/)
* Improve the [GraphQL setup with Gatsby](https://www.gatsbyjs.org/docs/graphql-concepts/)
* Add [Gatsby Integrations](https://www.gatsbyjs.com/docs/#integrations)
* Improve your SEO and Analytics tracking.
  