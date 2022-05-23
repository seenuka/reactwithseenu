import React from "react";
import { useReducer } from "react";
import { AppA } from "./Reducer/AppA";
import { AppB } from "./Reducer/AppB";

import Datafetching from "./Axios/Axios";
import Data from "./Axios/Axiossearh";

export const Component=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {

  const [ count, dispatch ] = useReducer(reducer,initialState)
  return (
    <Component.Provider 
      value={{ countState:count , countDispatch:dispatch }}>
        <div>
          
      Count = { count }
      <AppA />
      <AppB />
      
      <Datafetching/>
      <Data/>
      </div>
    </Component.Provider>
   
  );
}

export default App;
