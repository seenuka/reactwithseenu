import React, { useState } from "react";
const  State=()=>{
    const[inc,dec]=useState(0)
    const Handleincrease=()=>
    {
        dec(inc+1)
    }
    const Handledecrease=()=>
    {
        dec(inc-1)
    }
    return(
        <div className="State">
            inc:{inc}
            <button onClick={Handleincrease}>increase</button>
            <button onClick={Handledecrease}>decrease</button>
        </div>
    )
}
export default State
