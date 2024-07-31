import React from 'react'
import ExperienceTimeline from './ExperienceTimeline'
import Footer from "../components/Footer.js"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="App">
        <div>
        <h1>My Experience</h1>
        <ExperienceTimeline />
        </div>
        <div classname = 'footer-experience'>
          <Footer/>
        </div>
    </div>
    
  )
}

export default Experience
