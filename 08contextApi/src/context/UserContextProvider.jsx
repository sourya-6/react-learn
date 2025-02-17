import React from 'react'
import UserContext from './UseContext'

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)

    //double curly brackets used because first curly for declaring values and second curly for the set
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider