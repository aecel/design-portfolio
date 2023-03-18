import { useEffect, useRef } from "react"
import WavesVideo from "./WavesVideo"
const ContactMe = ({ triggerRef, triggerRef2 }) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const trigger = triggerRef.current
    trigger.addEventListener("click", scroll)
    const trigger2 = triggerRef2.current
    trigger2.addEventListener("click", scroll)

    return () => {
      trigger.removeEventListener("click", scroll)
      trigger2.removeEventListener("click", scroll)
    }
  }, [triggerRef, triggerRef2])
  return (
    <div id="ContactMe" className="main-section" ref={sectionRef}>
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          zIndex: "1",
        }}
      >
        <h2
          style={{
            // margin: "0",
            textAlign: "center",
          }}
        >
          I would love to hear from you.
        </h2>
        <a
          id="HireMeButton"
          href=" mailto:aecelacuna@gmail.com?subject=Hi%20Aecel%2C%20I%20would%20love%20to%20hire%20you.&body=I%20saw%20your%20portfolio%20on%20aecel.github.io%2Fdesign-portfolio.%0D%0A%0D%0ALet%20me%20introduce%20myself%20%2F%20my%20company.%0D%0A%0D%0A%0D%0A "
        >
          Hire Me
        </a>
      </div>
      <WavesVideo />
    </div>
  )
}

export default ContactMe
