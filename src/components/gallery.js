import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Gallery = (props) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        imageHair1: file(relativePath: {eq: "images/home/hair10.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair2: file(relativePath: {eq: "images/hair11.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair3: file(relativePath: {eq: "images/hair12.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair4: file(relativePath: {eq: "images/hair13.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair5: file(relativePath: {eq: "images/hair14.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair6: file(relativePath: {eq: "images/hair16.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair7: file(relativePath: {eq: "images/hair10.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageHair8: file(relativePath: {eq: "images/hair18.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="container-fluid bg-light standard-border">
          <div className="row pt-5 pb-4">
            <div className="col-lg">
              <h3 className="text-gray text-center header-style">Salon Gallery</h3>
              <hr/>
              <p className="pl-5 pr-5">Every day, right in our hair salon we are waiting for you, dear customer. Our best stylists are here to give you your dream hairs.</p>
            </div>
          </div>
          <div className="row image-filter">
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair1.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair2.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair3.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair4.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair5.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair6.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair7.childImageSharp.fluid}/>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
              <div  className="d-block mb-4 h-100">
                <Img fluid={data.imageHair8.childImageSharp.fluid}/>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

export default Gallery
