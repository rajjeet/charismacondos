import React from "react"
import "./Banner.css"

export const Banner = () => (
  <section id={"banner-section"}>
    <div className={"content"}>
      <h6>Limited Units So Book Fast</h6>
      <p>Mobilio Condos unit sizes range from 401 to 739 square feet, with pricing ranging between mid $300s to mid
        $600,
        and are scheduled to finish 2022.</p>
      <div className={'call-to-action-container'}>
      <label className="call-to-action-btn" htmlFor={"modal-1"} >Book Now</label>
      </div>
    </div>
  </section>
)