import testSlide from "../images/slides/auth-ppt-output-1/Slide16.PNG"
import testSlide2 from "../images/slides/auth-ppt-input-1/Slide16.PNG"

const PresentationSlides = () => {
  return (
    <div id="PresentationSlides" className="flex-center">
      <div>Sample Powerpoint Presentation Slides</div>
      <div className="before-after-slides flex-center">
        <div className="flex-center">
          <div>Before</div>
          <img className="slide-image" alt="" src={testSlide2} />
          <button>Previous</button>
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
          <div></div>
        </div>
        <div className="flex-center">
          <div>After</div>
          <img className="slide-image" alt="" src={testSlide} />
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PresentationSlides
