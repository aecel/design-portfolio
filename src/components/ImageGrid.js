import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"

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
          style={{
            width: "200px",
            height: "auto",
            cursor: "pointer",
            objectFit: "cover",
          }}
        />
      )}
    </Item>
  )
}

// const ImageGrid = ({ imageArray }) => {
//   const length = imageArray.length
//   let output = []

//   for (let i = 0; i < length; i += 4) {
//     const toPush = (
//       <div
//         key={i}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         <ImageItem image={imageArray[i]} />
//         <ImageItem image={imageArray[i + 1]} />
//         <ImageItem image={imageArray[i + 2]} />
//         <ImageItem image={imageArray[i + 3]} />
//       </div>
//     )
//     output.push(toPush)
//   }

//   return <>{output}</>
// }

const ImageGrid = ({ title, imagesArray }) => {
  return (
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
  )
}

export default ImageGrid
