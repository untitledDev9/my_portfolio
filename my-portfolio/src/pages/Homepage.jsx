import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Numbers from '../component/Numbers'
import Resume from '../component/Resume'
import Projects from '../component/Projects'
import Contact from '../component/Contact'

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Numbers />
      <Resume />
      <Projects />
      <Contact />
    </main>
  )
}

export default Homepage