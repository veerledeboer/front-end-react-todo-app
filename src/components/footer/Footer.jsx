import capyBaraIcon from "../../assets/capybara-svgrepo-com.svg"
function Footer() {
    return (
        <footer className="outer-container">
            <section className="inner-container footer-section">
                <img src={capyBaraIcon} alt=""/>
                <h4>copyright by The Capybara Company</h4>
            </section>
        </footer>
    );
}

export default Footer;