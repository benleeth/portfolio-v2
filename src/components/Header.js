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

  const isHomeFix = (isHome === 'true') ? true : false;

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
                <li><CustomLink className="link" href="/#about">About Me</CustomLink></li>
                <li><CustomLink className="link" href="/#qualifications">Qualifications</CustomLink></li>
                <li><CustomLink className="link" href="/#portfolio">Portfolio</CustomLink></li>
                <li><CustomLink className="link" href="/#examples">Code Examples</CustomLink></li>
                <li><CustomLink className="link" href="/#resume">Résumé</CustomLink></li>
                <li><CustomLink className="link" href="/#contact">Contact</CustomLink></li>
              </>
            }
            <li><CustomLink className="link" href="/blog/">Blog</CustomLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
