import React from "react"
import Container from "./Container/Container"

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="footer__columns">
          <div className="footer__column">
            <h1 className="footer__column-logo">Merces</h1>
          </div>
          <div className="footer__column">
            <p className="footer__column-right">
              <a href="tel:8848897756">+91 88488 97756</a>
            </p>
            <p className="footer__column-right">
              <a href="mailto:mercessanitaryware@gmail.com">
                mercessanitaryware@gmail.com
              </a>
            </p>
            <p className="footer__column-right">
              <a
                href="https://goo.gl/maps/fUavu2oLfuYbfR1N9"
                target="_blank"
                rel="noreferrer"
              >
                Panvel - Kochi - Kanyakumari Hwy, Poyya, Bangramanjeshwar,
                Kerala 671323
              </a>
            </p>
          </div>
        </div>
        <div className="footer__tradermark">
          <p className="footer__trademark-text">
            Merces © {new Date().getFullYear()}. All rights reserved by{" "}
            <a href="https://www.dhanush.wtf/" target="_blank" rel="noreferrer">
              Dhanush Bangera
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Footer
