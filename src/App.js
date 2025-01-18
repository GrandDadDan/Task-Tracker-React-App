import {useState} from 'react'
import Header from '../src/components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Date with the girlfriend",
      day: "Feb 6th at 6:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Football Match",
      day: "Feb 7th at 9:00am",
      reminder: false,
    },
  ])
  
// Delete Task 
const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
setTasks(tasks.map((task) => task.id === id
? {...task, reminder: !task.reminder}: task))
}

  return (
    <div className="container">
      <Header /> {/* No need to pass props; it will use defaultProps */}
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />: 'There is no more tasks left.'}
    </div>
  );
};

export default App;