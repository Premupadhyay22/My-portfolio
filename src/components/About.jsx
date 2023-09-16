import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
            Hello, I'm Prem.
            <br></br>
            <br></br>
            My journey into the world of technology began with a curiosity for how software can solve real-world problems. Throughout my academic career, I immersed myself in various programming languages, algorithms, and software development methodologies. My time at CDAC provided me with a strong foundation in advanced computing and cutting-edge technologies, setting the stage for my professional career.
            <br></br>
            I'm currently employed as a software engineer, where I've had the opportunity to work on exciting and challenging projects. During my time here, I've contributed to the development of innovative software solutions that have made a positive impact on our clients and end-users. My role has allowed me to collaborate with talented teams and constantly expand my skill set.
            </p>

            <br/>

            <p className="text-xl">
            Why I Love What I Do: 
            <br></br>
            <br></br>
            I'm passionate about software engineering because it's not just a job for me; it's a creative outlet where I can bring ideas to life through code. The ever-evolving nature of technology keeps me on my toes, and I'm constantly seeking opportunities to learn and grow.
            </p>
        </div>
    </div>
  )
}

export default About