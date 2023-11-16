import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Tems from './Tems'
import Users from './Users'
import Friends from './Friends'

function App() {

function handleClick(){
  alert('button clicked')
}

const handleClick2 = () =>{
  alert('button 2 Clicked')
}

const addToFive =(num) =>{
  alert(num + 5)
}
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>

      <Users></Users>
      <Tems></Tems>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Five</button>
    </>
  )
}

export default App
