import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <img className="about-me__image" alt="Avishay Peskin" src="" />
            <div className="about-me__container">
                <h2 className="about-me__title">About the author</h2>
                <p className="about-me__text">
                    Hi, I'm Avishay Peskin, a full-stack web developer with a focus on React and Node. This project serves as my final assignment for the Practicum course.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;