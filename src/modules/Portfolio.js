import React from "react"
import { getGatsbyImage } from "../Utils"
import CustomLink from "../components/CustomLink"

const Portfolio = ({
  sectionTitle='',
  portfolioItems=null
}) => {
  return (
    <section className="portfolio grid">
      {sectionTitle &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      <div className="col-desk-16 flex justify-between">
        {portfolioItems && portfolioItems.map((item, index) => (
          <CustomLink key={ index } href={ `/portfolio/${item.slug}/` } className="portfolio__item">
            <div className="portfolio__images">
              { getGatsbyImage(item.featuredImage, 'portfolio__image') }
            </div>
            <h5 className="portfolio__heading">{ item.title }</h5>
          </CustomLink>
        ))}
      </div>
      {portfolioItems &&
        <div className="col-desk-16 flex justify-center">
          <CustomLink href="/portfolio/" className="btn">View Entire Portfolio</CustomLink>
        </div>
      }
    </section>
  )
}

export default Portfolio
