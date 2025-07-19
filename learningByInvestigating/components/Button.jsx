import React from 'react'

function Button({theme,setTheme}) {
  
  return (
    <button  onClick={() =>{
        theme==='light'?setTheme('dark'):setTheme('light')
    }}>Click To See Magic</button>
    
  )
}

export default Button