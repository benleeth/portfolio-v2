import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MediaContent = ({
  key,
  sectionTitle='',
  mediaPosition="left",
  content=null,
  media=null
}) => {
  const image = getImage(media.localFile)

  return (
    <section className={ `about grid media--${mediaPosition}` }>
      {sectionTitle && sectionTitle !== ' ' &&
        <div className="col-desk-16">
          <h2 className="section-title">{ sectionTitle }</h2>
        </div>
      }
      <div className="grid col-mob-4 col-desk-16">
        {media &&
          <GatsbyImage image={ image } alt={ media.alternativeText } className="col-desk-6 col-tab-16 col-no-pad about__media" />
        }
        {content &&
          <div className="col-desk-10 col-tab-16 col-no-pad--r col-tab-no-pad about__notes" dangerouslySetInnerHTML={{ __html: content }} />
        }
      </div>
    </section>
  )
}

export default MediaContent
