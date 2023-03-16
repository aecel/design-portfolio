import "photoswipe/dist/photoswipe.css"
import { useEffect, useRef } from "react"
import { Gallery, Item } from "react-photoswipe-gallery"

const ImageGrid = ({
  id,
  title,
  imagesArray,
  subtitle,
  imageClasses,
  triggerRef,
}) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const trigger = triggerRef.current
    trigger.addEventListener("click", scroll)

    return () => {
      trigger.removeEventListener("click", scroll)
    }
  }, [triggerRef])

  const ImageItem = ({ image }) => {
    return (
      <Item
        original={image.src}
        thumbnail={image.src}
        width={image.width}
        height={image.height}
      >
        {({ ref, open }) => (
          <img
            className={imageClasses ? `${imageClasses}` : "grid-image"}
            ref={ref}
            onClick={open}
            src={image.src}
            alt={image.name}
          />
        )}
      </Item>
    )
  }

  return (
    <section ref={sectionRef} id={id} className="main-with-margin flex-center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h1 className="grid-title">{title}</h1>
        {subtitle && (
          <div style={{ textAlign: "center", lineHeight: "2" }}>{subtitle}</div>
        )}
        <div
          style={{
            textAlign: "center",
            lineHeight: "2",
            marginBottom: "20px",
            color: "gray",
          }}
        >
          Click to enlarge and go to slideshow mode
        </div>
        <Gallery>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {imagesArray.map((image) => {
              return <ImageItem image={image} key={image.name} />
            })}
          </div>
        </Gallery>
      </div>
    </section>
  )
}

export default ImageGrid
