import Introduction from "./Introduction"
import PresentationSlides from "./PresentationSlides"

const Main = () => {
  return (
    <main>
      <Introduction />
      <div className="main-with-margin">
        <PresentationSlides />
        <div>sssss</div>
      </div>
    </main>
  )
}

export default Main
