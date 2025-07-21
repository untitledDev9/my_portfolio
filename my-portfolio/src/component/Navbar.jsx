import React from 'react'

const Navbar = () => {
  return (
    <main className='width flex justify-between items-center h-20'>
      <div>
        <h1 className=' font-bold'>Untitled<span>.</span></h1>
      </div>
      <div className=' flex items-center gap-7'>
        <p>Home</p>
        <p>Services</p>
        <p>Resume</p>
        <p>Work</p>
        <p>Contact</p>
        <button>Hire me</button>
      </div>
    </main>
  )
}

export default Navbar