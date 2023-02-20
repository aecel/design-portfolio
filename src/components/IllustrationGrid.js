import getIllustrationImages from "../getIllustrationImages"
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
          style={
            image.name === "Marwen"
              ? {
                  width: "200px",
                  height: "auto",
                  cursor: "pointer",
                  objectFit: "fill",
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

const ImageGrid = ({ imageArray }) => {
  const length = imageArray.length
  let output = []

  for (let i = 0; i < length; i += 4) {
    const toPush = (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <ImageItem image={imageArray[i]} />
        <ImageItem image={imageArray[i + 1]} />
        <ImageItem image={imageArray[i + 2]} />
        <ImageItem image={imageArray[i + 3]} />
      </div>
    )
    output.push(toPush)
  }

  return <>{output}</>
}

const IllustrationGrid = () => {
  const illustrationImages = getIllustrationImages()

  const images = [
    {
      src: illustrationImages[12],
      width: 704,
      height: 813,
      name: "Pacific Rim",
    },
    {
      src: illustrationImages[10],
      width: 963,
      height: 1267,
      name: "Marwen",
    },
    {
      src: illustrationImages[3],
      width: 625,
      height: 835,
      name: "Downsizing - Small Astronaut",
    },
    {
      src: illustrationImages[6],
      width: 768,
      height: 1021,
      name: "Good Omens",
    },
    {
      src: illustrationImages[0],
      width: 1973,
      height: 2908,
      name: "No Time To Die",
    },
    {
      src: illustrationImages[9],
      width: 626,
      height: 836,
      name: "The Man in the High Castle",
    },
    {
      src: illustrationImages[11],
      width: 630,
      height: 838,
      name: "Mortal Engines",
    },
    {
      src: illustrationImages[7],
      width: 470,
      height: 711,
      name: "Kingsman",
    },
    {
      src: illustrationImages[1],
      width: 768,
      height: 1024,
      name: "Downsizing",
    },
    {
      src: illustrationImages[2],
      width: 768,
      height: 1024,
      name: "The Crimes of Grindelwald",
    },

    {
      src: illustrationImages[4],
      width: 768,
      height: 1207,
      name: "Glass",
    },
    {
      src: illustrationImages[5],
      width: 768,
      height: 1024,
      name: "Good Omens - Silhouette",
    },
    {
      src: illustrationImages[8],
      width: 768,
      height: 1024,
      name: "La Llorona",
    },

    {
      src: illustrationImages[13],
      width: 768,
      height: 1024,
      name: "Shazam - Shadow",
    },
    {
      src: illustrationImages[14],
      width: 768,
      height: 1024,
      name: "Shazam",
    },
    {
      src: illustrationImages[15],
      width: 595,
      height: 842,
      name: "Take Your Time",
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <h2>Illustrations</h2>
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
          {images.map((image) => {
            // console.log(image.name + " : " + image.height / image.width)
            return <ImageItem image={image} key={image.name} />
          })}
        </div>
      </Gallery>
    </div>
  )
}

export default IllustrationGrid
