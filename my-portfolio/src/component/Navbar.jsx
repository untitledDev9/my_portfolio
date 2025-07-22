import React, { useEffect, useState } from 'react'
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

    useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = ''; // cleanup just in case
    };
  }, [menu]);
  return (
    <div>
    <main className='width flex justify-between items-center h-20'>
      <div>
        <h1 className=' font-bold text-2xl text-white cursor-pointer'>Ahmed<span className=' text-[#00FD9A]'>.</span></h1>
      </div>
      <div className=' text-[13px] flex items-center gap-5 text-white max-mobile:hidden'>
        <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Home</p>
        <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Services</p>
        <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Resume</p>
        <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Work</p>
        <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Contact</p>
        <button className=' text-black bg-[#00FD9A] py-1 px-2 rounded-xl hover:border-2 hover:text-white transition-colors duration-400 ease-in-out hover:border-[#00FD9A] hover:bg-[#00FD9A00]'>Hire me</button>

      </div>
      <div className=' hidden max-mobile:block'
        onClick={() => setMenu(!menu)}>
       {menu ? <AiOutlineClose size={25} color='red'/> : <CgMenuMotion size={30} color='#00FD9A' /> }  
      </div>

     
    </main>


     <div className=' overflow-hidden'>
        {menu && (
          <div className=' text-[16px] flex flex-col z-50 h-screen py-10 px-6 items-center gap-8 text-white'>
            <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Home</p>
            <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Services</p>
            <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Resume</p>
            <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Work</p>
            <p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Contact</p>
            <button className=' w-full text-black bg-[#00FD9A] py-4  hover:border-2 hover:border-white '>Hire me</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar