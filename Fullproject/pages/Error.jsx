import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate=useNavigate()
  return (
    <div style={{left:'30%',top:'30%',position:'absolute',transform:'translateX(-50%,50%)'}}>
      <center>
      <h1>
        #404 Not Found
      </h1>
      <button onClick={()=>navigate('/home')}>uh  uh please refresh</button>

    </center>
    </div>
  )
}

export default Error