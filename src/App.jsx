import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.css'
import Hook from './components/Hook'
import { browserRouter, Routes, Route } from "react-router-dom"




function App() {
  
  const [count, setCount] = useState(0)

  return (
      <>
      <Hook/>

      
      </>
  )
}
  
export default App
