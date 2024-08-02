// src/components/About.js
import React from 'react';
import Footer from './Footer';
import imgAbout from "../Assets/aboutIMage.png";
import "../styles/About.css";

function About() {
  return (
    <div className='aboutSection'>
      <div className='intro'>
            <div className='headIntro'>
            <h1 style={{ fontSize: "2.4em"}}>
              Know Who <span className="purple"> I'M </span>
            </h1>
            </div>
            <p className="home-about-body">
            Hi Everyone, I am
              <span className="purple">Tauheed Darekar</span> from <span className="purple">Maharashtra, India.</span>
              <br />
              <br />I am currently employed as a
              <i>
                <b className="purple"> Software Developer at Parkar Digital. </b>
              </i>
              <br />
              <br />
              I have completed Bachelors degree in CSE from &nbsp;
              <i>
                <b className="purple">Trinity Academy of Engineering </b> 
              </i>

              and completed Master's degree in CSE from <b className="purple">National Institute of Technnology, Goa</b> and
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              <br/>
              <br/>
              &nbsp; Apart from coding, some other activities that I love to do!
              
            </p>
            </div>
      <img className="imgAbout" src={imgAbout} alt="About Tauheed" />
      <Footer/>
    </div>
  )
}

export default About;
