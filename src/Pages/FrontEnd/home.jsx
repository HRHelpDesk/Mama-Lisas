import React from "react";
import '../../assets/fonts/FoodDelight/FoodDelight.otf'
import logo from "../../assets/img/logo.png"
import { Button, Row, Col} from 'react-bootstrap';
import MenuCat from "../../Components/MenuCat";
import { Link } from "react-router-dom";
import Map from '../../Components/Map.jsx';


    
const Home = ()=>{
    const location = {
        address: "1701 Coffee St. Pampa, TX 79065",
        lat: 35.554470,
        lng: -100.971110,
      }

    const openClosed = true;
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
    <h3>10:30am - 3:30pm</h3>
</div>
{/* <MenuCat/> */}
        </div>
        <div  id="Closed">
        <div className="food-font" style={{marginTop:'20px'}}>
            <h1>We are closed today bt we will be back soon!</h1>
            <p></p>
            <div id="open">
    <h2>Hours:</h2>
    <h3 style={{margin:'0px'}}>Monday - Friday</h3>
    <h3>10:30am - 3:30pm</h3>
    
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