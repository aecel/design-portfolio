const Header = () => {
  const scroll = (sectionId) => {
    const section = document.querySelector(sectionId)
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header>
      <div>x</div>
      <div>y</div>
      <div>z</div>
      <div>x</div>
      <div>y</div>
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "black",
        }}
        onClick={scroll("#ContactMe")}
      >
        Contact Me
      </div>
    </header>
  )
}

export default Header
