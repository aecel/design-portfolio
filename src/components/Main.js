import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import ContactMe from "./ContactMe"
import IllustrationSlideshow from "./IllustrationSlideshow"
import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  const slideImages = getPresentationImages()
  const illustrationImages = getIllustrationImages()

  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
        <div>Sample Works</div>
        <PresentationSlides />
        <div
          className="flex-center"
          style={{ backgroundColor: "#1e1e1e", width: "100%", height: "500px" }}
        >
          xxx
        </div>
        <IllustrationSlideshow
          title="Illustrations"
          illustrationImages={illustrationImages}
        />
      </div>
      <ContactMe />
    </main>
  )
}

export default Main
