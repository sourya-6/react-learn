
// import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    //macha ikkada manam try chesinattu ayithe some what lag undhi macha personal experience
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sourya-6')
    //     .then((user)=>user.json())
    //     .then((data)=>{
    //         setData(data);
    //         console.log(data)
    //     })
    // },[])
  return (
    
    
        <div className='bg-gray-300 text-black justify-center align-middle'>Github Follwers:{data.followers}
        <img className='w-96' src={data.avatar_url} alt="" />
        </div>
        
    
    
  )
}


export default Github
export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/sourya-6')
    return response.json()
}

//on using these loader we can say that the data refresh rate (accessible rate) faster