import trash from "../../assets/trash.svg";
import {useNavigate} from "react-router-dom";
import editIcon from "../../assets/dark/pencil-dark.svg";
import Priority from "../priority/Priority.jsx";


export default function TodoItem({todo, status, handleCheckbox, deleteTask, className}) {
    const navigate = useNavigate()

    return (
        <li key={todo.id} className="task-item">
            <section className={`task-left-side-container ${className}`}>
                <label htmlFor={`complete-task-${todo.id}`}
                       className={`toggler-wrapper style-8 ${status ? 'completed' : 'pending'}`}>
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
                <button type="button"
                        className="edit-button list-item-btn"
                        onClick={() => navigate(`/task/${todo.id}`)}>
                    <img src={editIcon} alt="edit this todo"/>
                </button>
                <Priority todo={todo}/>
                <button type="button"
                        onClick={() => deleteTask(todo.id)}
                        className="list-item-btn trash-btn">
                    <img src={trash} alt="trash bin"/>
                </button>
            </section>
        </li>
    );
}
