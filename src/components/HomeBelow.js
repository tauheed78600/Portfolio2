import React from 'react'
import "../styles/HomeBelow.css"
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import myImg from '../Assets/avatar.svg'

export default function HomeBelow() {
  return (
    <div>
      <div className='intro123'>
            <div className='headIntro'>
            <h1 style={{ fontSize: "2.6em" }}>
              <p className='lemmeno'>LET ME <span className="purple"> INTRODUCE </span> MYSELF</p>
            </h1>
            </div>
            <p className="home-about-body">
              I am a Computer Science Student currently pursuing Masters from NIT Goa.<br/>
              <span className="purple"> I have completed my Bachelors in 2022 from Trinity Academy of Engineering 🤷‍♂️</span>
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> C, Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">End to End products starting from frontend to backend </b> 
              </i>
              <br />
              <br />
              I apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks <br/>
                </b>
              </i>
              &nbsp; like <br/>
              <i>
                <b className="purple"> React.js for frontend and Nest.js or Node.js for backend</b>
              </i>
              <br />
                I am also involved in creating sever side applications using <b className="purple">
                  {" "}
                  Spring boot and Spring MVC Architecture
                </b>
            </p>
            <img className = 'svgImage' src = {myImg} alt = "my image"></img>
            </div>
            <div className='social'>
                <b className = 'home-about-body123'>Feel free to <b className='purple'>connect</b> with me on</b><br />

                <a href="https://www.linkedin.com/in/tauheed-darekar-442553258/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/tauheed78600/" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/tauheed21__/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>

    </div>
  )
}
