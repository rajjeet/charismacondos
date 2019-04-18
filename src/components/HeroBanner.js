import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import Video from '../images/video.mp4'

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
    <div id={"hero-banner"} >
        <video autoPlay muted loop id="myVideo">
          <source src={Video} type="video/mp4" />
        </video>
        <div className={"call-to-action-container"}>
          <label htmlFor={"modal-1"} className="call-to-action-btn">Register</label>
        </div>
    </div>
  )}/>
)


