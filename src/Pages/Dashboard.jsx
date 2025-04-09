import logo from '../assets/logo.png'
import { IoMdHome } from "react-icons/io";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { auth } from '../config/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
export default function DashBoard() {
    const navigate = useNavigate()
    const location = useLocation()


    const [name, setName] = useState('loading...')

    //Proveri Da li je url jednak sa stringom
    const isActive = (path) => location.pathname === path

    const navItem = (path) => `cursor-pointer ${isActive(path)
        ? 'py-2 text-gray-600 font-semibold flex items-center bg-blue-400 rounded-xl '
        : 'py-2 my-1 text-gray-600 font-semibold flex items-center hover:bg-blue-100 hover:rounded-xl duration-300 '
    }`
    
    //Postavi Ime Korisnika
    onAuthStateChanged(auth, (user) => {
        setName(user.displayName)
    })


    //LogOutuj Korisnika
    function LogOut() {
    signOut(auth)
        .then(() => {
            navigate('/login')
    })
}


    return (
        <div className='flex'>
            <div className='flex flex-col px-10 items-left  w-screen h-screen flex-1/5 border-r-2 border-gray-200' >
               <img className='w-40 my-5 ' src={logo} />
               <div className= {navItem('/dashboard/home')}> <IoMdHome className='size-6 mr-2'/><a onClick= {() => navigate('/dashboard/home')}className='text-xl'>Home</a></div>
               <div className =  {navItem('/dashboard/quests')}><FaClipboardQuestion className='size-6 mr-2' /><a onClick= {() => navigate('/dashboard/quests')} className='text-xl'> Quests</a></div>
               <div className = {navItem('/dashboard/achivment')} ><FaTrophy className='size-6 mr-2'  /><a onClick= {() => navigate('/dashboard/achivment')}  className='text-xl'>Achivments</a></div>
               <div className= {navItem('/dashboard/profile')}><IoMdSettings className='size-6 mr-2' /><a onClick= {() => navigate('/dashboard/profile')}  className='text-xl'>Profile</a></div>
               <div className= 'mt-auto mb-5 flex items-center'><a className='mx-3'>{name}</a><button onClick={LogOut}>Sign Out</button></div>
            </div>

            <div className=' w-full'>
              <Routes>
                <Route index element = {<Navigate to='home' />}/>
                <Route path='home' element={<p>Home</p>} />
                <Route path='quests' element={<p>Quest</p>} />
                <Route path='achivment' element={<p>Achivments</p>} />
                <Route path='profile' element={<p>Profile</p>} />
              </Routes>
            </div>
        </div>
    )

}