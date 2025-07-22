import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { delay } from '../utils/animations'
import crown from '../assets/crown.png'

export default function Resume({ onComplete }) {
  const controls = useAnimation()

  useEffect(() => {
    const run = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
      await delay(2000)
      onComplete()
    }
    run()
  }, [controls, onComplete])

  return (
    <motion.section
    id='resume'
      className="text-black font-sans mt-10 px-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg py-12"
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <motion.div
        className="flex items-center justify-center mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img src={crown} alt="Crown Left" className="w-20 mr-6 animate-pulse" />
        <div className="text-center">
          <p className="text-lg text-orange-500 font-semibold uppercase tracking-wider">Resume</p>
          <h1 className="text-4xl font-bold tracking-wide text-gray-800">Education</h1>
        </div>
        <img src={crown} alt="Crown Right" className="w-20 ml-6 animate-pulse" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {[
          {
            title: "B.E. in Computer Science",
            institution: "Sethu Institute of Technology, Virudhunagar",
            duration: "2021 - 2025",
            extra: "CGPA: 8.5"
          },
          {
            title: "Higher Secondary",
            institution: "Sivananda Vidyalayam Metric Hr. Sec. School, Aruppukottai",
            duration: "2019 - 2021"
          }
        ].map((edu, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-orange-500 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold text-gray-900">{edu.title}</h2>
              <span className="text-orange-600 font-medium">{edu.duration}</span>
            </div>
            <p className="text-lg text-gray-700">{edu.institution}</p>
            {edu.extra && (
              <p className="text-md mt-2 text-gray-600">
                {edu.extra.split(":")[0]}: <span className="font-bold text-black">{edu.extra.split(":")[1]}</span>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
