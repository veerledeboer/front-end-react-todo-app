import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import "./Button.css"


function Button({ onClick, sorted, btnClass, children, buttonTitle }) {
    return (
        <button type="button" className={btnClass} onClick={onClick}>
            {children}
            {sorted ? (
                <img src={arrowUp} alt="High to Low" />
            ) : (
                <img src={arrowDown} alt="Low to High" />
            )}
            {buttonTitle}
        </button>
    );
}

export default Button;
