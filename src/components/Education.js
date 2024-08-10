import React from 'react';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            institution: 'Trinity Academy of Engineering, Pune',
            degree: 'BTech in Computer Science Engineering',
            duration: '2018 - 2022',
            description: 'Completed BTech with 8.56 CGPA overall',
            projectsDone: {
                project1: "Heart disease Prediction using Naive Bayes Machine Learning Algorithm",
                project2: "Symptoms based disease prediction using Machine Learning Algorithms such as Naive Bayes, Decision Tree and Random Forest Machine Learning Algorithms "
            }
        },
        {
            institution: 'National Institute of Technology, Goa',
            degree: 'MTech in Computer Science Engineering',
            duration: '2022 - 2024',
            description: 'Completed MTech with 7.55 CGPA overall',
            projectsDone: {
                project1: "An automation system designed to automate the process of approving/rejecting leaves of students/faculties developed using Android Studio",
                project2: "NCVI: Noise and Complex structure aligned Validity Index for evaluating the validity of clusters"
            }
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
                        <div className="projects">
                            <h4 className="projects-heading">Projects Done:</h4>
                            <ul>
                                {Object.values(edu.projectsDone).map((project, i) => (
                                    <li key={i} className="project-item">{project}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
