import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { map } from "lodash";
const MenuEditor = ()=>{
  let oraganizedList;
    const [lgShow, setLgShow] = useState(false);
const[addOnData, setAddOnData]= useState()
    let menuArr = []
    let menuCategories =[`Menu Entree's`, `Drinks`, `Desserts`]
    const[data, setData] = useState()
    const[modalData, setModalData] = useState()
    const[modalTitle, setModalTitle] = useState()
const loadMenu = async (a)=>{
    
  if(document.getElementById('catSelect').value === `Menu Entree's`){

    let resp = await axios.get('https://mama-lisas-api.herokuapp.com/menu-entrees')

    console.log(resp.data)
    menuArr = resp.data;
  }


if(document.getElementById('catSelect').value === `Drinks`){

    let resp = await axios.get('https://mama-lisas-api.herokuapp.com/menu-drinks')

    console.log(resp.data)
    menuArr = resp.data;
}

if(document.getElementById('catSelect').value === `Desserts`){

    let resp = await axios.get('https://mama-lisas-api.herokuapp.com/menu-desserts')

    console.log(resp.data)
    menuArr = resp.data;


}

 oraganizedList = menuArr.sort((a,b)=>a-b)
setData(oraganizedList.map(i=>{

  let addonArr = JSON.parse(i.addOn)

  setAddOnData()
  // console.log(addonArr)
    return (
      <tr onClick={()=>{ ShowMenuItem(i.index)}}>
    <td>{i.index}</td>
    <td>{i.itemName}</td>
    <td>{i.description}</td>
    <td>{addonArr.map(a=>{
    return <p><span>{a.addOnItem}</span> <span> ${a.addOnPrice}</span></p>
  })}</td>
    <td>${i.unitPrice.toFixed(2)}</td>
  </tr>
    )
}))


}

const deleteItem = async (a)=>{
         let obj = a
let category ;
         if(document.getElementById('catSelect').value === `Menu Entree's`){

          category = `Menu Entree's`;

          
        }
      
      
      if(document.getElementById('catSelect').value === `Drinks`){
      
        category = `Drinks`;
      }
      
      if(document.getElementById('catSelect').value === `Desserts`){
        category = `Desserts`;
      
      
      }

  let resp = await axios.post('http://localhost:3001/delete-menu-item', {obj: obj, category: category})
console.log(resp.data)
setLgShow(false)
loadMenu()
 }

const SaveMenuItem = async ()=>{
    let resp = await axios.post('http://localhost:3001/menu-update', obj[0])
console.log(resp.data)
setLgShow(false)
loadMenu()
}
let obj;
const ShowMenuItem = (a)=>{
    
     obj=  menuArr.filter(i=>{
        return i.index === a
    })

    console.log(obj[0])
    setModalTitle(()=>{return (<input onChange={(e)=>{ obj[0].itemName = e.target.value; ; console.log(obj)}} style={{width: '300px',fontSize:'18px'}} defaultValue={obj[0].itemName}/>)})
let addonArr = JSON.parse(obj[0].addOn)
    setModalData(()=>{return(<div><textarea onChange={(e)=>{ obj[0].description = e.target.value; ; console.log(obj)}} style={{width:'100%', height:'200px'}}>{obj[0].description}</textarea>
   <p><b>Item Price:</b></p>
   <input onChange={(e)=>{ obj[0].unitPrice = e.target.value; ; console.log(obj)}} style={{width: '75px',fontSize:'18px'}} defaultValue={obj[0].unitPrice}/> 
   <p><b>Add ons:</b></p>
    {
         addonArr.map(a=>{
             return(<div>
              <p><b>Add On Name:</b></p>
              <input onChange={(e)=>{ a.addOnItem = e.target.value; ; console.log(obj); obj[0].addOn =JSON.stringify(addonArr)}} style={{width: '100%',fontSize:'18px', marginBottom:'10px'}} defaultValue={a.addOnItem}/>
              <p><b>Add On Price:</b></p>
              <input onChange={(e)=>{ a.addOnPrice = e.target.value; ; console.log(obj); obj[0].addOn = JSON.stringify(addonArr)}} style={{width: '75px',fontSize:'18px', marginBottom:'10px'}} defaultValue={a.addOnPrice}/></div>)
         })
    }
   <Button onClick={()=>{SaveMenuItem()}} color="danger">Save</Button>
   <Button style={{marginLeft:'30px'}} onClick={()=>{deleteItem(obj[0]._id, )}}>Delete</Button>
    </div>)})
    setLgShow(true)
}


const AddNewMenuItem = (a)=>{
  let addOns =[{addOnItem:'na', addOnPrice:'na'}]
  let newObj = {
    index:'new',
    itemName: '',
    description:'',
    addOn:JSON.stringify(addOns),
    unitPrice:'',
    type:'Menu Entrees',
  }

 


 console.log(oraganizedList)
 setModalTitle(()=>{return (<input onChange={(e)=>{ newObj.itemName = e.target.value; ; console.log(newObj)}} style={{width: '300px',fontSize:'18px'}} defaultValue={newObj.itemName}/>)})

 setModalData(()=>{return(<div><textarea onChange={(e)=>{ newObj.description = e.target.value; ; console.log(newObj)}} style={{width:'100%', height:'200px'}}>{newObj.description}</textarea>
<p><b>Item Price:</b></p>
<input onChange={(e)=>{ newObj.unitPrice = e.target.value; ; console.log(newObj)}} style={{width: '75px',fontSize:'18px'}} defaultValue={newObj.unitPrice}/> 
<p><b>Add ons:</b></p>
<p><b>Type:</b></p>
<select  onChange={(e)=>{
 newObj.type =  e.target.value
  console.log(newObj.type)
}}>
{menuCategories.map(i=>{
    return <option>{i}</option>
})}
</select>
 <br></br>
<Button onClick={async()=>{

    let resp = await axios.post('http://localhost:3001/add-menu-item', newObj)
console.log(resp.data)
setLgShow(false)
setTimeout(()=> loadMenu(),1000)
}} color="danger">Save</Button>
 </div>)})
 setLgShow(true)
 setTimeout( loadMenu(),5000)

}




    useEffect(()=>{
        loadMenu()
    },[])
    return(<div style={{padding:'60px'}}>
    <p style={{fontSize:'32px', fontWeight:'bold' ,textAlign:'end', color:'gray'}}>MENU EDITOR</p>
  <select onChange={loadMenu} id="catSelect">
{menuCategories.map(i=>{
    return <option>{i}</option>
})}
  </select>
  <Button onClick={()=>{AddNewMenuItem()}} style={{height:'35px'}}>Add New Item</Button>
      <Table striped bordered hover>
  <thead>
    <tr>
    <th>ID</th>
      <th>Entree Title</th>
      <th>Description</th>
      <th>Add ons</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  {data}
    
  </tbody>
</Table>

<Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
         <p style={{fontSize:'16px'}}><b>Item Name:</b></p> 
          {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><b>Item Description:</b></p> 
        {
modalData
        }

        
     
        </Modal.Body>
      </Modal>


    </div>)
} 
export default MenuEditor;