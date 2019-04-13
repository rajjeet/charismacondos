import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

export const HeroBanner = () => (
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
  <section id={"banner-section"}>
    <div id={"hero-banner"}>
      <div id={"main-card"}>
        <div id={'main-logo'}>
          <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
        </div>
        <div id={"main-heading"}>
          <span>Gateway To the GTA and more</span>
        </div>
        <div id={"supporting-headline"}>
          Where dreams come true, you will buy this condo now! trust me
        </div>
        <div id={"call-to-action-top"}>
          <button className="call-to-action-btn">Reserve Your Spot</button>
        </div>
      </div>
    </div>
  </section>
  )} />
)


