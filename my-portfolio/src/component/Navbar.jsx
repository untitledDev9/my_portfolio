import React, { useState } from 'react'
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <main className='width flex justify-between items-center h-20'>
      <div>
        <h1 className=' font-bold text-2xl text-white cursor-pointer'>Ahmed<span className=' text-[#0EF89A]'>.</span></h1>
      </div>
      <div className=' text-[13px] flex items-center gap-5 text-white max-mobile:hidden'>
        <p className=' hover:text-[#0EF89A] transition-colors duration-150 ease-in-out cursor-pointer'>Home</p>
        <p className=' hover:text-[#0EF89A] transition-colors duration-150 ease-in-out cursor-pointer'>Services</p>
        <p className=' hover:text-[#0EF89A] transition-colors duration-150 ease-in-out cursor-pointer'>Resume</p>
        <p className=' hover:text-[#0EF89A] transition-colors duration-150 ease-in-out cursor-pointer'>Work</p>
        <p className=' hover:text-[#0EF89A] transition-colors duration-150 ease-in-out cursor-pointer'>Contact</p>
        <button className=' text-black bg-[#0EF89A] py-1 px-2 rounded-xl hover:border-2 hover:text-white transition-colors duration-400 ease-in-out hover:border-[#0EF89A] hover:bg-[#0ef89a00]'>Hire me</button>

      </div>
<div className=' hidden max-mobile:block'>
        <CgMenuMotion  size={30} color='white'/>
</div>
    </main>
  )
}

export default Navbar