import React from 'react'

const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Appointment</a>
          <a className="nav-item nav-link" href="#">Services</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          <a className="nav-item nav-link" href="#">Gallery</a>
          <a className="nav-item nav-link" href="#">Hours</a>
          <a className="nav-item nav-link" href="#">Contact</a>
        </div>
      </div>
    </nav>
  </div>

)

export default Navbar
