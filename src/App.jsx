import axios from "axios";
import {useState} from "react";


// --------------------------
import Home from "./pages/home/Home.jsx";
import {NavLink, Routes, Route} from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe.jsx";
import DetailPage from "./pages/detailPage/DetailPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navigation from "./components/navigation/Navigation.jsx";


function App() {

    const [editMode, setEditMode] = useState(false)
    const [inputValue, setInputValue] = useState('de titel van todo');

    const cancelEditMode = () => {
        setEditMode(false);
        setInputValue('de titel toch');
        console.log(editMode)
    }

    const openEditMode = () => {
        setEditMode(true);
        console.log(editMode)
    }

    const saveEditmode = () => {
        setEditMode(false)
        console.log(editMode)
    }

    return (
        <>
            <Navigation/>
            <Home/>
            <AboutMe/>
            <DetailPage/>
           {/*<Routes>*/}

           {/*    <Route path="/" element={<Home/>}/>*/}
           {/*    <Route path="/about-me" element={<AboutMe/>}/>*/}
           {/*    <Route path="/task/:id" element={<DetailPage/>}/>*/}
           {/*</Routes>*/}
            <Footer/>
        </>
    )
}

export default App
