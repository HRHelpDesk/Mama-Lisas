import React, {useState, useEffect} from "react";
import '../../assets/fonts/FoodDelight/FoodDelight.otf'
import logo from "../../assets/img/logo.png"
import { Button, Row, Col} from 'react-bootstrap';
import MenuCat from "../../Components/MenuCat";
import { Link } from "react-router-dom";
import Map from '../../Components/Map.jsx';
import axios from 'axios';


    
const Home = ()=>{
const [openClosed, setOpenClosed] = useState(false)
const [openTime, setOpenTime] = useState('')
const [closedTime, setClosedTime] = useState('')
const [address, setAddress] = useState('')
const [pickupTime, setPickupTime] = useState('')
const [deliveryTime, setDeliveryTime] = useState('')
const location = {
    address: address,
    lat: 35.554470,
    lng: -100.971110,
  }
useEffect(()=>{
checkOpen('set01')
.then(checkOpen('set02'))
.then(checkOpen('set03'))
.then(checkOpen('set04'))



},[])
    const checkOpen = async (a)=>{
        const response = await axios.get('https://mama-lisas-api.herokuapp.com/settings')

        let obj = response.data.filter(i=>{
            return i.index === a;
        })
   if(obj[0].index == 'set02'){
        if (obj[0].value === 'true'){
            setOpenClosed(true)
        }

        else if (obj[0].value === 'true'){
            setOpenClosed(false)
        }

        console.log(obj[0].value)

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

    
}

    
    window.onload = ()=>{ if( openClosed == true){
        document.getElementById('open').style.display = 'block';
        document.getElementById('Closed').style.display = 'none';
    } else {
        document.getElementById('Closed').style.display = 'block';
        document.getElementById('open').style.display = 'none';
    }
    }

    return(
        <div style={{display: 'flex', justifyContent:'center'}}>
        <div style={{textAlign: 'center', display:'block', marginTop:'0px'}}>
        <img style={{ width:'60%', height:'auto', margin:'0px'}} src={logo}></img>
        <div id="open">
        <Row style={{padding:'0px 150px'}} className="mx-0">
  <Link to="/menu"><Button style={{fontSize:'2.5vw', backgroundColor:'#e32727', border:'none'}} className="food-font" as={Col} variant="primary">ORDER NOW</Button></Link>
 
</Row>
<div className="food-font" style={{marginTop:'0px'}}>
    <h2>Hours:</h2>
    <h3 style={{margin:'0px'}}>Monday - Friday</h3>
    <h3>{openTime} - {closedTime}</h3>
</div>
{/* <MenuCat/> */}
        </div>
        <div  id="Closed">
        <div className="food-font" style={{marginTop:'20px'}}>
            <h1>We are closed today but we will be back soon!</h1>
            <p></p>
            <div id="open">
    <h2>Hours:</h2>
    <h3 style={{margin:'0px'}}>Monday - Friday</h3>
    <h3>{openTime} - {closedTime}</h3>
    
        </div>
</div>
        </div> <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'400px'}}>
    <p style={{fontSize:'22px'}}><b>Pickup Location:</b></p>
        <Map location={location} zoomLevel={17} />
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;