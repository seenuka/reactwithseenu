import React, { Component } from 'react'
import '../Assginment1/style.css'

class Forms extends Component
{
    constructor(props)
    {
    super(props)
    this.state={
        name:' ',
        mobilenumber:' ',
        email:' ',
        pass:' ',
        conpass:' '
    }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username: event.target.value,
            
        })
    }
    
    
    handleSubmit(event)
    {
        alert('Registration Sucessfull')
        event.preventDefault()
    }
    handlecancel(event)
    {
        alert('Registration Cancelled')
        event.preventDefault()
    }
    

render(){

return(
    <div>
    <h2 className='primary'>Registration form</h2>
<form onSubmit={this.handleSubmit}>
            <label className='style'>
                Enter your name:
                <input type='text' name='Name' value={this.state.username}  onChange={this.handleUsernameChange}  required/>
            </label>
            <br/>
            <label className='style'>
                Enter your Mobile Number:
                <input type="text" name='Number'  required/>
            </label>
        <br/>
            <label className='style'>
                Enter your email:
                <input type='email' name='Email'  required></input>
            </label><br/>
            <label className='style'>
                create Password:
                <input type='password' name='Email'  required></input>
            </label><br/>
            <label className='style'>
                confirm Password:
                <input  type="password" name='Email' required></input>
            </label><br/>
            <label>
                <input className='button' type='submit' value="submit"/>
            </label>
            <label>
                <button onClick={this.handlecancel}
                 >Cancel</button>
            </label>


        </form>
        </div>
)
}
}
export default Forms
