import { useState } from "react";

const Tasks = () => {
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
  ]);

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
};

export default Tasks;
