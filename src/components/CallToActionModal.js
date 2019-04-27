import { ContactForm } from "./ContactForm"
import React from "react"
import "./CallToActionModal.css"

export function CallToActionModal() {
  return <>
    <input className="modal-state" id="modal-1" type="checkbox"/>
    <div className="modal">
      <label className="modal__bg" htmlFor="modal-1"/>
      <div className="modal__inner">
        <label className="modal__close" htmlFor="modal-1"/>
        <h1>Register</h1>
        <ContactForm/>
      </div>
    </div>
  </>
}