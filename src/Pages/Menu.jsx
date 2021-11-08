import React from "react";
import NavigationBar from '../Components/NavigationBar.jsx';
import CarouselComponent from "../Components/Carousel.jsx";
import MenuCategories from "../DataSheets/MenuItems.jsx";
import MenuCat from "../Components/MenuCat.jsx";
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';


const Menu = ()=>{
    const [lgShow, setLgShow] = useState(false);

    return(
        <div>
           <NavigationBar/>
           <CarouselComponent/>
           <div style={{textAlign:"center", marginTop:'20px'}}>
               <h1 style={{color:'#e32727'}} className="food-font">MENU</h1>
           </div>
           <div style={{textAlign:'center'}}>
           <div className="wrapper">
               
           {   MenuCategories.map(i=>{
                 return(
                     <MenuCat Name={i.name} img={i.img} onClick={() => setLgShow(true)}/>

                 )
             }) }


           </div>
         

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
            <p><strong>Brazilian Bibimbap Bowl</strong></p>
            <p>This Bowl Of Latin Seoul Is A Fan Fave That Contains A Selection Of Hearty Latin-Korean Flavors. In Order To Enjoy This Dish Properly, You Can Put The Lid On The Bowl And Shake It Around To Fuse The Flavors And Enjoy!
Each Bowl Contains: Sticky Chimichurri Rice, Black Beans, Lettuce, Bulgogi Beef Strips, Mango Pico, Kimchi, Korean Cucumber Salad, Diced Sweet Potatoes, A Sprinkle Of Green Onions, Toasted Sesame Seeds, And A Dusting Of Mild Gochugaru Flakes.</p>
<p style={{textAlign:'end'}}><strong>13.00</strong></p>
<p style={{textAlign:'end'}}><Button>Select</Button></p>
<hr/>

<p><strong>Bulgogi Bowl</strong></p>
            <p>This Bowl Is Korean Comfort Food. It Contains Sticky Rice, Bulgogi Ground Beef, Korean Radish, Sprouts, Guacamole, Kimchi, Cucumber Salad, Korean Carrots, Mildly Spicy Mayo, A Sprinkle Of Green Onions, And A Dusting Of Mild Gochugaru Flakes. Don’t Forget To Shake And Enjoy!</p>
<p style={{textAlign:'end'}}><strong>12.00</strong></p>
<p style={{textAlign:'end'}}><Button>Select</Button></p>
<hr/>
<p><strong>Japchae (Chop-Chae) Noodle Bowl</strong></p>
            <p>Japchae, Sweet Potato Noodles (A.K.A. Glass Noodles) Stir Fried With Vegetables And Chicken or 6 Korean
Meatballs, Is One Of Korea’s Best-Loved Dishes. It Reheats Well And Is A Favorite For People Who Are Carefully
Starting To Try Korean Food.</p>

<p>
Each Bowl Contains: Sweet Potato (Glass) Noodles Mixed With A Stir Fry Of Chicken, Onions, Peppers, Mushrooms, Broccoli, And Carrots. The Sauce Has A Familiar Asian Flavor With A Touch Of South American Flare.</p>
<p style={{textAlign:'end'}}><strong>12.00</strong></p>
<p style={{textAlign:'end'}}><Button>Select</Button></p>
        </Modal.Body>
      </Modal>
           </div>

           
        </div>
    )
}
export default Menu;