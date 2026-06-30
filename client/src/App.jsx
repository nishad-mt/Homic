import { useState } from 'react'
import './App.css'
import Kamkaro from "./components/Kamkaro";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Kamkaro/>
    </>
  )
}

export default App
