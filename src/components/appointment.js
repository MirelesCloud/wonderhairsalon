import React from 'react'

const Appointment = () => (
  <section className="container-fluid standard-border bg-light ">
    <div className="row pt-4" id="appointment" >
      <div className="col-sm " >
        <h4 className="text-center header-appointment">Make an appointment</h4>
          <form className="form-inline justify-content-center" >
            <button className="mb-2 mr-sm-3 input-helper"/>
            <input className="form-control-sm mb-2 mr-sm-2" placeholder="Appointment Date"/>
            <button className="mb-2 mr-sm-3 input-helper"/>
            <input type="text" className="form-control-sm mb-2 mr-sm-2" id="pwd2" placeholder="Approx. Time"/>
            <input type="button" value="Next Step" className="btn btn-sm button-blue mb-2"/>
          </form>
      </div>
    </div>
    <div className="row pt-4 " id="appointment-mobile">
      <div className="col-sm " >
        <h4 className="text-center header-appointment">Make an appointment</h4>
          <form className="form mx-auto" style={{width:"250px"}}>
              <div className="form-group">
                <button className="mb-2 mr-sm-4 input-helper"/>
                <input className="form-control-sm mb-2 mr-sm-2" placeholder="Appointment Date"/>
              </div>
              <div className="form-group">
                <button className="mb-2 mr-sm-4 input-helper"/>
                <input type="text" className="form-control-sm mb-2 mr-sm-2" id="pwd2" placeholder="Approx. Time"/>
              </div>
              <input type="button" value="Next Step" className="btn btn-sm button-blue mb-2"/>
          </form>
      </div>
    </div>
  </section>
)

export default Appointment
