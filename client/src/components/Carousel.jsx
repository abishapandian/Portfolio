import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { delay } from '../utils/animations'
import abi from '../assets/abi.png'
import frame from '../assets/frame.png'
import { FaDownload } from 'react-icons/fa';

export default function Carousel({ onComplete }) {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0, transition: { duration: 1 } })
      await delay(2000)
      onComplete()
    }
    sequence()
  }, [controls, onComplete])

  return (
    <motion.section
      id='carousel'
      className='font-sans flex justify-around items-center flex-wrap mt-10 px-6'
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {/* Text Left Section */}
      <div className='mt-16 max-w-lg'>
        <h1 className='font-bold text-xl text-black-950'>I'm glad You're Here</h1>
        <h1 className='font-bold text-5xl text-black-950 mt-10'>
          Hi I’m ABISHA, <br />
          <span className='text-orange-400'>Bringing Innovation</span><br />
          to Life with Code
        </h1>
        <p className='text-black-950 text-sm mt-10 leading-relaxed'>
          I'm a dedicated React, Node.js, and Express.js developer,
          passionate about solving complex problems through clean, scalable code.
          I specialize in building dynamic web applications with
          MySQL for efficient database management. I’m committed to continuous learning and
          bringing innovative ideas to life through clean, maintainable code.
        </p>
        <div className='py-10'>
        <a
                  href="/ABISHA_RESUME.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
                >
                  <FaDownload />
                  Download CV
                </a>
      </div>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <motion.img
          src={frame}
          alt="Frame"
          className="w-lg rounded-full -mt-30"
          animate={{ y: ["-6%", "10%"], x: ["6%", "-10%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
            ease: "linear"
          }}
        />
        <motion.img
          src={abi}
          alt="Abi"
          className="absolute top-3 -mt-50 left-0 w-sm object-cover rounded-sm ml-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </motion.section>
  )
}
