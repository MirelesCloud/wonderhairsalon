import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const StoreLocation = withScriptjs(withGoogleMap(() => {
  return (
      <GoogleMap
        defaultZoom={15}
        center={ { lat:  33.838063, lng: -118.361041 } }
      >
        <Marker position={ { lat:  33.838063, lng: -118.361041 } }/>
      </GoogleMap>
    );
  }
))



class StoreMap extends React.Component {
  render() {
    return (
    <div className="container-fluid standard-border">
      <div className="row m-5">
        <div className="col-md">
          <div className="map-box">
            <div className="map-box-inside">
              <div className="gm-style">
                <div className="google-map">
                  <StoreLocation
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhq6DDmH0nylqeC3vifVoSyWrUmRFj_7U&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


/*
const Contact = () => (
  <div className="container-fluid standard-border">
    <div className="row p-5">
      <div className="col-md">
        <div className="map-box">
          <div className="map-box-inside">
            <div className="gm-style">
              <div className="google-map">

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
)
*/
export default StoreMap
