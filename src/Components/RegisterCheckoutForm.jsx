import React ,{useState, useEffect} from 'react';
import { CardElement, useStripe, useElements, PaymentElement, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import axios from "axios";
import '../assets/css/Checkout.css'
import {useNavigate} from 'react-router-dom';




const RegisterCheckoutForm = (props,{ price, onSuccessfulCheckout }) => {
    const [error, setError] = useState('')
    const [buttonText, setButtonText] = useState('PAY')
    const [spinner, showSpinner] = useState('none')
    const navigate = useNavigate();
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [success, setSuccess ] = useState(false)
    const [enableDis, setEnableDis ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()



    
    const sendEmailPickup = async () => {
        

        const response = await axios.post("https://mama-lisas-api.herokuapp.com/send-email-pickup",{
      
            email: props.emailAddress,
           
            confirmation: props.emailConfirmation,
            order: props.emailOrderData,
            pickupOrDelivery: props.pickupOrDeliveryEmail,
            pickuporDeliveryTime:props.emailPickuporDeliveryTime,
            total: props.emailTotal,
      
      
        });
        console.log(response.data)
        
       
        };


        const sendEmailDelivery = async () => {

            const response = await axios.post("https://mama-lisas-api.herokuapp.com/send-email-delivery",{
              fname: props.emailName,
              lname: props.emailLName,
              email: props.emailAddress,
              phone:props.emailPhoneNumber,
              address:props.emailAddressAddress,
              confirmation: props.emailConfirmation,
              order: props.emailOrderData,
              pickupOrDelivery: props.pickupOrDeliveryEmail,
              pickuporDeliveryTime:props.emailPickuporDeliveryTime,
              total: props.emailTotal,
          
          
            });
            console.log(response.data)
            
           
            };

       

        const orderData = {
            name: props.emailName,
          email: props.emailAddress,
          confirmation: props.emailConfirmation,
          order: props.emailOrderData,
          pickupOrDelivery: props.pickupOrDelivery,
          pickuporDeliveryTime:props.emailPickuporDeliveryTime,
          total: props.emailTotal,
          deliveryAddress:props.deliveryAddress
        }
   
    const handleSubmit = async (e) => {
      
            e.preventDefault()
         
        
        showSpinner('inline-block')
        setButtonText("PROCESSING")
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if(!error) {
            
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:3001/payment", {
                    amount: props.price,
                    id,
                    confNumber: 'regorder'
                })
    
                if(response.data.success) {
                    console.log(orderData.pickupOrDelivery)
                  
                                            
                    console.log("Successful payment")
                    sendEmailPickup()
                    localStorage.setItem('cart-person', JSON.stringify(orderData))
                    navigate('/success')
                    
                    
                 
                   
                }
    
            } catch (error) {
                console.log("Error", error)
                setEnableDis(false )
                showSpinner('none')
                setButtonText("PAY")
                setError(error.message)
            }
        } else {
            setEnableDis(false )
            console.log(error.message)
            setError(error.message)
            showSpinner('none')
        setButtonText("PAY")
        }
  

    }

  return (
    <>
    {!success ? 
    <form onSubmit={handleSubmit}>
        <fieldset >
            <div className="FormRow">
                <CardElement onChange={props.onchange} id={props.ceId} value={props.val} onFocus={props.onfocus}  onBlur={props.onblur} options={props.options}/>
            </div>
        </fieldset>
        <p style={{fontSize:'small'}}>Powered by <b>STRIPE</b></p>

        <p style={{marginTop:'5px', textAlign:'end'}} className="item-total">Order Total: $<span>{props.ckoutTotal}</span></p>
        <div className="btns">
       
        <button disabled={enableDis} > <div style={{display: spinner}} id='loaderInline'></div><b>{buttonText}</b></button>
        <div>
      <p>{error}</p>
   </div> 
        </div>
     
    </form>
    :
   <div>
     <p style={{fontWeight:'bold', color:'red'}}>{error}</p> 
   </div> 
    }
        
    </>
  );
};
export default RegisterCheckoutForm;