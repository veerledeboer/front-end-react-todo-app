import cancelIconDark from "../../assets/dark/prohibit-dark.svg";
import saveIcon from "../../assets/dark/floppy-disk-dark.svg";
import editIcon from "../../assets/dark/pencil-dark.svg";
import {useState} from "react";
import "./DetailPage.css"


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
                        <label htmlFor="1"> Task
                            <input key="1" type="text" value={inputValue} placeholder="kijk mij" className="detail-page-input-field" readOnly={!editMode}
                                   onChange={(e) => setInputValue(e.target.value)}/>
                        </label>
                    </div>
                    <div className="single-detail">
                        <label htmlFor="2"> Description
                            <textarea name="" id="2" cols="30" rows="10" value={description} className="detail-page-input-field" readOnly={!editMode}
                                      onChange={(e) => setDescription(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="single-detail">
                        <label htmlFor="3"> Priority
                            <input key="3" type="text" value={priority} className="detail-page-input-field" placeholder="kijk mij" readOnly={!editMode}
                                   onChange={(e) => setPriorityLevel(e.target.value)}/>
                        </label>
                    </div>
                </form>
                <div>
                    {editMode ?
                        (
                            <div>
                                <button type="button" onClick={() => {
                                    cancelEditMode()
                                }}><img src={cancelIconDark} alt="cancel icon"/>
                                </button>
                                <button type="submit"><img src={saveIcon} alt="save icon"/>
                                </button>
                            </div>
                        ) :
                        (<button type="button" onClick={() => {
                            openEditMode()
                        }}><img src={editIcon} alt="edit icon"/></button>)
                    }
                </div>
                </section>
            </main>
        </>
    );
}

export default DetailPage;