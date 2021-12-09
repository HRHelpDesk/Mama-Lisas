import React, { useEffect } from "react";
import NavigationBar from '../Components/NavigationBar.jsx';
import CarouselComponent from "../Components/Carousel.jsx";
import MenuCat from "../Components/MenuCat.jsx";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import Axios from 'axios';
import MenuModal from "../Components/MenuModal.jsx";
import CartModal from "../Components/CartModal.jsx";
import MenuItem from "../Components/MenuItem.jsx";
import meImg from '../assets/img/MenuIcons/dish.svg';
import spImg from '../assets/img/MenuIcons/menubook.svg';
import drinkImg from '../assets/img/MenuIcons/soda.svg';
import dessertImg from '../assets/img/MenuIcons/dessert.svg';
import TableItem from "../Components/TableItem.jsx";
import {useNavigate} from 'react-router-dom';
const apiUrl = "https://mama-lisas-api.herokuapp.com/"
const port = "http://localhost:3001/"


const Menu = ()=>{
  //Variables

  //OBJECTS
  let selectedItem = {
    id: 'place6',
    index:'E02',
    itemName:'place1',
    unitPrice:0,
    description:`place3`,
    addOn:'place4',
    addOnPrice:'place5'    
  };
  const[itemToCart, setItemToCart] = useState({
    id: selectedItem.id,
    index:selectedItem.index,
    itemName:selectedItem.itemName,
    unitPrice:selectedItem.unitPrice.toFixed(2),
    description:selectedItem.description,
    addOn:selectedItem.addOn,
    addOnPrice:selectedItem.addOnPrice   
    })


    //END OBJECTS
    const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(true);
const [modalShow, setModalShow] = useState(false);
const [cartModalShow, setCartModalShow] = useState(false);
const [setAddCost, addCost] = useState(0);
const[showAddOn, setShowAddOn] = useState('hide')
const [cartNumber, setCartNumber] = useState(0)
const [categories, setCatergories] = useState([])
const [ME, updateME] = useState([])
const [MSD, updateMSD] = useState([])
const [MSP, updateMSP] = useState([])
const [MDR, updateMDR] = useState([])
const [MDS, updateMDS] = useState([])
const [categoriesLoader, setCategoriesLoader] =useState([]);
const [menuCats, updateMenuCates] = useState([])
const[finalTotal, setFinalTotal] = useState(0)
const [selectedArr, updateSelectedArr] = useState([]);
const [itemPrice, setItemPrice] = useState(itemToCart.unitPrice);
let cartDataArr = JSON.parse(localStorage.getItem('cart-data'));
let cart ='';
let unitPriceArr = []
const [lgShow, setLgShow] = useState(false);
const[spInstruct, setSpInstruct] = useState('')
const [totalItemPrice, setTotalItemPrice] = useState(selectedItem.unitPrice)


//End Variables

//Functions


// const OpenRegAxios = async () => {

//   const response = await Axios.get(apiUrl+"openRegister");
//   console.log(response.data)
  
 
//   };

  function getSum(ary){
    return ary.reduce(function(sum, value) {
      return sum + value;
    }, 0);
  }
//Remove From Cart
  const removeItem = (a)=>{
    var index = cartDataArr.findIndex(function(o){
      return o.id === a;
      
  })
   cartDataArr.splice(index, 1);
   setLoader(
        cartDataArr.map(i=>{
          return(
            
          <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction} removeItemOnClick={()=>{removeItem(i.id)}}/>
          )
         })
      )
      setCartNumber(cartDataArr.length)
      
      localStorage.setItem('cart-data', JSON.stringify(cartDataArr))
  
        
   let unitPriceArr = []
   cartDataArr.forEach(i =>{
   
     unitPriceArr.push(i.unitPrice)
   })
   const toNumArr = arr => arr.map(Number);
   let unitPriceIntArr = toNumArr(unitPriceArr)
   console.log(unitPriceArr)
   setFinalTotal(getSum(unitPriceIntArr))
  }
  let [loader, setLoader] = useState(
    cartDataArr.map(i=>{
      return(
        
      <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction} removeItemOnClick={removeItem}/>
      )
     })
  );

  // Load Api Data
  const getMenuDataAxios = async (e, arr) => {

    const response = await Axios.get(apiUrl+e);
    console.log(response.data)
    let json = response.data
  
    json.forEach(i =>{
      arr.push(i)  })
    
  
  
  console.log(arr)
   
    };

 
// Find Array Item
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

// Create Random ID

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}
//Add on function to update price
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

//End Addon Function

// Add Item to Cart
const addToCart =()=>{
cartDataArr=[];
  cart ={
    id: makeid(5),
    index:itemToCart.index,
    itemName:itemToCart.itemName,
    unitPrice:totalItemPrice,
    specialInstruction: spInstruct
  }
  
  if(localStorage.getItem('cart-data') != null){
    let cartobj = JSON.parse( localStorage.getItem('cart-data'))
   

cartobj.forEach(i=>{
  cartDataArr.push(i)
})
    
  

    console.log(cartDataArr)
    cartDataArr.push({
      id: makeid(5),
      index:itemToCart.index,
      itemName:itemToCart.itemName,
      unitPrice:totalItemPrice,
      specialInstruction:spInstruct
    });

    
 
 cartDataArr.forEach(i =>{
 
   unitPriceArr.push(i.unitPrice)
 })
 
 const toNumArr = arr => arr.map(Number);
 let unitPriceIntArr = toNumArr(unitPriceArr)
 console.log(unitPriceArr)
 setFinalTotal(getSum(unitPriceIntArr))
setCartNumber(cartDataArr.length)
    localStorage.setItem('cart-data', JSON.stringify(cartDataArr))
    
    }  else {
     cartDataArr.push(cart)
     setCartNumber(cartDataArr.length)
    localStorage.setItem('cart-data', JSON.stringify(cartDataArr))
    setLoader(cartDataArr.map(i=>{
      return(
        
      <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction} removeItemOnClick={removeItem}/>
      )
     })
      )
  }
setSpInstruct('')
  setModalShow(false)

}

//End Add to cart
//End Functions
    

//Load Data 
useEffect(()=>{
 
  getMenuDataAxios('menu-entrees', ME)
  getMenuDataAxios('menu-drinks', MDR)

  getMenuDataAxios('menu-desserts', MDS)
  getMenuDataAxios('menu-categories', menuCats).then(()=>{
    let meObjIndex = menuCats.findIndex((obj => obj.img == "ME"));
  
    menuCats[meObjIndex].img = meImg;

    menuCats[meObjIndex].onclick = ME;

   

    let drObjIndex = menuCats.findIndex((obj => obj.img == "drink"));
  
    menuCats[drObjIndex].img = drinkImg;
    menuCats[drObjIndex].onclick = MDR;

    let dsObjIndex = menuCats.findIndex((obj => obj.img == "dessert"));
  
    menuCats[dsObjIndex].img = dessertImg;
    menuCats[dsObjIndex].onclick = MDS;
  }).then(()=>{
    console.log(menuCats)
    setIsLoading(false)
  })
 
  if(localStorage.getItem('cart-data')){

  let cartobj = JSON.parse( localStorage.getItem('cart-data'))
 

  cartobj.forEach(i=>{
    cartDataArr.push(i)
  })
  setCartNumber(cartDataArr.length)
}

if(localStorage.getItem('cart-data')){


  setLoader(cartDataArr.map(i=>{
      return(
        
      <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction} removeItemOnClick={removeItem(i.id)}/>
      )
     }));
let unitPriceArr = []
cartDataArr.forEach(i =>{

  unitPriceArr.push(i.unitPrice)
})

const toNumArr = arr => arr.map(Number);

let unitPriceIntArr = toNumArr(unitPriceArr)
console.log(unitPriceArr)
setFinalTotal(getSum(unitPriceIntArr))

} else{
  setLoader("No Items")
}
},[])



//End useEffect()

//Start Main Content

if(isLoading == true){
  return(<p>Loading...</p>)
} else {

    return(
        <div>
           <NavigationBar onClickBag={() => {setCartModalShow(true);  setLoader(cartDataArr.map(i=>{
      return(
        
      <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction} removeItemOnClick={removeItem}/>
      )
     })
      )}} cartAmmount={cartNumber}/>
           <CarouselComponent/>
           <div style={{textAlign:"center", marginTop:'20px'}}>
               <h1 style={{color:'#e32727'}} className="food-font">MENU</h1>
           </div>
           <div style={{textAlign:'center'}}>
           <div className="wrapper">
               
           {   menuCats.map(i=>{
             return(
                     <MenuCat Name={i.name} img={i.img} onclick={()=>{
                      setLgShow(true)
                      updateSelectedArr(i.onclick)
               
                      console.log('i '+selectedArr)
                     }}/>

             )
                

              
             }) }

{/* <button onClick={OpenRegAxios}>Test</button> */}
           </div>
           <MenuModal
        show={modalShow}
        onHide={()=>{setModalShow(false)}}
        onAdd={()=>{addToCart()}}
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
       cartLoader={loader}
       fTotal={finalTotal.toFixed(2)}
       onComplete={()=>{navigate('/checkout')}}
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
       return(<MenuItem itemName={i.itemName}  itemDescription={i.description} unitPrice={newNum} onClick={()=>{setLgShow(false); findIndexOfItem(i.index, selectedArr)}}/>)
     })} 
        </Modal.Body>
      </Modal>
           </div>

           
        </div>
    )
  }
}
export default Menu;
