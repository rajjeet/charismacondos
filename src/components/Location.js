import React from "react"
import "./Location.css"

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
  </section>
)