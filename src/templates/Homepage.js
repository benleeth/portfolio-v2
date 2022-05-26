import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Modules from "../components/Modules"

const HomepageTemplate = ({ pageContext }) => {
  return (
    <Layout classNames="home" isHome="true">
      <SEO
        title="Home"
        seoDescription="Just a developer developering"
      />
      <section className="content-wrap">
        <Modules modules={ pageContext.modules } />
      </section>
    </Layout>
  )
}

export default HomepageTemplate