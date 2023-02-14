import testSlide from "../images/slides/auth-ppt-output-1/Slide16.PNG"
import testSlide2 from "../images/slides/auth-ppt-input-1/Slide16.PNG"

const PresentationSlides = () => {
  return (
    <div id="PresentationSlides" className="flex-center">
      <img className="slide-image" alt="" src={testSlide2} />
      <div>=&gt;</div>
      <img className="slide-image" alt="" src={testSlide} />
    </div>
  )
}

export default PresentationSlides
