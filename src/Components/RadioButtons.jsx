import React from "react";



const RadioButtons =(props)=>{
    const [active, setActive] = React.useState(3);
    return (
     <div style={{textAlign: 'end', fontSize:'16px'}}>
       <lable><b>{props.label1}</b> </lable><input type="radio" checked={active==0} id="RadioOne" onChange={props.onClick1} onClick={() => {setActive(0);}} /><br></br>
       <lable><b>{props.label2}</b> </lable><input type="radio" checked={active==1} id="RadioTwo" onChange={props.onClick2} onClick={() => setActive(1)}/><br></br>
       <lable><b>{props.label3}</b> </lable><input type="radio" checked={active==2} id="RadioThree" onChange={props.onClick3} onClick={() => setActive(2)} /><br></br>
       <lable><b>{props.label4}</b> </lable><input type="radio" checked={active==3} id="RadioThree" onChange={props.onClick4} onClick={() => setActive(3)} /><br></br>
     </div>
    );
}
export default RadioButtons;