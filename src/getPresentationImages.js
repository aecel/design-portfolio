const getPresentationImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const presentationImages = importAll(
    require.context("./images/slides/samples", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  let imagesArray = []

  for (const image of presentationImages) {
    imagesArray.push({
      src: image,
      width: 1280,
      height: 720,
      name: `Slide ${presentationImages.indexOf(image)}`,
    })
  }

  return imagesArray
}

export default getPresentationImages
