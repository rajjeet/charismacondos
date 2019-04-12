import React from "react"
import "./Location.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faSquare, faGlassMartiniAlt, faDumbbell, faBaby, faCloudSun, faRunning } from "@fortawesome/free-solid-svg-icons"

function getAmenity(frontIcon, text) {
  return <div className="fa-layers">
    <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
    <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={frontIcon} size={"2x"} color={"white"}/>
    <div className={"amenity-text"}>{text}</div>
  </div>
}

function getKpi(digit, timescale, caption) {
  return <div className={"kpi-card"}>
    <span>{digit}</span>
    <span>{timescale}</span>
    <div>{caption}</div>
  </div>
}

export const Location = () => (
  <section id={"location"}>
    <h1>Location</h1>
    <p>Just north of Toronto, a new neighbourhood in Vaughan Metropolitan Centre rises. Welcome to Mobilio, situated at
      the epicentre of connectivity, convenience and innovation, and only steps away from the subway. </p>

    <div id={"location-kpi"}>
      {getKpi(2, 'min', 'Subway')}
      {getKpi(3, 'min', 'Shopping')}
      {getKpi(4, 'min', 'Highway')}
      {getKpi(5, 'min', 'Entertainment')}
      {getKpi(6, 'min', 'Recreation')}
      {getKpi(7, 'min', 'Dining')}
    </div>

    <iframe title={"googlemaps"} height="450"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvdrsxLkvK4gRg5m2IsjTerw&key=AIzaSyBwH66e9iE5lT856EiEJne_wcgBjJkh2uA"
            allowFullScreen/>
    <div id={"amenities"}>
      <h1>Amenities</h1>
      <p>Live with luxury, convenience, and comfort</p>
      {getAmenity(faFilm, "Theatre Room")}
      {getAmenity(faGlassMartiniAlt, "Party Room with Bar and Kitchen")}
      {getAmenity(faCloudSun, "Outdoor Terrace with Lounge, Fire Pit and BBQs")}
      {getAmenity(faRunning, "Virtual & Yoga/Aerobics Studios")}
      {getAmenity(faBaby, "Kids Play Room and Outdoor Play Area")}
      {getAmenity(faDumbbell, "Fitness Centre")}
    </div>

  </section>
)