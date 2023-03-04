import { useEffect, useRef } from "react"
import wavesVid from "../images/Waves Lighter.webm"

const WavesLighterVideo = () => {
  const wavesVideoRef = useRef()

  useEffect(() => {
    wavesVideoRef.current.play()
  }, [])

  return (
    <video ref={wavesVideoRef} autoPlay muted loop id="waves-lighter-video">
      <source src={wavesVid} type="video/mp4" />
    </video>
  )
}

export default WavesLighterVideo
