import React, { useContext, useState } from 'react'
import UserContext from '../context/UseContext'
import Profile from './Profile'

function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const{setUser}=useContext(UserContext)
    const Submit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div >
        <h2 className=' m-20 text-3xl font-bold  '>Login Dashboard</h2>
        <input type="text" className='m-1 border-1 border-black text-black bg-white px-2 py-1 rounded-xl m:2 ' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
        <input type="password"  className=' m-1 border-1 border-black text-black bg-white px-2 py-1 rounded-xl m:2' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button  className='border-2 border-white text-white bg-blue-600 px-3 py-1 rounded-xl' onClick={Submit}>Submit</button>
        <Profile className=''/>
    </div>
  )
}

export default Login