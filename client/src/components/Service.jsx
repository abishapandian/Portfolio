import React from 'react';
import web from '../assets/web.png';

export default function Service() {
  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl text-black-950 font-semibold">MY SERVICE</h1>
      </div>

      <div className="flex justify-center items-center space-x-10">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="rounded-full w-24 h-24 bg-orange-50 flex justify-center items-center mx-auto mb-6">
            <img src={web} alt="Web Development Icon" className="w-16" />
          </div>
          <h2 className="text-2xl text-center text-black-950 font-semibold mb-4">Web Development</h2>
          <p className="text-xl text-center text-gray-600">
            Custom, fast, and responsive websites built to elevate your digital presence.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="rounded-full w-24 h-24 bg-orange-50 flex justify-center items-center mx-auto mb-6">
            <img src={web} alt="Web Design Icon" className="w-16" />
          </div>
          <h2 className="text-2xl text-center text-black-950 font-semibold mb-4">Web Design</h2>
          <p className="text-xl text-center text-gray-600">
            Modern, user-friendly designs that reflect your brand and engage your audience.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
          <div className="rounded-full w-24 h-24 bg-orange-50 flex justify-center items-center mx-auto mb-6">
            <img src={web} alt="Mobile Development Icon" className="w-16" />
          </div>
          <h2 className="text-2xl text-center text-black-950 font-semibold mb-4">Mobile Development</h2>
          <p className="text-xl text-center text-gray-600">
            Intuitive, high-performance apps for Android and iOS that keep users connected.
          </p>
        </div>
      </div>
    </section>
  );
}
