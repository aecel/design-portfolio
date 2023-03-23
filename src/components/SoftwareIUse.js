import { useEffect, useRef } from "react"
import SpacingForHeader from "./SpacingForHeader"

const SoftwareIUse = ({ triggerRef, triggerRef2 }) => {
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
    <section ref={sectionRef} className="main-section">
      <SpacingForHeader />
    </section>
  )
}

export default SoftwareIUse
