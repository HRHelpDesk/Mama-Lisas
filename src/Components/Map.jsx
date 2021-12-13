import React from "react";
import GoogleMapReact from 'google-map-react'
import logo from '../assets/img/logo.png'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../assets/css/Map.css'
import { AppleMaps } from 'react-apple-mapkitjs'
const Map = ({ location, zoomLevel })=>{

    return(
        <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBAvyNeoHcnLioFEED0CglEZv8uBfgPrLA' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    )
}

const LocationPin = ({ text }) => (
    <div style={{width:'250px'}} className="pin">
      <img width="150px" src={logo}/>
      <p style={{color:'#B51C27'}} className="pin-text"><b>{text}</b></p>
    </div>
  )

export default Map;