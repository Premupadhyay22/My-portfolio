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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt atque totam eius consequatur esse debitis, delectus labore aperiam ad, vel consectetur? Quod rerum excepturi obcaecati et possimus deleniti autem iusto culpa dolore iste quo impedit reiciendis, dignissimos provident ullam labore accusamus blanditiis voluptates ducimus saepe recusandae sit harum atque eos!
            </p>

            <br/>

            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur obcaecati a itaque, similique quaerat soluta magni adipisci laudantium nemo aperiam nobis quo vitae reprehenderit, voluptates cupiditate, debitis suscipit quam sint est. Officiis suscipit, aliquid quidem esse alias laboriosam eos iure optio, sint beatae qui harum provident! Quibusdam, ipsam ad.
            </p>
        </div>
    </div>
  )
}

export default About