import getBeforeAndAfterImages from "../getBeforeAndAfterImages"
import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ImageGrid from "./ImageGrid"
import WavesLighterVideo from "./WavesLighterVideo"

const Divider = () => (
  <div className="divider flex-center">
    <WavesLighterVideo />
  </div>
)

const SampleWorks = ({
  presentationRef,
  beforeAfterRef,
  illustrationsRef,
  webDesignRef,
}) => {
  const beforeAndAfterImages = getBeforeAndAfterImages()
  const illustrationImages = getIllustrationImages()
  const presentationImages = getPresentationImages()
  const webDesignImages = getWebDesignImages()

  return (
    <div className="flex-center">
      <ImageGrid
        triggerRef={presentationRef}
        id="PresentationSamples"
        title="Presentation Samples"
        imagesArray={presentationImages}
      />
      <Divider />
      <ImageGrid
        triggerRef={beforeAfterRef}
        id="PresentationBeforeAndAfter"
        title="Before and After"
        imagesArray={beforeAndAfterImages}
        subtitle="Comparison of the input slide (from the client) to the final product"
      />
      <Divider />
      <ImageGrid
        triggerRef={illustrationsRef}
        id="Illustrations"
        title="Illustrations"
        imagesArray={illustrationImages}
      />
      <Divider />
      <ImageGrid
        triggerRef={webDesignRef}
        id="WebDesign"
        title="Web Design"
        imagesArray={webDesignImages}
        imageClasses="grid-image-webdesign"
        // width="300px"
      />
    </div>
  )
}

export default SampleWorks
