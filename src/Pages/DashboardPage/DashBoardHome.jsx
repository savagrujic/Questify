import { useEffect, useState } from "react"
import { Progress } from "@material-tailwind/react";
import { collection, getDoc, query,getDocs, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase-config";

export default function() {
   
     function RnadomBetwwen(min,max) {
        return Math.floor(Math.random() * (max-min+1))+ min
      }
   
   
    const [selected, setSelected] = useState(false)
    const [quests, setQuests] = useState([]);
      const [selectedQuest, setSelectedQuest] = useState('')
      

      async function AddQuestsFromDatabase() {
        const useresRef = collection(db, 'Users') // referensa kolekcije user
        const questsRef = collection(db, 'dailyquests')
        const qUsers = query(useresRef) // query za sve user korisnike
        const qDailyQuests = query(questsRef) // query za daily questove
        const qUsersSnapshot = await getDocs(qUsers) // vraca niz svih dokumenata u user kolekciji
        const qQuestsSnapshot = await getDocs(qDailyQuests)
        const tempquests =[]
        for(let i = 0; i < 3; i++) {
          const item = qQuestsSnapshot.docs[RnadomBetwwen(0,qQuestsSnapshot.docs.length)]
          tempquests.push({...item.data()})
        }
        await setQuests(tempquests)

        qUsersSnapshot.forEach((user) => {
          if(user.data().displayName === auth.currentUser.displayName) {
            console.log(quests)
            updateDoc(doc(db, 'Users', user.id), {
              DailyQuests: tempquests
            })
          }
        })
        
      }


      useEffect(() => {
        AddQuestsFromDatabase()
      },[])



      function MakeQuestCompleted(name) {

           const updatedQuest = quests.map((quest) => {
                if(quest.name === name) {
                    return {...quest, completed:true}
                }
                return quest
            })
            setQuests(updatedQuest)
      }
    return (
        <div>
            <div className="m-5 max-h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden ">
            <h1 className="text-4xl text-purple-700 font-bold ">Daily Quests</h1>
           
                {quests.map((quest) => (
                    
                     <div onClick={() => {
                        if(!quest.completed) {
                        setSelectedQuest(quest.name)
                        setSelected(!selected) 
                        }
                     }} 
                     className={`my-5 p-2 rounded-2xl flex items-center ${quest.color} transition-all duration-500 ease-in-out`}
                        >
                        <div>
                    <p className="text-2xl font-medium">{quest.name}</p>
                    <p>{quest.description}</p>
                    {selected && selectedQuest === quest.name ? <button onClick= {() => {
                        MakeQuestCompleted(quest.name) 
                        
                        
                        }}className="bg-black p-2 text-white rounded my-3 hover:cursor-pointer">Mark as Completed</button> : ''}
                    </div>
                    {quest.completed ? <p className="ml-auto mr-5">1/1</p> : <p className="ml-auto mr-5">0/1</p>}
                 
                    </div>
                ))}
                <Progress value={50} variant="gradient" />
            </div>
        </div>
    )
}