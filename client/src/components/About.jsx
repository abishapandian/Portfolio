import React from 'react'
import { motion } from 'framer-motion'
import abi from '../assets/abi.png'
import star from '../assets/star.png'
import circle from '../assets/circle.png'

export default function About() {
    return (

        <motion.section
            className='p-10 flex justify-around mt-4 relative bg-amber-100'
            whileHover={{ opacity: 1, scaleX: 1 }}>

            <img src={abi} className='w-sm relative' />

            <section className='font-sans text-left'>
                <motion.img
                    src={circle}
                    className='absolute w-40 ml-180 -mt-12'
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 5,
                        ease: "linear",
                    }} />
                <div>
                    <motion.h1
                        className='text-2xl text-black-950 mt-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        About Me
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-5xl text-black-950 font-medium mt-10'
                    >
                        Building innovative<span className='text-orange-400 ml-2'>Web Applications</span><br />with the latest technologies.
                    </motion.h1>
                    <motion.p
                        className='text-black-950 mt-10 text-xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        As a MERN stack developer, I have developed 3+ projects using<br />
                        MySQL, Express.js, React, and Node.js to deliver fast, scalable,<br />
                        and user-friendly solutions.
                    </motion.p>
                </div>
                <div className="mt-10 text-2xl">
                    <div className='flex'>
                        <motion.p
                            className='text-black-950'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Front-end 
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        >
                            <p className='text-black-400 text-xl absolute -mt-6 ml-144'>95%</p>

                            <input
                                className='border border-orange-400 h-2 w-xl mt-3 ml-10 rounded-full'
                                style={{
                                    background: 'linear-gradient(to right, #FFA500 95%, #FFFFFF 90%)',
                                    backgroundSize: '100% 100%',
                                }}
                            />
                        </motion.div>

                    </div>
                    <div className='flex'>

                        <motion.p
                            className='text-black-950 mt-10 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            Back-end 

                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 1.7 }}
                        >
                            <p className='text-black-400 text-xl absolute mt-5 ml-144'>90%</p>
                            <input className='border mr-4 border-orange-400 h-2 w-xl mt-14 rounded-full ml-12 bg-orange-400'
                                style={{
                                    background: 'linear-gradient(to right, #FFA500 90%, #FFFFFF 90%)',
                                    backgroundSize: '100% 100%',
                                }}></input>
                        </motion.div>

                    </div>
                    <div className='flex'>

                        <div>

                            <motion.p
                                className='text-black-950 mt-10'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                Figma
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 2.2 }}
                        >
                            <div>
                                <p className='text-black-400 text-xl absolute mt-5 ml-152'>80%</p>

                                <input className='border mr-12 border-orange-400 h-2 w-xl rounded-full ml-20 mt-14 bg-orange-400'
                                    style={{
                                        background: 'linear-gradient(to right, #FFA500 85%, #FFFFFF 90%)',
                                        backgroundSize: '100% 100%',
                                    }}></input>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>
        </motion.section>
    )
}
