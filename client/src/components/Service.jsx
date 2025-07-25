import React from 'react';
import { motion } from 'framer-motion';
import web from '../assets/web.png';

// Container animation with initial delay and stagger for each card
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 10,    // Wait 25 seconds before starting all cards
      staggerChildren: 1,  // Each card starts 10 seconds after previous
    },
  },
};

// Card flip animation (no extra delay needed here)
const getCardVariant = (index) => ({
  hidden: {
    opacity: 0,
    rotateY: index % 2 === 0 ? 90 : -90,
    scale: 0.8,
    y: 100,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.42, 0, 0.58, 1],
      type: 'spring',
      stiffness: 120,
    },
  },
});

// Floating icon animation
const iconFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

export default function Service() {
  return (
    <section id="service" className="py-16 bg-white min-h-screen">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold tracking-wide text-gray-800">MY SERVICE</h1>
      </motion.div>

      {/* Animated Cards */}
      <motion.div
        className="flex justify-center items-center gap-10 flex-wrap px-4"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        style={{ perspective: 1000 }}
      >
        {[
          {
            title: 'Web Development',
            desc: 'Custom, fast, and responsive websites built to elevate your digital presence.',
          },
          {
            title: 'Web Design',
            desc: 'Modern, user-friendly designs that reflect your brand and engage your audience.',
          },
          {
            title: 'Mobile Development',
            desc: 'Intuitive, high-performance apps for Android and iOS that keep users connected.',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all max-w-xs w-full"
            variants={getCardVariant(index)}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              transformOrigin: 'center',
            }}
          >
            {/* Floating Icon */}
            <motion.div
              className="rounded-full w-24 h-24 bg-orange-100 flex justify-center items-center mx-auto mb-6 shadow-inner"
              variants={iconFloat}
              animate="animate"
            >
              <img src={web} alt={`${service.title} Icon`} className="w-16" />
            </motion.div>

            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
              {service.title}
            </h2>
            <p className="text-base text-center text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
