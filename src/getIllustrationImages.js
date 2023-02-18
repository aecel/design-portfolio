const getIllustrationImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const illustrationImages = importAll(
    require.context("./images/illustrations", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  return illustrationImages
}

export default getIllustrationImages
