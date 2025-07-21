import React from 'react'

const Navbar = () => {
  return (
    <main className='width flex justify-between items-center h-20'>
      <div>
        <h1 className=' font-bold text-2xl text-white'>Ahmed<span className=' text-[#0EF89A]'>.</span></h1>
      </div>
      <div className=' text-[13px] flex items-center gap-5 text-white'>
        <p className=' '>Home</p>
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