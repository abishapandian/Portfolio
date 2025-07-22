import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 -mt-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold tracking-wide text-white">
          Abisha<span className="text-orange-500">.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  )
}
