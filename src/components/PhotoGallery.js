import React, { Component } from "react"
import "./PhotoGallery.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

let slideIndex = 1
let slideshowTimeout


const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

export function jumpToSlide(selection, isUserClick = false) {
  if (typeof document !== undefined) {
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
    slideshowTimeout = setTimeout(goToAdjacentSlide, isUserClick ? 15000 : 5000)
  }
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

export class PhotoGallery extends Component {

  componentDidMount() {
    jumpToSlide(1)
  }

  render() {
    return (
      <StaticQuery query={graphql`
  query {
    picture1: file(relativePath: { eq: "construction-location.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    picture2: file(relativePath: { eq: "charismacondos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    picture3: file(relativePath: { eq: "Charisma-Condos-location-8-v44.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }      
    picture5: file(relativePath: { eq: "breathness-of-fresh-air.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture6: file(relativePath: { eq: "height-of-luxury.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture7: file(relativePath: { eq: "new-lifestyle-awaits-you.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture8: file(relativePath: { eq: "world-at-doorstep.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture9: file(relativePath: { eq: "grand-entrance.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture10: file(relativePath: { eq: "wellness-courtyard.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture11: file(relativePath: { eq: "rooftop-skyview-lounge.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }
    picture14: file(relativePath: { eq: "outdoor-pool-lounge.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }     
    picture16: file(relativePath: { eq: "lounge.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture12: file(relativePath: { eq: "yoga-room.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture13: file(relativePath: { eq: "theatre-room.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }       
    picture15: file(relativePath: { eq: "fitness-centre.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }     
    picture18: file(relativePath: { eq: "vmc-subway-station.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
    picture19: file(relativePath: { eq: "go-bus.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        } 
      }
    }    
   }
    `} render={data => (
        <div id={"photo-gallery-container"} className={"section-container"}>
          <div>
            <h1 className={"section-title"}>Gallery<span id={"photo-gallery"}/></h1>
            <p>Charisma condo residents will experience the best of Vaughan's urban area, transit, shopping, and much
              more.</p>
            <div id={"photo-container"}>
              {Object.keys(data).map(photo =>
                renderPhotoSlide(photo, data[photo].childImageSharp.fluid),
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
        </div>
      )}/>
    )
  }
}



