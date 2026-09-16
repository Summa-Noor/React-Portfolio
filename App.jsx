import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Services/> 
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
