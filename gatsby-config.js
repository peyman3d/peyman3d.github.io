/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Peyman Eskandari| Front-End Developer",
        short_name: "Peyman Eskandari",
        start_url: "/",
        background_color: "#1755f6",
        theme_color: "#1755f6",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYICS_TRACKING_ID || "none",
        head: true,
        defer: false,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/posts/`,
      },
    },
  ],

  siteMetadata: {
    title: "Peyman Eskandari",
    titleTemplate: "%s | Front-End Developer",
    description:
      "Hi, I’m Peyman, a front-end <developer /> focused on building products that are beautiful from the inside out.",
    url: "https://peyman.me",
    image: "/seo-image.png",
    twitterUsername: "@peyman3d",
  },
};
