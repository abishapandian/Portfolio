import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { delay } from '../utils/animations';
import { FaCode, FaServer, FaDatabase, FaPencilRuler, FaDownload } from 'react-icons/fa';

// Animation for the section container
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 1.2
    }
  }
};

// Animation for individual cards
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
};

export default function Skills({ onComplete }) {
  const controls = useAnimation();

  useEffect(() => {
    const run = async () => {
      await delay(4000);  // Increased delay before starting animation
      await controls.start('visible');
      await delay(2000);
      if (onComplete) onComplete();
    };
    run();
  }, [controls, onComplete]);

  return (
    <motion.section
      id='skills'
      className="py-20 px-6 bg-gradient-to-br  from-white to-orange-200 text-black font-sans rounded-3xl shadow-xl mx-4 md:mx-20"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      >
        <p className="text-sm font-medium uppercase text-orange-500 tracking-widest">My Skills</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Crafted with Elegance</h2>
        <p className="text-gray-500 mt-2">Technologies I work with to bring ideas to life</p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20"
        variants={container}
      >
        <SkillCard icon={<FaCode size={28} />} title="Frontend" skills="React.js, Tailwind CSS, JavaScript, HTML, CSS" />
        <SkillCard icon={<FaServer size={28} />} title="Backend" skills="Node.js, Express.js" />
        <SkillCard icon={<FaDatabase size={28} />} title="Database" skills="MySQL" />
        <SkillCard icon={<FaPencilRuler size={28} />} title="Design" skills="Figma (UI/UX)" />
      </motion.div>

      {/* Download CV Section */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to know more?</h3>
        <p className="text-gray-600 mb-6">Download my full CV to explore my experience and projects.</p>
        <a
          href="/ABISHA_RESUME.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
        >
          <FaDownload />
          Download CV
        </a>
      </motion.div>
    </motion.section>
  );
}

// SkillCard component
function SkillCard({ icon, title, skills }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 text-center flex flex-col items-center"
      variants={cardVariant}
    >
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{skills}</p>
    </motion.div>
  );
}
