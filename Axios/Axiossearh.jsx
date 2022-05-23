import React, { useEffect, useState } from "react";
import axios from "axios";
function Data()
{
    const [posts,setposts]=useState([])
    const [dat,setdata]=useState(0)
    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${dat}`)
        .then(response=>{
            console.log(response)
            setposts(response.data )
        
        }).catch( error => {
        console.log(error)})
    })
    return(
        <div>
            <input  type='text' value={dat} onChange={event=>setdata(event.target.value)}br/>
            {posts.title}
        </div>
    )

}
export default Data