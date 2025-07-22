import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'AVV MART',
    title: 'Avvmart',
    desc: 'Responsive e-commerce site with secure checkout and product management.',
    bg: 'bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200',
  },
  {
    name: 'CAFE SHOP',
    title: 'Cafe Shop',
    desc: 'Responsive café website with menu display, online orders, and booking features.',
    bg: 'bg-gradient-to-br from-yellow-200 to-yellow-100',
  },
  {
    name: 'TODO APP',
    title: 'ToDo App',
    desc: 'Simple and responsive To-Do app for task creation, tracking, and management.',
    bg: 'bg-gradient-to-br from-green-200 to-yellow-100',
  },
  {
    name: 'TICKET SYSTEM',
    title: 'Ticket System',
    desc: 'Efficient ticket system for issue tracking, user support, and status management.',
    bg: 'bg-gradient-to-br from-sky-200 to-yellow-100',
  },
];

// Container: Slower staggered animation
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
      delayChildren: 1.2,
    },
  },
};

// Alternate left-right card animation
const getCardVariant = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -120 : 120,
    y: 40,
    scale: 0.95,
    rotate: index % 2 === 0 ? -3 : 3,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 2.2,
      ease: 'easeInOut',
      type: 'spring',
      bounce: 0.25,
    },
  },
});

export default function Portfolio() {
  return (
    <section
    id='portfolio' 
    className="py-16 px-5 bg-white min-h-screen">
      {/* Header Animation */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
      >
        <p className="text-gray-500 text-lg">Portfolio</p>
        <h1 className="text-4xl font-bold text-gray-800">Some Recent Works</h1>
      </motion.div>

      {/* Grid Animation */}
      <motion.div
        className="grid gap-10 grid-cols-1 sm:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`${project.bg} relative rounded-2xl h-80 sm:h-96 md:h-[28rem] w-full shadow-lg p-6 cursor-pointer hover:scale-[1.02] hover:shadow-orange-200 hover:shadow-2xl transition-all duration-500`}
            variants={getCardVariant(idx)}
            whileHover={{ rotate: 1, scale: 1.04 }}
          >
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-sm font-semibold text-gray-700 tracking-widest">{project.name}</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">{project.title}</h2>
              <p className="text-sm text-gray-800 mt-2 w-full">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
