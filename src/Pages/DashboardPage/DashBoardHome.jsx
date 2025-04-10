import { useState } from "react"
import { Progress } from "@material-tailwind/react";

export default function() {
   
     function ProgressDefault() {
        return <Progress value={50} />;
      }
   
   
    const [selected, setSelected] = useState(false)
    const [quests, setQuests] = useState([
        {
          name: "Physical Quest",
          description: "Run 5 kilometers in 30 minutes",
          xp: 50,
          category: "Physical",
          type: "Exercise",
          difficulty: "Medium",
          completed: false,
          deadline: 0,
          color: 'bg-green-200'
        },
        {
          name: "Mental Quest 1",
          description: "Read a book for 30 minutes",
          xp: 40,
          category: "Mental",
          type: "Learning",
          difficulty: "Easy",
          completed: false,
          deadline: 0,
          color: 'bg-purple-200'
        },
        {
          name: "Social Quest 1",
          description: "Say good morning to 10 people",
          xp: 30,
          category: "Social",
          type: "Communication",
          difficulty: "Easy",
          completed: false,
          deadline: 0,
          color: 'bg-blue-200'
        },
      ]);
      const [selectedQuest, setSelectedQuest] = useState('')
      
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
            <div className="m-7">
            <h1 className="text-4xl ">Daily Quests</h1>
           
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