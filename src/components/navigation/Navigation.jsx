import {NavLink} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <section className=" outer-container">
        <nav className="nav-bar nav-container inner-container">

            <NavLink to="/"
                     className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
            <NavLink to="/about-me" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>About
                me</NavLink>
        </nav>
        </section>
    );
}

export default Navigation;