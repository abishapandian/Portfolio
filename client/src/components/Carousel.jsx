import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { delay } from '../utils/animations'
import abi from '../assets/abi.png'
import frame from '../assets/frame.png'
import { FaDownload } from 'react-icons/fa';

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4, // stagger by index
      duration: 0.6
    }
  })
}

export default function Carousel({ onComplete }) {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, x: 0, transition: { duration: 1 } })
      await delay(3000) // increased delay for reading text
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
      {/* Left Section */}
      <div className='mt-16 max-w-lg'>
        <motion.h1
          className='font-bold text-xl text-black-950'
          custom={0}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          I'm glad You're Here
        </motion.h1>

        <motion.h1
          className='font-bold text-5xl text-black-950 mt-10'
          initial="hidden"
          animate="visible"
        >
          <motion.span custom={1} variants={headingVariants} className="block">Hi I’m ABISHA,</motion.span>
          <motion.span custom={2} variants={headingVariants} className="block text-orange-400">Bringing Innovation</motion.span>
          <motion.span custom={3} variants={headingVariants} className="block">to Life with Code</motion.span>
        </motion.h1>

        <motion.p
          className='text-black-950 text-sm mt-10 leading-relaxed'
          custom={4}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          I'm a dedicated React, Node.js, and Express.js developer,
          passionate about solving complex problems through clean, scalable code.
          I specialize in building dynamic web applications with
          MySQL for efficient database management. I’m committed to continuous learning and
          bringing innovative ideas to life through clean, maintainable code.
        </motion.p>

        <motion.div
          className='py-10'
          custom={5}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <a
            href="/ABISHA_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            <FaDownload />
            Download CV
          </a>
        </motion.div>
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
