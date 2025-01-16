import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <h1>hi guys</h1>
    )
}


const Wow=React.createElement(
    'a',
    {
        href:"https://google.com",
        target:"_blank"
    },
    "Click here to go to google"
    
)

ReactDOM.createRoot(document.getElementById('root')).render( 
    Wow//a React Element is converted into child nodes as an object
)
ReactDOM.createRoot(document.getElementById('main')).render( 
    <MyApp/>//can be written as MyApp()
)
ReactDOM.createRoot(document.getElementById('main')).render( 
    <App/>//can be written as MyApp()
)


export default Wow;//better avoiding these export i used it to solve hot reloading
//if we are rendering some thing from the same file these may occur.