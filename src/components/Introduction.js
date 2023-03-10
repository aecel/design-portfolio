import introductionGif from "../images/Introduction.gif"
import WavesVideo from "./WavesVideo"
const yearNow = new Date().getFullYear()
const numOfYears = yearNow - 2017

const Introduction = () => {
  return (
    <section id="Introduction" className="main-section">
      <div
        className="flex-center"
        style={{
          maxWidth: "1200px",
          gap: "30px",
          textAlign: "center",
          zIndex: "1",
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
        <h1>Hi, I'm Aecel</h1>
        <div
          style={{
            lineHeight: "2",
          }}
        >
          I'm a freelance graphic designer specializing in{" "}
          <em className="emphasize-text">presentation design </em>
          and <em className="emphasize-text">vector illustration</em>.
        </div>
        <div>
          I have <em className="emphasize-text">{numOfYears} years</em> of
          experience.
        </div>
      </div>
      <WavesVideo />
    </section>
  )
}

export default Introduction
