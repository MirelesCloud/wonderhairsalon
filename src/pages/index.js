import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/appointment.css'
import '../css/contact.css'
import { graphql } from 'gatsby'

//import Test from "../components/test"
import Layout from "../components/layout"

import Services from '../components/services'
import Intro from '../components/intro'
import Hours from '../components/hours'
import Pricing from '../components/pricing'
import Appointment from '../components/appointment'
import Contact from '../components/contact'
import Gallery from '../components/gallery'

const TemplateWrapper = ({data}) => (
  <div className="">
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />

    {/*<Test imageHair={data.imageHair.childImageSharp}/>*/}
    <Layout/>
    <div className="main-container mb-5">
      <React.Fragment>
        <Intro/>
        <Appointment/>
        <Services/>
        <Pricing/>
        <Gallery images={data.imageGallery.edges}/>
        <Hours/>
        <Contact/>

      </React.Fragment>
    </div>

  </div>
)


export default TemplateWrapper

export const pageQuery = graphql`
  query testQuery {
    imageHair: file(relativePath: {eq: "images/hair9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    imageGallery: allFile(filter: {absolutePath: {regex: "\/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
