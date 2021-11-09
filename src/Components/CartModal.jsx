import React, { useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import TableItem from "./TableItem";


const CartModal = (props)=>{
  let cartData = JSON.parse(localStorage.getItem('cart-data'))
  let cartDataArr = [JSON.parse(localStorage.getItem('cart-data'))];
  let loader;
if(localStorage.getItem('cart-data')){




loader = cartDataArr.map(i=>{
  return(
    
  <TableItem item={i.item} quantity={i.quantity} total={i.total}/>
  )
 })
 
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
      <th>Quantity</th>
      <th>Item Total</th>
    </tr>
  </thead>
  <tbody id="tableBody">
 {
loader
}
 

    
   
  </tbody>
</Table>
<p style={{textAlign:'end'}}><strong>Total:<span>$<span id="totalAmmount">13.00</span></span></strong></p>

      </Modal.Body>
      <Modal.Footer>
          
        <Button onClick={props.onHide}>Complete Purchase</Button>
      </Modal.Footer>
    </Modal>
)
}

export default CartModal;