import React, { Component } from "react"
import "./index.css"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { FloorPlans } from "../components/FloorPlans"
import { HeroBanner } from "../components/HeroBanner"
import { Location } from "../components/Location"
import { Amenities } from "../components/Amenities"
import { Banner } from "../components/Banner"
import { PhotoGallery } from "../components/PhotoGallery"
import { FooterContact } from "../components/FooterContact"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <HeroBanner/>
        <PhotoGallery/>
        <Location/>
        <Amenities/>
        <Banner/>
        <FloorPlans/>
        <FooterContact/>
      </Layout>
    )
  }
}

IndexPage.propTypes = {}

export default IndexPage

