import React from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMysql, DiVisualstudio, DiEclipse, DiGithub, DiBitbucket } from 'react-icons/di';
import { SiSpringboot, SiPycharm, SiPostman, SiC, SiNestjs } from 'react-icons/si';
import leetcode from '../Assets/leetcode_cropped.png'
import gfg1 from '../Assets/gfg_cropped.png'

function AboutBelow() {
    return (
      <div className="about-container">
        <h1 className='profClass'>Professional <b className='purple'>Skillset</b></h1>
        <div className="skills">
        <div className="skill">
            <SiC />
            <span>C</span>
          </div>
          <div className="skill">
            <FaPython />
            <span>Python</span>
          </div>
          <div className="skill">
            <FaJava />
            <span>Java</span>
          </div>
          <div className="skill">
            <DiMysql />
            <span>MySQL</span>
          </div>
          <div className="skill">
            <FaNodeJs />
            <span>NodeJS</span>
          </div>
          <div className="skill">
            <SiNestjs />
            <span>NestJS</span>
          </div>
          <div className="skill">
            <FaReact />
            <span>ReactJS</span>
          </div>
          <div className="skill">
            <SiSpringboot />
            <span>Spring Boot</span>
          </div>
          
        </div>
  
        <h1 className='toolsClass'>Tools</h1>
        <div className="tools">
          <div className="tool">
            <DiVisualstudio />
            <span>VS Code</span>
          </div>
          <div className="tool">
            <DiEclipse />
            <span>Eclipse</span>
          </div>
          <div className="tool">
            <SiPycharm />
            <span>PyCharm</span>
          </div>
          <div className="tool">
            <DiGithub />
            <span>GitHub</span>
          </div>
          <div className="tool">
            <DiBitbucket />
            <span>Bitbucket</span>
          </div>
          <div className="tool">
            <SiPostman />
            <span>Postman</span>
          </div>
        </div>
       
      </div>
    );
  }
  
  export default AboutBelow;