import React from "react"
import "./HeroBanner.css"

export const HeroBanner = () => (
  <section id={"banner"}>
    <table id={"hero-banner"}>
      <tbody>
      <tr id={"main-heading"}>
        <td>Gateway To the GTA</td>
      </tr>
      <tr id={"supporting-headline"}>
        <td>Where dreams come true</td>
      </tr>
      <tr id={"call-to-action-top"}>
        <td>
          <button className="call-to-action-btn">Reserve Your Spot</button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
)


