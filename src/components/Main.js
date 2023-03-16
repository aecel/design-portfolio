import { useRef } from "react"
import ContactMe from "./ContactMe"
import Introduction from "./Introduction"
import SampleWorks from "./SampleWorks"

const Main = () => {
  const contactMeRef = useRef()

  return (
    <>
      <header>
        <div>x</div>
        <div>y</div>
        <div>z</div>
        <div>x</div>
        <div>y</div>
        <div
          ref={contactMeRef}
          className="flex-center"
          style={{
            height: "50px",
            width: "100px",
            backgroundColor: "black",
          }}
        >
          Contact Me
        </div>
      </header>
      <main>
        <Introduction />
        <SampleWorks />
        <ContactMe triggerRef={contactMeRef} />
      </main>
    </>
  )
}

export default Main
