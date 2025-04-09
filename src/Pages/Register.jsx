import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "../config/firebase-config"
import { useNavigate } from "react-router"
export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')



    function RegisterUser(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userInfo) => {
          updateProfile(auth.currentUser, {
            displayName: `${firstName} ${lastName}`
          }).then (() => {
            console.log(auth.currentUser.displayName)
            navigate('/dashboard')
          })
          
        })
    }







    return (
        <div className='flex flex-col justify-items-center items-center my-40'>
            <div className='flex flex-col justify-items-center items-center border-2 border-black p-5 rounded-xl'>
           <h2 className='text-5xl font-bold'>Create Your Account</h2>
           <p className='my-2'>Join the adventure and level up your <span className="font-bold">LIFE!</span></p>
           <form className='flex flex-col justify-items-center items-center my-5 ' onSubmit={RegisterUser}>
            <div className="forms">
                <input className="border-black border-2  p-1 bg-gray-50 w-40 my-3 rounded-xl" 
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input className="border-black border-2  p-1 bg-gray-50 w-40 my-3 rounded-xl" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <input 
            className='border-black border-2  p-1 bg-gray-50 w-80 my-3 rounded-xl'
            type='text'
            placeholder='name@gmail.com'
            value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <input 
            className='border-black border-2  p-1 bg-gray-50 w-80 my-3 rounded-xl'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)
            
            }
            />
            <button className='bg-black text-white w-40 h-10 rounded-xl hover:bg-gray-700 cursor-pointer duration-200 '>Sign Up</button>

            
           </form>
           <p>Or</p>

            <button>Continue with Google</button>
           </div>
        </div>
    )
}