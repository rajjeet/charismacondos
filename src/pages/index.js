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
import { Disclaimer } from "../components/Disclaimer"
import { CallToActionModal } from "../components/CallToActionModal"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Charisma Condos"
             keywords={[`condos vaughan mills`, `condo near subway`, `buy condos vaughan`, `book condos vaughan`, `condos north york`]}/>
        <Message/>
        <HeroBanner/>
        <Specs/>
        <PhotoGallery/>
        <Location/>
        <Banner/>
        <Amenities/>
        <FooterContact/>
        <Disclaimer/>
        <CallToActionModal/>
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default IndexPage

