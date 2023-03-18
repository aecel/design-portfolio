import { useRef } from "react"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import Introduction from "./Introduction"
import SampleWorks from "./SampleWorks"

const Main = () => {
  const aboutMeRef = useRef()
  const presentationRef = useRef()
  const beforeAfterRef = useRef()
  const illustrationsRef = useRef()
  const webDesignRef = useRef()
  const contactMeRef = useRef()

  const hamburgerItemsRef = useRef()

  const toggleHamburgerMenu = () => {
    if (hamburgerItemsRef.current.style.display === "none") {
      hamburgerItemsRef.current.style.display = "flex"
    } else {
      hamburgerItemsRef.current.style.display = "none"
    }
  }

  return (
    <>
      <header>
        <div className="header-elements">
          <button className="header-button" ref={aboutMeRef}>
            About Me
          </button>
          <button className="header-button" ref={presentationRef}>
            Presentations
          </button>
          <button className="header-button" ref={beforeAfterRef}>
            More Presentations
          </button>
          <button className="header-button" ref={illustrationsRef}>
            Illustrations
          </button>
          <button className="header-button" ref={webDesignRef}>
            Web Design
          </button>
          <button className="header-button" ref={contactMeRef}>
            Contact Me
          </button>
        </div>
        <div id="hamburger-menu" onClick={toggleHamburgerMenu}></div>
        <div id="hamburger-items" ref={hamburgerItemsRef}>
          <div className="hamburger-item"></div>
        </div>
      </header>
      <main>
        <Introduction triggerRef={aboutMeRef} />
        <SampleWorks
          presentationRef={presentationRef}
          beforeAfterRef={beforeAfterRef}
          illustrationsRef={illustrationsRef}
          webDesignRef={webDesignRef}
        />
        <ContactMe triggerRef={contactMeRef} />
      </main>
      <Footer />
    </>
  )
}

export default Main
