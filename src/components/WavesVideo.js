import { useEffect, useRef } from "react"
import wavesVid from "../images/Waves.webm"

const WavesVideo = () => {
  const wavesVideoRef = useRef()

  useEffect(() => {
    wavesVideoRef.current.play()
  }, [])

  return (
    <video ref={wavesVideoRef} autoPlay muted loop id="waves-video">
      <source src={wavesVid} type="video/mp4" />
    </video>
  )
}

export default WavesVideo
