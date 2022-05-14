import React, { Component } from "react";
class Parent extends Component
{
    render()
    {
        return(
            <div className="Parent">
                <h1>this is parent class</h1>
                <Child name="seenu" id="418"/>
            </div>
        )
    }
}
class Child extends Parent
{
    render()
    {
        return(
            <div className="child">
            <h3>my name is  {this.props.name}</h3>
            <h3>my id is {this.props.id}</h3>
            </div>
        )
    }
}
export default Parent