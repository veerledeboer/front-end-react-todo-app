export default function handleCheckbox(idParam) {
    setTodos(todos.map((todo) => todo.id === idParam ? {...todo, completed: !todo.completed} : todo));
}
