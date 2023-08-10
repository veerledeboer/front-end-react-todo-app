import Button from "../../components/button/Button.jsx";
import searchIcon from "../../assets/magnifying-glass.svg";
import TodoItem from "../../components/listItem/ListItem.jsx";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";
import "./Home.css"
import axios from "axios";
import SetPriority from "../../components/priority/SetPriority.jsx";

async function fetchData() {
    try {
        const result = await
            axios.get('http://localhost:3000/todos');
        return result.data
    } catch (e) {
        console.error(e)
        return [];
    }
}

async function removeData(id) {
    try {
        const result = await
            axios.delete(`http://localhost:3000/todos/${id}`)
        return result.data
    } catch (e) {
        console.error(e)
        return [];
    }
}

async function addData(newTaskData) {
    try {
        const result = await
            axios.post('http://localhost:3000/todos', newTaskData);
        return result.data
    } catch (e) {
        console.error(e)
        return []
    }
}

async function editData(editedTaskData){
    try{
        const result = await
            axios.put('http://localhost:3000/todos', editedTaskData)
    } catch(e){
        console.error(e)
    }
}

function Home() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriorityLevel] = useState(3);
    const [completed, toggleCompleted] = useState(false);
    const [sorted, toggleSorted] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function fetchTodos() {
            const data = await fetchData();
            setTodos(data);
        }
        fetchTodos();
    }, []);


    function addTodo(e) {
        e.preventDefault();

        const newTaskData = {
            id: uuidv4(),
            title: inputValue,
            completed,
            priority,
            description,
        };
        console.log('newTaskData:', newTaskData); // Debugging line

        // Call the addData function to send the new task data to the backend
        addData(newTaskData)
            .then(() => {
                // Update the local state with the new task
                setTodos(prevTodos => [...prevTodos, newTaskData]);

                // Clear input fields after submitting
                setInputValue('');
                setPriorityLevel(3);
                toggleCompleted(false);
                toggleSorted(false);
                setDescription('');
            })
            .catch(error => {
                console.error(error);
            });
    }

    function deleteTodo(id) {
        // Call the removeData function to delete the task on the backend
        removeData(id).then(() => {
            // Update the todos state to reflect the removal of the task
            setTodos(todos.filter((todo) => todo.id !== id));
            // setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        });
    }

    function editTodo(){

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
                                    <textarea name="task-description" value={description}
                                              className="task-input-field-description" id="descriptionField" cols="20"
                                              rows="10" placeholder="Taak beschrijven"
                                              onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                                </label>
                            </section>
                            <section className="add-task-section-button-and-prio-wrapper">
                                <SetPriority setPriorityLevel={setPriorityLevel}/>

                                {/*<label htmlFor="selectField" className="custom-select">*/}
                                {/*    <select name="select" id="selectField" className="select-container"*/}
                                {/*            onChange={(e) => setPriorityLevel(parseInt(e.target.value))}>*/}
                                {/*        <option value="">Priority</option>*/}
                                {/*        <option value={1}>High</option>*/}
                                {/*        <option value={2}>Medium</option>*/}
                                {/*        <option value={3}>Low</option>*/}
                                {/*    </select>*/}
                                {/*    <span className="custom-arrow"></span>*/}
                                {/*</label>*/}
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
                                          deleteTask={() => deleteTodo(todo.id)}/>
                            ))}
                        </ul>

                    </form>
                </section>
            </main>
        </>
    );
}

export default Home;