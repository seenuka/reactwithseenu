import React, { useState } from "react";
const Color=()=>
{
    const[color,setState]=useState(' ')
    return(
        <div className="seenu">
            <h2>types of color <p style={{color}}>{color}</p></h2>
            <button onClick={()=>setState('blue')} style={{color:'blue'}}>blue</button>
            <button onClick={()=>setState('red') }style={{color:"red"}}>red</button>
            <button onClick={()=>setState('grey')} style={{color:"grey"}}>grey</button>
            <button onClick={()=>setState('pink')} style={{color:"pink"}}>pink</button>
            <button onClick={()=>setState('yellow')} style={{color:"yellow"}}>yellow</button>
        </div>
    )
}
export default Color