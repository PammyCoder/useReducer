import { useReducer } from 'react'
import './App.css'

const initialState=0;
const reducer= (state, action) =>{
  if(action.type === "INCREMENT"){
    return state+1;
  }
  if(action.type === "DECREMENT"){
    return state-1;
  }
return state;
}

function App() {
  // const [count, setCount] = useState(0)
const [state, dispatch]=useReducer(reducer, initialState);
  return (
    <>
    <div>
      <h1>useReducer</h1>
      <p>Show : {state}</p>
      <div>
      <button onClick={()=> dispatch({type : "INCREMENT"})}>Increment</button><br/><br/>
      <button onClick={()=> dispatch({type : "DECREMENT"})}>Decrement</button>
      </div>
      </div>
    </>
  )
}

export default App
