import React from "react"
import "./Amenities.css"
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

function getAmenity(frontIcon, text) {
  return <div className="fa-layers">
    <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} />
    <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={frontIcon} size={"2x"} />
    <div className={"amenity-text"}>{text}</div>
  </div>
}

export const Amenities = () => (
  <div id={"amenities-container"} className={'section-container'}>
    <h1 className={'section-title'}>Amenities<span id={"amenities"}/></h1>
    <p>Live with luxury, convenience, and comfort</p>
    {getAmenity(faFilm, "Theatre Room")}
    {getAmenity(faGlassMartiniAlt, "Party Room with Bar and Kitchen")}
    {getAmenity(faCloudSun, "Outdoor Terrace with Lounge, Fire Pit and BBQs")}
    {getAmenity(faRunning, "Virtual & Yoga/Aerobics Studios")}
    {getAmenity(faBaby, "Kids Play Room and Outdoor Play Area")}
    {getAmenity(faDumbbell, "Fitness Centre")}
  </div>
)