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
import meImg from '../assets/img/MenuIcons/dish.svg';
import spImg from '../assets/img/MenuIcons/menubook.svg';
import sideImg from '../assets/img/MenuIcons/ricebowl.svg';
import drinkImg from '../assets/img/MenuIcons/soda.svg';
import dessertImg from '../assets/img/MenuIcons/dessert.svg';
const apiUrl = "http://localhost:3001/"



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
const [categories, setCatergories] = useState([])
const [ME, updateME] = useState([])
const [MSD, updateMSD] = useState([])
const [MSP, updateMSP] = useState([])
const [MDR, updateMDR] = useState([])
const [MDS, updateMDS] = useState([])
const [menuCats, updateMenuCates] = useState([])
useEffect(()=>{
 
  getMenuDataAxios('menu-entrees', ME)
  getMenuDataAxios('menu-drinks', MDR)
  getMenuDataAxios('menu-categories', menuCats)
 
  if(localStorage.getItem('cart-data')){
let cartArr =[];
  let cartobj = JSON.parse( localStorage.getItem('cart-data'))
 

  cartobj.forEach(i=>{
    cartArr.push(i)
  })
  setCartNumber(cartArr.length)
}
},[0])

const getMenuDataAxios = async (e, arr) => {

  const response = await Axios.get(apiUrl+e);
  console.log(response.data)
  let json = response.data

  json.forEach(i =>{
    arr.push(i)  })
  


console.log(arr)
 
  };
const [categoriesLoader, setCategoriesLoader] =useState([]);



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
               
           {   menuCats.map(i=>{
             if(i.img == 'ME'){
                 return(
                     <MenuCat Name={i.name} img={meImg} onclick={()=>{
                      setLgShow(true)
                      updateSelectedArr(ME)
               
                      console.log('i: '+selectedArr)
                     }}/>

                 )
                }

                if(i.img == 'dessert'){
                  return(
                      <MenuCat Name={i.name} img={dessertImg} onclick={()=>{
                       setLgShow(true)
                       updateSelectedArr(MDR)
            
                       console.log(selectedArr)
                      }}/>
 
                  )
                 }

                 if(i.img == 'SP'){
                  return(
                      <MenuCat Name={i.name} img={spImg} onclick={()=>{
                       setLgShow(true)
   
                
                       console.log(selectedArr)
                      }}/>
 
                  )
                 }

                 if(i.img == 'Side'){
                  return(
                      <MenuCat Name={i.name} img={sideImg} onclick={()=>{
                       setLgShow(true)
   
                
                       console.log(selectedArr)
                      }}/>
 
                  )
                 }

                 if(i.img == 'drink'){
                  return(
                      <MenuCat Name={i.name} img={drinkImg} onclick={()=>{
                       setLgShow(true)
   
                
                       console.log(selectedArr)
                      }}/>
 
                  )
                 }
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