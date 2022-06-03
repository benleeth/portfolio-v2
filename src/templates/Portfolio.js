import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import CustomLink from "../components/CustomLink"
import { getGatsbyImage } from "../Utils"

const PortfolioTemplate = ({ pageContext }) => {
  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        seoTitle="Portfolio | Ben Leeth"
        title="Ben Leeth's Portfolio"
        description="A collection of development items completed by me!"
        url="https://wwww.benleeth.com/portfolio"
        type="portfolio"
        image="https://papers.co/wallpaper/papers.co-vv12-code-screen-it-pattern-background-code-29-wallpaper.jpg"
      />
      <section className="portfolio-item__banner">
        <StaticImage
          layout="fullWidth"
          placeholder="blurred"
          aspectRatio={ 3 / 1 }
          alt="Code"
          src={ "https://papers.co/wallpaper/papers.co-vv12-code-screen-it-pattern-background-code-29-wallpaper.jpg" }
          formats={ ["auto", "webp", "avif"] }
        />
        <div className="portfolio-item__overlay" />
        <h1>The Portfolio</h1>
      </section>
      <section className="portfolio-item__content grid">
        {pageContext.portfolioItems.length >= 1 && pageContext.portfolioItems.map(({ node }, index) => (
          <CustomLink key={ index } href={ `/portfolio/${node.slug}/` } className="col-desk-4 col-tab-8 col-mob-2 blog__item">
            { getGatsbyImage(node.smallFeaturedImage, '') }
            <h4>{ node.title }</h4>
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