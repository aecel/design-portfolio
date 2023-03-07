import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"

const ImageGrid = ({ title, imagesArray, width }) => {
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
            ref={ref}
            onClick={open}
            src={image.src}
            alt={image.name}
            style={
              width
                ? {
                    width: width,
                    height: "auto",
                    cursor: "pointer",
                    objectFit: "cover",
                  }
                : {
                    width: "200px",
                    height: "auto",
                    cursor: "pointer",
                    objectFit: "cover",
                  }
            }
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
        <h2>{title}</h2>
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
