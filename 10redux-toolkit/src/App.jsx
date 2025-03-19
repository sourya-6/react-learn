import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <button className="relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white font-bold tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-700 active:scale-95">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-all duration-500 ease-in-out hover:opacity-100"></span>
      <span className="absolute inset-0 rounded-lg border border-transparent transition-all duration-300 ease-in-out hover:border-blue-400"></span>
      <span className="relative z-10">Hover Me!</span>
    </button>
  );
}



export default App
