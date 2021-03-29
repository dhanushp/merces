import React from "react"
import styles from "./styles.module.scss"
import Container from "../Container/Container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

//SVG
import Warranty from "../../images/Warranty.svg"
import Installation from "../../images/Installation.svg"
import Standard from "../../images/Standard.svg"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      faucet: file(relativePath: { eq: "Faucet.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      sanitary: file(relativePath: { eq: "Sanitaryware.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.headerTextMain}>Merces -</h1>
          <h1 className={styles.headerTextMain}>Elegance Meets Quality</h1>
          <p className={styles.headerTextSecondary}>
            With the help of Modern Engineering and Craftmanship Merces provides
            the best quality proudct with USA standard as well as Elegance.
          </p>
        </div>
        <div className={styles.headerImage}>
          <Img
            className={styles.heroImageRef}
            fluid={data.header.childImageSharp.fluid}
            alt="Header"
          />
        </div>
      </section>
      <section className={styles.service}>
        <div className={styles.serviceHeading}>
          <h1 className={styles.serviceHeadingPrimary}>Services</h1>
          <h1 className={styles.serviceHeadingSecondary}>
            Create a Customer Relation that Last Forever
          </h1>
        </div>
        <div className={styles.serviceLists}>
          <div className={styles.serviceList}>
            <div className={styles.serviceListImage}>
              <img
                src={Warranty}
                className={styles.serviceListImage_Image}
                alt="Warranty"
              ></img>
            </div>
            <h1 className={styles.serviceListHeading}>10 Years Warranty</h1>
            <p className={styles.serviceListDetail}>
              All Merces products comes with guaranteed 10 Years of warranty,
              which ensures our customers peace of mind.{" "}
            </p>
          </div>
          <div className={styles.serviceList}>
            <div className={styles.serviceListImage}>
              <img
                src={Installation}
                className={styles.serviceListImage_Image}
                alt="Installation"
              ></img>
            </div>
            <h1 className={styles.serviceListHeading}>Easy Installation</h1>
            <p className={styles.serviceListDetail}>
              As a result of well Engineering, all Merces products are
              hasselfree and easy to install.{" "}
            </p>
          </div>
          <div className={styles.serviceList}>
            <div className={styles.serviceListImage}>
              <img
                src={Standard}
                className={styles.serviceListImage_Image}
                alt="Standard"
              ></img>
            </div>
            <h1 className={styles.serviceListHeading}>USA Standard Product</h1>
            <p className={styles.serviceListDetail}>
              All Merces products are USA Standard approved, which means there's
              no worry about the quality of any of our products.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className={styles.product}>
        <div className={styles.productHeading}>
          <h1 className={styles.productHeadingPrimary}>Products</h1>
          <h1 className={styles.productHeadingSecondary}>
            Explore the Wide Range of Quality Products
          </h1>
        </div>
        <div className={styles.productDetail}>
          <div className={styles.productDetailList}>
            <div className={styles.productDetailImage}>
              <Img
                className={styles.productDetailImage_Image}
                fluid={data.faucet.childImageSharp.fluid}
                alt="Faucets"
              />
            </div>
            <h1 className={styles.productDetailListHeading}>Faucets</h1>
          </div>
          <div className={styles.productDetailList}>
            <div className={styles.productDetailImage}>
              <Img
                className={styles.productDetailImage_Image}
                fluid={data.sanitary.childImageSharp.fluid}
                alt="Sanitaryware"
              />
            </div>
            <h1 className={styles.productDetailListHeading}>Sanitarywares</h1>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Home
