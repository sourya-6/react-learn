import { createContext,useContext } from "react";


const ToogleChanger=createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{},
    
})

export const ToogleProvider=ToogleChanger.Provider;


//custom hook


export default function useTheme(){
    return useContext(ToogleProvider)
}