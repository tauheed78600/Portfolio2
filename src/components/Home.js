import React from 'react'
import '../styles/Home.css'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className='home_container'>
      <div className='heading'>
            <div className='greeting'>
                Hi there I am Tauheed
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
      </div>
    </div>
  )
}

export default Home
