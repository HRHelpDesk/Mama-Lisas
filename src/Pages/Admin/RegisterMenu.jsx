import React, { useEffect, useState } from "react";
import axios from 'axios'
import RegisterCheckoutForm from "../../Components/RegisterCheckoutForm";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { map, set } from "lodash";
import CardSwipe from 'react-card-swipe'
import { Modal, Button } from "react-bootstrap";

const apiUrl = "https://mama-lisas-api.herokuapp.com/"
const RegisterMenu = ()=>{

    const[entData,setEntData] = useState()
    const[drData,setDrData] = useState()
    const[dsData,setDsData] = useState()
    const[lgShow,setLgShow] = useState(false)
    const[checkoutShow,setCheckoutShow] = useState(false)
    const[checkoutData,setCheckoutData] = useState()
const[totalCost, setTotalCost] = useState(0)
    const[itemTitle,setItemTitle] = useState()
    const[itemData,setItemData] = useState()
    const[addOnData,setAddOn] = useState()
   const [cartRender, setCartRender] = useState()
   const [cartTotal, setCartTotal] = useState(0)
   const [cardNo, setCardNo] =useState([])
   const [isCredit, setIsCredit] =useState('none')
   const [isSwipeReady, setIsSwipeReady] =useState(true)
   const [isCardLoaded, setIsCardLoaded] =useState(false)
   let addArr =[];
 let cartTotalArr = [];
    let ME = [];
    let MDS = [];
    let MDR = [];
    let allArr = [];
    let cartArr = [];
    let priceArr =[];
    const [cashReturnAmmount, setCashReturnAmmount] = useState()
    const [cartButton, setCartButton] = useState('');
    const [card, setCard] = useState('')



  

      const copy = (a)=>{
        var text = a;
      
navigator.clipboard.writeText(text).then(function() {

  console.log('Async: Copying to clipboard was successful!');

}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
        
      }
    useEffect(() => {
        CardSwipe.init({
          success: (data) => {setCardNo(data); copy(data.account); console.log(data); setIsCardLoaded(true)},
          debug: false
        })
      }, [])
    
    const CARD_OPTIONS = {
    
        iconStyle: "solid",
        hidePostalCode: true,
       
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
    const addToCart = (a, b, c, d)=>{
        let obj = {
            item:a.itemName,
            specialInstructions: d,
            price:b,
            adds:c
        }
      
       cartArr.push(obj)
       console.log(a)
      
        cartTotalArr.push(obj.price)

    console.log(cartTotalArr)
  setCartTotal(cartTotalArr.reduce(getSum, 0))

       console.log(cartArr)

       setLgShow(false)


       setCartRender(cartArr.map((i)=>{
           return(<div ><p ><b>{i.item}</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
           <p style={{fontSize:'14px'}}><b>Add Ons:</b></p>
          {i.adds.map(i=>{
           return(<p style={{fontSize:'13px'}}>{i}</p>)
          })}
          <p style={{fontSize:'14px'}}><b>Special Instructions:</b></p>
          <p style={{fontSize:'13px'}}>{i.specialInstructions}</p>
           <p style={{textAlign:'end'}}><b>${i.price.toFixed(2)}</b></p></div>)
       }))
    }

    function getSum(accumulator, a) {
        return accumulator + a;
      }

      const updateCashReturn = (e)=>{
    let val = e.target.value
    setCashReturnAmmount(Number(val) - cartTotal)
      }

    const openAddToCart = (a)=>{
        
       
      
   

         const result = allArr.filter(i => i._id === a);
        
        console.log(result)
        setItemTitle(result[0].itemName)
       let spc; 
        priceArr = [Number(result[0].unitPrice)]
        console.log(priceArr)
        setTotalCost(Number(result[0].unitPrice))
        setItemData(()=>{return(<div><p>{result[0].description}</p>
    
        <textarea 
         id='specialInst'
         onChange={(e)=>{
           let l =  e.target.value;

          spc = l
         }}
        style={{height:'150px', width:'100%'}}></textarea>
       
      
        </div>)})
     let add = JSON.parse(result[0].addOn)
    
     console.log(add)
        setAddOn(()=>{
            
         
               
            return (
                add.map((i)=>{     return           <div><p style={{fontSize:'14px'}}><span><b>{i.addOnItem} </b><input value={i.addOnPrice} onChange={(e)=>{
                let t = e.target.checked
                let v = e.target.value
                if(t){
                    console.log(priceArr)
                    priceArr.push(Number(v))
                    addArr.push(i.addOnItem)
                    setTotalCost(priceArr.reduce(getSum, 0))

                } else {
                    const index = priceArr.indexOf(v);
                    const indexadd = addArr.indexOf(i.addOnItem)
                  priceArr.splice(index,1)
                  addArr.splice(indexadd, 1)
                  console.log(addArr)
                  setTotalCost(priceArr.reduce(getSum, 0))
                }
               
                }} type="checkbox"/></span></p></div>
            })
            )
            

           
              
        })

        setCartButton(()=>{
            return(<Button onClick={()=>addToCart(result[0],  priceArr.reduce(getSum, 0), addArr, spc)}>Add to cart</Button>)
        })
     setLgShow(true)
    }
   const loadMenu = async(a, b) =>{
        const response = await axios.get(apiUrl+a)

        console.log(response.data)
if( a == 'menu-entrees'){
        setEntData(
            response.data.map((i)=>{
                return <button onClick={()=>{openAddToCart(i._id)}} style={{margin:'10px', padding:'10px'}}>{i.itemName}</button>
            })
        )

       
}

if( a == 'menu-drinks'){
    setDrData(
        response.data.map((i)=>{
            return <button onClick={()=>{openAddToCart(i._id)}} style={{margin:'10px', padding:'10px'}}>{i.itemName}</button>
        })
    )
   
}

if( a == 'menu-desserts'){
    setDsData(
        response.data.map((i)=>{
            return <button onClick={()=>{openAddToCart(i._id)}} style={{margin:'10px', padding:'10px'}}>{i.itemName}</button>
        })
    )
    
}

b = response.data     
b.forEach(i=>{
    allArr.push(i)
})


console.log(allArr)
   }

useEffect(()=>{
   
loadMenu('menu-entrees',ME)
.then(()=>{
loadMenu('menu-drinks',MDR)})
.then(()=>{
loadMenu('menu-desserts',MDS)})
.then(()=>{
    ME.forEach(i=>{
        allArr.push(i)
    })

    MDS.forEach(i=>{
        allArr.push(i)
    })

    MDR.forEach(i=>{
        allArr.push(i)
    })

    console.log(allArr)

})
},[])

    return (
<div>
        <p style={{fontSize:'32px', textAlign:'end', paddingRight:'15px',fontWeight:'bold', color:'gray'}}>MENU FOR REGISTER</p>

    <div style={{display:'flex'}}>
        <div style={{padding:'60px', width:'65%' ,display:'inline-block'}}>
       <p><b>Entree's:</b></p>

       {entData}

       <p><b>Drinks:</b></p>

       {drData}


       <p><b>Desserts:</b></p>

       {dsData}
        </div>

        <div style={{padding:'20px', width:'35%',display:'block', borderLeft:'2px solid black'}}>
          <p><b>CART</b></p>
          <div style={{height: '65vh', overflow:'scroll'}}>
          {cartRender}
</div>
<div>
<p style={{textAlign:'end'}}><b>TOTAL:${cartTotal.toFixed(2)}</b></p>
    <Button onClick={()=>{
        setCheckoutData(()=>{
            return(
                <div>
           
         
           

                </div>
            )
        })
        setIsCredit('block')
        
        setCheckoutShow(true)}} style={{width:'100%'}}>Checkout Credit</Button>
    <p></p>
    <Button onClick={()=>{
        setCheckoutData(()=>{
            return(
                <div>
                <p>Enter Cash Ammount:</p>
                    <input onChange={updateCashReturn} type='text'/>

                    <p><b>{cashReturnAmmount}</b></p>

                    <p><b>Order Total:${cartTotal.toFixed(2)}</b></p>
                    <p></p>
                </div>
            )
        })
        
        setCheckoutShow(true)}}  style={{width:'100%'}}>Checkout Cash</Button>
</div>

        </div>
        </div>
       
<Modal
        size="lg"
        show={lgShow}
        onHide={() => {setLgShow(false); priceArr.length = 0; addArr.length = 0; console.log(priceArr); }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
        
         {itemTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       {itemData}   
       {addOnData}    
       <div >
       {cartButton}
        <p style={{float:'right'}}><b>${totalCost.toFixed(2)}</b></p>
        </div>
        </Modal.Body>
      </Modal>



      <Modal
        size="lg"
        show={checkoutShow}
        onHide={() => {setCheckoutShow(false); priceArr.length = 0; addArr.length = 0; console.log(priceArr); setIsCredit('none'); setIsCardLoaded('none'); console.log(Math.round(cartTotal)* 100)}}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
        Checkout 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {checkoutData}
       {cashReturnAmmount}
      

     <div style={{display:isCredit}}>
       <RegisterCheckoutForm 
               val={{postalCode: '45654'}}
               price={Math.round(cartTotal)* 100}
               ckoutTotal={cartTotal.toFixed(2)} 
                onchange={()=>{copy(cardNo.expMonth+ cardNo.expYear);
                  
                 }}
          onfocus={()=>{
            setIsSwipeReady(false)
          }}

          onblur={()=>{
            setIsSwipeReady(true)
          }}

                ot={0} 
                options={CARD_OPTIONS}
               
                />
                 <p style={{color: isCardLoaded? 'green': 'red'}}>{isCardLoaded? 'Paste into Card Box': ''}</p>
                <p style={{color: isSwipeReady? 'green': 'red'}}>{isSwipeReady? 'Ready to Swipe': 'DO NOT SWIPE'}</p>
     
       </div>

        </Modal.Body>
      </Modal>
        </div>

        
    )

}

export default RegisterMenu;