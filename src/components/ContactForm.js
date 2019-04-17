import React from "react"
import "../components/ContactForm.css"

function sendSesEmail(form, body) {
  return new Promise((resolve, reject) => {
    window.grecaptcha.execute("6LcUrZwUAAAAAKNtNJjf_quUmMkugTBYqDls2RRW", { action: "homepage" })
      .then(function(token) {
        body += `&token=${token}`;
        let xhr = new XMLHttpRequest()
        xhr.onerror = () => console.log("fail")
        xhr.open("POST", "https://5gki6cwsdg.execute-api.us-east-1.amazonaws.com/Prod/contactme", true)
        // xhr.open("POST", "http://127.0.0.1:3000/contactme", true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.onload = () => {
          if (xhr.readyState === 4) {
            xhr.status < 300 ? resolve() : reject()
          }
        }
        xhr.send(body)
      })
  })
}

const mockSendEmail = () =>
  new Promise(resolve => setTimeout(() => resolve(), 2000))

const sendEmail = process.env.NODE_ENV === "production" ? sendSesEmail : mockSendEmail

const handleSubmit = event => {
  event.preventDefault()
  let form = event.target
  let formData = new FormData(form)
  let fullName = formData.get("fullName")
  let email = formData.get("email")
  let phone = formData.get("phone")
  let message = formData.get("message")
  let realtor = formData.get("realtor")

  let modelStates = document.getElementById("modal-1")
  modelStates.checked = false
  let body = `name=${fullName}&email=${email}&phone=${phone}&message=${message}&realtor=${realtor}`

  sendEmail(form, body)
    .then(() => {
      form.reset()
      let messageDom = document.getElementById("message-container")
      messageDom.style.opacity = 1
      messageDom.style.visibility = "visible"
      setTimeout(() => {
        messageDom.style.opacity = 0
        messageDom.style.visibility = "hidden"

      }, 3000)
    })
}

export function ContactForm() {
  return <form onSubmit={handleSubmit}>
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
    <button className={"registerButton"} type={"submit"}>Reserve Your Spot</button>
    <p className={"disclaimer"}>
              <span>The information you provide is strictly confidential.
              This site is protected by reCAPTCHA and the Google </span>
      <a href="https://policies.google.com/privacy" target={"_blank"}>Privacy Policy</a>
      <span> and </span>
      <a href="https://policies.google.com/terms" target={"_blank"}>Terms of Service</a>
      <span> apply.</span>
    </p>
  </form>
}