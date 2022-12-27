import React from "react";
import styles from "./ExperienceCardContainer.css";
import JobExperienceProp from "../JobExperienceProp/JobExperienceProp";

export default function ExperienceCardContainer() {
  return (
    <div className="Card2" id="Experience">
      <h1 className="Card-title">Experience</h1>
      <ul className="timeline">
        <li>
          <div className="timeline-event">
            <JobExperienceProp
              style={styles.JobExperienceProp}
              title="IKTAN ROVING"
              subtitle="Frontend Developer"
              date="Oct 2021 - Present"
              description="As a member of the team, I was responsible for programming sensors and developing the graphical interface that was used to visualize telemetry data. This data included gas sensors, vital signs, and real-time vehicle position, and was sent and stored in a database. I am proud to say that our team won first place at the international level for our efforts in this area."
            />
          </div>
        </li>
        ...
      </ul>
    </div>
  );
}