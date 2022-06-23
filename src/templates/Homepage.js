import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Modules from "../components/Modules"

class HomepageTemplate extends React.Component {
  componentDidMount() {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.querySelector(`section.${id}`)
      window.history.pushState('', document.title, `${window.location.pathname}${window.location.search}`)
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 50)
    }
  }

  render() {
    const { pageContext } = this.props

    return (
      <Layout classNames="home" isHome="true">
        <Seo
          seoTitle={ pageContext.seo.title }
          title="Home"
          description={ pageContext.seo.description }
          canonicalUrl={ pageContext.seo.canonicalUrl }
          url="https://wwww.benleeth.com"
          type="page"
          published={ pageContext.createdAt }
          modified={ pageContext.updatedAt }
          image={ pageContext.seo.image.localFile.childImageSharp.fixed.src }
        />
        <section className="content-wrap">
          <Modules modules={ pageContext.modules } />
        </section>
      </Layout>
    )
  }
}

export default HomepageTemplate
