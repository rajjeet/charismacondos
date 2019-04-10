import React, { Component } from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as PropTypes from "prop-types"
import { FloorPlans } from "../components/FloorPlans"
import { HeroBanner } from "../components/HeroBanner"

class IndexPage extends Component {
  render() {
    let { data } = this.props
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section id={"banner"}>
          <HeroBanner/>
        </section>
        <section id={"gallery-section"}>
          <FloorPlans/>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = { data: PropTypes.any }

export default IndexPage

