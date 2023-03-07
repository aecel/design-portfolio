import getBeforeAfterImages from "../getBeforeAfterImages"
import PptSlideshow from "./PptSlideshow"

const PresentationSlides = () => {
  const presentationImages = getBeforeAfterImages()
  return (
    <section className="main-with-margin flex-center">
      {/* <h1>Sample Works</h1> */}
      <div id="PresentationSlides" className="flex-center">
        <h1 className="grid-title">Powerpoint Presentation Slides</h1>
        <PptSlideshow
          title=""
          left={presentationImages["before1"]}
          right={presentationImages["after1"]}
        />
      </div>
    </section>
  )
}

export default PresentationSlides
