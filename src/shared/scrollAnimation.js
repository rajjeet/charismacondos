export function setScrollAnimation(elementClassName, animationClassName) {

// get the element to animate
  const elements = document.getElementsByClassName(elementClassName)
// listen for scroll event and call animate function
  document.addEventListener("scroll", animate)

// check if element is in view
  function inView(element) {
    // get window height
    const windowHeight = window.innerHeight
    // get number of pixels that the document is scrolled
    const scrollY = window.scrollY || window.pageYOffset

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    const scrollPosition = scrollY + windowHeight
    // get element position (distance from the top of the page to the bottom of the element)

    const elementPosition = element ? element.getBoundingClientRect().top + scrollY + element.clientHeight : 0;

    // is scroll position greater than element position? (is element in view?)
    return scrollPosition > elementPosition
  }

// animate element when it is in view
  function animate() {
    // is element in view?
    Object.keys(elements).forEach(key => {
      if (inView(elements[key])) {
        // element is in view, add class to element
        elements[key].classList.add(animationClassName)
      } else {
        elements[key].classList.remove(animationClassName)
      }
    })
  }
}
