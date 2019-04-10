import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <section>
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
  </Layout>
)

export default IndexPage

