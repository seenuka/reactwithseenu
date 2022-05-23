import React, { useContext } from 'react'
import { Component } from '../App'
import AppC from './AppC'

export const AppB = () => {
    const count=useContext(Component)
  return (
    <div> <button onClick={ () => count.countDispatch("increment")}>
    increment</button>
<button onClick={ () => count.countDispatch("decrement")}>
    decrement</button>
<button onClick={ () => count.countDispatch("reset")}>
    reset</button>
    <AppC/>
    
    </div>
  )
}
