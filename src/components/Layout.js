import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import "../scss/style.scss"

const Layout = ({
  children,
  classNames='',
  isHome=false
}) => {
  return (
    <>
      <Helmet>
        <body className={ classNames } />
      </Helmet>
      <Header isHome={ isHome } />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
