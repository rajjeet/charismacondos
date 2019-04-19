import React from "react"
import "./Specs.css"

export const Specs = () => (
  <div id={"specs-container"} className={"section-container"}>
    <h1 className={"section-title"}>
      <span id={"specs"}/>
    </h1>
    <table>
      <tbody>
      <tr>
        <td>Address</td>
        <td>-</td>
        <td><a href={"/#location"}>8960 Jane St, Vaughan</a></td>
      </tr>
      <tr>
        <td>Number of stories</td>
        <td>-</td>
        <td>28</td>
      </tr>
      <tr>
        <td>VIP Launch</td>
        <td>-</td>
        <td>Mid Apr, 2019</td>
      </tr>
      <tr>
        <td>Builder</td>
        <td>-</td>
        <td>Greenpark Homes</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>-</td>
        <td>Not yet for Sale</td>
      </tr>
      </tbody>
    </table>
  </div>
)