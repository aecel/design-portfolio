import getBeforeAfterImages from "../getBeforeAfterImages"
import PptSlideshow from "./PptSlideshow"

const PresentationSlides = () => {
  const presentationImages = getBeforeAfterImages()
  return (
    <section className="main-with-margin flex-center">
      <h2>Sample Works</h2>
      <div id="PresentationSlides" className="flex-center">
        <h2 style={{ textAlign: "center" }}>Powerpoint Presentation Slides</h2>
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
