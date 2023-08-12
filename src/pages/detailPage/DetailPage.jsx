import cancelIconDark from "../../assets/dark/prohibit-dark.svg";
import saveIcon from "../../assets/dark/floppy-disk-dark.svg";
import editIcon from "../../assets/dark/pencil-dark.svg";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./DetailPage.css"
import axios from "axios";
import FormInput from "../../components/textField/FormInput.jsx";
import TextAreaInput from "../../components/textField/TextAreaInput.jsx";


function DetailPage() {
    const {id} = useParams()

    const [todo, setTodo] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [priority, setPriorityLevel] = useState(3);
    const [description, setDescription] = useState('');
    const [completed, toggleCompleted] = useState(false);
    const [error, setError] = useState('')


    // useEffect(() => {
    //     // Fetch the specific todo item based on the id
    //     // You can use your existing fetchData or a similar function
    //     async function fetchTodoItem() {
    //         try {
    //             const result = await axios.get(`http://localhost:3000/todos/${id}`);
    //             const todoItem = result.data;
    //             setInputValue(todoItem.title);
    //             setPriorityLevel(todoItem.priority);
    //             setDescription(todoItem.description);
    //             toggleCompleted(todoItem.completed);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //     fetchTodoItem();
    // }, [id]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`http://localhost:3000/todos/${id}`);
                console.log(result.data)
                setTodo(result.data);
                setInputValue(result.data.title)
                setDescription(result.data.description)
                setPriorityLevel(result.data.priority)

            } catch (e) {
                setError(e)
            }
        }
        fetchData();
    }, []);


    const cancelEditMode = () => {
        setEditMode(false);
        setInputValue(todo.title)
        setDescription(todo.description)
        setPriorityLevel(todo.priority)
    }

    const openEditMode = () => {
        setEditMode(true);
    }

    const saveEditMode = async (e) => {
        e.preventDefault();
        setEditMode(false);
        try {
            const editedTaskData = {
                title: inputValue,
                priority,
                description,
                completed,
            };
            const result = await
                axios.put(`http://localhost:3000/todos/${id}`, editedTaskData);
            setTodo(result.data); // You can handle the response as needed
        } catch (error) {
            setError('Er is iets misgegaan bij het ophalen van de data, probeer het opnieuw')
        }
    };

    return (
        <>
            <header className="outer-container">
                <section className="inner-container">
                    <h1>Task Details</h1>
                </section>
            </header>
            <main className="outer-container">
                <section className="inner-container">
                    <form className="detail-page" onSubmit={(e) => saveEditMode(e)}>
                        {error && <p>{error}</p>}
                        <FormInput
                            id={id}
                            onChange={(e) => setInputValue(e.target.value)}
                            readOnly={!editMode}
                            value={inputValue}
                            label="Task"
                        />
                        <TextAreaInput
                            id={id}
                            onChange={(e) => setDescription(e.target.value)}
                            readOnly={!editMode}
                            value={description}
                            label="Description"/>

                        <div className="single-detail">
                            <label htmlFor="3" className="detail-page-input-label"> Priority
                                <select name="select" id="selectField" className="select-container" value={priority}
                                        onChange={(e) => setPriorityLevel(parseInt(e.target.value))}
                                        readOnly={!editMode}>
                                    <option value="">Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                                <span className="custom-arrow"></span>
                            </label>
                        </div>
                        {editMode ?
                            (
                                <div className="detail-page-edit-mode">
                                    <button type="button" className="detail-page-btn" onClick={() => {
                                        cancelEditMode()
                                    }}><img src={cancelIconDark} alt="cancel icon"/>
                                    </button>
                                    <button type="submit" className="detail-page-btn">
                                        <img src={saveIcon} className="svg-icon" alt="save icon"/>
                                    </button>
                                </div>
                            ) :
                            (<button type="button" className="detail-page-btn" onClick={() => {
                                openEditMode()
                            }}><img src={editIcon} alt="edit icon"/></button>)
                        }
                    </form>
                    <div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default DetailPage;