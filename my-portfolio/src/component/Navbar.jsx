import React, {  useState } from 'react'
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import logo from '/untitled-logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  //   useEffect(() => {
  //   if (menu) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }

  //   return () => {
  //     document.body.style.overflow = ''; // cleanup just in case
  //   };
  // }, [menu]);
  return (
    <>
      <div className='max-mobile:px-2  fixed w-full top-0 z-50  backdrop-blur-md bg-[#1C1B22]/34'>
        <main className='width flex justify-between items-center h-20 '>
          <div className=' flex items-center gap-1 w-[35px]'>
            <img src={logo} alt="" />
          </div>
          <div className=' text-[13px] flex items-center gap-5 text-white max-mobile:hidden'>
            <a href="#home"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Home</p></a>
            {/* <a href="#service"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Services</p></a> */}
            <a href="#resume"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Resume</p></a>
            <a href="#work"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Work</p></a>
            <a href="#contact"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Contact</p></a>
            <a href="#contact"><button className=' text-black bg-[#00FD9A] py-1 px-2 rounded-xl hover:border-2 hover:text-white transition-colors duration-400 ease-in-out hover:border-[#00FD9A] hover:bg-[#00FD9A00]'>Hire me</button></a>

          </div>
          <div className=' hidden max-mobile:block'
            onClick={() => setMenu(!menu)}>
            {menu ? <AiOutlineClose size={25} color='red' /> : <CgMenuMotion size={30} color='#00FD9A' />}
          </div>


        </main>



        {menu && (
          <div className=' text-[16px] flex flex-col z-50 h-fit py-10 px-6 items-center gap-8 text-white'>
            <a onClick={() => setMenu(!menu)} href="#home"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Home</p></a>
            {/* <a onClick={() => setMenu(!menu)} href=""><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Services</p></a> */}
            <a onClick={() => setMenu(!menu)} href="#resume"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Resume</p></a>
            <a onClick={() => setMenu(!menu)} href="#work"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Work</p></a>
            <a onClick={() => setMenu(!menu)} href="#contact"><p className=' hover:text-[#00FD9A] transition-colors duration-150 ease-in-out cursor-pointer'>Contact</p></a>
            <a onClick={() => setMenu(!menu)} href="#contact" className='w-full'><button className=' w-full text-black bg-[#00FD9A] py-3  hover:border-2 hover:border-white '>Hire me</button></a>
          </div>
        )}

      </div>
      <div className='h-[60px]'></div>
    </>
  )
}

export default Navbar