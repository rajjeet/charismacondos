import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFilm,
  faSquare,
  faGlassMartiniAlt,
  faDumbbell,
  faBaby,
  faCloudSun,
  faRunning,
} from "@fortawesome/free-solid-svg-icons"
import { setScrollAnimation } from "../shared/scrollAnimation"
import styled, {keyframes} from "styled-components"
import * as theme from "../shared/theme"

const animate = keyframes`
  from {
    transform: translateY(-2em);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


const S = {
  AmenitiesContainer: styled.div`
    margin: 0 auto;
    width: 80%;
    text-align: center;
  
    @media (max-width: ${theme.tabletBreakpoint}) {
      width: 100%;
    }
     .amenitiesBackIcon {
      color: ${theme.sponsorColor}
    }
  
    .amenitiesFrontIcon {
      color: white;
    }

  .fa-layers {
    min-height: 50px;
    width: 40%;
    text-align: left;
    display: inline-block;
    margin: 0 auto;
    opacity: 0;

    @media (max-width: ${theme.tabletBreakpoint}) {
      margin: .2em auto;
      width: 90%;
    }
    @media (max-width: ${theme.computerBreakpoint}) {
      margin: .2em auto;
      width: 70%;
    }

    svg:first-of-type {
      margin: 0;
    }

    svg:last-of-type {
      top: 8px;
      left: 5px;
      margin: 0;
    }

    .amenity-text {
      position: relative;
      top: 15px;
      left: 55px;
      width: 80%;
      margin-right: 0;

      @media (max-width: ${theme.tabletBreakpoint}) {
        width: 80%;
        top: 10px;
        font-size: .8em;
        display: inline-block;
      }
    }
  }
    
  .scroll-animate {
    animation: ${animate} .7s ease;
    opacity: 1;
  }
`
}

function getAmenity(frontIcon, text) {
  return <div className="fa-layers">
    <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} />
    <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={frontIcon} size={"2x"} />
    <div className={"amenity-text"}>{text}</div>
  </div>
}

export class Amenities extends Component {
  componentDidMount() {
    setScrollAnimation("fa-layers", "scroll-animate")
  }

  render() {
    return (
      <S.AmenitiesContainer className={"section-container"}>
        <h1 className={"section-title"}>Amenities<span id={"amenities"}/></h1>
        <p>Live with luxury, convenience, and comfort</p>
        {getAmenity(faFilm, "Theatre Room")}
        {getAmenity(faGlassMartiniAlt, "Party Room with Bar and Kitchen")}
        {getAmenity(faCloudSun, "Outdoor Terrace with Lounge, Fire Pit and BBQs")}
        {getAmenity(faRunning, "Virtual & Yoga/Aerobics Studios")}
        {getAmenity(faBaby, "Kids Play Room and Outdoor Play Area")}
        {getAmenity(faDumbbell, "Fitness Centre")}
      </S.AmenitiesContainer>
    )
  }
}