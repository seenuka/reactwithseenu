import React from "react"
import {Component} from "react"
class Seenu extends Component
{
    constructor()
    {
        super()
        this.state={
            firstname:"seenu",
            lastname:'k'
        }
    }
    render()
    {
        return(
            <div>
            <h2>my firstname is  {this.state.firstname}</h2>
            <h2>my last name is {this.state.lastname}</h2>
            </div>
        )
    }
}
export default Seenu