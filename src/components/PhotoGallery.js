import React, { Component } from "react"
import "./PhotoGallery.css"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, {keyframes} from "styled-components"
import * as theme from "../shared/theme"

let slideIndex = 1
let slideshowTimeout

const fade = keyframes`
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
`
const S = {
  PhotoGalleryContainer: styled.div`
    text-align: center;
    max-width: 80%;
    margin: auto;
    
    .fade {
      animation-name: ${fade};
      animation-duration: 1.5s;
    }
  `,
  PhotoContainer: styled.div`
    height: 50vw;
    width: 80vw;
    max-width: 800px;
    max-height: 550px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
  `,
  SlideNavButton: styled.button`
    cursor: pointer;
    position: absolute;
    top: 22px;
    height: 100%;
    width: 25%;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    user-select: none;
    background: rgba(0, 0, 0, 0);
    border: 0;
    outline: none;
    text-shadow: #cccccc 0 0 5px;
    border-radius: 5px;

    :hover {
      background: rgba(0, 0, 0, .8);
      @media (max-width: ${theme.computerBreakpoint}) {
        background: rgba(0, 0, 0, 0);
      }
    }
  `,
  PhotoNavigator: styled.div`
    margin: .5em auto;
    width: 80%;
    text-align: center;
    
    button {
      cursor: pointer;
      height: 20px;
      width: 20px;
      margin: 0em 2px;
      background-color: white;
      border: 1.5px solid gray;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
      outline: none;
  
      @media (max-width: ${theme.mobileBreakpoint}) {
        height: 15px;
        width: 15px;
      }
      
      &:hover {
        background-color: grey;
      }
      
      &.dot.active {
      background-color: grey;
      }
    }
  `,
}

S.LeftNavButton = styled(S.SlideNavButton)`
    left: 0;
`
S.RightNavButton = styled(S.SlideNavButton)`
    right: 0;
`

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
  return (
    <div key={name} className="photo-slide fade">
      <div className="photo">
        <Img fluid={image}/>
      </div>
    </div>
  )
}

export class PhotoGallery extends Component {

  componentDidMount() {
    jumpToSlide(1)
  }

  render() {
    return (
      <StaticQuery render={data => (
        <S.PhotoGalleryContainer id={"photo-gallery-container"} className={"section-container"}>
          <div>
            <h1 className={"section-title"}>Gallery<span id={"photo-gallery"}/></h1>
            <p>Charisma condo residents will experience the best of Vaughan's urban area, transit, shopping, and much
              more.</p>
            <S.PhotoContainer id={"photo-container"}>
              {Object.keys(data).map(photo =>
                renderPhotoSlide(photo, data[photo].childImageSharp.fluid),
              )}
              <S.LeftNavButton onClick={() => goToAdjacentSlide(-1, true)}>&#10094;</S.LeftNavButton>
              <S.RightNavButton onClick={() => goToAdjacentSlide(1, true)}>&#10095;</S.RightNavButton>
            </S.PhotoContainer>
          </div>
          <S.PhotoNavigator id={"photo-navigator"}>

            {
              range(1, Object.keys(data).length, 1).map((element) =>
                <button key={`d${element}`} className="dot" onClick={() => jumpToSlide(element, true)}/>,
              )
            }
          </S.PhotoNavigator>
        </S.PhotoGalleryContainer>
      )} query={graphql`
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
    `}/>
    )
  }
}



