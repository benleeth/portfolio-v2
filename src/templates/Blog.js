import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import CustomLink from "../components/CustomLink"
import { getGatsbyImage } from "../Utils"

const BlogTemplate = ({ pageContext }) => {
  return (
    <Layout classNames="portfolio-item" isHome="false">
      <Seo
        seoTitle="Blog | Ben Leeth"
        title="Ben Leeth's Blog"
        description="A collection of my blog posts!"
        url="https://wwww.benleeth.com/blog"
        type="blog"
        image="https://upload.wikimedia.org/wikipedia/commons/9/95/Indianapolis-1872528.jpg"
      />
      <section className="portfolio-item__banner">
        <StaticImage
          layout="fullWidth"
          placeholder="blurred"
          aspectRatio={ 3 / 1 }
          alt="Indianapolis"
          src={ "https://upload.wikimedia.org/wikipedia/commons/9/95/Indianapolis-1872528.jpg" }
          formats={ ["auto", "webp", "avif"] }
        />
        <div className="portfolio-item__overlay" />
        <h1>The Blog</h1>
      </section>
      <section className="portfolio-item__content grid">
        {pageContext.posts.length >= 1 && pageContext.posts.map(({ node }, index) => (
          <CustomLink key={ index } href={ `/blog/${node.slug}/` } className="col-desk-4 col-tab-8 col-mob-2 blog__item">
            { getGatsbyImage(node.smallFeaturedImage) }
            <h3>{ node.title }</h3>
            <div className="blog__excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt.data.childMarkdownRemark.html }} />
          </CustomLink>
        ))}
        {pageContext.posts.length <= 0 &&
          <div className="col-desk-16">
            <h2>Sorry, there are currently no posts.</h2>
          </div>
        }
      </section>
    </Layout>
  )
}

export default BlogTemplate