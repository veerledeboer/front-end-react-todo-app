export default function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
}