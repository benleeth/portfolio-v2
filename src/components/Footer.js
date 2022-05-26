import React from "react"

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer grid">
      <div className="col-desk-16">benleeth.com { date.getFullYear() }</div>
    </footer>
  )
}

export default Footer
