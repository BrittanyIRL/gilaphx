const contentfulConfig = require('./.contentful')

module.exports = {
  siteMetadata: {
    title: `Gila PHX`,
    siteName: `Gila PHX`
  },
  // pathPrefix: '/gilaphx',
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
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `Inconsolata`,
         `Work Sans\:400,600`
       ]
     }
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
  },
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91724875-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}
