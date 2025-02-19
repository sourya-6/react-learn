import React, { useContext } from 'react'
import { createContext } from 'react'


//we are passing default values in these createContext
export const  ThemeContext =createContext({
    themeMode:"light",//just to set when needed can be change it to dark
    //can pass variables as well as methods
    darkTheme:()=>{},
    lightTheme:()=>{},
})



//instead of doing in separate file we declared here itself
export const ThemeProvider=ThemeContext.Provider;


//creating a custom hook so that we can access the props whenever we want using these global hook
export default function useTheme(){
    return useContext(ThemeContext)
}