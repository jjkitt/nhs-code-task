import { useEffect, useRef, useState } from "react";

function AddTask(props) {
// hooks, save category to localStorage
const [name, setName] = useState("");
const [category, setCategory] = useState(() => {
  return localStorage.getItem('lastCategory') || '';
});
useEffect(() => {
  localStorage.setItem('lastCategory', category);
}, [category]);

//refocus input ref
const taskNameRef = useRef(null);

//handle change, handle submit
function handleChange(e) {
  setName(e.target.value);
}
  function handleSubmit(event) {
  event.preventDefault();
  props.newTask(name, category);
  setName("");
  taskNameRef.current.focus();
}

	return (
		<form className="add-new-task" onSubmit={handleSubmit}>
          <label htmlFor="inputNewTask">
          Task Name
            <input type="text" id="inputNewTask" value={name} onChange={handleChange} ref={taskNameRef} />
          </label>
          <label htmlFor="catSelect">
          Task Category
            <select required name="categories" id="catSelect" value={category}
 			  onChange={(e) => setCategory(e.target.value)}  >
 			  <option value="" disabled>Select Category</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Garden">Garden</option>
            </select>
          </label>
          <button type="submit">Add</button>
          </form>
		);
}
export default AddTask;