import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButton2 from "react-bootstrap/ToggleButton";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonGroup2 from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import CartListItem from "../Components/CartList.jsx";
import CheckoutForm from "../Components/CheckoutForm.jsx";
import { CardElement } from "@stripe/react-stripe-js";
import '../assets/css/Checkout.css'
import axios from "axios";
import logo from '../assets/img/logo.png'
const Checkout = () => {
  const addTotalCart = (a,b,c)=>{
    console.log(Number(a) + Number(b) + Number(c))
    return Number(a) + Number(b) + Number(c)
  }
  const itemCostArr = [];
  const[orderTotal, setOrderTotal]=useState(getSum(itemCostArr))
  const [deliveryCharge, setDeliveryCharge] = useState(0);
const[tip , setSetTip] = useState(0)
  const [totalDeliveryOrder, setTotalDeliveryOrder] = useState(0)

function setTip (e) {
 let val = e.target.value;
 setSetTip(Number(val))
 console.log(val)
}




  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result;
  }


const[orderPersonData, setOrderPersonData] = useState({
  fName:null,
  lName:null,
  address:null,
  city:'pampa',
  state:null,
  zip:null,
  phone:null,
  email:null,
  pickupOrDelivery:'',
  orderNo:makeid(6)

})

const recordInputValue =(event)=>{
  const {name, value} = event.target;


  setOrderPersonData((p)=>{
    if (name === "fName"){
      return{
        fName:value,
  lName:p.lName,
  address:p.address,
  city:p.city ,
  state:p.state,
  zip:p.zip,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "lName"){
      return{
        fName:p.fName,
  lName:value,
  address:p.address,
  city:p.city ,
  state:p.state,
  zip:p.zip,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "address"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:value,
  city:p.city ,
  state:p.state,
  zip:p.zip,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "city"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:p.address,
  city:value ,
  state:p.state,
  zip:p.zip,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "state"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:p.address,
  city:p.city ,
  state:value,
  zip:p.zip,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "zip"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:p.address,
  city:p.city ,
  state:p.state,
  zip:value,
  phone:p.phone,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "phone"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:p.address,
  city:p.city ,
  state:p.state,
  zip:p.zip,
  phone:value,
  email: p.email,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } else  if (name === "email"){
      return{
        fName:p.fName,
  lName:p.lName,
  address:p.address,
  city:p.city ,
  state:p.state,
  zip:p.zip,
  phone:p.phone,
  email: value,
  pickupOrDelivery:p.pickupOrDelivery,
  orderNo:p.orderNo
      }
    } 
  })
console.log(orderPersonData)
  
}
    const [orderTotalNum, setOrderTotalNum] = useState();
    let orderTotalstr ;
    const CARD_OPTIONS = {
    
      iconStyle: "solid",
      style: {
        base: {
                backgroundColor:'white',
          iconColor: "#8e2807",
          color: "#8e2807",
          fontWeight: 500,
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "18px",
          fontSmoothing: "antialiased",
          ":-webkit-autofill": { color: "#fce883" },
          "::placeholder": { color: "black" }
        },
        invalid: {
          iconColor: "#ffc7ee",
          color: "#ffc7ee"
        }
      }
    }
  

const orderData= JSON.parse(localStorage.getItem('cart-data'))

let finalNumStr;
useEffect(()=>{
  orderData.forEach(e => {
      itemCostArr.push(Number(e.unitPrice))
      console.log(itemCostArr)
      setOrderTotal(getSum(itemCostArr))

  });

   let orderToNum = Number(totalDeliveryOrder) * 100
   setOrderTotalNum(orderToNum);
   setTotalDeliveryOrder(addTotalCart(orderTotal, deliveryCharge, tip)) 
  console.log(orderToNum)
  console.log(orderTotalNum)
})

function getSum(ary){
    return ary.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }

    let checkoutOjb = {
        pickupOrDelivery:'',
        address: '',
        phoneNumber:'',
        order: orderData,

    }
    const[pickUpOrDeliverySetting, setPickupOrDeliverySetting] = useState(checkoutOjb.pickupOrDelivery)
    
    const [radioValue, setRadioValue] = useState('1');
    const [radioValue2, setRadioValue2] = useState('1');
   const [showHide, setShowHide] = useState('none')
   const [paymentShowHide, setPaymentShowHide] = useState('none')
   const [pickShowHide, setPickShowHide] = useState('none')
    const radios = [
        { name: 'Delivery', value: 'Delivery' },
        { name: 'Pick-up', value: 'Pick-up' },
        
      ];

      const radio2 = [
        { name: '10%', value: '.10' },
        { name: '15%', value: '.15' },
        { name: '20%', value: '.20' },
        { name: 'None', value: '0' }
        
      ];

      

  return (
   
    <div className="checkout-body" style={{ height: '110vh'}}>
    <img src={logo} width="250" height="auto"/>
    <hr></hr>
    <div className="section-two">
    <p style={{fontSize:'20px'}} className="checkout-heading">How you would like to recieve your order?</p>
       
        <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {setRadioValue(e.currentTarget.value); checkoutOjb.pickupOrDelivery = e.currentTarget.value; console.log(checkoutOjb); 
            if(checkoutOjb.pickupOrDelivery === 'Delivery'){
              setDeliveryCharge(3.99);
                setShowHide('block')
                setPickShowHide('none')
                setPickupOrDeliverySetting(checkoutOjb.pickupOrDelivery)
                setPaymentShowHide('block')
                
                setTotalDeliveryOrder(addTotalCart(orderTotal, 0, tip))
                
            } else{setDeliveryCharge(0); setShowHide('none'); setPickShowHide('block')} setPickupOrDeliverySetting(checkoutOjb.pickupOrDelivery);setPaymentShowHide('block'); setSetTip(0.00);
            
            setTotalDeliveryOrder(addTotalCart(orderTotal, 2.99, tip))
             } }
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <p style={{fontSize:'18px', marginTop:'15px'}} className="checkout-heading">**NOTE: We only deliver within ten miles outside of our location if you are outside of that your order will be canceled and refunded promptly.**</p>

      </div>

      <hr></hr>
    <div style={{  padding:'40px'}} className="section">
     <div className="cart-section">
    <div >
    
          <p className="checkout-heading">ORDER DETAILS</p>
          <hr></hr>
          {orderData.map(a=>{
              return( <CartListItem  itemName={a.itemName} specialInstruction={a.specialInstruction} addOnSp={a.addOnSP} unitPrice={a.unitPrice}/>) })}
      </div>
     
     
      
      </div>
      

      <div>
      <div style={{display:paymentShowHide}}>
      <div className="checkout-form-body">
        <div className="checkout-wrapper">
            <div className="checkoucontainer">
              <div className="checkout-form">
                <h1>
               
                  <span>{pickUpOrDeliverySetting}</span> Details
                </h1>
                <div style={{display:showHide}}>
          <p><span style={{color:'#B51C27', fontWeight:'bold'}}>EST DELIVERY TIME:</span> 30-45 mins</p>
          </div>
          <div style={{display:pickShowHide}}>
          <p><span style={{color:'#B51C27', fontWeight:'bold'}}>EST PICK UP TIME:</span> 30-45 mins</p>
          </div>
                <div className="name">
                  <div>
                    <label for="f-name">First Name</label>
                    <input onChange={recordInputValue} type="text" name="fName"/>
                  </div>
                  <div>
                    <label for="l-name">Last Name</label>
                    <input onChange={recordInputValue} type="text" name="lName"/>
                  </div>
                </div>
                <div style={{display:showHide}}>
                <p className="checkout-heading">DELIVERY ADDRESS</p>
                <div className="street">
                  <label for="name">Street</label>
                  <input onChange={recordInputValue} type="text" name="address"/>
                </div>
                <div className="address-info">
                  <div>
                    <label for="city">City</label>
                    <input onChange={recordInputValue} type="text" name="city"/>
                  </div>
                  <div>
                    <label for="state">State</label>
                    <input onChange={recordInputValue} type="text" name="state"/>
                  </div>
                  <div>
                    <label for="zip">Zip</label>
                    <input onChange={recordInputValue} type="text" name="zip"/>
                  </div>
                </div>
                <textarea className="textarea" placeholder="Please Enter any special delivery instructions you might have."></textarea>

                </div>
                <div className="street">
                    <label for="phone">Phone Number</label>
                    <input onChange={recordInputValue} type="text" name="phone"/>
                  </div>
                  <div className="street">
                    <label for="email">Email Address</label>
                    <input onChange={recordInputValue} type="text" name="email"/>
                  </div>
                  <div className="total-container">
      <div>
      </div>
     
      <p style={{marginTop:'5px'}} className="item-total">Subtotal: ${orderTotal.toFixed(2)}</p>
      <hr></hr>
      <div style={{display:showHide}}>
      <div className="tip-box">
      <p style={{marginTop:'5px'}} className="item-total">Tip for Driver: &nbsp; &nbsp; &nbsp; </p>
      <ButtonGroup >
        {radio2.map((radio, idx) => (
          <ToggleButton
          style={{height:'30px', padding:'1px 8px'}}
            key={idx}
            id={`radio2-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-danger'}
            name="radio-2"
            value={radio.value}
            checked={radioValue2 === radio.value}
            onChange={(e) => {setRadioValue2(e.currentTarget.value); }}
            onClick={()=>{
              
              let tip = Number(radio.value)

             
              setSetTip(tip * orderTotal)
            
            console.log(tip)}
            }
            >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      <p style={{marginTop:'10px'}} className="item-total">Total Tip: ${tip.toFixed(2)}</p>
      <hr></hr>
     
      </div>
      
      </div>
                <h1>
                 Payment Information
                </h1>
                <CheckoutForm 
                showHide={showHide}
                city={orderPersonData.city.toLowerCase()} 
                address={orderPersonData.address}
                price={Math.round(orderTotalNum)} 
                ot={orderTotalstr} 
                options={CARD_OPTIONS}
                emailName={orderPersonData.fName}
                emailAddress={orderPersonData.email}
                emailAddressAddress={`${orderPersonData.address} ${orderPersonData.city}, ${orderPersonData.state} ${orderPersonData.zip}`}
                phone={orderPersonData.phone}
                emailConfirmation={orderPersonData.orderNo}
                emailOrderData={JSON.stringify(orderData)}
                emailPickuporDeliveryTime={'30-45 mins'}
                pickupOrDelivery={pickUpOrDeliverySetting}
                emailTotal={totalDeliveryOrder.toFixed(2)}
                ckoutTotal={totalDeliveryOrder.toFixed(2)}
                inputObject={orderPersonData}
                deliveryCharge={deliveryCharge.toFixed(2)}
                deliveryAddress={`${orderPersonData.address} ${orderPersonData.city}, ${orderPersonData.state} ${orderPersonData.zip}`}
                />

         </div>
            </div>
            </div>
          </div>
        </div>
      
         

       
      
      </div>

     
      

      <div>
     
  
      </div>

      </div>
  </div>
 
  );
};

export default Checkout;