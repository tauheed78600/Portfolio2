import React from 'react'
import '../styles/Home.css'
import Typewriter from "typewriter-effect";
import Footer from './Footer';
import image from '../Assets/manWithLaptop.png';
import HomeBelow from './HomeBelow';

function Home() {
  return (
    <div className='home_container'>
      <div className='heading'>
            <div className='greeting'>
                Hi There I am Tauheed
            </div>
            <div className='typewriter'>
            <Typewriter
                options={{
                    strings: [
                    "Software Developer",
                    "FullStack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
            </div>
            <div className='imgLaptop'>
                <img src={image}
                alt = "image">
                </img>
            </div>
            <HomeBelow/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
