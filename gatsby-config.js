module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Codes and Tags`,
    name: `Edwin Torres`,
    siteUrl: `https://codesandtags.github.io/blog/`,
    description: `Codes and Tags is a blog created by Edwin Torres to share him experiences being Developer, Traveler and Teacher as Full-Stack Developer`,
    hero: {
      heading: `Coding, stories, and other technical stuff.`,
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
      },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-25918076-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // add your MC list endpoint here; see plugin repo for instructions
        endpoint: 'https://github.us8.list-manage.com/subscribe/post?u=8dbe735d8d5499c1098e8f8ff&amp;id=6324a629f0',
      },
    },
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77,
        height: 400,
        related: false,
        noIframeBorder: true
      },
    },
  ],
};
