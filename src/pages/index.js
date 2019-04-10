import React from "react"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <section id={'banner'}>
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
    <section id={'selling-features'}>
      {/*<Img fluid={data.placeholderImage.childImageSharp.fluid}/>*/}
    </section>
  </Layout>
)

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

