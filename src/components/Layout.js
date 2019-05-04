import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import { createGlobalStyle} from "styled-components"
import * as theme from '../shared/theme'

const GlobalStyle = createGlobalStyle`
 
  html {
    scroll-behavior: smooth;
  
  }
  
  .section-container{
    padding: 2em 0;
  }
  
  .grecaptcha-badge {
    opacity: 0;
  }
  
  .section-title {
    position: relative;
  
    span {
      position: absolute;
      top: -1.6em;
    }
  }
  
  body {
    font-family: ${theme.fontFamily};
    background: white;
    color: ${theme.secondaryColor};
    padding: 0;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.secondaryColor};
    font-size: 3em;
    margin: 0;
  }
  
  p, span {
    margin-top: .2em;
  }
  
  .buttonAnimation {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    transition: transform .5s ease;
  }
  
  
  .inline {
    display: inline-block;
    margin: auto .5em;
  
  }
  .call-to-action-container {
    margin: 1em .5em;
    padding: .4em 0;
  
    &:hover {
      .buttonAnimation();
    }
  
    .call-to-action-btn {
      font-size: 2em;
      background-color: ${theme.primaryBtnColor};
      color: whitesmoke;
      border: none;
      outline: none;
      cursor: pointer;
  
      padding: .4em 1em;
      border-radius: 10px;
      font-family: ${theme.fontFamily};
  
      @media (max-width: ${theme.tabletBreakpoint}) {
        padding: .3em 0.5em;
        font-size: 1.3em;
      }
    }
  }
  
  
  .modal {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .9);
    transition: opacity .25s ease;
    max-width: 100vw;
  
    .modal__bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      cursor: pointer;
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            <GlobalStyle/>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
