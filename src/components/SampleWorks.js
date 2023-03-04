import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ImageGrid from "./ImageGrid"
import PresentationSlides from "./PresentationSlides"
import wigglyLineSvg from "../images/wiggly-line.svg"

const Divider = () => (
  <div
    className="flex-center"
    style={{
      // backgroundColor: "#1e1e1e",
      width: "100%",
      height: "10px",
      // borderRadius: "10px",
      // borderBottom: "var(--color-theme) 2px dashed",
      marginTop: "60px",
      marginBottom: "60px",
    }}
  >
    <img src={wigglyLineSvg} alt="" />
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
