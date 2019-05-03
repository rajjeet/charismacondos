import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Header.css"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {};

S.Header = styled.div`
  width: 100%;
  z-index: 2;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  margin:  0 auto .2em auto;
  position: fixed;
  top: 0;
  background-color: #eee;
`
S.Logo = styled.div`
  display: inline-block;
  width: 100px;
  max-height: 32px;
  margin: 3px 3px;
`
S.HeaderLinks = styled.div`
  display: inline-block;
  width: 70%;
  float: right;
  text-align: right;
  margin: 4px 1em;
`

S.Link = styled.a`
  padding: 6px 6px;
  margin: 3px 3px;
  font-size: 1em;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  color: dimgrey;
  
  :hover, .active {
    background-color: ${theme.primaryColor};
    color: white;
  }
    
  @media (max-width: ${theme.tabletBreakpoint}){
    font-size: .8em;
  }
`


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
        <S.Header id={"page-header"}>
          <S.Logo id={"main-logo"}>
            <a href={"/#"}>
              <GatsbyImage fluid={data.logo.childImageSharp.fluid}/>
            </a>
          </S.Logo>
          <S.HeaderLinks id={"header-links"}>
            <S.Link href={"#photo-gallery"} onClick={activateLink}>Gallery</S.Link>
            <S.Link href={"#location"} onClick={activateLink}>Location</S.Link>
            <S.Link href={"#amenities"} onClick={activateLink}>Amenities</S.Link>
          </S.HeaderLinks>
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
        </S.Header>

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
