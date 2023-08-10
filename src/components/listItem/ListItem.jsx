import trash from "../../assets/trash.svg";
import {Link} from "react-router-dom";
import editIcon from "../../assets/dark/pencil-dark.svg";
// import redFlag from "../../assets/flag-red.svg"
// import blueFlag from "../../assets/flag-blue.svg"
// import greenFlag from "../../assets/flag-green.svg"
import Priority from "../priority/Priority.jsx";

export default function TodoItem({todo, handleCheckbox, deleteTask}) {
    // const priorityStyle = getPriorityColor(todo.priority);

    return (
        <li key={todo.id} className="task-item">
            <section className="task-left-side-container">
                <label htmlFor={`complete-task-${todo.id}`} className="toggler-wrapper style-8">
                    Finished?
                    <input
                        type="checkbox"
                        id={`complete-task-${todo.id}`}
                        checked={todo.completed}
                        onChange={() => handleCheckbox(todo.id)}
                    />
                    <div className="toggler-slider">
                        <div className="toggler-knob"></div>
                    </div>
                </label>
                <h2 className={todo.completed ? "completed-task" : "uncompleted-task"}>{todo.title}</h2>
            </section>
            <section className="task-right-side-container">
                <button type="button" className="edit-button list-item-btn">
                    <Link to="/task/:id">
                        <img src={editIcon} alt="edit this todo"/>
                    </Link>
                </button>
                <Priority todo={todo}/>
                {/*<div style={priorityStyle} className="task-priority">*/}
                {/*    /!*<p>PRIO {todo.priority}</p>*!/*/}
                {/*</div>*/}
                <button type="button" onClick={() => deleteTask(todo.id)} className="list-item-btn trash-btn">
                    <img src={trash} alt="trash bin"/>
                </button>
            </section>
        </li>
    );
}