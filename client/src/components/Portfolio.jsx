import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AVV MART',
    title: 'Avvmart',
    desc: 'Responsive e-commerce site with secure checkout and product management.',
    bg: 'bg-gradient-to-br from-indigo-100 to-teal-200',
  },
  {
    name: 'CAFE SHOP',
    title: 'Cafe Shop',
    desc: 'Responsive café website with menu display, online orders, and booking features.',
    bg: 'bg-gradient-to-br from-yellow-100 to-green-100',
  },
  {
    name: 'TODO APP',
    title: 'ToDo App',
    desc: 'Simple and responsive To-Do app for task creation, tracking, and management.',
    bg: 'bg-gradient-to-br from-purple-100 to-pink-100',
  },
  {
    name: 'TICKET SYSTEM',
    title: 'Ticket System',
    desc: 'Efficient ticket system for issue tracking, user support, and status management.',
    bg: 'bg-gradient-to-br from-blue-100 to-green-200',
  },
];

// Card animation variant (each with different delay and flip direction)
const getCardVariant = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? 200 : -200,
    rotateY: index % 2 === 0 ? 90 : -90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      delay: 15 + index * 0.8, // 15s initial + stagger
      duration: 1.2,
      type: 'spring',
      stiffness: 80,
      damping: 16,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    rotateZ: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
});

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 -mt-30 bg-white min-h-screen">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
      >
        <p className="text-blue-950 text-lg font-medium">Our Work</p>
        <h1 className="text-5xl font-semibold text-blue-950 mt-4">Recent Projects</h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${project.bg} relative overflow-hidden rounded-xl shadow-xl cursor-pointer`}
            initial="hidden"
            animate="visible"
            variants={getCardVariant(index)}
            whileHover="hover"
            style={{
              height: '200px',
              width: '90%',
              padding: '1rem',
              clipPath: 'polygon(10% 0%, 100% 10%, 90% 100%, 0 90%)',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
              perspective: 1000,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="relative z-10 text-white">
              <h2 className="text-3xl font-bold ml-10">{project.title}</h2>
              <p className="text-sm mt-4 ml-10">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
