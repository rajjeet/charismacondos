import React, { Component } from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import * as PropTypes from "prop-types"
import { FloorPlans } from "../components/FloorPlans"

class IndexPage extends Component {
  render() {
    let { data } = this.props
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section id={"banner"}>
          <table id={"hero-banner"}>
            <tbody>
            <tr id={"main-heading"}>
              <td>Gateway To the GTA</td>
            </tr>
            <tr id={"supporting-headline"}>
              <td>Where dreams come true</td>
            </tr>
            <tr id={"call-to-action-top"}>
              <td>
                <button>Reserve Your Spot</button>
              </td>
            </tr>
            </tbody>
          </table>
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

