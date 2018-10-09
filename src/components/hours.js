import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Hours = (props) => (
  <StaticQuery
    query={graphql`
      query ImageHours {
        imageHair: file(relativePath: {eq: "images/hairdresser.jpg"}) {
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
            <div className="col-md image-filter">
              <Img fluid={data.imageHair.childImageSharp.fluid}/>
            </div>
            <div className="col-md pr-5">
              <h4 className="text-center header-style">Salon Hours</h4>
              <hr/>
              <table className="table table-sm text-center">
                <tbody>
                  <tr className="table-secondary">
                    <th scope="row col" className="pl-3">Monday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr >
                    <th scope="row col" className="pl-3">Tuesday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row col" className="pl-3">Wednesday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr >
                    <th scope="row col" className="pl-3">Thursday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row col" className="pl-3">Friday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr >
                    <th scope="row col" className="pl-3">Saturday</th>
                    <td>10am - 6pm</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row col" className="pl-3">Sunday</th>
                    <td>10am - 6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </>
    )}
  />
)

export default Hours
