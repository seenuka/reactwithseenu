import React from 'react'
import { Component } from '../App'
import { useContext } from 'react'

export const AppA = () => {
    const countContext=useContext(Component)
  return (
    <div>
         <button onClick={ () => countContext.countDispatch("increment")}>
            increment</button>
        <button onClick={ () => countContext.countDispatch("decrement")}>
            decrement</button>
        <button onClick={ () => countContext.countDispatch("reset")}>
            reset</button>
    </div>
  )
}
