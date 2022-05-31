import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        title="404 Not Found"
        seoTitle="benleeth.com"
        seoDescription="Oops!"
      />
      <section className="portfolio-item__banner">
        <StaticImage
          layout="fullWidth"
          placeholder="blurred"
          width={ 1200 }
          aspectRatio={ 3 / 1 }
          alt="404"
          src={ "https://tldv-wordpress.s3.us-east-2.amazonaws.com/media/20211112100537/Stupid-and-funny-background-for-meetings-zoom-min.png" }
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
