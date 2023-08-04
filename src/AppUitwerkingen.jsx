import './App.css';
import {useState} from "react";
import {ArrowDown, ArrowUp, FlagPennant, Trash} from "@phosphor-icons/react";
import {v4 as id} from 'uuid';

const tasks = [
    {
        id: id(),
        title: 'Learn HTML',
        completed: false,
        description: 'Learn HTML and build a simple web page',
        priority: 1
    },
    {
        id: id(),
        title: 'Learn CSS',
        completed: false,
        description: 'Learn CSS and style your web page',
        priority: 2
    },
    {
        id: id(),
        title: 'Learn JavaScript',
        completed: false,
        description: 'Learn JavaScript and make your web page interactive',
        priority: 3
    },
    {
        id: id(),
        title: 'Learn React',
        completed: false,
        description: 'Learn React and build a todo app',
        priority: 1
    }
]

function AppUitwerkingen() {

    // Define state variables using the useState hook
    const [todos, setTodos] = useState(tasks); // Array of todos
    const [inputValue, setInputValue] = useState(""); // Input value for adding new todos
    const [priority, setPriority] = useState(3); // Priority value for adding new todos
    const [completed, setCompleted] = useState(false); // Completed value for adding new todos
    const [sorted, setSorted] = useState(true); // Sorted value for toggling priority buttons

    // Function to add a new todo
    function addTodo(e) {
        e.preventDefault();
        if (inputValue === "") {
            // Do nothing if input is empty or consists only of whitespace
            return;
        }

        // Create a new todo object and add it to the todos array
        setTodos([...todos, {
            id: id(),
            title: inputValue,
            completed: completed,
            priority: parseInt(priority),
        }]);
        setInputValue(""); // Clear the input
        setPriority(3); // Set the priority back to default
        setCompleted(false); // Set the completed back to default
    }

    // Function to delete a todo
    function deleteTask(id) {
        setTodos(todos.filter((todo) => todo.id !== id)) // Filter out the item with the given id and update the todos state
    }

    // Function to toggle the completed status of a todo
    function toggleCompleted(idParam) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                const {id, completed} = todo;
                if (id === idParam) {
                    return {
                        ...todo,
                        completed: !completed,
                    };
                }
                return todo;
            })
        );
    }

// Function to sort todos based on a given comparator function
    function sortTodos(comparator) {
        const sortedTodos = [...todos];
        sortedTodos.sort(comparator);
        setTodos(sortedTodos);
    }

    // Function to sort todos based on high priority
    function sortOnHighPriority() {
        sortTodos((a, b) => a.priority - b.priority);
        setSorted(false);
    }

// Function to sort todos based on low priority
    function sortOnLowPriority() {
        sortTodos((a, b) => b.priority - a.priority);
        setSorted(true);
    }

    return (
        <>
            <h1>Todo App</h1>
            <form className="form" onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Title"
                    value={inputValue} // Control the value with state
                    onChange={e => setInputValue(e.target.value)} // Update state on input change
                />
                <select
                    className="priority"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value={3}>Low</option>
                    <option value={2}>Medium</option>
                    <option value={1}>High</option>
                </select>
                <button type="submit">Add</button>
            </form>
            {sorted ?
                <button className="btn-sort" type="button" onClick={sortOnHighPriority}>High priority first <ArrowUp size={16} /></button>
                : <button className="btn-sort" type="button" onClick={sortOnLowPriority}>Low priority first <ArrowDown size={16} /></button>
            }
            {/*<button type="button" onClick={deleteAllTasks}>Delete all</button>*/}
            <ol>
                {todos.map((todo) => {
                    const {id, title, completed, priority} = todo;
                    return (
                        <li key={id} className="todo-item">
                            <div>
                                <input type="checkbox"
                                       checked={completed}
                                       onChange={() => toggleCompleted(id)}
                                />
                                <span>{title}</span>
                            </div>
                            <div>
                                <span
                                    className={`${priority === 1 ? "high" : priority === 2 ? "medium" : "low"}-priority`}><FlagPennant
                                    size={16}/></span>
                                <button type="button" className="btn-delete" onClick={() => deleteTask(id)}><Trash
                                    size={16}/></button>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}

export default AppUitwerkingen
