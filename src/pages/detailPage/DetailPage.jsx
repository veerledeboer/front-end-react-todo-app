import cancelIconDark from "../../assets/dark/prohibit-dark.svg";
import saveIcon from "../../assets/dark/floppy-disk-dark.svg";
import editIcon from "../../assets/dark/pencil-dark.svg";
import {useState} from "react";
import "./DetailPage.css"
import SetPriority from "../../components/priority/SetPriority.jsx";


function DetailPage() {

    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState('de titel van todo');
    const [priority, setPriorityLevel] = useState(3);
    const [completed, toggleCompleted] = useState(false);
    const [sorted, toggleSorted] = useState(false);
    const [description, setDescription] = useState('');


    const cancelEditMode = () => {
        setEditMode(false);
        setInputValue("bleb");
        console.log(editMode)
    }

    const openEditMode = () => {
        setEditMode(true);
        console.log(editMode)
    }

    const saveEditmode = (e) => {
        e.preventDefault()
        setEditMode(false)
        console.log(editMode)
    }

    return (
        <>
            <header className="outer-container">
                <section className="inner-container">
                    <h1>Task Details</h1>
                </section>
            </header>
            <main className="outer-container">
                <section className="inner-container">
                <form className="detail-page" onSubmit={() => {
                    saveEditmode()
                }}>
                    <div className="single-detail">
                        <label htmlFor="1" className="detail-page-input-label"> Task
                            <input key="1" type="text" value={inputValue} placeholder="kijk mij" className="detail-page-input-field" readOnly={!editMode}
                                   onChange={(e) => setInputValue(e.target.value)}/>
                        </label>
                    </div>
                    <div className="single-detail">
                        <label htmlFor="2" className="detail-page-input-label"> Description
                            <textarea name="" id="2" cols="40" rows="10" value={description} className="detail-page-input-field" readOnly={!editMode}
                                      onChange={(e) => setDescription(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="single-detail">
                        <label htmlFor="3" className="detail-page-input-label"> Priority

                            <select name="select" id="selectField" className="select-container"
                                        onChange={(e) => setPriorityLevel(parseInt(e.target.value))} readOnly={!editMode}>
                                    <option value="">Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                                <span className="custom-arrow"></span>

                            {/*<input key="3" type="text" value={priority} className="detail-page-input-field" placeholder="kijk mij" readOnly={!editMode}*/}
                            {/*       onChange={(e) => setPriorityLevel(e.target.value)}/>*/}
                        </label>
                    </div>
                    {editMode ?
                        (
                            <div className="detail-page-edit-mode">
                                <button type="button" className="detail-page-btn" onClick={() => {
                                    cancelEditMode()
                                }}><img src={cancelIconDark} alt="cancel icon"/>
                                </button>
                                <button type="submit" className="detail-page-btn" onClick={()=> saveEditmode()}><img src={saveIcon} className="svg-icon" alt="save icon"/>
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