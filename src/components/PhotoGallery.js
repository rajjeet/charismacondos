import React from "react"
import "./PhotoGallery.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

let slideIndex = 1

export function jumpToSlide(selection) {
  let index
  const slides = document.getElementsByClassName("photo-slide")
  const dots = document.getElementsByClassName("dot")
  slideIndex = selection > slides.length ? 1 :
    selection < 1 ? slides.length
      : selection

  for (index = 0; index < slides.length; index++) {
    slides[index].style.display = "none"
  }
  for (index = 0; index < dots.length; index++) {
    dots[index].className = dots[index].className.replace(" active", "")
  }
  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block"
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active"
}

function goToAdjacentSlide(number) {
  return jumpToSlide(slideIndex += number)
}

function renderPhotoSlide(image, caption) {
  return <div className="photo-slide fade">
    <div className="photo">
      <Img fluid={image}/>
    </div>
  </div>
}

export const PhotoGallery = () => (
  <StaticQuery query={graphql`
  query {
    rendering: file(relativePath: { eq: "rendering.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    neighbourhood: file(relativePath: { eq: "mobilio_neighbourhood.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    
   }
    `} render={data => (
    <section id={"photo-gallery-section"}>
      <div id={"photo-gallery"}>
        <h1>Gallery</h1>
        <p>Look at all these amazing pictures</p>
        <div id={'photo-container'}>
          {renderPhotoSlide(data.rendering.childImageSharp.fluid, "Sample caption")}
          {renderPhotoSlide(data.neighbourhood.childImageSharp.fluid, "Neighbourhood")}
          <button className="prev-slide" onClick={() => goToAdjacentSlide(-1)}>&#10094;</button>
          <button className="next-slide" onClick={() => goToAdjacentSlide(1)}>&#10095;</button>
        </div>
      </div>
      <div id={"photo-navigator"}>
        <button className="dot" onClick={() => jumpToSlide(1)}/>
        <button className="dot" onClick={() => jumpToSlide(2)}/>
      </div>
    </section>
  )}/>
)



