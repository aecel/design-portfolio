import introductionGif from "../images/Introduction.gif"

const Introduction = () => {
  return (
    <div id="Introduction" className="flex-center">
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <img
          src={introductionGif}
          alt=""
          style={{
            width: "300px",
            height: "auto",
            // border: "white 2px dashed",
            borderRadius: "50%",
            // objectPosition: "top",
            // objectFit: "contain",
          }}
        />
        <h2>Hi, I'm Aecel</h2>
        <div>
          I'm a graphic designer specializing in presentation design and vector
          illustration
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Introduction
