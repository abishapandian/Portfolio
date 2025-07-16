import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <section className='text-black-950 ml-12 flex items-center justify-center'>
        <div className='flex font-sans text-xl '>

        <div>
            <img src={logo} className='w-28 rounded-full'/>
        </div>

        <ul className='flex w-7xl h-28 items-center justify-center'>
            <li>Home</li>
            <li className='ml-10'>About</li>
            <li className='ml-10'>Service</li>
            <li className='ml-10'>Resume</li>
            <li className='ml-10'>Portfolio</li>
            <li className='ml-10'>Testimonial</li>
        </ul>

        <button className='bg-orange-400 h-fit p-3 rounded-sm text-white mt-8 mr-16'>Contact</button>

        </div>
    </section>
  )
}
