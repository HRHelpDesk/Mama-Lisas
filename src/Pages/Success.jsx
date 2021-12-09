import React, { useEffect } from "react";
import Map from '../Components/Map';
import logo from '../assets/img/logo.png'

const Success = ()=>{
    const location = {
        address: "1701 Coffee St. Pampa, TX 79065",
        lat: 35.554470,
        lng: -100.971110,
      }

const emailAdress= "Masonmerrell@hotmail.com"
 const confirmationNo = "WCD5X7";
 const pickupTime = "35-40 mins"
    useEffect(()=>{

    })


    return(<div>
    <div style={{display:'flex', justifyContent:'center', marginTop:'25px'}}>
    <div style={{display:'block', textAlign:"center"}}>
        <img src={logo} width="400" height="auto"/>
        <h3 style={{marginTop:'15px'}}>Your order has been placed!</h3>
        <p style={{fontSize:'18px'}}>Confirmation No:<b> {confirmationNo}</b></p>
        <p>A confirmation of your order has been sent to: <b>{emailAdress}</b></p>
        <p>Your order will be ready in <b>{pickupTime}</b></p>
        <p>When you arrive please come to the window to pick up your order!</p>
        
        <div >
        <p style={{fontSize:'22px'}}><b>Pickup Location:</b></p>
        <Map location={location} zoomLevel={17} />
        </div>
        </div>
        </div>

        
    </div>)
}

export default Success;