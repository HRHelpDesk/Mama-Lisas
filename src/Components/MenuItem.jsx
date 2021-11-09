import React from "react";
import { Button } from "react-bootstrap";
import { MenuEntrees } from "../DataSheets/MenuItems";
const MenuItem = (props)=>{

//     const findIndexOfItem = (i)=>{
//         const found = MenuEntrees.find(e => e === i);

// console.log(found);
//     }
return(
    <div>
    <p><strong>{props.itemName}</strong></p>
    <p>{props.itemDescription}</p>

<p style={{textAlign:'end'}}><strong>{props.unitPrice}</strong></p>
<p style={{textAlign:'end'}}><Button onClick={props.onClick}>Select</Button></p>
<hr/>
</div>
)
}

export default MenuItem;