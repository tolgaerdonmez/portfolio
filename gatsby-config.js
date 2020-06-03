require("dotenv").config();

const githubConfig = require("./config/github");

module.exports = {
  siteMetadata: {
    title: `Tolga Erdonmez`,
    description: `Tolga Erdonmez's Portfolio Website`,
    author: `@tolgaerdonmez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${githubConfig.username}-portfolio`,
        short_name: `${githubConfig.username}-portfolio`,
        start_url: `/`,
        background_color: `#00171fff`,
        theme_color: `#00171fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: githubConfig.apiToken,
        graphQLQuery: githubConfig.query,
        variables: githubConfig.variables,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
