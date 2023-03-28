const getSoftwareIUse = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const logoImages = importAll(
    require.context("./images/logos", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  let imagesArray = []

  for (const image of logoImages) {
    imagesArray.push({
      src: image,
      name: ``,
    })
  }

  return imagesArray
}

export default getSoftwareIUse
