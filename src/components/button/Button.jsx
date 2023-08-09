import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import "./Button.css"


function Button({ onClick, sorted, btnClass, children }) {
    return (
        <button type="button" className={btnClass} onClick={onClick}>
            {children}
            {sorted ? (
                <img src={arrowUp} alt="High to Low" />
            ) : (
                <img src={arrowDown} alt="Low to High" />
            )}
            Sort on Prio ({sorted ? 'Low to High' : 'High to Low'})
        </button>
    );
}

export default Button;
