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
import DashBoardHome from './DashboardPage/DashBoardHome';
export default function DashBoard() {
    const navigate = useNavigate()
    const location = useLocation()


    const [name, setName] = useState('loading...')

    //Proveri Da li je url jednak sa stringom
    const isActive = (path) => location.pathname === path

    //Postavi css activnog diva
    const navItem = (path) => `cursor-pointer ${isActive(path)
        ? 'py-2 px-5 text-purple-300 font-semibold flex items-center bg-gray-800 rounded-xl '
        : 'py-2 px-5 my-1 text-purple-300 font-semibold flex items-center hover:bg-blue-50 hover:rounded-xl duration-100 '
    }`
    
    //Postavi Ime Korisnika
    onAuthStateChanged(auth, (user) => {
        setName(user.displayName)
    })

    //LogOutuj Korisnika
    function LogOut() {
    signOut(auth)
        .then(() => {
            navigate('/')
    })
}


    return (
        <div className='flex'>
            <div className='flex flex-col bg-gray-900 px-10 items-left  w-screen h-screen flex-2/7 border-r-2 border-gray-200' >
               <img className='w-40 my-5 invert ' src={logo} />
               <div onClick= {() => navigate('/dashboard/home')} className= {navItem('/dashboard/home')}> <IoMdHome className='size-6 mr-2'/><a className='text-xl'>Home</a></div>
               <div onClick= {() => navigate('/dashboard/quests')} className =  {navItem('/dashboard/quests')}><FaClipboardQuestion className='size-6 mr-2' /><a  className='text-xl'> Quests</a></div>
               <div onClick= {() => navigate('/dashboard/achivment')} className = {navItem('/dashboard/achivment')} ><FaTrophy className='size-6 mr-2'  /><a   className='text-xl'>Achivments</a></div>
               <div onClick= {() => navigate('/dashboard/profile')}  className= {navItem('/dashboard/profile')}><IoMdSettings className='size-6 mr-2' /><a  className='text-xl'>Profile</a></div>
               <div className= 'mt-auto mb-5 flex items-center'><a className='mx-3'>{name}</a><button onClick={LogOut}>Sign Out</button></div>
            </div>

            <div className=' w-full bg-gray-800'>
              <Routes>
                <Route index element = {<Navigate to='home' />}/>
                <Route path='home' element={<DashBoardHome />} />
                <Route path='quests' element={<p>Quest</p>} />
                <Route path='achivment' element={<p>Achivments</p>} />
                <Route path='profile' element={<p>Profile</p>} />
              </Routes>
            </div>
        </div>
    )

}