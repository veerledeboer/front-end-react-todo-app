import {v4 as uuidv4} from "uuid";

export default function addTodo(e) {
    e.preventDefault()
    setTodos([...todos,
        {
            id: uuidv4(),
            title: inputValue,
            completed: completed,
            priority: priority,
            description: description
        }
    ])
    setInputValue('');
    setPriorityLevel(3);
    toggleCompleted(false);
    toggleSorted(false);
    setDescription('');
}