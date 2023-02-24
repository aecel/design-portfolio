import { useState } from "react"

const PptSlideshow = ({ title, left, right }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const numOfSlides = left.length - 1

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
      {title ? <h3>{title}</h3> : <></>}
      <div className="before-after-slides flex-center">
        <div className="flex-center">
          <div>Before (Input from Client)</div>
          <img className="slide-image" alt="" src={left[imageIndex]} />
        </div>
        <div className="flex-center">
          <div>After</div>
          <img className="slide-image" alt="" src={right[imageIndex]} />
        </div>
      </div>
      <div className="flex-center" style={{ flexDirection: "row" }}>
        <button onClick={clickPrevious}>Previous</button>
        <button onClick={clickNext}>Next</button>
      </div>
    </div>
  )
}

export default PptSlideshow
