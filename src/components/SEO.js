import React from "react"
import Helmet from "react-helmet"
import { isValidUrl } from "../Utils"

const Seo = ({
  seoTitle='',
  title='',
  description='',
  canonicalUrl='',
  url='',
  noIndex=false,
  noFollow=false,
  type='article',
  published=null,
  modified=null,
  image=null
}) => {
  const imageUrl = (isValidUrl(image)) ? image : `https://www.benleeth.com${image}`

  return (
    <Helmet>
      <title>{ seoTitle }</title>
      <meta name="description" content={ description } />
      {canonicalUrl !== url &&
        <link rel="canonical" href={ canonicalUrl } />
      }
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ type } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:url" content={ url } />
      <meta property="og:site_name" content="Ben Leeth" />
      <meta property="article:published_time" content={ published } />
      {modified &&
        <meta property="article:modified_time" content={ modified } />
      }
      {image &&
        <meta property="og:image" content={ imageUrl } />
      }
    </Helmet>
  )
}

export default Seo
