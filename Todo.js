import React,{useState} from 'react'
import './Todo.css'
function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleInputChange = (event) => {
      setTask(event.target.value);
    };
  
    const handleAddTask = () => {
      if (task) {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
      }
      else{
       alert("*please add the task!!!*")
      }
    };
  
    const toggleTaskCompletion = (index) => {
      // console.log('clicked');
      const updatedTasks = [...tasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      setTasks(updatedTasks);
    };
  
    const handleDeleteTask = (index) => {    
      const updatedTasks = tasks.filter((element, i) => i !== index);
      setTasks(updatedTasks);
    };
  
  return (
    <>
      <div className="container">
      <h1>Todo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            >
            <span
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTaskCompletion(index)}
            >
            {task.text}

            </span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Todo
