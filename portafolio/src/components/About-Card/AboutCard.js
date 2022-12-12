import React from 'react';
import styles from './AboutCard.css';

export default function AboutCard() {
    return(
        <div className="Card1" id = "about">

            <div className = "Image">
                <img src="https://media.licdn.com/dms/image/C5603AQGJRivPSCAZHg/profile-displayphoto-shrink_200_200/0/1650149461746?e=1676505600&v=beta&t=_KAINIIh_nwiWhbCkFV-dA6911eSDG3pQXEqMLk4Kfs" alt="profile" />
            </div>

            <div className="Text">
                <h1 className = "My-name">Armando Arredondo Valle</h1>
                <p className="About-card-text">
                    I am a Computer Science student at the Tecnológico De Monterrey, pursuing a Bachelor's degree. I am currently in my 4th semester. I am passionate about programming and I am always looking to learn new things.
                </p>
            </div>
        </div>

    );
}