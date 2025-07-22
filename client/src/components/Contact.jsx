import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';

export default function ContactSection() {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    package: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setForm({ email: '', phone: '', package: '', date: '', message: '' });
  };

  // Slow floating input variant
  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.5 + i * 0.8, // input reveal delay
        duration: 1.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
    id='contact'
      className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-20 px-4 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 3.5 }}
    >
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 3, ease: 'easeOut' }}
        >
          <p className="text-orange-500 font-semibold text-sm tracking-wide mb-2">📍 Contact Me</p>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-10">
            Need help? <br />
            <span className="text-orange-500">Get in touch now!</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-xl">📞</div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-bold text-gray-800">+123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-xl">✉️</div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-bold text-gray-800">example@email.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 3, ease: 'easeOut' }}
        >
          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="relative" custom={0} variants={inputVariant} initial="hidden" animate="visible">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email"
              />
              <label className="absolute left-4 top-3 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500 transition-all">
                Email
              </label>
            </motion.div>

            <motion.div className="relative" custom={1} variants={inputVariant} initial="hidden" animate="visible">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                type="text"
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent placeholder-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone"
              />
              <label className="absolute left-4 top-3 text-sm text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500 transition-all">
                Phone
              </label>
            </motion.div>
          </div>

          {/* Package & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div className="relative" custom={2} variants={inputVariant} initial="hidden" animate="visible">
              <select
                name="package"
                value={form.package}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Package</option>
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </motion.div>

            <motion.div className="relative" custom={3} variants={inputVariant} initial="hidden" animate="visible">
              <input
                name="date"
                value={form.date}
                onChange={handleChange}
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div className="mt-6" custom={4} variants={inputVariant} initial="hidden" animate="visible">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </motion.div>

          {/* Submit */}
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
          >
            <button
              type="submit"
              className="bg-orange-500 text-white w-full py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-md"
            >
              Send Me Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
