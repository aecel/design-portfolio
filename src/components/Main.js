import getIllustrationImages from "../getIllustrationImages"
import ContactMe from "./ContactMe"
import IllustrationGrid from "./IllustrationGrid"
import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  const illustrationImages = getIllustrationImages()

  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
        <h1>Sample Works</h1>
        <PresentationSlides />
        {/* <IllustrationSlideshow
          title="Illustrations"
          illustrationImages={illustrationImages}
        /> */}
        <div
          className="flex-center"
          style={{ backgroundColor: "#1e1e1e", width: "100%", height: "500px" }}
        >
          xxx
        </div>
        <IllustrationGrid />
      </div>
      <ContactMe />
    </main>
  )
}

export default Main
