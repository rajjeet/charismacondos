import React from "react"
import Video from "../../static/video.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import * as theme from "../shared/theme"

const S = {
   HeaderContainer: styled.div`
    background: rgba(84, 183, 162, .2);
    padding-top: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    border-bottom: 20px solid ${theme.sponsorColor};
    margin-top: 2.8em;
    video {
      width: 100vw;
      max-height: 95vh;
      overflow: auto;
    }
  
    #vip-description {
      width: 90%;
      margin: 0 auto;
      font-size: ${theme.standardFontSize};
  
      @media (max-width: ${theme.mobileBreakpoint}){
        font-size: ${theme.mobileFontSize};
      }
    }
`
}

export const HeroBanner = () => (
    <S.HeaderContainer id={"hero-banner"} className={"section-container"}>
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4"/>
      </video>
      <div className={"call-to-action-container inline"}>
        <label htmlFor={"modal-1"} className="call-to-action-btn">Get VIP Access</label>
      </div>
      <div className={"call-to-action-container inline"}>
        <button onClick={() => window.location.href = '/#specs'} className="call-to-action-btn">Learn More &nbsp;
          <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faAngleDoubleDown} size={"1x"}/>
        </button>
      </div>
      <div id={"vip-description"}><strong>VIP Access</strong> gives you exclusive access to floor plans, pricing
        details and booking process for Charisma phase 2 Units, while
        quantities last!
      </div>
    </S.HeaderContainer>
)


