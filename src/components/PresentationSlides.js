import getPresentationImages from "../getPresentationImages"
import PptSlideshow from "./PptSlideshow"

const PresentationSlides = () => {
  const presentationImages = getPresentationImages()
  return (
    <div id="PresentationSlides" className="flex-center">
      <div>Sample Powerpoint Presentation Slides</div>
      <PptSlideshow
        title="Before and After"
        left={presentationImages["before1"]}
        right={presentationImages["after1"]}
      />
    </div>
  )
}

export default PresentationSlides
