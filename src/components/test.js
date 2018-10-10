import React from 'react'
import Img from 'gatsby-image'

const Test = (props) => (
  <div className="container-fluid bg-light standard-border intro-container">
    <div className="row  pt-5 pb-5 ">
      <div className="col-lg">

        <h3 className="text-center text-gray header-style">Welcome to our salon</h3>
        <Img fluid={props.imageHair.fluid}/>
        <div className="ml-5 pl-5 pr-5 mr-5">
          <hr/>
        </div>


      </div>

    </div>

  </div>
)

export default Test
