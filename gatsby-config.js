module.exports = {
    pathPrefix: "/portfolio-starter",
    siteMetadata: {
      title: `Portfolio Gatsby Starter`,
      description: `starter portfolio for digital creative professionals`,
      author: `@rachel-fischoff & @katygrahamm`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
  
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/static`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    //   {
    //     resolve: `gatsby-plugin-manifest`,
    //     options: {
    //       name: `portfolio-starter`,
    //       short_name: `starter`,
    //       start_url: `/`,
    //       background_color: ,
    //       theme_color: ,
    //       display: `minimal-ui`,
    //       icon:  // This path is relative to the root of the site.
    //     },
    //   },
  
      // 'gatsby-plugin-styled-components',
  
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }