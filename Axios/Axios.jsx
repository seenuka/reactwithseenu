import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react';
function Datafetching()
{
    const [posts,setposts]=useState([])


useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>
        {
            console.log(response)
            setposts(response.data)
        }).catch(error=>{
            console.log(error)
        })
    
})
return(
    <div>
        <ul>
            {
                posts.map(post=>(
                    <li >{post.title}</li>
                ))
            }
        </ul>
    </div>

)
        }
        export default Datafetching