
import { useNavigate } from "react-router"
export default function Home() {

    const navigate = useNavigate()
    return(
        <div className="flex flex-col items-center my-60">
            <h1 className="font-medium text-4xl">Only YOU Can Make The Change</h1>
            <div>
            <button className="p-3 m-2 bg-blue-600 border-2" onClick={(e) => navigate('/login')}>Sign in</button>
            <button className="p-3 m-2 bg-blue-600 border-2" onClick={(e) => navigate('/register')}>Sign Up</button>
            </div>
        </div>
    )
}