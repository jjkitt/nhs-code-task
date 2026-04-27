import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import AddTask from "./components/AddTask";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

//filter logic
const FILTER_MAP = {
  All: () => true,
  Work: (task) => task.category === 'Work',
  Home: (task) => task.category === 'Home',
  Garden: (task) => task.category === 'Garden',
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  //add hook for tasks and save to local storage
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
});
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

// checkbox ticked
  function toggleTaskCompleted(id) {
    console.log(id);
     const updatedTasks = tasks.map((task) => {
    if (id === task.id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
  console.log(updatedTasks);
}

// add hook for filters
const [filter, setFilter] = useState("All");

// filters
const filterList = FILTER_NAMES.map((name) => (
  <Filter key={name} name={name} isPressed={name === filter}
    setFilter={setFilter} />
));

// map the task list
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <TaskList  id={task.id} name={task.name} category={task.category} 
    completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted}/>
    ));

  // add unique ID to each new task
  function newTask(name, category) {
  const taskItem = { id: `task-${nanoid()}`, name, category, completed: false };
  setTasks([...tasks, taskItem]);
}

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div className="new-task">
        <h2>Add New Task</h2>
          <AddTask newTask={newTask} /> 
      </div>
      <div className="my-tasks">
        <h2>My Tasks</h2>
        <div className="filter">
          <p>Fitler By Category:</p>
          {filterList}
          </div>
        <div className="title-bar">
          <p>Task Title</p>
          <p>Task Category</p>
          <p>Status</p>
        </div>
        <div className="current-tasks">
          <ul role="list">
           {taskList}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;