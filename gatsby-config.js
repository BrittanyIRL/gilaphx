const contentfulConfig = require('./.contentful')

module.exports = {
  siteMetadata: {
    title: `Gila PHX`
  },
  pathPrefix: '/gilaphx',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }
  ],
}
