const getPresentationImages = () => {
  let presentationImages = []

  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const pptInput1 = importAll(
    require.context(
      "./images/slides/auth-ppt-input-1",
      false,
      /\.(PNG|png|jpe?g|svg)$/
    )
  )

  const pptOutput1 = importAll(
    require.context(
      "./images/slides/auth-ppt-output-1",
      false,
      /\.(PNG|png|jpe?g|svg)$/
    )
  )

  const pptInput2 = importAll(
    require.context(
      "./images/slides/auth-ppt-input-2",
      false,
      /\.(PNG|png|jpe?g|svg)$/
    )
  )

  const pptOutput2 = importAll(
    require.context(
      "./images/slides/auth-ppt-output-2",
      false,
      /\.(PNG|png|jpe?g|svg)$/
    )
  )

  presentationImages = {
    input1: pptInput1,
    input2: pptInput2,
    output1: pptOutput1,
    output2: pptOutput2,
  }

  console.log(presentationImages)
  return presentationImages
}

export default getPresentationImages
