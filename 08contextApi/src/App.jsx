import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {


  //without UserContextProvider we can like directly import api here and declare the values here by UserContext.Provider

  return (
    <div className='bg-black text-white w:max h-screen flex justify-center items-center '>
       <UserContextProvider>
          <Login />
     
    </UserContextProvider>
    </div>
  )
}

export default App
