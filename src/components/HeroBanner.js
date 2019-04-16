import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { ContactForm } from "./ContactForm"

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
    <div id={"hero-banner"}>
      <div id={"main-card"}>
        <div id={"main-logo"}>
          <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
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

      <input className="modal-state" id="modal-1" type="checkbox"/>
      <div className="modal">
        <label className="modal__bg" htmlFor="modal-1"/>
        <div className="modal__inner">
          <label className="modal__close" htmlFor="modal-1"/>
          <h1>Register</h1>
          <ContactForm/>
        </div>
      </div>
    </div>
  )}/>
)


