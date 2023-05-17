import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <img className="about-me__image" alt="Avishay Peskin"></img>
            <div className="about-me__info-warpper">
                <h2 className="about-me__title">About the author</h2>
                <p className="about-me__info">{"Hi, I'm Avishay Peskin, a full-stack web developer focused on React & Node. This is the is the final project at the Pracicum course."}</p>
            </div>
        </section>
    );
};

export default AboutMe;