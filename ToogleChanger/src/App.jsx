import {useEffect, useState} from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";




function App(){
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
      setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.getElementById('root').classList.remove('light','dark')
    document.getElementById('root').classList.add(themeMode)
  },[themeMode])

  return(
   <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
       
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
   </ThemeProvider>

  )
}
export default App;