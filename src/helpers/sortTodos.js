// SORT FUNCTIONS

export function sortOnHighPriority() {
    todos.sort((a, b) => {
        return b.priority - a.priority
    })
    toggleSorted(false)
}

export function sortOnLowPriority() {
    todos.sort((a, b) => {
        return a.priority - b.priority
    })
    toggleSorted(true);
}

export function sortTodos() {
    sorted ? sortOnHighPriority() : sortOnLowPriority()
}
