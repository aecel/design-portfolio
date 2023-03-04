import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ImageGrid from "./ImageGrid"
import PresentationSlides from "./PresentationSlides"
import wigglyLineSvg from "../images/wiggly-line.svg"
import WavesVideo from "./WavesVideo"
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
      overflow: "hidden",
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
    <section className="main-with-margin flex-center">
      <h2>Sample Works</h2>
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
    </section>
  )
}

export default SampleWorks
