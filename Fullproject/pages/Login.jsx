import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/login.css'
function Login() {
  
  const [user,setUser]=useState(false)

  const navigate=useNavigate()
  function handleClick(){
    alert('bikers Inn')
      navigate('/home')
      setUser(true)
      console.log('Logged in done')
  }
  function handleSignup(){
    navigate('/signup')
  }
  return (
   <>
      
        <h1 className='logo'>FashionWorld</h1>

        <div className='container'>
          <div className='content'>
            <h2  className='loginheading'>
              Login
            </h2>
            <form onSubmit={handleClick}  >
            <h3 id='email' >Email</h3>
            <input type='email' required/>
            <h3>Password</h3>
            <input type='password' required/>
            <br/>
            <button type='submit' >Login</button>
            <br/>
            <button type="button" onClick={()=>{
             alert('Login Cancelled')
            }} >Cancel</button>
            <div style={{padding:'5px'}}/>
            <h3 style={{fontFamily:'couirer',color:'blue'}}>Create an account?<p className='signup' onClick={handleSignup}>Sign up!</p></h3>
            </form>
          </div>

        </div>
    </>
  )
}

export default Login