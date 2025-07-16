import React from 'react'
import { motion } from 'framer-motion'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'
import mail from '../assets/mail.png'
import abi from '../assets/abi.png'
import frame from '../assets/frame.png'

export default function Carousel() {
    return (
        <>
            <section className='font-sans flex justify-around '>
                <div className='mt-16'>
                    <h1 className='font-bold text-2xl text-black-950'>I'm glad You're Here</h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className='font-bold text-5xl text-black-950 mt-10'>Hi I’m ABISHA, <br /> <p className='text-orange-400'> Bringing Innovation </p>to Life with Code</motion.h1>
                    <p className='text-black-950 text-xl mt-10'>I'm a dedicated React, Node.js, and Express.js developer,<br />
                        passionate about solving complex problems through clean, scalable code.<br />
                        I specialize in building dynamic web applications with<br />
                        MySQL for efficient database management. I’m committed to continuous learning and<br />
                        bringing innovative ideas to life through clean, maintainable code.</p>
                    <div>
                        <p className='text-black-950 text-2xl mt-10'>Find With me</p>
                        <div className='flex -ml-2'>
                            <img src={linkedin} className='w-16' alt="LinkedIn" />
                            <img src={git} className='w-16' alt="GitHub" />
                            <img src={mail} className='w-16' alt="Email" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <motion.img
                        src={frame}
                        alt="Frame"
                        className="w-xl rounded-full mt-10"
                        animate={{ y: ["-6%", "10%"], x: ["6%", "-10%"] }} 
                        transition={{
                            repeat: Infinity,  
                            repeatType: "mirror", 
                            duration: 5, 
                            ease: "linear", 
                        }}
                    />
                    <img
                        src={abi}
                        alt="Abi"
                        className="absolute top-3 left-0 w-sm object-cover rounded-sm ml-24"
                    />
                </div>
            </section>
        </>
    )
}
