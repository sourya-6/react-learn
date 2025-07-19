import React, { useState } from 'react'

function ConditionalRendering() {
    const [isActive,setIsActive] = useState(true)
    const toogle = ()=>{
        setIsActive((prev)=>!prev)
    }
  return (
    <div>
        <h1>User is Active</h1>
        {
            isActive ? <p>Hello Guys</p> : <p> Good Morning</p>
        }
        <button className=" px-4 py-2 bg-blue-600 text-amber-50 border-b-cyan-50 rounded-xl hover:bg-blue-300 active:underline-offset-1" onClick={toogle}>Toggling button</button>
    </div>
  )
}

export default ConditionalRendering