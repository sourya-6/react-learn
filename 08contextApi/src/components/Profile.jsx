import React from 'react'
import UserContext from '../context/UseContext'
import { useContext } from 'react'

function Profile() {

     const{user}=useContext(UserContext)

    if(!user) return <div className='m-10'>Please enter details:</div>
    return <div className='my-10 bg-white text-black'>Welcome: {user.username}</div>
}

export default Profile