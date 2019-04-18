import React from "react"
import "./Banner.css"

export const Banner = () => (
  <section id={"banner-section"} className={"section-container"}>
    <div className={"content"}>
      <h6>Limited Units So Act Fast</h6>
      <p>There are only a limited amounts of unit available at a first-come-first-serve basis and they sell fast.
        <br/>Take your first step right now and get the VIP access!</p>
      <div className={"call-to-action-container"}>
        <label className="call-to-action-btn" htmlFor={"modal-1"}>Get VIP Access</label>
      </div>
    </div>
  </section>
)