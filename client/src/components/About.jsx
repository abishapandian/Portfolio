import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import abi from '../assets/abi.png'
import circle from '../assets/circle.png'

export default function About() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.section
      id='about'
      className='p-6 md:p-10 flex flex-col md:flex-row items-center justify-around bg-orange-50'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image */}
      <div className='relative mb-10 md:mb-0'>
        <img src={abi} className='w-72 md:w-96 relative z-10' alt="Abisha" />
      </div>

      {/* Content */}
      <section className='font-sans text-left max-w-xl w-full relative'>
        {/* Rotating circle */}
        <motion.img
          src={circle}
          className='absolute w-24 md:w-36 top-0 right-0 md:-mt-12'
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
            ease: "linear",
          }}
        />

        <motion.h1
          className='text-xl text-blue-950 mt-4 md:mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        <motion.h1
          className='text-3xl md:text-4xl text-blue-950 font-medium mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Building innovative<span className='text-orange-400 ml-2'>Web Applications</span><br />
          with the latest technologies.
        </motion.h1>

        <motion.p
          className='text-blue-950 mt-6 text-sm leading-relaxed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          As a MERN stack developer, I have developed 3+ projects using<br />
          MySQL, Express.js, React, and Node.js to deliver fast, scalable,<br />
          and user-friendly solutions.
        </motion.p>

        {/* Skills */}
        <div className='mt-10 space-y-8'>
          {[
            { label: 'Front-end', value: 95 },
            { label: 'Back-end', value: 90 },
            { label: 'Figma', value: 85 }
          ].map((skill, idx) => (
            <div key={idx} className='w-full'>
              <motion.div
                className='flex justify-between items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + idx * 0.5 }}
              >
                <p className='text-blue-950'>{skill.label}</p>
                <span className='text-blue-400 text-sm font-medium'>{skill.value}%</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.2 + idx * 0.5 }}
                className='origin-left'
              >
                <div className='h-2 w-full bg-gray-200 rounded-full mt-2 overflow-hidden'>
                  <div
                    className='h-full bg-orange-500 rounded-full'
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  )
}
