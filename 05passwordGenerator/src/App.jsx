import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(10)
  const [char,setChar]=useState(15)
  const [password,setPassword ]=useState("")
 
 //const CallBack=useCallback(finally,[dependencies])
 //CallBack will accept two parameters a function and array of dependencies 
 //macha oka saari manam function create chesthe daani cache lo petti reference ga tisukuntundhi
 //main use of callBack vachi like manam oka function ni create chesam and whenever we try to modifiy 
 //the values like bar ni drag chestunam kadha appudu re render avvutundhi (new function ni create chestundhi)
 //adhe manam useCallback ni use chesam ante same memory address unnapudu re render avvadhu website.
 
 const passwordGenerator=useCallback(()=>{
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(number) str+="0123456789";
     if(char) str+="!@#$%^&*";
     for (let i = 1; i <= length; i++) {
       let char= Math.floor(Math.random()*str.length+1)
       //one because to include 0 index and floor because to convert the float to nearest int
       pass+=str.charAt(char)
     }
     setPassword(pass)
 },[length,number,char,setPassword])

//useRef is just like useState but useState will re render every time a value have changed.
//but useRef wouldn't re render until it is updated via setCount.
 const passwordRef=useRef(null);

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password);
  

 },[password])

 //macha useeffect lo main concept vachi sidefunctions like apis ki vadatham manam 
 //ante if any modifications inf dependencies only cause the useEffect to occur
 //useEffect runs after render macha
 //no dependencies ante function mount ayyetapudu matram render avvutundhi
//  useEffect(() => {}, [dependency]) → Runs when dependency changes.
// useEffect(() => {}) → Every render ki execute avtadi (not recommended).

 useEffect(()=>{
  passwordGenerator()
 },[length,number,char,passwordGenerator])

  return (
    <>
        
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none bg-amber-50 w-full py-1 px-3"
            placeholder="Password"
            readOnly//helps that the password cannot be modified
           ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-amber-200 '
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2 text-white'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
            setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
        
    </>
  )
}

export default App
