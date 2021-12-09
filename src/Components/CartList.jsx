import React from "react";
import '../assets/css/CartListItem.css'

const CartListItem = (props)=>{


    return(
    <div className="overall-div">

    <div className="product-details">
        <p className="item-name">{props.itemName}</p>
        <p className="sp-inst-heading">SPECIAL INSTRUCTIONS</p>
        <p className="item-description">{props.specialInstruction}</p>
        </div>

        <div className='product-cost'>
            <p className="item-total">${props.unitPrice}</p>
        </div>
        <hr></hr>
    </div>)

} 
export default CartListItem;