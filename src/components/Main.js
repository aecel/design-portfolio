import ContactMe from "./ContactMe"
import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
        <div>Sample Works</div>
        <PresentationSlides />
        <div
          className="flex-center"
          style={{ backgroundColor: "gray", width: "100%", height: "500px" }}
        >
          xxx
        </div>
      </div>
      <ContactMe />
    </main>
  )
}

export default Main
