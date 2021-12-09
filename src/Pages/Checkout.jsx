import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import CartListItem from "../Components/CartList.jsx";
import CheckoutForm from "../Components/CheckoutForm.jsx";
import { CardElement } from "@stripe/react-stripe-js";
import '../assets/css/Checkout.css'
import axios from "axios";
import logo from '../assets/img/logo.png'
const Checkout = () => {




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
  fName:'',
  lName:'',
  address:'',
  city:'pampa',
  state:'',
  zip:'',
  phone:'',
  email:'',
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
const itemCostArr = [];
let finalNumStr;
useEffect(()=>{
  orderData.forEach(e => {
      itemCostArr.push(Number(e.unitPrice))
      console.log(itemCostArr)
      setOrderTotal(getSum(itemCostArr))

  });
if (orderTotal % 1 != 0){
   orderTotalstr = String(orderTotal) + '0';
} else{
  orderTotalstr = String(orderTotal) + '00';
}
    finalNumStr = orderTotalstr.replace('.','');
   let orderToNum = Number(finalNumStr)
   setOrderTotalNum(orderToNum);

  console.log(orderToNum)
  console.log(orderTotalNum)
})

function getSum(ary){
    return ary.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }

    const[orderTotal, setOrderTotal]=useState(getSum(itemCostArr))
    let checkoutOjb = {
        pickupOrDelivery:'',
        address: '',
        phoneNumber:'',
        order: orderData,

    }
    const[pickUpOrDeliverySetting, setPickupOrDeliverySetting] = useState(checkoutOjb.pickupOrDelivery)
    
    const [radioValue, setRadioValue] = useState('1');
   const [showHide, setShowHide] = useState('none')
   const [paymentShowHide, setPaymentShowHide] = useState('none')
   const [pickShowHide, setPickShowHide] = useState('none')
    const radios = [
        { name: 'Delivery', value: 'Delivery' },
        { name: 'Pick-up', value: 'Pick-up' },
        
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
            variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {setRadioValue(e.currentTarget.value); checkoutOjb.pickupOrDelivery = e.currentTarget.value; console.log(checkoutOjb); if(checkoutOjb.pickupOrDelivery === 'Delivery'){
                setShowHide('block')
                setPickShowHide('none')
                setPickupOrDeliverySetting(checkoutOjb.pickupOrDelivery)
                setPaymentShowHide('block')
            } else{setShowHide('none'); setPickShowHide('block')} setPickupOrDeliverySetting(checkoutOjb.pickupOrDelivery);setPaymentShowHide('block') } }
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
  
      </div>

      <hr></hr>
    <div style={{  padding:'40px'}} className="section">
     <div className="cart-section">
    <div >
    
          <p className="checkout-heading">ORDER DETAILS</p>
          <hr></hr>
          {orderData.map(a=>{
              return( <CartListItem  itemName={a.itemName} specialInstruction={a.specialInstruction} unitPrice={a.unitPrice}/>) })}
      </div>
      <div className="total-container">
      
      <p className="item-total">Order Total: $<span>{orderTotal.toFixed(2)}</span></p>
      <p className="item-total-tax">(Tax included in price.)</p>
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
                <h1>
                 Payment Information
                </h1>
                <CheckoutForm 
                city={orderPersonData.city.toLowerCase()} 
                price={orderTotalNum} 
                ot={orderTotalstr} 
                options={CARD_OPTIONS}
                emailName={orderPersonData.fName}
                emailAddress={orderPersonData.email}
                emailConfirmation={orderPersonData.orderNo}
                emailOrderData={JSON.stringify(orderData)}
                emailPickuporDeliveryTime={'30-45 mins'}
                emailTotal={orderTotal.toFixed(2)}
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