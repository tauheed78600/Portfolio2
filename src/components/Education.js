import React from 'react';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            institution: 'University of Technology',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2018 - 2022',
            description: 'Learned various programming languages, algorithms, and software development methodologies.'
        },
        {
            institution: 'Online Coding Bootcamp',
            degree: 'Full Stack Developer Certificate',
            duration: '2022 - 2023',
            description: 'Intensive training in front-end and back-end technologies, focusing on building web applications.'
        },
        {
            institution: 'Advanced JavaScript Workshop',
            degree: 'Certification',
            duration: '2023',
            description: 'Deep dive into advanced JavaScript concepts, including ES6 features and asynchronous programming.'
        }
    ];

    return (
        <div className="education-section">
            <h1 className="education-heading">My Education</h1>
            <div className="education-container">
                {educationData.map((edu, index) => (
                    <div className="education-card" key={index}>
                        <h2>{edu.institution}</h2>
                        <h3>{edu.degree}</h3>
                        <p className="duration">{edu.duration}</p>
                        <p className="description">{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
