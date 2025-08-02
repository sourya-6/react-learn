import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'

// file name and the function name can be different
export default function Protected({children,authentication=true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector((state)=>state.auth.status)

    useEffect(()=>{
        //authentication is true and 
        // status is false since it is not in login stated so flase!=true which is true
        // (authstatus!= authentication) ==> true
        //if(true && true) ==>satisfies so user is not authenticated so redirects to login page
        if(authentication && authStatus!== authentication){
            navigate("/login")
        }
        //these page is like guest page
        else if(!authentication && authStatus !== authentication){
            navigate("/");//home route
        }    
        setLoader(false)
    },[authStatus,authentication,navigate])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

