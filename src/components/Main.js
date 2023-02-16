import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  return (
    <main>
      <Introduction />
      <div className="main-with-margin flex-center">
        <PresentationSlides />
        <div
          className="flex-center"
          style={{ backgroundColor: "gray", width: "100%" }}
        >
          xxx
        </div>
      </div>
    </main>
  )
}

export default Main
