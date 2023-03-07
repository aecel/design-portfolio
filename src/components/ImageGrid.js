import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"

const ImageGrid = ({ title, imagesArray, width, subtitle }) => {
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
            className="grid-image"
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
    <section className="main-with-margin flex-center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h1 className="grid-title">{title}</h1>
        {subtitle ? <div>{subtitle}</div> : <></>}
        <div style={{ marginBottom: "20px", color: "gray" }}>
          Click or tap to enlarge
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
