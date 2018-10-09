import React from 'react'

const Appointment = () => (
  <section className="container-fluid standard-border">
    <div className="row">
      <div className="col-lg p-4">
        <h4 className="text-center header-appointment">Make an appointment</h4>

          <div className="appointment-form">
            <form method="get">
              <div className="input">
                <div className="input-helper"><i className="icon-calendar"></i></div>
                <input type="text" placeholder="Appointment date" className="appointment-datepicker" readOnly />
                <div className="clear">
                </div>
              </div>
              <div className="input approximate-time-input">
                <div className="input-helper"><i className="icon-time"></i></div>
                <input type="text" placeholder="Approximate time" className="approximate-time" readOnly />
                <div className="clear">
                </div>
                <div className="approximate-time-box animated fadeInDown">
                  <div className="approximate-time-box-arrow"></div>
                  <div className="element element-first">
                    <i className="icon-chevron-up element-up hours hours-up time-change-action-event"></i>
                    <span className="element-value time-selector-hours" data-value="8">8</span>
                    <i className="icon-chevron-down element-down hours hours-down time-change-action-event"></i>
                  </div>
                  <div className="element">
                    <i className="icon-chevron-up element-up mins mins-up time-change-action-event"></i>
                    <span className="element-value time-selector-mins" data-value="0">00</span>
                    <i className="icon-chevron-down element-down mins mins-down time-change-action-event"></i>
                  </div>
                  <div className="element">
                    <i className="icon-chevron-up element-up time-change-action-event time-type"></i>
                    <span className="element-value time-selector-type" data-value="am">am</span>
                    <i className="icon-chevron-down element-down time-change-action-event time-type"></i>
                  </div>
                </div>
              </div>
              <input type="button" value="Next step" className="button button-brown open-appointment-box-with-data" />
            </form>
          </div>


      </div>
    </div>
  </section>
)

export default Appointment