import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Resume from '../components/Resume'
import Service from '../components/Service'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <About/>
    <Resume/>
    <Service/>
    </>
  )
}
