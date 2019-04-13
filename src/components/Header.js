import { graphql, Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"
import GatsbyImage from "gatsby-image"

window.onscroll = () => {
  console.log("window.pageYOffset", window.pageYOffset)
  const header = document.getElementById("page-header")
  if (header) {
    const sticky = header.offsetTop
    console.log("header.offsetTop", header.offsetTop)
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  }
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
        <Link to={"#"}>
          <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
        </Link>
      </div>
      <div className={"links"}>
        <Link to={"#photo-gallery"} activeStyle={{ backgroundColor: "darkred", color: "white" }}>Gallery</Link>
        <Link to={"#location"} activeStyle={{ backgroundColor: "darkred", color: "white" }}>Location</Link>
        <Link to={"#amenities"} activeStyle={{ backgroundColor: "darkred", color: "white" }}>Amenities</Link>
        <Link to={"#floor-plans"} activeStyle={{ backgroundColor: "darkred", color: "white" }}>Floor Plans</Link>
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
