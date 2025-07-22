import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className='text-black-950 ml-12 flex items-center justify-center'>
      <div className='flex font-sans text-xl items-center w-full'>
        <div>
          <img src={logo} className='w-28 rounded-full' alt="Logo" />
        </div>

        <ul className='flex w-full h-28 items-center justify-center'>
          <li><a href="#carousel" className='cursor-pointer'>Home</a></li>
          <li><a href="#about" className='ml-10 cursor-pointer'>About</a></li>
          <li><a href="#service" className='ml-10 cursor-pointer'>Service</a></li>
          <li><a href="#resume" className='ml-10 cursor-pointer'>Resume</a></li>
          <li><a href="#skills" className='ml-10 cursor-pointer'>Skills</a></li>
          <li><a href="#portfolio" className='ml-10 cursor-pointer'>Portfolio</a></li>
        </ul>

        <a href="#contact">
          <button className='bg-orange-400 h-fit p-3 rounded-sm text-white mt-8 mr-16 cursor-pointer'>
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
}
