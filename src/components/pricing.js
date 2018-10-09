import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Pricing = (props) => (
  <StaticQuery
    query={graphql`
      query ImagePricing {
        imageHair: file(relativePath: {eq: "images/redhairwoman.jpg"}) {
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
          <div className="row p-5 mt-5">

            <div className="col-md">
              <h4 className="text-center header-style">Pricing</h4>
              <hr/>
              <table className="table table-sm">
                <tbody >
                  <tr className="table-secondary">
                    <th scope="row" className="text-md-center">Blow Dry</th>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-md-center">Haircut, Shampoo & Basic Style</th>
                    <td>$150</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row" className="text-md-center">Haircut, Shampoo & Full Style</th>
                    <td>$180</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-md-center">Cut & Color</th>
                    <td>$150</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row" className="text-md-center">Partial Highlights and Cuts</th>
                    <td>$180</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-md-center">Full Highlights & Cut</th>
                    <td>$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md image-filter">
              <Img fluid={data.imageHair.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

export default Pricing
