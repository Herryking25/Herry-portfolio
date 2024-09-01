import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
