import React from "react";



const TableItem = (props)=>{
return(

    <tr>
        <td>{props.item}<p>{props.spInstructions}</p><p style={{fontSize: '12px', cursor:'pointer', color:'red'}} onClick={props.removeItemOnClick}>remove</p></td>
   
    <td>{'$' + props.total}</td>
    </tr>

)
}
export default TableItem;