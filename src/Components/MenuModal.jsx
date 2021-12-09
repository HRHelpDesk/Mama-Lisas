import React from "react";
import { Modal, Button } from "react-bootstrap";


const MenuModal = (props)=>{
return(
    <Modal
      {...props}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.description}
<p></p>
      <div style={{fontWeight:'bold', textAlign:'end'}} id={props.adds}>
        <label>Add Sunny Side up egg on top(+ $1.00):<span>&nbsp; </span></label><input onClick={props.onCheckboxClick} type="checkbox" id="addValue"/>
      </div>
      <div><textarea onChange={props.onSpInstructChange} style={{width:'100%', height:'100px'}} placeholder="Please enter in any special instructions you might have."></textarea></div>
      </Modal.Body>
      <Modal.Footer>
          <p><strong>${props.ammount}</strong></p>
        <Button onClick={props.onAdd}>Add to Bag</Button>
      </Modal.Footer>
    </Modal>
)
}

export default MenuModal;