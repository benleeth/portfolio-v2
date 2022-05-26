import React from "react"
import { Link } from "gatsby"
import { isValidUrl } from "../Utils"

const CustomLink = ({
  href="",
  className="",
  title="",
  target="_self",
  children=null
}) => {
  const url = `www.benleeth.com`
  let render

  if (href && href.charAt(0) === '#') {
    render = <a href={ href } className={ `scroll-to ${className}` } title={ title }>{ children }</a>
  } else if (target === '_blank') {
    render = <a href={ href } className={ className } title={ title } target={ target } rel="noreferrer">{ children }</a>
  } else if (!isValidUrl(href)) {
    render = <Link to={ href } className={ className } title={ title }>{ children }</Link>
  } else if ((href && href === '/') || (href && href.includes(url))) {
    const slug = (href === 'HOME') ? '/' : href.replace(url, '')
    render = <Link to={ slug } className={ className } title={ title }>{ children }</Link>
  } else {
    render = <a href={ href } className={ className } title={ title } target="_blank" rel="noreferrer">{ children }</a>
  }

  return render
}

export default CustomLink
