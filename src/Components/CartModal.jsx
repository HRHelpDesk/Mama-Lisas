import { forEach } from "lodash";
import React, { useEffect, useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import TableItem from "./TableItem";

const CartModal = (props)=>{
 
  let cartData = JSON.parse(localStorage.getItem('cart-data'))
  let cartDataArr = JSON.parse(localStorage.getItem('cart-data'));
  
  


  
  

 

let t2 = 0;
  



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
props.cartLoader
}
 

    
   
  </tbody>
</Table>
<p style={{textAlign:'end'}}><strong>Total:<span>$<span>{props.fTotal}</span></span></strong></p>

      </Modal.Body>
      <Modal.Footer>
          
        <Button onClick={props.onComplete}>Complete Purchase</Button>
      </Modal.Footer>
    </Modal>
)
}

export default CartModal;