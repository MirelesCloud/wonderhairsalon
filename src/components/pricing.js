import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Pricing = (props) => (
  <StaticQuery
    query={graphql`
      query ImagePricing {
        imageHair: file(relativePath: {eq: "images/home/redhairwoman.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="container-fluid standard-border">
          <div className="row mt-1">
              <div className="col-lg-6 col-md-6 col-xs-6">
                <h2 className="text-center mt-5">Cut & Finish - 20% off! </h2>
                <hr/>
                <p className="text-justify">Nulla at diam ornare, aliquam urna vel, commodo urna. Nam id risus a est luctus consectetur quis eget libero.Suspendisse potenti.</p>
                <p className="text-justify">uspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas mattis sit amet ipsum sit amet condimentum.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-6">
                <div className="col-md image-filter">
                  <Img fluid={data.imageHair.childImageSharp.fluid}/>
                </div>
              </div>
          </div>
        </div>
      </>
    )}
  />
)

export default Pricing
