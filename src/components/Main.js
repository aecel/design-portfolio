import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import ContactMe from "./ContactMe"
import ImageGrid from "./ImageGrid"
import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  const illustrationImages = getIllustrationImages()
  const presentationImages = getPresentationImages()

  const Divider = () => (
    <div
      className="flex-center"
      style={{
        // backgroundColor: "#1e1e1e",
        width: "100%",
        height: "10px",
        borderRadius: "10px",
      }}
    ></div>
  )

  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
        <h1>Sample Works</h1>
        <PresentationSlides />
        <Divider />
        <ImageGrid
          title="Presentation Samples"
          imagesArray={presentationImages}
        />
        <Divider />
        <ImageGrid title="Illustrations" imagesArray={illustrationImages} />
      </div>
      <ContactMe />
    </main>
  )
}

export default Main
