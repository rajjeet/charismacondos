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
    event.target.classList.add("active")
  }
}

class Header extends Component {

  componentDidMount() {
    window.onscroll = () => {
      const header = document.getElementById("page-header")
      if (header) {
        const sticky = header.offsetTop
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky")
        } else {
          header.classList.remove("sticky")
        }
      }
    }

  }

  render() {
    return (
      <StaticQuery query={graphql`
    query {
      mobilioLogo: file(relativePath: { eq: "mobilio_logo.png" }) {
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
              <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
            </a>
          </div>
          <div id={"header-links"}>
            <a href={"#photo-gallery"} onClick={activateLink}>Gallery</a>
            <a href={"#location"} onClick={activateLink}>Location</a>
            <a href={"#amenities"} onClick={activateLink}>Amenities</a>
            <a href={"#floor-plans"} onClick={activateLink}>Floor Plans</a>
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
              <a href={"#floor-plans"} onClick={activateLink}>
                <li>Floor Plans</li>
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
