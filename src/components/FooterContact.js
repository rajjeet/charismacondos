import React from "react"
import "./FooterContact.css"
import { ContactForm } from "./ContactForm"

export const FooterContact = () => (
  <div id={'footer-contact-container'} className={'section-container'}>
    <h1>Contact Us</h1>
    <ContactForm callToActionText={'Contact'}/>
  </div>
)