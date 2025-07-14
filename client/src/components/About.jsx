import React from 'react'

export default function About() {
  return (
    <>
    <section className='font-sans p-10'>
        <div className="text-left">
            <h1 className='text-2xl text-blue-950 mt-10'>About Me</h1>
            <h1 className='text-5xl text-blue-950 font-medium mt-10'>
                Building innovative web applications<br /> with the latest technologies.
            </h1>
            <p className='text-blue-950 mt-10'>
                As a MERN stack developer, I have developed 3+ projects using<br/>
                MySQL, Express.js, React, and Node.js to deliver fast, scalable, and user-friendly solutions.
            </p>
        </div>
        
        <div className="text-left mt-10">
            <p className='text-blue-950'>Front-end</p>
            <div className='border border-orange-400 h-2 w-2xs mt-5 rounded-full'></div>
            <p className='text-blue-950 mt-10'>Back-end</p>
            <div className='border border-orange-400 h-2 w-2xs mt-5 rounded-full'></div>
            <p className='text-blue-950 mt-10'>Figma</p>
            <div className='border border-orange-400 h-2 w-2xs mt-5 rounded-full'></div>
        </div>
    </section>
    </>
  )
}
