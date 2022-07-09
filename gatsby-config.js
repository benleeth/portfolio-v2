require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'blog-post',
      queryParams: {
        populate: {
          featuredImage: {
            populate: '*'
          },
          seo: {
            populate: '*',
            image: {
              populate: '*'
            }
          }
        }
      }
    }, {
      singularName: 'portfolio-item',
      queryParams: {
        populate: {
          featuredImage: {
            populate: '*'
          },
          seo: {
            populate: '*',
            image: {
              populate: '*'
            }
          }
        }
      }
    }
  ],
  singleTypes: [
    {
      singularName: 'home-page',
      queryParams: {
        populate: {
          modules: {
            populate: '*'
          },
          seo: {
            populate: '*'
          }
        }
      }
    }
  ]
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.benleeth.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-D3W780PZM1"
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.jpeg"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:300,400,500`
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};