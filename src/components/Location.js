import React from "react"
import "./Location.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faSquare, faGlassMartiniAlt, faDumbbell, faBaby, faCloudSun, faRunning } from "@fortawesome/free-solid-svg-icons"

export const Location = () => (
  <section id={"location"}>
    <h1>Location</h1>
    <p>Just north of Toronto, a new neighbourhood in Vaughan Metropolitan Centre rises. Welcome to Mobilio, situated at
      the epicentre of connectivity, convenience and innovation, and only steps away from the subway. </p>

    <div id={"location-kpi"}>
      <div className={"kpi-card"}>
        <span>2</span>
        <span>min</span>
        <div>Subway</div>
      </div>
      <div className={"kpi-card"}>
        <span>4</span>
        <span>min</span>
        <div>Shopping</div>
      </div>
      <div className={"kpi-card"}>
        <span>2</span>
        <span>min</span>
        <div>Highway</div>
      </div>
      <div className={"kpi-card"}>
        <span>2</span>
        <span>min</span>
        <div>Entertainment</div>
      </div>
      <div className={"kpi-card"}>
        <span>2</span>
        <span>min</span>
        <div>Recreation</div>
      </div>
      <div className={"kpi-card"}>
        <span>2</span>
        <span>min</span>
        <div>Dining</div>
      </div>
    </div>
    <iframe title={"googlemaps"} width="600" height="450"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvdrsxLkvK4gRg5m2IsjTerw&key=AIzaSyBwH66e9iE5lT856EiEJne_wcgBjJkh2uA"
            allowFullScreen/>
    <div id={"amenities"}>
      <h1>Amenities</h1>
      <p>Live with luxury, convienance, and comfort</p>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faFilm} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Theatre Room</div>
      </div>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faGlassMartiniAlt} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Party Room with Bar and Kitchen</div>
      </div>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faCloudSun} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Outdoor Terrace with Lounge, Fire Pit and BBQs</div>
      </div>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faRunning} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Virtual & Yoga/Aerobics Studios</div>
      </div>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faBaby} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Kids Play Room and Outdoor Play Area</div>
      </div>
      <div className="fa-layers">
        <FontAwesomeIcon className={"amenitiesBackIcon"} icon={faSquare} size={"3x"} color={"darkred"}/>
        <FontAwesomeIcon className={"amenitiesFrontIcon"} icon={faDumbbell} size={"2x"} color={"white"}/>
        <div className={'amenity-text'}>Fitness Centre</div>
      </div>
    </div>

  </section>
)