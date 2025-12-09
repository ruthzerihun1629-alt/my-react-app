import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Mycounter() {
  const [count, setCount] = useState(0)
function increment(){
  setCount(count + 1);  
  console.log("local:", count)
}
function decrement(){
  if (count>0){
  setCount(count - 1)
  console.log("local:", count)}
}
function reset(){
  setCount(0)
}
  return (
  <div>
    <h1>counter: {count}</h1>
  <button onClick={increment}>increase local</button>
   <button onClick={decrement}>decrement local</button>
    <button onClick={reset}>reset local</button>
  </div>
  )

}
export default Mycounter;
 
