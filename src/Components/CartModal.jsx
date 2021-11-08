import React from "react";
import { Modal, Button } from "react-bootstrap";


const CartModal = (props)=>{
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
       Items in Cart
      </Modal.Body>
      <Modal.Footer>
          <p><strong>$13.00</strong></p>
        <Button onClick={props.onHide}>Complete Purchase</Button>
      </Modal.Footer>
    </Modal>
)
}

export default CartModal;