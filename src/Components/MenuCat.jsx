import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/MenuCat.css'
import rightArrow from '../assets/img/MenuIcons/arrowright.svg'
const MenuCat = (props)=>{
return(
    <div  className="food-font">
      <Card onClick={props.onclick} className="card-shadow" style={{ width: '18rem', textAlign:'center', display: 'block', padding: '25px', margin:'10px' }}>
  <Card.Img variant="top" src={props.img} style={{width: '100px'}}/>
  <Card.Body>
    <Card.Title>{props.Name}</Card.Title>
    
    <Card.Img  style={{width: '50px'}} variant="bottom" src={rightArrow} alt="" />
  </Card.Body>
</Card>
    </div>
)
}

export default MenuCat;