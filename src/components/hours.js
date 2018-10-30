import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Hours = (props) => (
  <StaticQuery
    query={graphql`
      query ImageHours {
        imageHair: file(relativePath: {eq: "images/home/hairdresser.jpg"}) {
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
        <div className="container-fluid standard-border">
          <div className="row mt-5" id='hours'>
            <div className="col-md-4 image-filter">
              <Img fluid={data.imageHair.childImageSharp.fluid}/>
            </div>
            <div className="col-md-6 table-responsive" >
              <h3 className="text-center header-style">Salon Hours</h3>
              <hr/>
              <table className="table table-bordered " >
                <thead className="thead-light">
                  <tr >
                    <th scope="col" className="text-center pl-3">Mon</th>
                    <th scope="col" className="text-center">Tue</th>
                    <th scope="col" className="text-center">Wed</th>
                    <th scope="col" className="text-center">Thu</th>
                    <th scope="col" className="text-center">Fri</th>
                    <th scope="col" className="text-center">Sat</th>
                    <th scope="col" className="text-center pr-3">Sun</th>
                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <td className="text-center table-column pl-3">10am</td>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10am</td>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10am</td>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column pr-3">10am</td>
                  </tr>
                  <tr >
                    <td className="text-center table-column pl-3">6pm</td>
                    <td className="text-center">6pm</td>
                    <td className="text-center table-column">6pm</td>
                    <td className="text-center">6pm</td>
                    <td className="text-center table-column">6pm</td>
                    <td className="text-center">6pm</td>
                    <td className="text-center table-column pr-3">6pm</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
          <div className="row mt-5" id="hours-responsive">
            <div className="col-md-6 table-responsive">
              <h3 className="text-center header-style">Salon Hours</h3>
              <hr/>
              <table className="table table-bordered table-sm" >

                <tbody >
                  <tr >
                    <th className="text-center table-column pl-3">Mon</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Tue</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Wed</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Thu</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Fri</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Sat</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
                  </tr>
                  <tr >
                    <th className="text-center table-column pl-3">Sun</th>
                    <td className="text-center">10am</td>
                    <td className="text-center table-column">10pm</td>
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
