import React from "react";



const TableItem = (props)=>{
return(

    <tr>
        <td>{props.item}<p>{props.spInstructions}</p></td>
   
    <td>{'$' + props.total}</td>
    </tr>

)
}
export default TableItem;