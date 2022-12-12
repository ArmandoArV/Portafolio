import React from "react";
import styles from "./JobExperience.css";

export default function JobExperienceProp(props) {
    return(
        <div className="Job-experience">
            <h1 className="Job-title">{props.title}</h1>
            <h2 className="Job-subtitle">{props.subtitle}</h2>
            <h3 className="Job-date">{props.date}</h3>
            <p className="Job-description">{props.description}</p>
        </div>
    )
}