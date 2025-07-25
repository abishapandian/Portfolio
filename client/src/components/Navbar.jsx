import React from 'react'
import { motion } from 'framer-motion'
import linkedin from '../assets/linkedin.png'
import Github from '../assets/Github.png'
import mail from '../assets/mail.png'

export default function Navbar() {
  return (
    <section className='fixed top-0 left-0 w-full z-50 bg-blue-950 text-white px-6 py-3 shadow-md'>
      <div className='max-w-screen-lg mx-auto flex items-center justify-between'>

        {/* Left - Phone */}
        <div className='font-bold text-sm md:text-base'>
          <a href="#contact" className='hover:underline cursor-pointer'>📞+91 9344464762</a>
        </div>

        {/* Center - Navigation Links */}
        <ul className='hidden md:flex items-center justify-center gap-6'>
          <li><a href="#carousel" className='cursor-pointer hover:text-orange-400'>Home</a></li>
          <li><a href="#about" className='cursor-pointer hover:text-orange-400'>About</a></li>
          <li><a href="#service" className='cursor-pointer hover:text-orange-400'>Service</a></li>
          <li><a href="#resume" className='cursor-pointer hover:text-orange-400'>Resume</a></li>
          <li><a href="#skills" className='cursor-pointer hover:text-orange-400'>Skills</a></li>
          <li><a href="#portfolio" className='cursor-pointer hover:text-orange-400'>Portfolio</a></li>
        </ul>

        {/* Right - Social Icons */}
        <div className='flex items-center ml-4'>
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
              className='ml-3'
            >
              <motion.img
                src={item.icon}
                alt="icon"
                className='w-5 md:w-6'
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
