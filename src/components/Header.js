import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
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
  
  @media (max-width: ${theme.mobileBreakpoint}) {
      display: none;
  }
  
  a {
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
  }
`
S.MenuToggle = styled.div`
  display: none;
  position: relative;
  user-select: none;
  float: right;
  margin-right: 1em;
  margin-top: 5px;

  @media (max-width: ${theme.mobileBreakpoint}) {
    display: inline-block;
  }
  
  input {
    display: block;
    width: 37px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 4;
    -webkit-touch-callout: none;
    
    :checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }
  
    :checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
  
    :checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }
  
    :checked ~ ul {
      transform: translate(-80%, 0);
    }
  }
  
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: ${theme.primaryBtnColor};
    border-radius: 3px;
    z-index: 3;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(.77, .2, .05, 1),
    background .5s cubic-bezier(.77, .2, .05, 1),
    opacity .55s ease;
    
    :first-child {
      transform-origin: 0 0;
    }
    
    :nth-last-child(2) {
      transform-origin: 0 100%;
    }
  }
  
`
S.Menu = styled.ul`
  position: absolute;
  width: 40vw;
  margin: -90px 0 0 70px;
  padding: 125px 100px 100vh 20px;
  z-index: 2;
  background: ${theme.primaryBackgroundColor};
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0 0;
  text-align: right;
  transition: transform 0.5s cubic-bezier(.77, .2, .05, 1.0);
  
  a {
    text-decoration-line: none;
  }
  
  li {
    padding: 12px 0;
    font-size: 22px;
    color: dimgrey;
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
          <S.Logo>
            <a href={"/#"}>
              <GatsbyImage fluid={data.logo.childImageSharp.fluid}/>
            </a>
          </S.Logo>
          <S.HeaderLinks id={"header-links"}>
            <a href={"#photo-gallery"} onClick={activateLink}>Gallery</a>
            <a href={"#location"} onClick={activateLink}>Location</a>
            <a href={"#amenities"} onClick={activateLink}>Amenities</a>
          </S.HeaderLinks>
          <S.MenuToggle>
            <input id={'menu-toggle-checkbox'} type={"checkbox"}/>
            <span/>
            <span/>
            <span/>
            <S.Menu>
              <a href={"#photo-gallery"} onClick={activateLink}>
                <li>Gallery</li>
              </a>
              <a href={"#location"} onClick={activateLink}>
                <li>Location</li>
              </a>
              <a href={"#amenities"} onClick={activateLink}>
                <li>Amenities</li>
              </a>
            </S.Menu>
          </S.MenuToggle>
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

