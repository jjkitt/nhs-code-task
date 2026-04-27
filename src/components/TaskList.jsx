function TaskList(props) {
	return (
            <li className="list-tem">
            <div className="list-item-wrap">
            <label htmlFor={props.id} className="task-title">{props.name}</label>
            <div className="cat"><p>{props.category}</p></div>
            <div className="checkbox">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} 
            onChange={() => props.toggleTaskCompleted(props.id)} />
            </div>
            </div>
            </li>
		);
}
export default TaskList;