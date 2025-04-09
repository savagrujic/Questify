import logo from '../assets/logo.png'

export default function DashBoard() {

    return (
        <div className='flex'>
            <div className='flex flex-col px-10 items-left  w-screen h-screen flex-1/5 border-r-2 border-gray-400' >
               <img className='w-40 my-5' src={logo} />
               <div className='my-1'><a>Home</a></div>
               <div className='my-1'><a>Quests</a></div>
               <div className='my-1'><a>Profile</a></div>
               <div className='my-1'><a>Achivments</a></div>
               <div className='my-1'><a>Settings</a></div>
            </div>

            <div className=' w-full'>
                <p>Main Content</p>
            </div>
        </div>
    )

}