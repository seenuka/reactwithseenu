import React from "react";
import  {useState} from "react";

const Person=()=>
{
    const[output,input]=useState({
        firstname:"seenu",
        lastname:'k',
        city:'chennai',
        pin:'600113'
    })
    const Update=()=>
    input(previousState=>{
        return{...previousState,display:"this is an example"}
    })
    return(
        <div className="Person">
            <h3>My firstname is {output.firstname}
            </h3>
            <button onClick={Update}>click me</button>
            <h2>this is updated hook:{output.Update}</h2>

        </div>
    )
}
export default Person