import Img from "gatsby-image"
import React from "react"
import PropTypes from "prop-types"
import './FloorPlans.css'
import { StaticQuery, graphql } from "gatsby"


const myFunction = (event) => {
  let id = event.target.id.replace("fp-btn-", "")
  let ele = document.getElementById(id)
  let floorPlans = document.getElementsByClassName("floor-plan")
  Object.keys(floorPlans).forEach(key => floorPlans[key].style.display = "none")
  console.log(ele)
  ele.style.display = "block"
}

export const FloorPlans = ({ data }) => (

  <StaticQuery query={graphql`
  query {
    floorPlanStudioSA: file(relativePath: { eq: "Mobilio-Condos-Studio-SA-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1AD: file(relativePath: { eq: "Mobilio-Condos-Suite-1A-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1A: file(relativePath: { eq: "Mobilio-Condos-Suite-1A-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1BD: file(relativePath: { eq: "Mobilio-Condos-Suite-1B-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1B: file(relativePath: { eq: "Mobilio-Condos-Suite-1B-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1CD: file(relativePath: { eq: "Mobilio-Condos-Suite-1C-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite1DD: file(relativePath: { eq: "Mobilio-Condos-Suite-1D-D-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2A: file(relativePath: { eq: "Mobilio-Condos-Suite-2A-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2E: file(relativePath: { eq: "Mobilio-Condos-Suite-2E-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floorPlanSuite2F: file(relativePath: { eq: "Mobilio-Condos-Suite-2F-floorplan-v3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`} render={data => (
    <div id={"gallery"}>
      <div id={"floor-plan-buttons"}>
        <button id={"fp-btn-studio"} onClick={myFunction}>Studio SA</button>
        <button id={"fp-btn-suite1ad"} onClick={myFunction}>Suite 1 A-D</button>
        <button id={"fp-btn-suite1a"} onClick={myFunction}>Suite 1 A</button>
        <button id={"fp-btn-suite1bd"} onClick={myFunction}>Suite 1 B-D</button>
        <button id={"fp-btn-suite1b"} onClick={myFunction}>Suite 1 B</button>
        <button id={"fp-btn-suite1cd"} onClick={myFunction}>Suite 1 C-D</button>
        <button id={"fp-btn-suite1dd"} onClick={myFunction}>Suite 1 D-D</button>
        <button id={"fp-btn-suite2a"} onClick={myFunction}>Suite 2 A</button>
        <button id={"fp-btn-suite2e"} onClick={myFunction}>Suite E</button>
        <button id={"fp-btn-suite2f"} onClick={myFunction}>Suite F</button>
      </div>
      <div id={"floor-plan-image-box"}>
        <div id={"studio"} className="floor-plan">
          <Img fluid={data.floorPlanStudioSA.childImageSharp.fluid}/>
        </div>
        <div id={"suite1ad"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1AD.childImageSharp.fluid}/>
        </div>
        <div id={"suite1a"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1A.childImageSharp.fluid}/>
        </div>
        <div id={"suite1bd"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1BD.childImageSharp.fluid}/>
        </div>
        <div id={"suite1b"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1B.childImageSharp.fluid}/>
        </div>
        <div id={"suite1cd"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1CD.childImageSharp.fluid}/>
        </div>
        <div id={"suite1dd"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite1DD.childImageSharp.fluid}/>
        </div>
        <div id={"suite2a"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite2A.childImageSharp.fluid}/>
        </div>
        <div id={"suite2e"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite2E.childImageSharp.fluid}/>
        </div>
        <div id={"suite2f"} className={"floor-plan"}>
          <Img fluid={data.floorPlanSuite2F.childImageSharp.fluid}/>
        </div>
      </div>
    </div>
  )}
  />
)


FloorPlans.propTypes = { data: PropTypes.any }