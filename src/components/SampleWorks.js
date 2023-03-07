import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ImageGrid from "./ImageGrid"
import PresentationSlides from "./PresentationSlides"
import WavesLighterVideo from "./WavesLighterVideo"

const Divider = () => (
  <div
    className="flex-center"
    style={{
      // backgroundColor: "#1e1e1e",
      width: "100%",
      height: "130px",
      // borderRadius: "10px",
      // borderBottom: "var(--color-theme) 2px dashed",
      marginTop: "20px",
      marginBottom: "20px",
      overflow: "clip",
      position: "relative",
    }}
  >
    <WavesLighterVideo />
  </div>
)

const SampleWorks = () => {
  const illustrationImages = getIllustrationImages()
  const presentationImages = getPresentationImages()
  const webDesignImages = getWebDesignImages()

  return (
    <>
      <PresentationSlides />
      <Divider />
      <ImageGrid
        title="Presentation Samples"
        imagesArray={presentationImages}
      />
      <Divider />
      <ImageGrid title="Illustrations" imagesArray={illustrationImages} />
      <Divider />
      <ImageGrid
        title="Web Design"
        imagesArray={webDesignImages}
        width="300px"
      />
    </>
  )
}

export default SampleWorks
