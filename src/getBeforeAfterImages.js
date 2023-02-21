const getBeforeAfterImages = () => {
  let presentationImages = []

  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const before1 = importAll(
    require.context("./images/slides/before1", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  const after1 = importAll(
    require.context("./images/slides/after1", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  presentationImages = {
    before1: before1,
    after1: after1,
  }

  return presentationImages
}

export default getBeforeAfterImages
