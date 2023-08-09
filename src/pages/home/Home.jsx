import Button from "../../components/button/Button.jsx";
import searchIcon from "../../assets/magnifying-glass.svg";
import TodoItem from "../../components/listItem/ListItem.jsx";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import "./Home.css"


const todoList = [
    {
        id: uuidv4(),
        title: "Een app bouwen",
        completed: false,
        priority: 1,
        description: "Het maken van de todo app",
    },
    {
        id: uuidv4(),
        title: "get panicked",
        completed: true,
        priority: 3,
        description: "Er achter komen dat het allemaal ingewikkeld is..",
    }
];

function Home() {

    const [todos, setTodos] = useState(todoList);
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriorityLevel] = useState(3);
    const [completed, toggleCompleted] = useState(false);
    const [sorted, toggleSorted] = useState(false);
    const [description, setDescription] = useState('');

    function addTodo(e) {
        e.preventDefault();
        setTodos([...todos, {
            id: uuidv4(),
            title: inputValue,
            completed,
            priority,
            description,
        }]);
        setInputValue('');
        setPriorityLevel(3);
        toggleCompleted(false);
        toggleSorted(false);
        setDescription('');
    }

    function deleteTask(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function handleCheckbox(idParam) {
        setTodos(todos.map((todo) => todo.id === idParam ? {...todo, completed: !todo.completed} : todo));
    }

    function sortOnHighPriority() {
        todos.sort((a, b) => b.priority - a.priority);
        toggleSorted(false);
    }

    function sortOnLowPriority() {
        todos.sort((a, b) => a.priority - b.priority);
        toggleSorted(true);
    }

    function sortTodos() {
        sorted ? sortOnHighPriority() : sortOnLowPriority();
    }

    return (
        <>
            <header className="outer-container">
                <section className="filter-section inner-container">
                    <nav>
                        <Button btnClass="btn prio-btn" onClick={() => sortTodos()} sorted={sorted}/>
                        <label htmlFor="searchBar" className="search-tasks-container">
                            <input type="search" id="searchBar" className="search-field" placeholder="search for task"/>
                            <button type="submit" className="search-button">
                                <img src={searchIcon} alt="magnifying glass"/>
                            </button>
                        </label>
                    </nav>
                </section>
            </header>
            <main className="outer-container">
                <section className="form-section inner-container">
                    <h1>Todo App</h1>
                    <form onSubmit={addTodo}>
                        <section className="add-task-section">
                            <section className="add-task-section-text-wrapper">
                            <label htmlFor="textField">
                                <input type="text" className="task-input-field" id="textField" value={inputValue}
                                       placeholder="Welke taak wil je toevoegen?"
                                       onChange={(e) => setInputValue(e.target.value)}/>
                            </label>
                            <label htmlFor="descriptionField">
                                <textarea name="task-description" className="task-input-field-description" id="descriptionField" cols="20" rows="10" placeholder="Taak beschrijven" onChange={(e)=>setDescription(e.target.value)}>{description}</textarea>
                            </label>
                            </section>
                            <section className="add-task-section-button-and-prio-wrapper">
                            <label htmlFor="selectField" className="custom-select">
                                <select name="select" id="selectField" className="select-container"
                                        onChange={(e) => setPriorityLevel(parseInt(e.target.value))}>
                                    <option value="">Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                                <span className="custom-arrow"></span>
                            </label>
                                <label htmlFor="date-input">
                                    <input type="date" name="deadline"/>
                                {/*    wil ik er een date component bij doen?*/}
                                </label>
                            <button type="submit" className="btn btn-submit">add to do</button>
                            </section>
                        </section>
                        <ul>
                            {todos.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} handleCheckbox={handleCheckbox}
                                          deleteTask={deleteTask}/>
                            ))}
                        </ul>

                    </form>
                </section>
            </main>
        </>
    );
}

export default Home;