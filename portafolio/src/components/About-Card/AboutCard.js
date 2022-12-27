import React from 'react';
import styles from './AboutCard.css';

export default function AboutCard() {
    return(
        <div className="Card1" id = "About">

            <div className = "Image">
                <img src="https://media.licdn.com/dms/image/C5603AQGJRivPSCAZHg/profile-displayphoto-shrink_200_200/0/1650149461746?e=1676505600&v=beta&t=_KAINIIh_nwiWhbCkFV-dA6911eSDG3pQXEqMLk4Kfs" alt="profile" />
            </div>

            <div className="Text">
                <h1 className = "My-name">Armando Arredondo Valle</h1>
                <p className="About-card-text">
                I am currently studying Computer Science and have developed expertise in a range of programming languages, including C++, Python, React.js, and MySQL. Through participating in the NASA Human Rover Exploration Challenge and the Mexican International Conference of Artificial Intelligence, I have gained valuable experience in data analysis, teamwork, and leadership. I am highly motivated, dedicated, and passionate about programming, which makes me a strong candidate for opportunities in the field.                </p>
            </div>
        </div>

    );
}