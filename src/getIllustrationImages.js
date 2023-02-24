const getIllustrationImages = () => {
  // Importing all images in a folder
  const importAll = (r) => {
    return r.keys().map(r)
  }

  const illustrationImages = importAll(
    require.context("./images/illustrations", false, /\.(PNG|png|jpe?g|svg)$/)
  )

  const imagesArray = [
    {
      src: illustrationImages[10],
      width: 1284,
      height: 1926,
      name: "Marwen",
    },
    {
      src: illustrationImages[3],
      width: 625,
      height: 835,
      name: "Downsizing - Small Astronaut",
    },
    {
      src: illustrationImages[12],
      width: 704,
      height: 813,
      name: "Pacific Rim",
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

  return imagesArray
}

export default getIllustrationImages
