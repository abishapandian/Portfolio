import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { delay } from '../utils/animations'
import linkedin from '../assets/linkedin.png'
import Github from '../assets/Github.png'
import mail from '../assets/mail.png'
import abi from '../assets/abi.png'
import frame from '../assets/frame.png'

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
      <div className='mt-16 max-w-xl'>
        <h1 className='font-bold text-2xl text-black-950'>I'm glad You're Here</h1>
        <h1 className='font-bold text-5xl text-black-950 mt-10'>
          Hi I’m ABISHA, <br />
          <span className='text-orange-400'>Bringing Innovation</span><br />
          to Life with Code
        </h1>
        <p className='text-black-950 text-lg mt-10 leading-relaxed'>
          I'm a dedicated React, Node.js, and Express.js developer,<br />
          passionate about solving complex problems through clean, scalable code.<br />
          I specialize in building dynamic web applications with<br />
          MySQL for efficient database management. I’m committed to continuous learning and<br />
          bringing innovative ideas to life through clean, maintainable code.
        </p>

        {/* Social Icons */}
        <div className='mt-10'>
          <p className='text-black-950 text-2xl mb-4'>Find With me</p>
          <div className='flex gap-6 -ml-2'>
            {[
              { icon: linkedin, url: 'https://www.linkedin.com/in/abisha-pandian/' },
              { icon: Github, url: 'https://github.com/abishapandian' },
              { icon: mail, url: 'mailto:example@email.com' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={item.icon}
                  alt="icon"
                  className='w-16'
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <motion.img
          src={frame}
          alt="Frame"
          className="w-xl rounded-full -mt-30"
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
