import React from "react"
import Helmet from "react-helmet"

const SEO = ({
  canonical='',
  title,
  seoTitle=null,
  seoDescription,
  noIndex=false,
  noFollow=false,
  lang='en',
  meta=[]
}) => {
  const newTitle = (title !== 'Home') ? `${title} | ${seoTitle}` : 'A developer | benleeth.com';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={ newTitle }
      titleTemplate={ newTitle }
      link={[
        {
          rel: `canonical`,
          href: canonical
        },
      ]}
      meta={[
        {
          name: `description`,
          content: seoDescription,
        }
      ].concat(meta)}
    />
  )
}

export default SEO
