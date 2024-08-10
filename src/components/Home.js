import React from 'react'
import '../styles/Home.css'
import Typewriter from "typewriter-effect";
import Footer from './Footer';
import image from '../Assets/manWithLaptop.png';
import HomeBelow from './HomeBelow';

function Home() {
  return (
    <div className='container-fluid justify-content-center align-items-center'>
      <div className="row pt-3">
        <div className="col-md-7 col-sm-12">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className='greeting pb-2 pt-5 px-md-5'>
                <h1 className="px-md-5 px-sm-5 pb-sm-0">Hi there I am Tauheed</h1>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 px-md-5">
              <div className="px-md-5   ">
                <div className='typewriter p-md-2 p-sm-5 pt-sm-0 pb-sm-0'>
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
          </div>
        </div>
        <div className="col-md-5 col-sm-12 p-5">
          <div className='imgLaptop mx-sm-5'>
            <img src={image}
              alt="image">
            </img>
          </div>
        </div>
      </div>
      <div className="pt-0">
        <HomeBelow />
      </div>
    
    </div>
  )
}

export default Home