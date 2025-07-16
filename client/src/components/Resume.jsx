import React from 'react';
import crown from '../assets/crown.png';

export default function Resume() {
    return (
        <section className='text-black font-sans mt-32 px-8'>
            <div className='flex items-center justify-center mb-16'>
                <img src={crown} alt='Crown Left' className='w-24 mr-6' />
                <div className='text-center'>
                    <p className='text-lg text-orange-400 font-semibold'>Resume</p>
                    <h1 className='text-4xl font-bold tracking-wide'>Education</h1>
                </div>
                <img src={crown} alt='Crown Right' className='w-24 ml-6' />
            </div>

            <div className='grid md:grid-cols-2 gap-10 mb-24'>
                <div className='border border-orange-400 p-8 rounded-md shadow-sm hover:shadow-lg transition duration-300'>
                    <div className='flex justify-between items-center mb-2'>
                        <h2 className='text-2xl font-semibold'>B.E. in Computer Science</h2>
                        <span className='text-orange-500 font-medium'>2021 - 2025</span>
                    </div>
                    <p className='text-lg'>Sethu Institute of Technology, Virudhunagar</p>
                    <p className='text-md mt-2 text-gray-700'>CGPA: <span className='font-semibold'>8.5</span></p>
                </div>

                <div className='border border-orange-400 p-8 rounded-md shadow-sm hover:shadow-lg transition duration-300'>
                    <div className='flex justify-between items-center mb-2'>
                        <h2 className='text-2xl font-semibold'>Higher Secondary</h2>
                        <span className='text-orange-500 font-medium'>2019 - 2021</span>
                    </div>
                    <p className='text-lg'>Sivananda Vidyalayam Metric Hr. Sec. School,<br />Aruppukottai</p>
                </div>
            </div>

            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold tracking-wide'>Skills</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6'>
                <div className='border border-orange-400 rounded-md p-6 h-60 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-semibold mb-2'>Frontend</h2>
                    <p className='text-gray-700'>React.js, HTML, CSS,<br />Tailwind CSS, JavaScript</p>
                </div>

                <div className='border border-orange-400 p-6 rounded-md h-60 flex flex-col justify-center items-center shadow-sm'>
                    <h2 className='text-xl font-semibold mb-2'>Backend</h2>
                    <p className='text-gray-700'>Node.js, Express.js</p>
                </div>

                <div className='border border-orange-400 p-6 rounded-md h-60 flex flex-col justify-center items-center shadow-sm'>
                    <h2 className='text-xl font-semibold mb-2'>Database</h2>
                    <p className='text-gray-700'>MySQL</p>
                </div>

                <div className='border border-orange-400 p-6 rounded-md h-60 flex flex-col justify-center items-center shadow-sm'>
                    <h2 className='text-xl font-semibold mb-2'>Design</h2>
                    <p className='text-gray-700'>Figma (UI/UX)</p>
                </div>
            </div>
        </section>
    );
}
