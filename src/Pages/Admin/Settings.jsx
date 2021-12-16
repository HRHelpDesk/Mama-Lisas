import React, { useState } from "react";


const Settings = ()=>{
    const [cashRegisterStatus, setCashRegisterStatus] = useState({
        connectionStatus:'DISCONNECTED',
        color:'red'
    })
    return(
    <div style={{padding:'60px'}}>
    <p style={{fontSize:'32px', textAlign:'end', fontWeight:'bold', color:'gray'}}>SETTINGS</p>
    <hr></hr>
    <div>
        <p>Is the resturaunt open?</p>
    </div>
    <hr></hr>
    <div>
        <p>Set Hours:</p>
        <input type="time" /> to <input type="time" />
    </div>
    <hr></hr>
    <div>
        <p>Delivery Time:</p>
        <input type="text" />

        <p>Pick-up Time:</p>
        <input type="text" />
    </div>
    <hr></hr>
    <div>
        <p>Set Location:</p>
        <input type="text" />

    </div>
    <hr></hr>
    <div>
        <p>Cash Register Connection: <span style={{color: cashRegisterStatus.color, fontWeight:'bold'}}>{cashRegisterStatus.connectionStatus}</span></p>
        

    </div>
    <hr></hr>
    </div>)
} 
export default Settings;