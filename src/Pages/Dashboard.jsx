import logo from '../assets/logo.png'
import { IoMdHome } from "react-icons/io";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { auth } from '../config/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function DashBoard() {
    const navigate = useNavigate()
    const [name, setName] = useState('loading...')

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
               <div className='py-2 text-gray-600 font-semibold flex items-center hover:bg-amber-600 '> <IoMdHome className='size-6 mr-2'/><a className='text-xl'>Home</a></div>
               <div className='py-2 text-gray-600 font-semibold flex items-center '><FaClipboardQuestion className='size-6 mr-2' /><a className='text-xl'> Quests</a></div>
               <div className='py-2 text-gray-600 font-semibold flex items-center'><FaTrophy className='size-6 mr-2'  /><a className='text-xl'>Achivments</a></div>
               <div className='py-2 text-gray-600 font-semibold flex items-center'><IoMdSettings className='size-6 mr-2' /><a className='text-xl'>Settings</a></div>
               <div className='mt-auto mb-5 flex items-center'><a className='mx-3'>{name}</a><button onClick={LogOut}>Sign Out</button></div>
            </div>

            <div className=' w-full'>
                <p>Main Content</p>
            </div>
        </div>
    )

}