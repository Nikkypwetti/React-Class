import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.css'
import Hook from './components/Hook'
import Fetch from './components/fetch'

function App() {
  let myDetails = {
    myName: 'John Doe',
    age: 30,
    location: 'New York'
  }
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Hook/> */}
    {/* <Fetch/> */}
    </>
  )
}

export default App
