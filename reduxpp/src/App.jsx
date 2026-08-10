import React, { useState } from "react"
import Parent from "./components/Parent"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
function App() {
let dis = useDispatch()
let y = useSelector((state)=>state)
  return (
    <React.Fragment>
     <p className="h1 text-center bg-light">App.jsx Component :{y} </p>
      <button onClick={()=>dis({type:'DECREMENT'})} className="btn btn-secondary btn-sm">Decrease</button>
     <Parent />
    </React.Fragment>
  )
}

export default App
