
import { useState } from 'react'
import './App.css'
import Red from './components/Red'

function Purple() {
  document.body.style.backgroundColor="purple"
}
function Black(){
  document.body.style.backgroundColor="black"
}
function White(){
  document.body.style.backgroundColor="white"
}

function App() {
  
  const [color,setColor]=useState("olive")
  return (
    
      <div className='w-screen h-screen duration-200 'style={{backgroundColor:color}} >
          <div className='  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-4'>
            <div className='flex flex-wrap justify-center gap-4 px-2 py-2 rounded-xl' style={{backgroundColor:"white"}}>
            <button className='bg-blue-500 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("blue")}}>Blue</button>
            <button className='bg-pink-500 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("pink")}}>Pink</button>
            <button className='bg-green-500 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("green")}}>Green</button>
            <button className='bg-purple-500 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("purple")}}>Purple</button>
            <button className='bg-cyan-500 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("magenta")}}>Magenta</button>
            <button className='bg-fuchsia-950 px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("lavender")}}>Lavender</button>
            <button className='bg-black px-3 py-1 rounded-xl text-white' onClick={()=>{setColor("black")}}>Black</button>
            <button className='bg-white outline-1 px-3 py-1 rounded-xl text-black' onClick={()=>{setColor("White")}}>White</button>
            </div>
        </div>
      </div>
      
    
  )
}

export default App
