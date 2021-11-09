import React from "react";
import NavigationBar from '../Components/NavigationBar.jsx';
import CarouselComponent from "../Components/Carousel.jsx";
import MenuCategories, {MenuEntrees} from "../DataSheets/MenuItems.jsx";
import MenuCat from "../Components/MenuCat.jsx";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import MenuModal from "../Components/MenuModal.jsx";
import CartModal from "../Components/CartModal.jsx";
import MenuItem from "../Components/MenuItem.jsx";
const Menu = ()=>{
    const [lgShow, setLgShow] = useState(false);
  

  
  const [modalShow, setModalShow] = useState(false);
  const [cartModalShow, setCartModalShow] = useState(false);
let selectedItem;
  let testOBJ = { 
    item: 'Beef Bugogi',
  quantity: '1',
  total: '13.00'
}

const findIndexOfItem = (i)=>{
  const found = MenuEntrees.find(e => e.index == i);

console.log(found);

selectedItem = found
}
const addToCart =()=>{
 

  
  if(localStorage.getItem('cart-data') != null){
    let cartobj = JSON.parse( localStorage.getItem('cart-data'))
   let cartArr = [cartobj]
  

    console.log(cartArr)
    cartArr.forEach(i => {
      return(
        alert(`item: ${i.item} quantity: ${i.quantity} total:${i.total}`)
      )
      
    });
   
 
  } else {
    localStorage.setItem('cart-data', JSON.stringify(testOBJ))

  
  }

  setModalShow(false)
}
    return(
        <div>
           <NavigationBar onClickBag={() => setCartModalShow(true)}/>
           <CarouselComponent/>
           <div style={{textAlign:"center", marginTop:'20px'}}>
               <h1 style={{color:'#e32727'}} className="food-font">MENU</h1>
           </div>
           <div style={{textAlign:'center'}}>
           <div className="wrapper">
               
           {   MenuCategories.map(i=>{
                 return(
                     <MenuCat Name={i.name} img={i.img} onClick={() => setLgShow(true)}/>

                 )
             }) }


           </div>
           <MenuModal
        show={modalShow}
        onHide={()=>{addToCart()}}
      />

<CartModal
        show={cartModalShow}
        onHide={() => setCartModalShow(false)}
      />

           <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Main Entree's
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
     {MenuEntrees.map(i=>{
       return(<MenuItem itemName={i.itemName}  itemDescription={i.description} unitPrice={i.unitPrice} onClick={()=>{findIndexOfItem(i.index)}}/>)
     })}
        </Modal.Body>
      </Modal>
           </div>

           
        </div>
    )
}
export default Menu;