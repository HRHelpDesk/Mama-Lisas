import React, { useEffect, useState } from "react";
import axios from "axios";
import ToggleSwitch from "../../Components/ToggleSwitch";
const Settings = ()=>{
const [openTime, setOpenTime] = useState('')
const [closedTime, setClosedTime] = useState('')
const [address, setAddress] = useState('')
const [pickupTime, setPickupTime] = useState('')
const [deliveryTime, setDeliveryTime] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [settings, setSettings] = useState(null)
const[checked, setChecked] = useState(null)
const [value, setValue] = useState(false);



const saveSetting = ()=>{
    console.log(settings.isOpen)
}



const showDiv= (e,a)=>{
    document.getElementById(e).style.display = 'block'
    document.getElementById(a).style.display = 'none'
}



const findSetting = async (b,a,c)=>{
    const response = await axios.get("https://mama-lisas-api.herokuapp.com/settings");

let arr = response.data
    let obj = arr.filter(i =>{
        return i.index === b
    })
    console.log(obj[0].index)
    console.log(obj[0])
    if (obj[0].index === 'set02'){

        if(obj[0].value === 'true'){
        setChecked(false)
        obj[0].value = 'false';

        console.log("set:"+obj[0].value)
        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
        console.log(res)
        } else  if(obj[0].value === 'false'){
            setChecked(true)
            obj[0].value = true;
    
            console.log("set:"+obj[0].value)
            const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
            console.log(res)
        }
        console.log(checked)
    }

    if (obj[0].index == 'set01'){

        obj[0].value = address
        

        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
       if(document.getElementById(a)){
        document.getElementById(a).style.display = 'none'
        document.getElementById(c).style.display = 'block'
       }
    }

    if (obj[0].index == 'set03'){
        obj[0].value = openTime
        

        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
       if(document.getElementById(a)){
        document.getElementById(a).style.display = 'none'
        document.getElementById(c).style.display = 'block'
       }
    }

    if (obj[0].index == 'set04'){
        obj[0].value = closedTime
        

        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
       if(document.getElementById(a)){
        document.getElementById(a).style.display = 'none'
        document.getElementById(c).style.display = 'block'
       }
    }
    if (obj[0].index == 'set05'){
        obj[0].value = pickupTime
        

        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
       if(document.getElementById(a)){
        document.getElementById(a).style.display = 'none'
        document.getElementById(c).style.display = 'block'
       }
    }
    if (obj[0].index == 'set06'){
        obj[0].value = deliveryTime
        

        const res = await axios.post('https://mama-lisas-api.herokuapp.com/settings',obj[0])
       if(document.getElementById(a)){
        document.getElementById(a).style.display = 'none'
        document.getElementById(c).style.display = 'block'
       }
    }

}


const GetSettings = async (a) => {

    const response = await axios.get("https://mama-lisas-api.herokuapp.com/settings");
  
  
  console.log(response.data)
let obj = response.data.filter(i=>{
    return i.index === a
})

if (obj[0].index === 'set02'){
    if(obj[0].value === 'true'){
        setChecked(true)
        console.log('this')
    }

   else if(obj[0].value === 'false'){
        setChecked(false)
        console.log('that')
    }
}

if (obj[0].index == 'set01'){
    setAddress(obj[0].value)
}

if (obj[0].index == 'set03'){
    setOpenTime(obj[0].value)
}

if (obj[0].index == 'set04'){
    setClosedTime(obj[0].value)
}
if (obj[0].index == 'set05'){
    setPickupTime(obj[0].value)
}
if (obj[0].index == 'set06'){
    setDeliveryTime(obj[0].value)
}

  console.log(obj)

   

    

    };
 
  

   

    useEffect(()=>{
        GetSettings('set01')
      .then(GetSettings('set02'))
      .then(GetSettings('set03'))
     .then(GetSettings('set04'))
     .then(GetSettings('set05'))
        .then(GetSettings('set06'))
        .then(setLoading(false))
       
    },[])
    const onChangeInputs = (event)=>{
        const {name, value} = event.target
        setSettings((p)=>{
            if(name === 'location'){
                return{
                    _id: p._id,
            isOpen: p.isOpen,
            location: value,
            openTime: p.openTime,
            closedTime: p.closedTime,
            deliveryTime: p.deliveryTime,
            pickUpTime: p.pickUpTime
                }
            

            } else if(name === 'openTime'){
                return{
                    _id: p._id,
            isOpen: p.isOpen,
            location: p.location,
            openTime: value,
            closedTime: p.closedTime,
            deliveryTime: p.deliveryTime,
            pickUpTime: p.pickUpTime
                }
            } else if(name === 'closedTime'){
                return{
                    _id: p._id,
            isOpen: p.isOpen,
            location: p.location,
            openTime: p.openTime,
            closedTime: value,
            deliveryTime: p.deliveryTime,
            pickUpTime: p.pickUpTime
                }
            }else if(name === 'deliveryTime'){
                return{
                    _id: p._id,
            isOpen: p.isOpen,
            location: p.location,
            openTime: p.openTime,
            closedTime: p.closedTime,
            deliveryTime: value,
            pickUpTime: p.pickUpTime
                }
            }else if(name === 'pickUpTime'){
                return{
                            _id: p._id,
            isOpen: p.isOpen,
            location: p.location,
            openTime: p.openTime,
            closedTime: p.closedTime,
            deliveryTime: p.deliveryTime,
            pickUpTime: value
                }
            } 
        })
    }
    const UpdateSettings = (a,b)=>{
        axios.post('https://mama-lisas-api.herokuapp.com/settings', settings)
          .then(response => {
            console.log(response);
            document.getElementById(a).style.display = 'none'
            document.getElementById(b).style.display = 'block'
          })
          .catch(error => {
            console.log(error);
          });
    }
    const [cashRegisterStatus, setCashRegisterStatus] = useState({
        connectionStatus:'DISCONNECTED',
        color:'red'
    })

    if(isLoading){
            return (<p>Loading</p>)
    } else {
    return(
    <div style={{padding:'60px'}}>
    <button onClick={()=>{findSetting('set02')}}>Check</button>
    <p style={{fontSize:'32px', textAlign:'end', fontWeight:'bold', color:'gray'}}>SETTINGS</p>
    <hr></hr>
    <div>
        <p>Is the resturaunt open?</p>
        <p style={{color:checked?'green':'red'}}>{checked?'Open':'Closed'}</p>
        <ToggleSwitch
            isOn={checked?true:false}
            handleToggle={()=>findSetting('set02')}
           
            theDefVal={checked?true:false}
            checked={checked?true:false}
        />   </div>
    <hr></hr>
    <div>
        <p>Set Hours:</p>
        <p><span>{openTime}</span> to <span>{closedTime}</span></p>
        <a id="edit2" onClick={()=>{showDiv('settingTwo','edit2')}} > edit</a>
      
       <div style={{display: 'none'}} id="settingTwo"><input onChange={(e)=>{setOpenTime(e.target.value);}} name="openTime" type="text" /> to <input onChange={(e)=>{setClosedTime(e.target.value);}}  type="text" />
    <button onClick={()=>{findSetting('set03',"settingTwo",'edit2'); findSetting('set04',"settingTwo",'edit2')} }>Update</button>
      </div>  
    </div>
    <hr></hr>
  
        <p>Delivery Time:</p>
        <p><span><b>Delivery Time Frame: </b></span>{deliveryTime}<span></span></p>
        <p><span><b>Pick-up Time Frame: </b></span>{pickupTime}<span></span></p>
        <a id="edit1" onClick={()=>{showDiv('settingOne','edit1')}}> edit</a>
        <div style={{display: 'none'}} id='settingOne'>
        <input onChange={(e)=>{setDeliveryTime(e.target.value);}} name="deliveryTime" type="text" />

        <p>Pick-up Time:</p>
        <input onChange={(e)=>{setPickupTime(e.target.value);}} name="pickUpTime"  type="text" />
        <button onClick={()=>{findSetting('set05',"settingOne",'edit1')}}>Update</button>
        
    </div>
    <hr></hr>
    <div>
    
    <p><span><b>Location: </b></span>{address}<span></span></p>
    <a id="edit3" onClick={()=>{showDiv('settingThree', 'edit3')}}> edit</a>
    <div style={{display: 'none'}} id='settingThree'>
        <p>Set Location:</p>
        <input onChange={(e)=>{setAddress(e.target.value);}} name="location" type="text" />
        <button onClick={()=>{findSetting('set01',"settingThree",'edit3')}}>Update</button>

</div>
    </div>
    <hr></hr>
    <div>
        <p>Cash Register Connection: <span style={{color: cashRegisterStatus.color, fontWeight:'bold'}}>{cashRegisterStatus.connectionStatus}</span></p>
        

    </div>
    <hr></hr>
    <button onClick={saveSetting}>Save</button>
    </div>)}
} 
export default Settings;