import { useCallback, useState } from 'react'
import './App.css'


const [length,setLength]=useState(8);
const [number,setNumber]=useState(false)
const [char,setChar]=useState(false)

//const CallBack=useCallback(finally,[dependencies])
//CallBack will accept two parameters a function and array of dependencies 
//macha oka saari manam function create chesthe daani cache lo petti reference ga tisukuntundhi
//main use of callBack vachi like manam oka function ni create chesam and whenever we try to modifiy 
//the values like bar ni drag chestunam kadha appudu re render avvutundhi (new function ni create chestundhi)
//adhe manam useCallback ni use chesam ante same memory address unnapudu re render avvadhu website.



function App() {
  return (
    <>

    </>
  )
}

export default App
