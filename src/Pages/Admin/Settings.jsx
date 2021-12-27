import React, { useEffect, useState } from "react";
import axios from "axios";
import ToggleSwitch from "../../Components/ToggleSwitch";
const Settings = ()=>{
    const [isLoading, setLoading] = useState(true)
    const [settings, setSettings] = useState(null)
const[checked, setChecked] = useState(false)
const [value, setValue] = useState(false);

const setOpen = ()=>{
    setValue(false)
    console.log('set open')
    setTimeout(()=>{
        setSettings((prevState)=>{

            let ojb = Object.assign({}, prevState.settings);  // creating copy of state variable jasper
            ojb.isOpen = value;                     // update the name property, assign a new value                 
  return { ojb };     
       
    })},1500)

    setTimeout(()=>{
        console.log(settings.isOpen)
        UpdateSettings()
        GetSettings()
    },3000)


}

const saveSetting = ()=>{
    console.log(settings.isOpen)
}

const setClosed = ()=>{
    setValue(true)
    console.log('set closed')
    setTimeout(()=>{
        setSettings((prevState)=>{

            let ojb = Object.assign({}, prevState.settings);  // creating copy of state variable jasper
            ojb.isOpen = value;                     // update the name property, assign a new value                 
  return { ojb };     
       
    })},1500)

    setTimeout(()=>{
        console.log(settings.isOpen)
        UpdateSettings()
        GetSettings()
    },3000)

}




const showDiv= (e,a)=>{
    document.getElementById(e).style.display = 'block'
    document.getElementById(a).style.display = 'none'
}

const GetSettings = async () => {

    const response = await axios.get("http://localhost:3001/settings");
  
    let presets = response.data
   setSettings(response.data[0])
  console.log(response.data[0].isOpen)
  setValue(response.data[0].isOpen)

   

    

    };
    let openStatus = [
        
            {
                OC:'Closed',
                color: 'red'
            },
            {
                OC:'Open',
                color: 'green'
            }

        
    ]

  

    const Orders = JSON.parse(localStorage.getItem('cart-data'))

    useEffect(()=>{
        GetSettings().then(()=>{
        
                setLoading(false)}
            
          )
       
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
        axios.put('http://localhost:3001/settings', settings)
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
    <p style={{fontSize:'32px', textAlign:'end', fontWeight:'bold', color:'gray'}}>SETTINGS</p>
    <hr></hr>
    <div>
        <p>Is the resturaunt open?</p>
        <p style={{color:settings.isOpen ? 'red':'green'}}>{settings.isOpen ? 'Closed':'Open'}</p>
        <ToggleSwitch
            isOn={value?true:false}
            handleToggle={value ? setOpen : setClosed}
            theDefVal={false}
            // theVal={value?true:false}
            defChecked={value?true:false}
        />   </div>
    <hr></hr>
    <div>
        <p>Set Hours:</p>
        <p><span>{settings.openTime}</span> to <span>{settings.closedTime}</span></p>
        <a id="edit2" onClick={()=>{showDiv('settingTwo','edit2')}} > edit</a>
      
       <div style={{display: 'none'}} id="settingTwo"><input onChange={onChangeInputs} name="openTime" type="text" /> to <input value={settings.closedTime} type="text" />
    <button onClick={()=>{UpdateSettings("settingTwo",'edit2')}}>Update</button>
      </div>  
    </div>
    <hr></hr>
  
        <p>Delivery Time:</p>
        <p><span><b>Delivery Time Frame: </b></span><span>{settings.deliveryTime}</span></p>
        <p><span><b>Pick-up Time Frame: </b></span><span>{settings.pickUpTime}</span></p>
        <a id="edit1" onClick={()=>{showDiv('settingOne','edit1')}}> edit</a>
        <div style={{display: 'none'}} id='settingOne'>
        <input onChange={onChangeInputs} name="deliveryTime" type="text" />

        <p>Pick-up Time:</p>
        <input onChange={onChangeInputs} name="pickUpTime"  type="text" />
        <button onClick={()=>{UpdateSettings("settingOne",'edit1')}}>Update</button>
        
    </div>
    <hr></hr>
    <div>
    
    <p><span><b>Location: </b></span><span>{settings.location}</span></p>
    <a id="edit3" onClick={()=>{showDiv('settingThree', 'edit3')}}> edit</a>
    <div style={{display: 'none'}} id='settingThree'>
        <p>Set Location:</p>
        <input onChange={onChangeInputs} name="location" type="text" />
        <button onClick={()=>{UpdateSettings("settingThree",'edit3')}}>Update</button>

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