import React from "react"
import { CLIENT_RECAPTCHA_TOKEN, EMAIL_SERVICE_ENDPOINT } from "../../aws/config"
import styled, { keyframes } from "styled-components"
import * as theme from "../shared/theme"

const ldsRing = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`
const S = {
  ContactForm: styled.form`
    max-width: 100%;
    margin-top: .5em;
    div {
      label {
        font-size: 1em;
        margin-bottom: .1em;
      }
  
      input, textarea {
        width: 100%;
        margin: .1em auto .5em auto;
        padding: 7px;
        font-size: 1.3em;
        border: 1px solid dimgrey;
        border-radius: 5px;
        box-sizing: border-box;
  
        @media screen and (max-width: ${theme.tabletBreakpoint}){
  
        }
  
        @media screen and (max-width: ${theme.mobileBreakpoint}){
          padding: 7px;
          font-size: 1em;
        }
  
        &:focus {
          outline: 0;
  
          & + label {
            opacity: 0;
          }
        }
      }
  
      .container {
        display: block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        margin: .5em auto 1em auto;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

       input {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
        height: 100%;
        width: 100%;
        z-index: 2;

        &:checked {
          & ~ .checkmark {
            background-color: ${theme.primaryBtnColor};

            &:after {
              display: block;
            }
          }
        }
      }

      &:hover {
        input {
          & ~ .checkmark {
            background-color: #ccc;
          }
        }
      }

      .checkmark {
        &:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  
      .checkmark {
      position: absolute;
      margin-top: 0;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border: .5px solid darkgray;
      background-color: #eee;

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
      
    }
    
    .registerButton {
        width: 100%;
        box-shadow: none;
        padding: 7px 5px;
        font-size: 2em;
        border-radius: 10px;
        outline: none;
        border: none;
        background-color: ${theme.primaryBtnColor};
        color: whitesmoke;
        font-family: ${theme.fontFamily};
        cursor: pointer;
      
        &:disabled {
          background: fade(${theme.primaryBtnColor}, 50%);
        }
      
        &:hover {
          .buttonAnimation();
        }
        
        .lds-ring {
          display: inline-block;
          visibility: hidden;
          position: relative;
          width: 30px;
          height: 30px;
        
          div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 29px;
            height: 29px;
            margin: 6px;
            border: 6px solid white;
            border-radius: 50%;
            animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: white transparent transparent transparent;
          }
        
          div:nth-child(1) {
            animation-delay: -0.45s;
          }
        
          div:nth-child(2) {
            animation-delay: -0.3s;
          }
        
          div:nth-child(3) {
            animation-delay: -0.15s;
          }
        }
      }
  
    .disclaimer {
      padding: 0 0;
      margin: 6px 0;
      font-size: .8em;
    }
`,
}

function sendSesEmail(form, body) {
  return new Promise((resolve, reject) => {

    window.grecaptcha.execute(CLIENT_RECAPTCHA_TOKEN, { action: "homepage" })
      .then(function(token) {
        body += `&token=${token}`
        let xhr = new XMLHttpRequest()
        xhr.onerror = () => console.log("fail")

        xhr.open("POST", EMAIL_SERVICE_ENDPOINT, true)
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
  new Promise(resolve => setTimeout(() => resolve(), 3000))

const sendEmail = process.env.NODE_ENV === "production" ? sendSesEmail : mockSendEmail

const handleSubmit = event => {
  event.preventDefault()
  let form = event.target
  let formData = new FormData(form)
  let fullName = formData.get("fullName")
  let email = formData.get("email")
  let phone = formData.get("phone")
  let message = formData.get("message")
  let realtor = formData.get("realtor") ? "Yes" : "No"

  let modelStates = document.getElementById("modal-1")
  let registerButton = form.querySelector(".registerButton")
  let loadingAnimation = form.querySelector(".lds-ring")
  loadingAnimation.style.visibility = "visible"
  registerButton.disabled = true
  let body = `name=${fullName}&email=${email}&phone=${phone}&message=${message}&realtor=${realtor}`

  sendEmail(form, body)
    .then(() => {
      modelStates.checked = false
      registerButton.disabled = false
      loadingAnimation.style.visibility = "hidden"
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

export function ContactForm({ callToActionText = "Register" }) {
  return <S.ContactForm onSubmit={handleSubmit}>
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
    <div className={"checkbox-container"}>
      <label htmlFor={"message"} className={"container"}>Are you a realtor?
        <input type={"checkbox"} id={"realtor"} name={"realtor"}/>
        <span className={"checkmark"}/>
      </label>
    </div>
    <button className={"registerButton"} type={"submit"}>&nbsp;&nbsp;{callToActionText}
      <div className="lds-ring">
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </button>

    <p className={"disclaimer"}>
              <span>The information you provide is strictly confidential.
              This site is protected by reCAPTCHA and the Google </span>
      <a href="https://policies.google.com/privacy" target={"_blank"}>Privacy Policy</a>
      <span> and </span>
      <a href="https://policies.google.com/terms" target={"_blank"}>Terms of Service</a>
      <span> apply.</span>
    </p>
  </S.ContactForm>
}