import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Numbers from '../component/Numbers'
import Resume from '../component/Resume'

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Numbers />
      <Resume />
    </main>
  )
}

export default Homepage