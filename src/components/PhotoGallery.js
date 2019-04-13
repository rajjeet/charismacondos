import React from "react"
import "./PhotoGallery.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

let slideIndex = 1
let slideshowTimeout;
jumpToSlide(1)

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

export function jumpToSlide(selection, isUserClick = false) {
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
  clearTimeout(slideshowTimeout)
  slideshowTimeout = setTimeout(goToAdjacentSlide, isUserClick ? 15000 : 5000);
}

function goToAdjacentSlide(number = 1, isUserClick = false) {
  return jumpToSlide(slideIndex += number, isUserClick)
}

function renderPhotoSlide(name, image) {
  return <div key={name} className="photo-slide fade">
    <div className="photo">
      <Img fluid={image}/>
    </div>
  </div>
}

export const PhotoGallery = () => (
  <StaticQuery query={graphql`
  query {
    neighbourhood: file(relativePath: { eq: "mobilio_neighbourhood.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    rendering2: file(relativePath: { eq: "mobilio_rendered_drawing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    transit: file(relativePath: { eq: "vmc_transit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    transitMap: file(relativePath: { eq: "transit_map.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    eco_info: file(relativePath: { eq: "mobilio_eco_info.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    lobby: file(relativePath: { eq: "mobilio_rendered_drawing3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    community: file(relativePath: { eq: "vaughan_community_rendering.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    rooftop: file(relativePath: { eq: "rooftop.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    gym: file(relativePath: { eq: "mobilio_gym.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
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
        <div id={"photo-container"}>
          {Object.keys(data).map(photo =>
            renderPhotoSlide(photo, data[photo].childImageSharp.fluid)
          )}
          <button className="prev-slide" onClick={() => goToAdjacentSlide(-1, true)}>&#10094;</button>
          <button className="next-slide" onClick={() => goToAdjacentSlide(1, true)}>&#10095;</button>
        </div>
      </div>
      <div id={"photo-navigator"}>

        {
          range(1, Object.keys(data).length, 1).map((element) =>
            <button key={`d${element}`} className="dot" onClick={() => jumpToSlide(element, true)}/>,
          )
        }
      </div>
    </section>
  )}/>
)



