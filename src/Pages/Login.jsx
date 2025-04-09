import { useState } from 'react'
import '../index.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import { useNavigate } from 'react-router'


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function HandleLogin(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((user) => {
            navigate('/dashboard')
            console.log(auth.currentUser.displayName)
        })
    }

    return (
        
        <div className=' flex flex-col justify-items-center items-center my-40'>
            <div className='flex flex-col justify-items-center items-center border-2 border-black p-5 rounded-xl'>
           <h2 className='text-5xl font-bold'>Access Account</h2>
           <p className='my-2'>Join the adventure and level up your LIFE!</p>
           <form className='flex flex-col justify-items-center items-center my-5 ' onSubmit={HandleLogin}>
            <input 
            className='border-black border-2  p-1 bg-gray-50 w-80 my-3 rounded-xl'
            type='text'
            placeholder='name@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            />
             <input 
            className='border-black border-2  p-1 bg-gray-50 w-80 my-3 rounded-xl'
            type='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className='my-1 text-2x4'>Forgot your password?</p>
            <button className='bg-black text-white w-40 h-10 rounded-xl hover:bg-gray-700 cursor-pointer duration-200 '>Sign In</button>

            
           </form>
           <p>Or</p>

            <button>Continue with Google</button>
           </div>
        </div>
    )

}