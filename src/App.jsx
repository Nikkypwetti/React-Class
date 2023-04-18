import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Fetch from './components/Fetch'
// import { browserRouter, Routes, Route } from "react-router-dom"




function App() {
  
  const [count, setCount] = useState(0)

  return (
      <>
        <Fetch/>
      </>
  )
}
  
export default App
