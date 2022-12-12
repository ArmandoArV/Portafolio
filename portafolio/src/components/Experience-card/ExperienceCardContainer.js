import React from "react";
import styles from "./ExperienceCardContainer.css";
import JobExperienceProp from "../JobExperienceProp/JobExperienceProp";

export default function ExperienceCardContainer() {
    return(
        <div className="Card2" id = "experience">
            <h1 className="Card-title">Experience</h1>
            <JobExperienceProp style={styles.JobExperienceProp} title="IKTAN ROVING" subtitle = "Software Developer | Frontend" date = "Oct 2021 - Present" description = "During 2022 edition of NASA’s Human Rover Exploration Challenge is an international competition where
the main task is building from scratch a manned Rover, had the key role of coding sensors, establishing
communication between the vehicle telemetry and the web page where anyone could check for the stats of
the pilots, and designing tools using SolidWorks for sample retrieval. This helped me communicate and
reinforce my teamwork abilities, which gave us as a team the first-place Overall winner category."/>
            <JobExperienceProp style={styles.JobExperienceProp} title="holi" subtitle = "Software Developer | Backend" date = "Oct 2021 - Present" description = "During 2022 edition of NASA’s Human Rover Exploration Challenge is an international competition where"/>
        </div>
    )
}