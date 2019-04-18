import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

export const HeroBanner = () => (
  <StaticQuery query={graphql`
    query {
      logo: file(relativePath: { eq: "Charisma-Condominiums-Vaughan.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     }
   `} render={data => (
    <div id={"hero-banner"} className={'section-container'}>
      <div id={"main-card"}>
        <div id={"main-logo"}>
          <GatsbyImage fluid={data.logo.childImageSharp.fluid}/>
        </div>
        <div>
          New Condo Development in Downtown Vaughan
        </div>
        <div id={"main-heading"}>
          <span>43 Minutes to Everything</span>
        </div>
        <div id={"supporting-headline"}>
          Your Ticket to Convenience, Community, and Connectivity in the GTA
        </div>
        <div className={"call-to-action-container"}>
          <label htmlFor={"modal-1"} className="call-to-action-btn">Register</label>
        </div>
      </div>

    </div>
  )}/>
)


