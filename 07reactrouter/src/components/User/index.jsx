
import { useParams,useLocation } from 'react-router-dom'
function User() {
    const {userid}=useParams();
    const location=useLocation()
  return (
    <>
    <div className='bg-gray-300 text-3xl text-fuchsia-400 text-center h-30 p-4 m-2.5'>User:{userid}</div>
    <h1>Current Page: {location.pathname}</h1>
    </>

  )
}

export default User