import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Resume from '../components/Resume'
import Service from '../components/Service'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <About/>
    <Resume/>
    <Skills/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
