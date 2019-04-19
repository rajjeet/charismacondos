import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Header.css"
import GatsbyImage from "gatsby-image"

function deactivateMenuLinks() {
  if (typeof document !== undefined) {
    let linkNodes = document.getElementById("header-links").childNodes
    linkNodes.forEach(linkNode => linkNode.classList.remove("active"))
  }
}

const activateLink = (event) => {
  if (typeof document !== undefined) {
    let checkbox = document.getElementById("menu-toggle-checkbox")
    if (checkbox.checked) checkbox.checked = false
    deactivateMenuLinks()
    let target = event.target
    target.classList.add("active")
    setTimeout(() => window.addEventListener("scroll",
      () => target.classList.remove("active"), { once: true }), 1000)
  }
}

class Header extends Component {

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("page-header")
      if (header) {
        const sticky = header.offsetTop
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky")
        } else {
          header.classList.remove("sticky")
        }
      }
    })

  }

  render() {
    return (
      <StaticQuery query={graphql`
    query {
      logo: file(relativePath: { eq: "Charisma_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     }
   `} render={data => (
        <div id={"page-header"} className="">
          <div id={"main-logo"}>
            <a href={"/#"}>
              <GatsbyImage fluid={data.logo.childImageSharp.fluid}/>
            </a>
          </div>
          <div id={"header-links"}>
            <a href={"#photo-gallery"} onClick={activateLink}>Gallery</a>
            <a href={"#location"} onClick={activateLink}>Location</a>
            <a href={"#amenities"} onClick={activateLink}>Amenities</a>
          </div>
          <div id={"menu-toggle"}>
            <input id={"menu-toggle-checkbox"} type={"checkbox"}/>
            <span/>
            <span/>
            <span/>
            <ul id={"menu"}>
              <a href={"#photo-gallery"} onClick={activateLink}>
                <li>Gallery</li>
              </a>
              <a href={"#location"} onClick={activateLink}>
                <li>Location</li>
              </a>
              <a href={"#amenities"} onClick={activateLink}>
                <li>Amenities</li>
              </a>
            </ul>
          </div>
        </div>

      )
      }/>


    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
