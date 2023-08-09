import {useState} from "react";

// NOT IN USE!!!
function TextField() {
    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState('de titel van todo');

    return (
        <label htmlFor="1"> Task
            <input key="1" type="text" value={inputValue} placeholder="kijk mij" readOnly={!editMode}
                   onChange={(e) => setInputValue(e.target.value)}/>
        </label>
    );
}

export default TextField;