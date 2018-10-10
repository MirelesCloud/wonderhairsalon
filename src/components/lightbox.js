import React from 'react'
import Img from 'gatsby-image'


class Lightbox extends React.Component {
  state = {
    showLightBox: false,
    selectedImage: 0,
  }


  render() {
    const { images } = this.props


    return (
      <div className="container-fluid bg-light standard-border">
        <div className="row">
          {images.map((img, idx) => (
            <div className="col-lg-3 col-md-4 col-xs-6" key={img.node.fluid.src}>
              <div  className="d-block mb-4 h-100 gallery">
                <Img fluid={img.node.fluid}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Lightbox
