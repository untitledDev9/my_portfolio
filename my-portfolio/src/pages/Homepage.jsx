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
      <h2 className=' text-center max-tablet:text-4xl  text-5xl bg-[#00FD9A] font-semibold mt-26'>RESUME</h2>
      <Resume />
      <h2 className=' text-center max-tablet:text-4xl  text-5xl bg-[#00FD9A] font-semibold mt-26 mb-16'>PROJECTS</h2>
      <Projects />
      <h2 className=' text-center max-tablet:text-4xl  text-5xl bg-[#00FD9A] font-semibold mt-26'>CONTACT</h2>
      <Contact />
    </main>
  )
}

export default Homepage