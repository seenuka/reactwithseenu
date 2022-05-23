import React from 'react'
import { useContext } from 'react'
import { Component } from '../App'


const AppC = () => {
    const count=useContext(Component)
    return (
      <div> <button onClick={ () => count.countDispatch("increment")}>
      increment</button>
  <button onClick={ () => count.countDispatch("decrement")}>
      decrement</button>
  <button onClick={ () => count.countDispatch("reset")}>
      reset</button>
  </div>
  )
}
export default AppC