import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Btn from './components/Btn.jsx'
import { ToogleProvider } from './context/ToogleChanger'
import { useEffect } from 'react'

function App() {
  const[themeMode,setThemeMode]=useState("light");

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ToogleProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <Btn />
                      </div>
        
                      <div className="w-full max-w-sm mx-auto">
                          <Card />
                      </div>
                  </div>
              </div>
    </ToogleProvider>
        
  
  )
}

export default App
