// src/components/About.js
import React from 'react';
import Footer from './Footer';
import imgAbout from "../Assets/aboutIMage.png";
import "../styles/About.css";
import { ImPointRight } from "react-icons/im";
import AboutBelow from './AboutBelow';

function About() {
  return (
    <div className='aboutSection pt-5'>
      <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-6">
            <img className="imgAbout" src={imgAbout} alt="About Tauheed" />   
          </div>
          <div className="col-sm-12 col-md-6">
            <div className='headIntro'>
              <h1 style={{ fontSize: "2.4em" }}>
                <p className='knowWho'>Know Who <span className="purple"> I'M </span></p>
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
                <b className="purple">Trinity Academy of Engineering </b> <br />
              </i>

              and completed Master's degree in CSE from <b className="purple">National Institute of Technnology, Goa</b>
              <i>
                <b className="purple">
                  {" "}

                </b>
              </i>
              <br />
              <br />
              &nbsp; Apart from coding, some other activities that I love to do!
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Playing Cricket
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Table Tennis
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Badminton
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
              </ul>
            </p>
          </div>
          
        </div>
      </div>
      <AboutBelow />
      
    </div>
  )
}

export default About;

{/*
  <div className='intro'>
        <div className='headIntro'>
          <h1 style={{ fontSize: "2.4em" }}>
            <p className='knowWho'>Know Who <span className="purple"> I'M </span></p>
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
            <b className="purple">Trinity Academy of Engineering </b> <br />
          </i>

          and completed Master's degree in CSE from <b className="purple">National Institute of Technnology, Goa</b>
          <i>
            <b className="purple">
              {" "}

            </b>
          </i>
          <br />
          <br />
          &nbsp; Apart from coding, some other activities that I love to do!
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </p>

      </div>

      <img className="imgAbout" src={imgAbout} alt="About Tauheed" /> */}