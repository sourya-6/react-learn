import React, { useState,useEffect } from 'react'

function InputBox() {
  const [state,setState] = useState();

  const handleChange = (e) =>{
    setState(e.target.value)
  }
  useEffect(() => {
    console.log("State Updated",state);  
    
    
  }, [state])


  useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // cleanup when component unmounts or before effect re-runs
  return () => {
    clearInterval(timer);
    console.log("Cleanup done");
  };
},[state]);

  

  return (
    <>
        <input type="text" value={state} onChange={handleChange}  className='bg-white text-black'/>
        <h1>Hello {state}</h1>
    </>
  )
}

export default InputBox