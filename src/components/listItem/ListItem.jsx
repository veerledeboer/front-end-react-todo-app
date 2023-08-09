import trash from "../../assets/trash.svg";


function getPriorityColor(priority) {
    switch (priority) {
        case 1:
            return { backgroundColor: '#D5B3AF', color:'#EB9486' };
        case 2:
            return { backgroundColor: '#77AEBB', color: '#152529' };
        case 3:
            return { backgroundColor: '#BCBD8B', color: '#373D20' };
        default:
            return { backgroundColor: 'white', color: 'black' };
    }
}

export default function TodoItem({ todo, handleCheckbox, deleteTask }) {
    const priorityStyle = getPriorityColor(todo.priority);

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
                <h2>{todo.title}</h2>
            </section>
            <section className="task-right-side-container">
                <div style={priorityStyle} className="task-priority">
                    <p>PRIO {todo.priority}</p>
                </div>
                <button type="button" onClick={() => deleteTask(todo.id)} className="trash-btn">
                    <img src={trash} alt="trash bin" />
                </button>
            </section>
        </li>
    );
}


// import trash from "../assets/trash.svg";
// import styles from "../styles/styles.css";
//
// function getPriorityColor(priority) {
//     switch (priority) {
//         case 1:
//             return {backgroundColor: '#D5B3AF', color: '#E57A44'};
//         case 2:
//             return {backgroundColor: '#77AEBB', color: '#152529'};
//         case 3:
//             return {backgroundColor: '#BCBD8B', color: '#373D20'};
//         default:
//             return {backgroundColor: 'white', color: 'black'};
//     }
// }
//
// export default function TodoItem({todo, handleCheckbox, deleteTask}) {
//     const priorityStyle = getPriorityColor(todo.priority);
//     return (
//             <li key={todo.id} className="task-item">
//                 <section className="task-left-side-container">
//                     <label htmlFor="complete-task" className="toggler-wrapper style-8">
//                         Finished?
//                         <input type="checkbox"
//                                id="complete-task"
//                                checked={todo.completed}
//                                onChange={() => handleCheckbox(todo.id)}
//                         />
//                             <div className="toggler-slider">
//                                 <div className="toggler-knob"></div>
//                             </div>
//                     </label>
//                     <h2>{todo.title}</h2>
//                 </section>
//                 <section className="task-right-side-container">
//                     <div style={priorityStyle} className="task-priority">
//                         <p>PRIO {todo.priority}</p>
//                     </div>
//                     <button type="button" onClick={() => deleteTask(todo.id)} className="trash-btn">
//                         <img src={trash} alt="trash bin"/>
//                     </button>
//                 </section>
//             </li>
// );
// }
//
//
// // function TodoItem({
// //     todo, handleCheckbox, deleteTask
// // }) {
//
// //     return (
// //         <li key={todo.id}>
// //             <label htmlFor="complete-task">
// //                 Task completed?
// //                 <input
// //                     type="checkbox"
// //                     id="complete-task"
// //                     checked={todo.completed}
// //                     onChange={() => handleCheckbox(todo.id)}
// //                 />
// //             </label>
// //             <span>{todo.title}</span>
// //             <p>Prioriteit: {todo.priority}</p>
// //             <button type="button" onClick={() => deleteTask(todo.id)}>
// //                 <img src={trash} alt="trash bin" />
// //             </button>
// //         </li>
// //     );
// // }
//
//
// // Wat in APP.jsx stond voor het invoegen van component
// // <li key={todo.id}>
// //     <label htmlFor="complete-task">
// //         Task completed?
// //         <input type="checkbox" id="complete-task" checked={todo.completed}
// //                onChange={() => handleCheckbox(todo.id)}/>
// //     </label>
// //     <span>{todo.title}</span>
// //     <p>Prioriteit: {todo.priority}</p>
// //     <button type="button" onClick={() => deleteTask(todo.id)}><img src={trash} alt="trash bin"/></button>
// // </li>

