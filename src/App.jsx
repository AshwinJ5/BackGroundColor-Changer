import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [color,setColor]=useState("white")
useEffect(()=>{
  document.body.style.backgroundColor=color
},[color])

  const clickMe=(color)=>{
    setColor(color)
  }
  return (
    <div className='backGround align-content-center'>
      <h1>BackGround Color Changer</h1>
     <button style={{background:"red",color:"white", width:"80px"}} onClick={()=>{clickMe("red")}}  className="btn m-3  rounded-pill">
      Red
     </button>
     <button style={{background:"green",color:"white", width:"80px"}} onClick={()=>{clickMe("green")}}  className="btn m-3 rounded-pill">
      Green
     </button>
     <button style={{background:"blue",color:"white", width:"80px"}} onClick={()=>{clickMe("blue")}}  className="btn m-3 rounded-pill">
      Blue
     </button>
     <button style={{background:"yellow",color:"black", width:"80px"}} onClick={()=>{clickMe("yellow")}}  className="btn m-3 rounded-pill">
      Yellow
     </button>
     <button style={{background:"aqua",color:"black", width:"80px"}} onClick={()=>{clickMe("aqua")}}  className="btn m-3 rounded-pill">
      Aqua
     </button>
     <button style={{background:"purple",color:"white", width:"80px"}} onClick={()=>{clickMe("purple")}}  className="btn m-3 rounded-pill">
      Purple
     </button>
     
    </div>
  )
}

export default App
