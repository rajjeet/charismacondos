import React, { Component } from "react"
import "./index.css"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { HeroBanner } from "../components/HeroBanner"
import { Location } from "../components/Location"
import { Amenities } from "../components/Amenities"
import { Banner } from "../components/Banner"
import { PhotoGallery } from "../components/PhotoGallery"
import { FooterContact } from "../components/FooterContact"
import { Specs } from "../components/Specs"
import { Message } from "../components/Message"
import { ContactForm } from "../components/ContactForm"
import { Disclaimer } from "../components/Disclaimer"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <Message/>
        <HeroBanner/>
        <Specs/>
        <PhotoGallery/>
        <Location/>
        <Banner/>
        <Amenities/>
        <FooterContact/>
        <Disclaimer/>

        <input className="modal-state" id="modal-1" type="checkbox"/>
        <div className="modal">
          <label className="modal__bg" htmlFor="modal-1"/>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="modal-1"/>
            <h1>Register</h1>
            <ContactForm/>
          </div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default IndexPage

