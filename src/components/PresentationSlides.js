import testSlide from "../images/slides/auth-ppt-output-1/Slide16.PNG"
import testSlide2 from "../images/slides/auth-ppt-input-1/Slide16.PNG"

const PresentationSlides = () => {
  return (
    <div id="PresentationSlides" className="flex-center">
      <div className="flex-center">
        <div>Before</div>
        <img className="slide-image" alt="" src={testSlide2} />
      </div>
      <div className="flex-center">
        <div></div>
        <div
          style={{
            alignSelf: "baseline",
          }}
        >
          =&gt;
        </div>
      </div>
      <div className="flex-center">
        <div>After</div>
        <img className="slide-image" alt="" src={testSlide} />
      </div>
    </div>
  )
}

export default PresentationSlides
