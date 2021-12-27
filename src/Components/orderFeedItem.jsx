import React from "react";


const OrderFeedItem = (props) =>{


    return(
        <div>
         <p><b>Time and Date:</b> {props.date}</p>
         <p><b>Pick-up or Delivery:</b> {props.pickupDelivery}</p>
         <p><b>Address: </b>{props.address}</p>
        <p><b>Order ID:</b> {props.id}</p>
        <p><b>Name:</b> {props.name}</p>
        <p><b>Order Total:</b> ${props.total}</p>
        <p><b>Phone Number:</b> {props.phone}</p>
       
      
        </div>
    )
}

export default OrderFeedItem;