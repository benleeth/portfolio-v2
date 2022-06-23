import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        seoTitle="404 Error | Ben Leeth"
        title="404 Not Found"
        description="This is not the page you are looking for!!"
        url="https://wwww.benleeth.com/404"
        type="error"
        image="https://etateach.com/wp-content/uploads/2021/07/funny-1.jpg"
      />
      <section className="portfolio-item__banner">
        <StaticImage
          layout="fullWidth"
          placeholder="tracedSvg"
          aspectRatio={ 3 / 1 }
          alt="404"
          src={ "https://etateach.com/wp-content/uploads/2021/07/funny-1.jpg" }
          transformOptions={{ cropFocus: "top" }}
          formats={ ["auto", "webp", "avif"] }
        />
        <div className="portfolio-item__overlay" />
        <h1>
          404<br />
          The return of the Error!
        </h1>
      </section>
    </Layout>
  )
}

export default NotFoundPage
