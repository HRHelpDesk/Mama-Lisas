import React, { useEffect, useState } from "react";
import CartListItem from "../../Components/CartList";
import OrderFeedItem from "../../Components/orderFeedItem";
import ding from '../../assets/sound/ding.mp3'
import axios from "axios";
const Dashboard = ()=>{
    const[loading, setLoading] = useState(true)
    const[orderArrLength, setOrderArrLength] = useState(0)
    const [dailyTotal, setDailyTotal] = useState(0)
    const [dailyCompTotal, setDailyCompTotal] = useState(0)
    const [dailyUnfinishedTotal, setDailyUnfinishedTotal] = useState(0)
let orderFeed = []
let oldArr;

const getTodaysSales = async ()=>{
    const response =  await axios.get('https://mama-lisas-api.herokuapp.com/completed-orders')
let totals= [];

      let data = response.data;
      

      data.forEach(i=>{
          totals.push(Number(i.total))
      })

     console.log(totals)

      const sum = totals.reduce(add, 0); // with initial value to avoid when the array is empty
      setDailyCompTotal(sum)
      console.log(dailyCompTotal)
     

}


const completeOrder = async(i,eml,fn,add)=>{

    const response = await axios.post("https://mama-lisas-api.herokuapp.com/send-order-complete",{
              orderId: i,
              email: eml,
              personsName: fn,
              deliveryAddress: add
             
          
            });
            console.log(response.data)
    alert(`${i} ${eml}`)
    getTodaysSales()
}


function add(accumulator, a) {
  return accumulator + a;
}


let sound = new Audio(ding);
const [updateFeed, setUpdateFeed] = useState()
const getFeed = async ()=>{
    const response =  await axios.get('https://mama-lisas-api.herokuapp.com/get-order-feed')
    console.log(response)

    orderFeed = response.data
    let numarr = [];
    orderFeed.forEach(i=>{
        numarr.push(Number(i.total))
    })

  console.log(numarr)

    const sum = numarr.reduce(add, 0); // with initial value to avoid when the array is empty
    setDailyUnfinishedTotal(sum)
    console.log(dailyUnfinishedTotal)
   setUpdateFeed(orderFeed.map(i=>{
       let orderdata = JSON.parse(i.orderItems)
console.log(orderdata)
    return(<div style={{border: "2px solid black", margin:'5px', padding:'5px'}}><OrderFeedItem
        date={i.time}
        id={i.orderId}
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
<button onClick={()=>{completeOrder(i.orderId, i.emailAddress, i.personsName, i.deliveryAddress)}}>Complete Order</button>
    
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
    getTodaysSales()
    setDailyTotal(dailyUnfinishedTotal + dailyCompTotal)
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
            <p><b>$<span>{dailyTotal.toFixed(2)}</span></b></p>
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