import React from 'react'
import Footer from './Footer'
import imgAbout from "../Assets/aboutIMage.png"
import "../styles/About.css"

function About() {
  return (
    <div className='aboutSection'>
      <h className='aboutPara'>Know who I am</h>
      <img className = "imgAbout" src={imgAbout}></img>
      <Footer/>
    </div>
  )
}

export default About
