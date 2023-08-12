import profilePicture from "../../assets/profile-photo.jpg"
import "./AboutMe.css"
import "../../styles/styles.css"
import profilePicOption2 from "../../assets/capybara-and-friends.jpeg"
import profilePicOption3 from "../../assets/capybara-and-many-friends.jpeg"
import axios from "axios";
function AboutMe() {
    const [bio, setBio] = ([])
    const [name, setName] = ('')
    const [header, setHeader] = ('')
    const [description, setDescription] = ('')

    // async function fetchAboutData(){
    //     try{
    //         const result = await
    //             axios.get("http://localhost:3000/bio")
    //         setBio(result.data)
    //         setName(result.data.name);
    //         setHeader(result.data.header);
    //         setDescription(result.data.description);
    //     } catch(e){
    //         console.error(e)
    //     }
    // }
    return (
        <>
            <header className="outer-container">
                <section className="inner-container">
                <h1>hi, i am Veerle</h1>
                </section>
            </header>
            <main className="outer-container about-me-page">
                    <section className=" inner-container">
                        <section className="bio-info-wrapper">
                        <section className="bio-info-section">
                            <h2>Guess this is something about me</h2>
                            <p>i like birds, books, food, hikes, trees, boardgames, harry potter, coffee, animals in general, music, african music in general, wine, friends, having dinner parties, thinking about food, creating weird food, solving puzzels and also making computer things work!  </p>

                        </section>
                        <section className="profile-picture-wrapper">
                            <img src={profilePicture} alt="picture of the maker"/>
                        </section>
                        </section>
                    </section>
            </main>
        </>
    );
}

export default AboutMe;