import React from 'react';
import './AboutMe.css';

const About = () => {
    return (
        <section className="about">
            <img className="about-__image" alt="Avishay Peskin"></img>
            <div className="about__info-wrapper">
                <h2 className="about__title">About the author</h2>
                <p className="about__info">
                    {"Hi, I'm Avishay Peskin, a full-stack web developer focused on React & Node. This is the final project at the Pracicum course."}
                </p>
            </div>
        </section>
    );
};

export default About;