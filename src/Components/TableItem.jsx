import React from "react";



const TableItem = (props)=>{
return(

    <tr>
        <td>{props.item}</td>
    <td>{props.quantity}</td>
    <td>{'$' + props.total}</td>
    </tr>

)
}
export default TableItem;