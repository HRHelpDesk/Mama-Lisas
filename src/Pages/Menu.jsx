import React, { useEffect } from "react";
import NavigationBar from '../Components/NavigationBar.jsx';
import CarouselComponent from "../Components/Carousel.jsx";
import MenuCategories, {MenuEntrees} from "../DataSheets/MenuItems.jsx";
import MenuCat from "../Components/MenuCat.jsx";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import Axios from 'axios';
import MenuModal from "../Components/MenuModal.jsx";
import CartModal from "../Components/CartModal.jsx";
import MenuItem from "../Components/MenuItem.jsx";
const url = "http://localhost:3001/menu-entrees"


const Menu = ()=>{

    const [lgShow, setLgShow] = useState(false);
  const[spInstruct, setSpInstruct] = useState('')
    let selectedItem = {
      index:'E02',
      itemName:'place1',
      unitPrice:0,
      description:`place3`,
      addOn:'place4',
      addOnPrice:'place5'    
    };

    const Add = (a,b)=>{
      return(a+b)
    }
    const [selectedArr, updateSelectedArr] = useState([]);
    const[itemToCart, setItemToCart] = useState({
      index:selectedItem.index,
      itemName:selectedItem.itemName,
      unitPrice:selectedItem.unitPrice.toFixed(2),
      description:selectedItem.description,
      addOn:selectedItem.addOn,
      addOnPrice:selectedItem.addOnPrice   
      })
  const [modalShow, setModalShow] = useState(false);
  const [cartModalShow, setCartModalShow] = useState(false);
const [setAddCost, addCost] = useState(0);
const [totalItemPrice, setTotalItemPrice] = useState(selectedItem.unitPrice)
const [itemPrice, setItemPrice] = useState(itemToCart.unitPrice);
const[showAddOn, setShowAddOn] = useState('hide')
const [cartNumber, setCartNumber] = useState(0)

useEffect(()=>{
  getMenuDataAxios()
  if(localStorage.getItem('cart-data')){
let cartArr =[];
  let cartobj = JSON.parse( localStorage.getItem('cart-data'))
 

  cartobj.forEach(i=>{
    cartArr.push(i)
  })
  setCartNumber(cartArr.length)
}
},[0])

const ME = []
const getMenuDataAxios = async () => {

  const response = await Axios.get(url);
  console.log(response.data)
  let json = response.data

  json.forEach(i =>{
    ME.push(i)  })
  

updateSelectedArr(ME)
console.log(selectedArr)
 
  };


const findIndexOfItem = (i, b)=>{
  const found = b.find(e => e.index == i);



selectedItem = found;

console.log(selectedItem);

setModalShow(true)
setItemToCart(selectedItem)
setTotalItemPrice(selectedItem.unitPrice.toFixed(2))
if(selectedItem.addOn == "na"){
  setShowAddOn('hide')
} else{
  setShowAddOn('show');
}

}




const addOnToPrice = ()=>{

  if(totalItemPrice == 13){
  let added = 13 + 1
 
  setTotalItemPrice(added.toFixed(2))
  } else{ 
    let added = 13
    setTotalItemPrice(added.toFixed(2))
  }
}
const recordSpInstructions =(e)=>{
  let st = e.target.value;
  setSpInstruct(st);
  console.log(spInstruct)
}
let cart ='';
const addToCart =()=>{
  let cartArr = []
  cart =
  {
    index:itemToCart.index,
    itemName:itemToCart.itemName,
    unitPrice:totalItemPrice,
    specialInstruction: "Special Instructions: " + spInstruct
  }
  
  if(localStorage.getItem('cart-data') != null){
    let cartobj = JSON.parse( localStorage.getItem('cart-data'))
   

cartobj.forEach(i=>{
  cartArr.push(i)
})
 
  

    console.log(cartArr)
    cartArr.push({
      index:itemToCart.index,
      itemName:itemToCart.itemName,
      unitPrice:totalItemPrice,
      specialInstruction:"Special Instructions: " + spInstruct
    });
setCartNumber(cartArr.length)
    localStorage.setItem('cart-data', JSON.stringify(cartArr))
  
    }
   
 
   else {
     cartArr.push(cart)
     setCartNumber(cartArr.length)
    localStorage.setItem('cart-data', JSON.stringify(cartArr))

  
  }

  
setSpInstruct('')
  setModalShow(false)
}




    return(
        <div>
           <NavigationBar onClickBag={() => setCartModalShow(true)} cartAmmount={cartNumber}/>
           <CarouselComponent/>
           <div style={{textAlign:"center", marginTop:'20px'}}>
               <h1 style={{color:'#e32727'}} className="food-font">MENU</h1>
           </div>
           <div style={{textAlign:'center'}}>
           <div className="wrapper">
               
           {   MenuCategories.map(i=>{
                 return(
                     <MenuCat Name={i.name} img={i.img} onclick={()=>{
                      setLgShow(true)
  
               
                      console.log(selectedArr)
                     }}/>

                 )
             }) }


           </div>
           <MenuModal
        show={modalShow}
        onHide={()=>{addToCart()}}
        name={itemToCart.itemName}
        description={itemToCart.description}
        ammount={totalItemPrice}
        adds={showAddOn}
        onCheckboxClick={addOnToPrice}
        onSpInstructChange={recordSpInstructions}
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
        
     
  
      {selectedArr.map(i=>{
    let   newNum = i.unitPrice.toFixed(2)
       return(<MenuItem itemName={i.itemName}  itemDescription={i.description} unitPrice={newNum} onClick={()=>{findIndexOfItem(i.index, selectedArr)}}/>)
     })} 
        </Modal.Body>
      </Modal>
           </div>

           
        </div>
    )
}
export default Menu;