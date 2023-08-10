function SetPriority({setPriorityLevel}) {
    return (
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
    );
}

export default SetPriority;