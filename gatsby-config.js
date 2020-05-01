module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Codes and Tags`,
    name: `Edwin Torres`,
    siteUrl: `https://codesandtags.github.io/blog/`,
    description: `Codes and Tags is the blog created by Edwin Torres to share him experiences being Developer, Traveler and Teacher. Front-End`,
    hero: {
      heading: `Coding, Front-End, Software Architecture and other stuffs.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/codesandtags`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/ed_traveler/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/edwintorresdeveloper/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true, // make sure this is true!
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codes and Tags`,
        short_name: `Edwin Torres`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
