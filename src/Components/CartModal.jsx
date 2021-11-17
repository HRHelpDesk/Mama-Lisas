import { forEach } from "lodash";
import React, { useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import TableItem from "./TableItem";

const CartModal = (props)=>{
  let cartData = JSON.parse(localStorage.getItem('cart-data'))
  let cartDataArr = JSON.parse(localStorage.getItem('cart-data'));
  let loader;
let finalTotal =  0
let t2 = 0;
  function getArraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}
if(localStorage.getItem('cart-data')){




loader = cartDataArr.map(i=>{
  return(
    
  <TableItem item={i.itemName}  total={i.unitPrice} spInstructions={i.specialInstruction}/>
  )
 })

 let unitPriceArr = []
cartDataArr.forEach(i =>{

  unitPriceArr.push(i.unitPrice)
})

const toNumArr = arr => arr.map(Number);

let unitPriceIntArr = toNumArr(unitPriceArr)
console.log(unitPriceArr)
function getSum(ary){
  return ary.reduce(function(sum, value) {
    return sum + value;
  }, 0);
}



 finalTotal = getSum(unitPriceIntArr)

} else{
  loader = "No Items"
}
return(
    <Modal
      {...props}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Checkout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Item</th>
      
      <th>Item Cost</th>
    </tr>
  </thead>
  <tbody id="tableBody">
 {
loader
}
 

    
   
  </tbody>
</Table>
<p style={{textAlign:'end'}}><strong>Total:<span>$<span>{finalTotal.toFixed(2)}</span></span></strong></p>

      </Modal.Body>
      <Modal.Footer>
          
        <Button onClick={props.onHide}>Complete Purchase</Button>
      </Modal.Footer>
    </Modal>
)
}

export default CartModal;