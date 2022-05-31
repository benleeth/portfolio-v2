/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const HomepageTemplate = path.resolve(`./src/templates/Homepage.js`)
  const PortfolioTemplate = path.resolve(`./src/templates/Portfolio.js`)
  const PortfolioItemTemplate = path.resolve(`./src/templates/PortfolioItem.js`)
  const BlogTemplate = path.resolve(`./src/templates/Blog.js`)
  const BlogPostTemplate = path.resolve(`./src/templates/BlogPost.js`)

  const getStrapiData = makeRequest(graphql, `
    {
      strapiHomePage {
        id
        modules {
          ... on STRAPI__COMPONENT_MODULES_CODE_EXAMPLES {
            strapi_component
            strapi_id
            sectionTitle
            language
            code {
              code
            }
          }
          ... on STRAPI__COMPONENT_MODULES_CONTACT {
            strapi_component
            strapi_id
            sectionTitle
            showForm
          }
          ... on STRAPI__COMPONENT_MODULES_MEDIA {
            strapi_component
            strapi_id
            sectionTitle
            newTab
            download
            media {
              alternativeText
              caption
              localFile {
                publicURL
              }
            }
            screenshot {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 300
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_MODULES_MEDIA_CONTENT {
            strapi_component
            strapi_id
            sectionTitle
            mediaPosition
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            media {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_MODULES_PORTFOLIO {
            strapi_component
            strapi_id
            sectionTitle
            portfolioItems {
              title
              slug
              url
              featuredImage {
                alternativeText
                caption
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 300
                      height: 300
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                      transformOptions: {
                        cropFocus: CENTER
                      }
                    )
                  }
                }
              }
              secondaryFeaturedImage: featuredImage {
                alternativeText
                caption
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 300
                      height: 300
                      quality: 4
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                      transformOptions: {
                        cropFocus: CENTER,
                        grayscale: true
                      }
                    )
                  }
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_MODULES_SKILLS {
            strapi_component
            strapi_id
            sectionTitle
            skillRating {
              text
              rating
            }
          }
        }
      }
      allStrapiPortfolioItem(
        sort: {
          order: ASC,
          fields: title
        }
      ) {
        edges {
          node {
            id
            slug
            title
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            url
            smallFeaturedImage: featuredImage {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 600
                    height: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: {
                      cropFocus: CENTER
                    }
                  )
                }
              }
            }
            featuredImage {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    height: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: {
                      cropFocus: CENTER
                    }
                  )
                }
              }
            }
          }
        }
      }
      allStrapiBlogPost(
        sort: {
          order: DESC,
          fields: createdAt
        }
      ) {
        edges {
          node {
            id
            slug
            createdAt(formatString: "MMMM DD, YYYY")
            updatedAt(formatString: "MMMM DD, YYYY")
            title
            content {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            excerpt {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            smallFeaturedImage: featuredImage {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 600
                    height: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: {
                      cropFocus: CENTER
                    }
                  )
                }
              }
            }
            featuredImage {
              alternativeText
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    height: 600
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: {
                      cropFocus: CENTER
                    }
                  )
                }
              }
            }
          }
        }
      }
    }
    `).then(result => {

      // Create homepage
      if (result.data.strapiHomePage) {
        createPage({
          path: `/`,
          component: HomepageTemplate,
          context: {
            modules: result.data.strapiHomePage.modules
          }
        })
      }

      // Create portfolio roll & pages
      if (result.data.allStrapiPortfolioItem) {
        createPage({
          path: `/portfolio/`,
          component: PortfolioTemplate,
          context: {
            portfolioItems: result.data.allStrapiPortfolioItem.edges
          }
        })

        result.data.allStrapiPortfolioItem.edges.forEach(({ node }) => {
          createPage({
            path: `/portfolio/${node.slug}/`,
            component: PortfolioItemTemplate,
            context: {
              title: node.title,
              content: node.content,
              url: node.url,
              featuredImage: node.featuredImage
            }
          })
        })
      }

      // Create blog roll & pages
      if (result.data.allStrapiBlogPost) {
        createPage({
          path: `/blog/`,
          component: BlogTemplate,
          context: {
            posts: result.data.allStrapiBlogPost.edges
          }
        })

        result.data.allStrapiBlogPost.edges.forEach(({ node }) => {
          createPage({
            path: `/blog/${node.slug}/`,
            component: BlogPostTemplate,
            context: {
              createdAt: node.createdAt,
              updatedAt: node.updatedAt,
              title: node.title,
              content: node.content,
              excerpt: node.excerpt,
              featuredImage: node.featuredImage
            }
          })
        })
      }

  });

  return getStrapiData;
}
