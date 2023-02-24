import getBeforeAfterImages from "../getBeforeAfterImages"
import PptSlideshow from "./PptSlideshow"

const PresentationSlides = () => {
  const presentationImages = getBeforeAfterImages()
  return (
    <div id="PresentationSlides" className="flex-center">
      <h2 style={{ textAlign: "center" }}>Powerpoint Presentation Slides</h2>
      <PptSlideshow
        title=""
        left={presentationImages["before1"]}
        right={presentationImages["after1"]}
      />
    </div>
  )
}

export default PresentationSlides
