import React from "react"
import "./Location.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

function getKpi(digit, timescale, caption) {
  return <div className={"kpi-card"}>
    <FontAwesomeIcon className={"locationIcon"} icon={faSquare} size={"4x"} />
    <span>{digit}</span>
    <span>{timescale}</span>
    <div>{caption}</div>
  </div>
}

export const Location = () => (
  <div id={"location-container"} className={'section-container'}>
  <div id={"location-inner-container"}>
    <h1 className={'section-title'}>Location<span id={'location'} /></h1>
    <p>Just north of Toronto, a new neighbourhood in Vaughan Metropolitan Centre rises. Welcome to Charisma Condos, situated at
      the epicentre of connectivity, convenience and innovation, and only steps away from Vaughan Mills. </p>

    <div id={"location-kpi"}>
      {getKpi(1, 'min', 'Subway')}
      {getKpi(1, 'min', 'Shopping')}
      {getKpi(3, 'min', 'Highway')}
      {getKpi(2, 'min', 'School')}
      {getKpi(2, 'min', 'Recreation')}
      {getKpi(2, 'min', 'Dining')}
    </div>

    <iframe title={"googlemaps"} height="450"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvdrsxLkvK4gRg5m2IsjTerw&key=AIzaSyBwH66e9iE5lT856EiEJne_wcgBjJkh2uA"
            allowFullScreen/>
  </div>
  </div>
)