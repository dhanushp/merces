module.exports = {
  siteMetadata: {
    title: `Merces`,
    description: `Mereces provides wide collection of modern and elegant looking Sanitaryware. We have wide range of Faucets and other Sanitarywares.`,
    author: `@dhanushpbangera`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Merces`,
        short_name: `Merces`,
        start_url: `/`,
        background_color: `#00000`,
        theme_color: `#fffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
