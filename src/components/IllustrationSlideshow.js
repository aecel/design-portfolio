import { useState } from "react"

const IllustrationSlideshow = ({ title, illustrationImages }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const numOfSlides = illustrationImages.length - 1

  const clickPrevious = () => {
    let nextImageIndex = imageIndex
    if (imageIndex === 0) {
      setImageIndex(numOfSlides)
    } else {
      setImageIndex(nextImageIndex - 1)
    }
  }

  const clickNext = () => {
    let nextImageIndex = imageIndex
    if (imageIndex === numOfSlides) {
      setImageIndex(0)
    } else {
      setImageIndex(nextImageIndex + 1)
    }
  }

  return (
    <div className="flex-center">
      <div>{title}</div>
      <div className="before-after-slides flex-center">
        <div className="flex-center">
          <img
            className="illustration-image"
            alt=""
            src={illustrationImages[imageIndex]}
          />
        </div>
      </div>
      <div className="flex-center" style={{ flexDirection: "row" }}>
        <button onClick={clickPrevious}>Previous</button>
        <button onClick={clickNext}>Next</button>
      </div>
    </div>
  )
}

export default IllustrationSlideshow
