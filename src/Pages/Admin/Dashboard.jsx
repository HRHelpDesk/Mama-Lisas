import React, { useEffect, useState } from "react";
import CartListItem from "../../Components/CartList";
import axios from "axios";
const Dashboard = ()=>{
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
   
    return(
    <div style={{padding:'60px'}}>
    <p style={{fontSize:'32px', fontWeight:'bold', textAlign:'end'}}>DASHBOARD</p>
    <hr></hr>
    <div>
        <p>TODAYS SALES:</p>
        <p><b>$<span>0.00</span></b></p>

    </div>
    <hr></hr>

    <hr></hr>
    <div>
        <p>ORDER FEED:</p>
        {ORDERLIST.map(a =>{
            
            a.order.forEach(i =>{
                return <CartListItem  itemName={i.itemName} specialInstruction={i.specialInstruction} addOnSp={i.addOnSP} unitPrice={i.unitPrice}/>

            })

        })}

    </div>
    <hr></hr>
    </div>)
} 
export default Dashboard;