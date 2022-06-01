import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PortfolioItemTemplate = ({ pageContext }) => {
  const image = getImage(pageContext.featuredImage.localFile)

  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        seoTitle={ pageContext.seo.title }
        title={ pageContext.title }
        description={ pageContext.seo.description }
        canonicalUrl={ pageContext.seo.canonicalUrl }
        url={ `https://wwww.benleeth.com/portfolio/${pageContext.slug}` }
        type="portfolio"
        published={ pageContext.createdAt }
        modified={ pageContext.updateddAt }
        image={ pageContext.seo.image.localFile.childImageSharp.fixed.src }
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
          {pageContext.content &&
            <div dangerouslySetInnerHTML={{ __html: pageContext.content.data.childMarkdownRemark.html }} />
          }
          {pageContext.url &&
            <p className="portfolio-item__link"><strong>Site URL:</strong> <a href={ pageContext.url } target="_blank" rel="noreferrer">{ pageContext.url }</a></p>
          }
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioItemTemplate