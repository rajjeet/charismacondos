module.exports = {
  siteMetadata: {
    title: `Charisma Condos`,
    description: `Charisma Condos is a New Condo development by Menkes located at Jane and 7, Vaughan.`,
    author: `Jatinder Phull & Jagdeep Gambhir`,
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
        name: `Charisma Condos`,
        short_name: `charisma`,
        start_url: `/`,
        background_color: `#ef7635`,
        theme_color: `#65656a`,
        display: `standalone`,
        icon: `src/images/Charisma_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138684782-1'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ],
}
