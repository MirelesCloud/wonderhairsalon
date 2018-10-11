import React from 'react'
//import Modal from 'react-responsive-modal'
import Img from 'gatsby-image'


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imageOpen': false,
      'selectedImage': this.props.images[0]
    }

    this.openImage = this.openImage.bind(this);
    this.closeImage = this.closeImage.bind(this);


  }

  openImage(evt, images) {
    this.setState({
      'imageOpen': true,
      'selectedImage': images
    })
  }

  closeImage(evt) {
    this.setState({
      'imageOpen': false
    })
  }



  render() {
    const { images } = this.props
    return (
      <span>
        <div className="container-fluid bg-light standard-border">
          <div className="row pt-5 pb-4">
            <div className="col-lg">
              <h3 className="text-gray text-center header-style">Salon Gallery</h3>
              <hr/>
              <p className="pl-5 pr-5">Every day, right in our hair salon we are waiting for you, dear customer. Our best stylists are here to give you your dream hairs.</p>
            </div>
          </div>
          <div className="row image-filter">
            {images.map((img) => (
              <div className="col-lg-3 col-md-4 col-xs-6" >
                <div  className="d-block mb-4 h-100 gallery">
                  <Img fluid={img.node.childImageSharp.fluid}/>
                </div>
              </div>
            ))}
          </div>
        </div>


      </span>

    );
  }
}

export default Gallery
/*
class ImageModal extends React.Component {
  render() {
    let image = this.props.images
    let modalClass = this.props.open ? 'modal fade' : 'close'
    return (
      <div className="modal fade"  >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Img fluid={image.node.fluid}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}*/
