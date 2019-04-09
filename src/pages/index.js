import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <section>
      <table id={"hero-banner"}>
        <tr id={"main-heading"}>
          <td>Gateway To the GTA</td>
        </tr>
        <tr id={"supporting-headline"}>
          <td>Where dreams come true</td>
        </tr>
      </table>
    </section>
  </Layout>
)

export default IndexPage

