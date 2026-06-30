import { useState } from 'react'
import './App.css'
import Kamkaro from "./components/Kamkaro";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Uncomment these to see the main page again */}
      {/* <Navbar/> */}
      {/* <Kamkaro/> */}
      
      {/* Displaying the newly designed Signup Page */}
      <Signup />
    </>
  )
}

export default App
