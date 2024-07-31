// src/components/ExperienceTimeline.js

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the styles
import "../styles/Experience.css"

const experiences = [
    {
        date: "June 2019 - December 2020",
        title: "Company A",
        subtitle: "Role: SDE Intern",
        content: "As a Software Development Intern at ThinkSeed Systems, I had the valuable opportunity to work within the Backend Team, where I gained practical experience in Spring Boot Java and RestFul APIs."
    },
    {
        date: "January 2021 - Present",
        title: "Company B",
        subtitle: "Role: Software Engineer 1",
        content: "As a Software Engineer, my task is to deliver efficient and scalable software solutions to the client. I am actively involved in working on backend side and doing frontend and backend integration. My work includes designing and implementing the software and meet the clients requirements."
    }
    // Add more experiences as needed
];

const ExperienceTimeline = () => {
    return (
        <VerticalTimeline>
            {experiences.map((exp, index) => (
                <VerticalTimelineElement
                    key={index}
                    date={exp.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                    <p>{exp.content}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ExperienceTimeline;
