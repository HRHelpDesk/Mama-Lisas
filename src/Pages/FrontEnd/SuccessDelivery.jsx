import React, { useEffect, useState } from "react";
import Map from '../../Components/Map';
import logo from '../../assets/img/logo.png'

const SuccessDelivery = ()=>{
    const location = {
        address: "1701 Coffee St. Pampa, TX 79065",
        lat: 35.554470,
        lng: -100.971110,
      }
      const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart-person')))
      const emailAdress= cartData.email
      const confirmationNo = cartData.confirmation;
      const deliveryTime = cartData.pickuporDeliveryTime;
      const deliveryAddress = cartData.deliveryAddress
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.removeItem('cart-person')
            localStorage.setItem('cart-data', '[]')
        },1000)
    })


    return(<div>
    <div style={{display:'flex', justifyContent:'center', marginTop:'25px'}}>
    <div style={{display:'block', textAlign:"center"}}>
        <img src={logo} width="400" height="auto"/>
        <h3 style={{marginTop:'15px'}}>Your order has been placed!</h3>
        <p style={{fontSize:'18px'}}>Confirmation No:<b> {confirmationNo}</b></p>
        <p>A confirmation of your order has been sent to: <b>{emailAdress}</b></p>
        <p>Your order will be ready in <b>{deliveryTime}</b></p>
        <p>This order will be delivered to:</p>
        <p><b>{deliveryAddress}</b></p>
       <p> If you have any questions you can call us at: 888-888-8888</p>
        <div >
       
        </div>
        </div>
        </div>

        
    </div>)
}

export default SuccessDelivery;