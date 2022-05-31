import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BlogPostTemplate = ({ pageContext }) => {
  const image = getImage(pageContext.featuredImage.localFile)

  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        seoTitle={ pageContext.seo.title }
        title={ pageContext.title }
        description={ pageContext.seo.description }
        canonicalUrl={ pageContext.seo.canonicalUrl }
        url={ `https://wwww.benleeth.com/blog/${pageContext.slug}` }
        type="blog"
        published={ pageContext.seoCreatedAt }
        modified={ pageContext.seoUpdateddAt }
        image={ pageContext.seo.image.localFile.childImageSharp.fixed.base64 }
      />
      <section className="portfolio-item__banner">
        {pageContext.featuredImage &&
          <GatsbyImage image={ image } alt={ pageContext.featuredImage.alternativeText } />
        }
        <div className="portfolio-item__overlay" />
        {pageContext.title &&
          <h1>{ pageContext.title }</h1>
        }
      </section>
      <section className="portfolio-item__content grid">
        <div className="col-desk-16">
          {!pageContext.updatedAt &&
            <p><em>Posted on: { pageContext.createdAt }</em></p>
          }
          {pageContext.updatedAt &&
            <p><em>Updated on: { pageContext.updatedAt }</em></p>
          }
          <br />
          {pageContext.content &&
            <div dangerouslySetInnerHTML={{ __html: pageContext.content.data.childMarkdownRemark.html }} />
          }
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate