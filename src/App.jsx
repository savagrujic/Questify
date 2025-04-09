import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          
        <Route path='/' element = {<p className='text-3xl'>Home</p>} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/dashboard' element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
