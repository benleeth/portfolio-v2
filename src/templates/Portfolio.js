import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import CustomLink from "../components/CustomLink"
import { getGatsbyImage } from "../Utils"

const PortfolioTemplate = ({ pageContext }) => {
  return (
    <Layout classNames="portfolio-item" isHome="false">
      <SEO
        title="Ben Leeth's Portfolio"
        seoTitle="benleeth.com"
        seoDescription="Just a portfolio"
      />
      <section className="portfolio-item__banner">
        <StaticImage
          layout="fullWidth"
          placeholder="blurred"
          width={ 1200 }
          aspectRatio={ 3 / 1 }
          alt="Indianapolis"
          src={ "https://papers.co/wallpaper/papers.co-vv12-code-screen-it-pattern-background-code-29-wallpaper.jpg" }
          formats={ ["auto", "webp", "avif"] }
        />
        <div className="portfolio-item__overlay" />
        <h1>The Portfolio</h1>
      </section>
      <section className="portfolio-item__content grid">
        {pageContext.portfolioItems.length >= 1 && pageContext.portfolioItems.map(({ node }) => (
          <CustomLink href={ `/portfolio/${node.slug}/` } className="col-desk-4 col-tab-8 col-mob-2 blog__item">
            { getGatsbyImage(node.smallFeaturedImage) }
            <h3>{ node.title }</h3>
          </CustomLink>
        ))}
        {pageContext.portfolioItems.length <= 0 &&
          <div className="col-desk-16">
            <h2>Sorry, there are currently no portfolio items.</h2>
          </div>
        }
      </section>
    </Layout>
  )
}

export default PortfolioTemplate