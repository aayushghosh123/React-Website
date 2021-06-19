import { useState } from "react"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
function App() {

  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id : 1,
        text:'Doctor Appointment',
        day:' Feb 5th 2021 at 2:30pm',
        reminder : true
    },
    {
        id : 2,
        text:'Meeting at School',
        day:' Feb 6th 2021 at 1:30pm',
        reminder : true
    },
    {
        id : 3,
        text:'Food Shopping',
        day:' Feb 5th 2021 at 2:30pm',
        reminder : false
    }
])

const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleRemainder = (id)=>{
  setTasks(tasks.map((task)=>
    task.id === id?{...task, reminder : !task.reminder}:task
  ))
}

  return (
  <div className='container'>
  <Header onAdd = {()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
  {showAddTask && <AddTask onAdd = {addTask}/>}
  {tasks.length>0?<Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleRemainder}/>:'No Tasks to show'}
  </div>
  );
}

export default App;
