import { graphql, Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"
import GatsbyImage from "gatsby-image"

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

const activateLink = (event) => {

  let linkNodes = document.getElementById('header-links').childNodes
  linkNodes.forEach(linkNode => linkNode.classList.remove("active"))
  event.target.classList.add('active')
}

const Header = () => (
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
        <a href={"#"}>
          <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
        </a>
      </div>
      <div id={"header-links"}>
        <a href={"#photo-gallery"} onClick={activateLink}>Gallery</a>
        <a href={"#location"} onClick={activateLink}>Location</a>
        <a href={"#amenities"} onClick={activateLink}>Amenities</a>
        <a href={"#floor-plans"} onClick={activateLink}>Floor Plans</a>
      </div>
    </div>
  )
  }/>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
