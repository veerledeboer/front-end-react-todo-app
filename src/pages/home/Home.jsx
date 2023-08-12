import Button from "../../components/button/Button.jsx";
import searchIcon from "../../assets/magnifying-glass.svg";
import TodoItem from "../../components/listItem/ListItem.jsx";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";
import "./Home.css"
import axios from "axios";
import SetPriority from "../../components/priority/SetPriority.jsx";

function Home() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriorityLevel] = useState('');
    const [completed, toggleCompleted] = useState(false);
    const [sorted, toggleSorted] = useState(false);
    const [sortedCompletion, toggleSortedCompletion] = useState(false);
    const [description, setDescription] = useState('');
    const [error, setError] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get('http://localhost:3000/todos');
                setTodos(result.data);
            } catch (e) {
                setError(e)
                return [];
            }
        }

        fetchData();
    }, []);

    async function removeData(id) {
        try {
            const result = await
                axios.delete(`http://localhost:3000/todos/${id}`)
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (e) {
            console.error(e)
        }
    }

    async function addData(e) {
        e.preventDefault();
        try {
            const result = await
                axios.post('http://localhost:3000/todos', {
                    id: uuidv4(),
                    title: inputValue,
                    completed: completed,
                    priority: priority,
                    description: description,
                });
            setTodos([...todos, result.data]);

            // Clear input fields after submitting
            setInputValue('');
            setPriorityLevel('');
            toggleCompleted(false);
            toggleSorted(false);
            setDescription('');
            // return result.data
        } catch (e) {
            console.error(e)
            return []
        }
    }

    async function handleCheckbox(idParam) {
        const updatedTodos = todos.map((todo) => todo.id === idParam ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);

        const updatedTodo = updatedTodos.find(todo => todo.id === idParam);

        try {
            await axios.put(`http://localhost:3000/todos/${idParam}`, updatedTodo);
        } catch (e) {
            console.error(e);
        }
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

    function sortOnCompleted (){
        todos.sort((a, b) => b.completed - a.completed);
        toggleSortedCompletion(false);
    }

    function sortOnNotCompleted () {
        todos.sort((a, b) => a.completed - b.completed);
        toggleSortedCompletion(true);
    }
    function sortTodosOnCompletion () {
        console.log(todos)
        sortedCompletion ? sortOnCompleted() : sortOnNotCompleted()
    }

    const handleSearchChange = (value) => {
        setSearchValue(value);
        if (value.trim() === '') {
            setResults([])
        } else {
            filterTodos(value);
        }
    }

    const filterTodos = (value) => {
        const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredTodos);
    }

    return (
        <>
            <main className="outer-container">
                <section className="form-section inner-container">
                    <h1>Todo App</h1>
                    <form onSubmit={addData}>
                        {error && <p>{error}</p>}
                        <section className="add-task-section">
                            <section className="add-task-section-text-wrapper">
                                <label htmlFor="textField">
                                    <input type="text" className="task-input-field" id="textField" value={inputValue}
                                           placeholder="Welke taak wil je toevoegen?" maxLength="30"
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
                                <SetPriority setPriorityLevel={setPriorityLevel} priority={priority}/>
                                <label htmlFor="date-input">
                                    <input type="date" name="deadline" id="date-input"/>
                                    {/*    wil ik er een date component bij doen?*/}
                                </label>
                                <button type="submit" className="btn btn-submit">add to do</button>
                            </section>
                        </section>
                        <section className="filter-section inner-container">
                            <nav>
                                <Button btnClass="btn prio-btn" onClick={() => sortTodos()} sorted={sorted} buttonTitle={`Sort on Prio (${sorted ? 'Low to High' : 'High to Low'}`}/>
                                <Button btnClass="btn completed-btn" onClick={()=>sortTodosOnCompletion()} sorted={sorted} buttonTitle={`Sort on Completion`}/>
                                <label className="search-tasks-container">
                                    <input className="search-field"
                                           placeholder="Search for task..."
                                           value={searchValue}
                                           onChange={(e) => handleSearchChange(e.target.value)}
                                           size="30"/>

                                    <button type="button" className="search-button">
                                        <img className="search-icon" src={searchIcon} alt="magnifying glass"/>
                                    </button>
                                </label>
                            </nav>
                        </section>
                        <ul>
                            {results.length > 0 ? results.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} handleCheckbox={handleCheckbox}
                                          deleteTask={() => removeData(todo.id)} status={todo.completed}/>
                            ))
                            : todos.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} handleCheckbox={handleCheckbox}
                                          deleteTask={() => removeData(todo.id)} status={todo.completed}/>
                            ))
                        }

                        </ul>

                    </form>
                </section>
            </main>
        </>
    );
}

export default Home;