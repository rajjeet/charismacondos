import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
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
  LocationContainer: styled.div`
    background: #eee;
  `,
  LocationInnerContainer: styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    
    @media (max-width: ${theme.tabletBreakpoint}) {
      width: 100%;
    }
    
    iframe {
      width: 95%;
      margin: 0 auto;
    }
   `,
  LocationKpi: styled.div`    
    margin-bottom: 1em;
      
    .scroll-animate {
      animation: ${animate} .7s ease;
      opacity: 1;
    }
    
    `,
  KpiCard: styled.div`
    display: inline-block;
    margin: 0 auto;
    width: 100px;
    position: relative;
    cursor: pointer;
    opacity: 0;

    :hover {
      opacity: 1;
      transform: translateY(-.3em);
      transition: transform .5s ease, opacity .5s;
    }

    span:first-of-type {
      position: absolute;
      margin: 0 auto;
      font-size: 3em;
      padding-bottom: 0;
      width: 30%;
      top: -2px;
      left: 25px;
      display: inline;
      font-weight: bold;
      color: white;
    }

    span:nth-of-type(2) {
      position: absolute;
      right: 25px;
      bottom: 25px;
      color: white;
    }

    span {
      font-size: 0.8em;
    }


    @media (max-width: ${theme.computerBreakpoint}) {
      div {
        display: inline;
        padding-left: .5em;
      }
    }

    @media (max-width: ${theme.tabletBreakpoint}) {
      display: inline-block;
      text-align: center;
      div {
        display: block;
      }
    }
  `
}

function getKpi(digit, timescale, caption) {
  return <S.KpiCard className={"kpi-card"}>
    <FontAwesomeIcon icon={faSquare} size={"4x"}/>
    <span>{digit}</span>
    <span>{timescale}</span>
    <div>{caption}</div>
  </S.KpiCard>
}

export class Location extends Component {

  componentDidMount() {
    setScrollAnimation("kpi-card", "scroll-animate")
  }

  render() {
    return (
      <S.LocationContainer className={"section-container"}>
        <S.LocationInnerContainer>
          <h1 className={"section-title"}>Location<span id={"location"}/></h1>
          <p>Just north of Toronto, a new neighbourhood in Vaughan Metropolitan Centre rises. Welcome to Charisma
            Condos, situated at
            the epicentre of connectivity, convenience and innovation, and only steps away from Vaughan Mills. </p>

          <S.LocationKpi>
            {getKpi(1, "min", "Subway")}
            {getKpi(1, "min", "Shopping")}
            {getKpi(3, "min", "Highway")}
            {getKpi(2, "min", "School")}
            {getKpi(2, "min", "Recreation")}
            {getKpi(2, "min", "Dining")}
          </S.LocationKpi>

          <iframe title={"googlemaps"} height="450"
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJT-M5LzwvK4gRri0nU4_FTf4&key=AIzaSyBwH66e9iE5lT856EiEJne_wcgBjJkh2uA"
                  allowFullScreen/>
        </S.LocationInnerContainer>
      </S.LocationContainer>
    )
  }
}