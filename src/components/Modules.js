import React from "react"
import CodeExamples from "../modules/CodeExamples"
import Contact from "../modules/Contact"
import Media from "../modules/Media"
import MediaContent from "../modules/MediaContent"
import Portfolio from "../modules/Portfolio"
import Skills from "../modules/Skills"

const Modules = ({ modules }) => (
  <>
    {modules.map((module) => {
      switch(module.strapi_component) {
        case "modules.code-examples" : return (
          <CodeExamples
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            language={ module.language }
            codeExamples={ module.code }
          />
        )
        case "modules.contact" : return (
          <Contact
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            showForm={ module.showForm }
          />
        )
        case "modules.media" : return (
          <Media
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            download={ module.download }
            newTab={ module.newTab }
            media={ module.media }
            screenshot={ module.screenshot }
          />
        )
        case "modules.media-content" : return (
          <MediaContent
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            mediaPosition={ module.mediaPosition }
            content={ module.content.data.childMarkdownRemark.html }
            media={ module.media }
          />
        )
        case "modules.portfolio" : return (
          <Portfolio
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            portfolioItems={ module.portfolioItems }
          />
        )
        case "modules.skills" : return (
          <Skills
            key={ `${module.strapi_component}-${module.strapi_id}` }
            sectionTitle={ module.sectionTitle }
            ratings={ module.skillRating }
          />
        )
        default:
          break;
      }
      return true;
    })}
  </>
)

export default Modules
