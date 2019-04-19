import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import Video from "../../static/video.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"


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
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4"/>
      </video>
      <div className={"call-to-action-container inline"}>
        <label htmlFor={"modal-1"} className="call-to-action-btn">Get VIP Access</label>
      </div>
      <div className={"call-to-action-container inline"}>
        <button onClick={'#photo-gallery'} className="call-to-action-btn">Learn More &nbsp;
          <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faAngleDoubleDown} size={"1x"}/>
        </button>
      </div>
      <div>VIP Access gives you exclusive access to floor plans & pricing details to Charisma phase 3 Units, while
        quantities last!
      </div>
    </div>
  )}/>
)


