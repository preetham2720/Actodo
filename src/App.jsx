import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Landing from "./Pages/Landing"
import { useState } from "react"

function App() {
  const [user,setuser] = useState([
    {
        username : "test",
        password : "123"
    }
  ])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setuser={setuser} />} />
      <Route path="/signup" element={<Signup user={user} setuser={setuser} />} />
      <Route path="/home" element={<Landing />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
