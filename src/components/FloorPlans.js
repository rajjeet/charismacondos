import Img from "gatsby-image"
import React from "react"
import PropTypes from "prop-types"
import "./FloorPlans.css"
import { StaticQuery, graphql } from "gatsby"


const handleFloorPlanSelection = (event) => {
  let button = event.target
  let id = button.id.replace("fp-btn-", "")
  let ele = document.getElementById(id)
  let floorPlans = document.getElementsByClassName("floor-plan")
  let floorPlanButtons = document.getElementsByClassName("fp-btn")
  Object.keys(floorPlans).forEach(key => floorPlans[key].style.display = "none")
  Object.keys(floorPlanButtons).forEach(key => {
    floorPlanButtons[key].style.backgroundColor = "whitesmoke"
    floorPlanButtons[key].style.color = "black"
  })
  button.style.backgroundColor = "grey"
  button.style.color = "white"
  ele.style.display = "block"
}

function getFloorPlanButton(unitName, text) {
  return <button id={`fp-btn-${unitName}`} className={"fp-btn"} onClick={handleFloorPlanSelection}>{text}</button>
}

function getFloorPlanImage(unitName, image) {
  return <div id={unitName} className="floor-plan">
    <Img fluid={image.childImageSharp.fluid}/>
  </div>
}

export const FloorPlans = ({ data }) => (

  <StaticQuery query={graphql`
  query {
    floorPlanStudioSA: file(relativePath: { eq: "Mobilio-Condos-Studio-SA-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1AD: file(relativePath: { eq: "Mobilio-Condos-Suite-1A-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1A: file(relativePath: { eq: "Mobilio-Condos-Suite-1A-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1BD: file(relativePath: { eq: "Mobilio-Condos-Suite-1B-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1B: file(relativePath: { eq: "Mobilio-Condos-Suite-1B-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1CD: file(relativePath: { eq: "Mobilio-Condos-Suite-1C-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1DD: file(relativePath: { eq: "Mobilio-Condos-Suite-1D-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2A: file(relativePath: { eq: "Mobilio-Condos-Suite-2A-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2E: file(relativePath: { eq: "Mobilio-Condos-Suite-2E-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2F: file(relativePath: { eq: "Mobilio-Condos-Suite-2F-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`} render={data => (
    <section id={"floor-plans-section"}>
      <div id={"floor-plans"}>
        <h1>Floor Plans</h1>
        <p>Find the perfect layout that suits your lifestyle</p>
        <div id={"floor-plan-buttons"}>
          {getFloorPlanButton("studio", "Studio SA")}
          {getFloorPlanButton("suite1ad", "Suite 1 A-D")}
          {getFloorPlanButton("suite1a", "Suite 1 A")}
          {getFloorPlanButton("suite1bd", "Suite 1 B-D")}
          {getFloorPlanButton("suite1b", "Suite 1 B")}
          {getFloorPlanButton("suite1cd", "Suite 1 C-D")}
          {getFloorPlanButton("suite1dd", "Suite 1 D-D")}
          {getFloorPlanButton("suite2a", "Suite 2 A")}
          {getFloorPlanButton("suite2e", "Suite E")}
          {getFloorPlanButton("suite2f", "Suite F")}
        </div>
        <div id={"floor-plan-image-box"}>
          {getFloorPlanImage("studio", data.floorPlanStudioSA)}
          {getFloorPlanImage("suite1ad", data.floorPlanSuite1AD)}
          {getFloorPlanImage("suite1a", data.floorPlanSuite1A)}
          {getFloorPlanImage("suite1bd", data.floorPlanSuite1BD)}
          {getFloorPlanImage("suite1b", data.floorPlanSuite1B)}
          {getFloorPlanImage("suite1cd", data.floorPlanSuite1CD)}
          {getFloorPlanImage("suite1dd", data.floorPlanSuite1DD)}
          {getFloorPlanImage("suite2a", data.floorPlanSuite2A)}
          {getFloorPlanImage("suite2e", data.floorPlanSuite2E)}
          {getFloorPlanImage("suite2f", data.floorPlanSuite2F)}
          <button className={"call-to-action-btn"}>Reserve Floor Plan</button>
        </div>
      </div>
    </section>
  )}
  />
)


FloorPlans.propTypes = { data: PropTypes.any }