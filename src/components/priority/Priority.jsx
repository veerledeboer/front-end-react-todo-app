
import "../listItem/ListItem.css"
import getPriorityColor from "../../helpers/getPriorityColor.js";


function Priority({todo}) {
    const priorityStyle = getPriorityColor(todo.priority);

    return (
        <div style={priorityStyle} className="task-priority">
        </div>
    );
}

export default Priority;