import React, { useEffect, useState } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScoll = () => {
    const offset = window.scrollY

    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScoll)
  })

  let header = ["header"]
  if (scrolled) {
    header.push(" scrolled")
  }

  let text = ["header__logo-text"]
  if (scrolled) {
    text.push(" scroll")
  }

  return (
    <div className={header.join("")}>
      <div className="header__logo">
        <h1 className={text.join("")}>Merces</h1>
      </div>
    </div>
  )
}

export default Header
