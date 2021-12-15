import React from "react";
import Loading from '../assets/img/loading.png'
import 'animate.css'

const Loader = ()=>{
    return(
        <div className="animate__animated animate__pulse " style={{display:'flex', justifyContent:'center', marginTop:'35%' }}>
            <img width="400px" height="auto" src={Loading}/>
        </div>
    )
}

export default Loader;