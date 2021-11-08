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
        Brazilian Bibimbap Bowl
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        <p>
        This Bowl Of Latin Seoul Is A Fan Fave That Contains A Selection Of Hearty Latin-Korean Flavors. In Order To Enjoy This Dish Properly, You Can Put The Lid On The Bowl And Shake It Around To Fuse The Flavors And Enjoy! Each Bowl Contains: Sticky Chimichurri Rice, Black Beans, Lettuce, Bulgogi Beef Strips, Mango Pico, Kimchi, Korean Cucumber Salad, Diced Sweet Potatoes, A Sprinkle Of Green Onions, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes.
        </p>
        <div style={{textAlign:"end"}}>
            <span><strong>Add Egg(+ $1.00)</strong> </span><input type="checkbox"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
          <p><strong>$13.00</strong></p>
        <Button onClick={props.onHide}>Add to Bag</Button>
      </Modal.Footer>
    </Modal>
)
}

export default MenuModal;