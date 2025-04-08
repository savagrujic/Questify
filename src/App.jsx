import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          
        <Route path='/' element = {<p className='text-3xl'>Home</p>} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
