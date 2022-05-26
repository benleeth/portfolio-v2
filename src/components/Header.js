import React from "react"
import CustomLink from "../components/CustomLink"

const Header = ({
  isHome=false
}) => {
  const navClick = (event) => {
    event.preventDefault()
    const element = document.querySelector(`section.${event.currentTarget.getAttribute('id')}`)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const isHomeFix = (isHome === 'true' || isHome) ? true : false;

  return(
    <header className="header">
      <div className="grid">
        <nav className="header__nav col-desk-16">
          <ul className="reset flex">
            {isHomeFix &&
              <>
                <li><button className="link" id="about" onClick={ navClick }>About Me</button></li>
                <li><button className="link" id="qualifications" onClick={ navClick }>Qualifications</button></li>
                <li><button className="link" id="portfolio" onClick={ navClick }>Portfolio</button></li>
                <li><button className="link" id="examples" onClick={ navClick }>Code Examples</button></li>
                <li><button className="link" id="resume" onClick={ navClick }>Résumé</button></li>
                <li><button className="link" id="contact" onClick={ navClick }>Contact</button></li>
              </>
            }
            {!isHomeFix &&
              <>
                <li><a className="link" href="/#about">About Me</a></li>
                <li><a className="link" href="/#qualifications">Qualifications</a></li>
                <li><a className="link" href="/#portfolio">Portfolio</a></li>
                <li><a className="link" href="/#examples">Code Examples</a></li>
                <li><a className="link" href="/#resume">Résumé</a></li>
                <li><a className="link" href="/#contact">Contact</a></li>
              </>
            }
            <li><CustomLink className="link" href="/blog">Blog</CustomLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
