import React, { useEffect, useState } from "react";
import CartListItem from "../../Components/CartList";
import OrderFeedItem from "../../Components/orderFeedItem";
import ding from '../../assets/sound/ding.mp3'
import axios from "axios";
const Dashboard = ()=>{
    const[loading, setLoading] = useState(true)
    const[orderArrLength, setOrderArrLength] = useState(0)
let orderFeed = []
let oldArr;
const completeOrder = (a,e)=>{
    alert(`${a} ${e}`)
}
let sound = new Audio(ding);
const [updateFeed, setUpdateFeed] = useState()
const getFeed = async ()=>{
    const response =  await axios.get('https://mama-lisas-api.herokuapp.com/get-order-feed')
    console.log(response)

    orderFeed = response.data
    console.log(orderFeed)
   setUpdateFeed(orderFeed.map(i=>{
       let orderdata = JSON.parse(i.orderItems)
console.log(orderdata)
    return(<div style={{border: "2px solid black", margin:'5px', padding:'5px'}}><OrderFeedItem
        date={i.time}
        id={i.id}
        total={i.total}
        name={i.personsName}
        phone={i.phoneNumber}
        address={i.deliveryAddress}
        pickupDelivery={i.pickUpOrDelivery}
    /><p><b>ORDER:</b></p>
    {orderdata.map(e=>{
        return(<div style={{}}>
        <p style={{fontWeight:'bold'}}>{e.itemName}</p>
        <p style={{fontSize:'14px'}}>{e.specialInstruction}</p>
        <hr></hr>
        </div>)
    })}
<button onClick={()=>{completeOrder(i.id,i.emailAddress)}}>Complete Order</button>
    
    <hr></hr>
    </div>)


}))
if(orderArrLength < orderFeed.length){
    setOrderArrLength(orderFeed.length)
    console.log(orderArrLength)
    playSound()
}
}
useEffect(()=>{
    
    getFeed().then(setLoading(false)
    )
})

useEffect(()=>{
    setTimeout(()=>{
        setOrderArrLength(orderFeed.length)

    },3000)

   console.log(orderArrLength)
},[])

    const playSound = ()=>{
        
sound.play();
    }
const ORDERLIST = [{
    datePlaced: '12/16/2021',
    timePlace : '1:07pm',
    orderNo: '123jkx',
    personName: 'Mason Merrell',
    phoneNumber:'806-680-2597',
    order:JSON.parse(localStorage.getItem('cart-data')),
},
{
    datePlaced: '12/16/2021',
    timePlace : '1:27pm',
    orderNo: '054sjf',
    personName: 'Michelle Merrell',
    phoneNumber:'806-486-7825',
    order:JSON.parse(localStorage.getItem('cart-data')),
}


]
   if(loading){
       return(
<p>loading</p>)
   } else{
    return(
        <div style={{padding:'60px'}}>
        <p style={{fontSize:'32px', fontWeight:'bold', textAlign:'end'}}>DASHBOARD</p>
        <hr></hr>
        <div>
            <p>TODAYS SALES:</p>
            <p><b>$<span>0.00</span></b></p>
    <button onClick={playSound}>MAson</button>
        </div>
        <hr></hr>
    
        <hr></hr>
        <div>
            <p>ORDER FEED:</p>
            <div style={{display:'flex-wrap'}}>
            {
           
           updateFeed}
           </div>
        </div>
        <hr></hr>
        </div>)
   }
    
} 
export default Dashboard;