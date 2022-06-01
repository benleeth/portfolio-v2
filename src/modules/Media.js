import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Media = ({
  sectionTitle='',
  download=false,
  newTab=true,
  media=null,
  screenshot=null
}) => {
  const image = getImage(screenshot.localFile)

  return (
    <section className="resume grid">
      {sectionTitle &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      <div className="col-desk-16">
        <a href={ media.localFile.publicURL } download>
          <GatsbyImage image={ image } alt={ screenshot.alternativeText } />
        </a>
      </div>
    </section>
  )
}

export default Media
