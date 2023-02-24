import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ContactMe from "./ContactMe"
import ImageGrid from "./ImageGrid"
import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  const illustrationImages = getIllustrationImages()
  const presentationImages = getPresentationImages()
  const webDesignImages = getWebDesignImages()

  const Divider = () => (
    <div
      className="flex-center"
      style={{
        // backgroundColor: "#1e1e1e",
        width: "100%",
        height: "20px",
        // borderRadius: "10px",
        borderBottom: "gray 2px dashed",
      }}
    ></div>
  )

  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
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
      </div>
      <ContactMe />
    </main>
  )
}

export default Main
