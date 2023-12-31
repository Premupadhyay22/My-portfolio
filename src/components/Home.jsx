import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
          <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-screen-lg w-full md:flex md:flex-row">
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I have 1.5 years of experience building and designing software.
              Currently I am working on web applications and CAD and PLM customization and Automation using technologies like Java, C#, REST API, React, MySQL, Tailwind.
            </p>
            <div>
              <Link to='portfolio'
              smooth duration={500} 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300"> 
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={HeroImage} alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home