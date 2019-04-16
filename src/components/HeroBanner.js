import React from "react"
import "./HeroBanner.css"
import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

const handleSubmit = event => {
  event.preventDefault()
  let fullName = document.getElementById("fullName").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let message = document.getElementById("message").value
  let realtor = document.getElementById("realtor").checked ? "yes" : "no"

  window.grecaptcha.execute("6LcUrZwUAAAAAKNtNJjf_quUmMkugTBYqDls2RRW", { action: "homepage" })
    .then(function(token) {
      let xhr = new XMLHttpRequest()
      let body = `name=${fullName}&email=${email}&phone=${phone}&message=${message}&realtor=${realtor}&token=${token}`
      xhr.onerror = () => console.log("fail")
      xhr.open("POST", "https://5gki6cwsdg.execute-api.us-east-1.amazonaws.com/Prod/contactme", true)
      // xhr.open("POST", "http://127.0.0.1:3000/contactme", true)
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("success")
        }
      }
      xhr.send(body)
    })

}

export const HeroBanner = () => (
  <StaticQuery query={graphql`
    query {
      mobilioLogo: file(relativePath: { eq: "mobilio_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     }
   `} render={data => (
    <div id={"hero-banner"}>
      <div id={"main-card"}>
        <div id={"main-logo"}>
          <GatsbyImage fluid={data.mobilioLogo.childImageSharp.fluid}/>
        </div>
        <div id={"main-heading"}>
          <span>Gateway To the GTA and more</span>
        </div>
        <div id={"supporting-headline"}>
          Where dreams come true, you will buy this condo now! trust me
        </div>
        <div id={"call-to-action-top"}>
          <label htmlFor={"modal-1"} className="call-to-action-btn">Reserve Your Spot</label>
        </div>
      </div>

      <input className="modal-state" id="modal-1" type="checkbox"/>
      <div className="modal">
        <label className="modal__bg" htmlFor="modal-1"/>
        <div className="modal__inner">
          <label className="modal__close" htmlFor="modal-1"/>
          <h1>Reserve</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor={"name"}>Name<span style={{ color: "red" }}>*</span></label>
              <input type={"text"} required id={"fullName"} name={"fullName"}/>
            </div>
            <div>
              <label htmlFor={"email"}>Email<span style={{ color: "red" }}>*</span></label>
              <input type={"email"} required id={"email"} name={"email"}/>
            </div>
            <div>
              <label htmlFor={"phone"}>Phone<span style={{ color: "red" }}>*</span></label>
              <input type={"tel"} required id={"phone"} name={"phone"}/>
            </div>
            <div>
              <label htmlFor={"message"}>Message</label>
              <textarea style={{ width: "100%" }} rows={4} id={"message"} name={"message"}/>
            </div>
            <div>
              <label htmlFor={"message"} className={"container"}>Are you a realtor?
                <input type={"checkbox"} id={"realtor"} name={"message"}/>
                <span className={"checkmark"}/>
              </label>
            </div>
            <button type={"submit"}>Reserve Your Spot</button>
            <p className={"disclaimer"}>
              <span>The information you provide is strictly confidential.
              This site is protected by reCAPTCHA and the Google </span>
              <a href="https://policies.google.com/privacy" target={'_blank'}>Privacy Policy</a>
              <span> and </span>
              <a href="https://policies.google.com/terms" target={'_blank'}>Terms of Service</a>
              <span> apply.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )}/>
)


