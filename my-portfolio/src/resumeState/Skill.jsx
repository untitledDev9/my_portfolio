import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
const Skill = () => {
  return (
            <div>
          <div>
            <h2 className='text-white text-[43px]'>My Skills</h2>
            <p className=' text-[14px] text-[#BDBDC1] leading-7 mb-5'>I’ve built solid frontend skills with React and Tailwind, and I’m now learning backend basics to grow into a full-stack developer.</p>
          </div>
          <div className=' grid grid-cols-4 max-Laptop:grid-cols-3 max-Laptop:w-[420px] max-Laptop:h-[300px] custom-scroll overflow-y-scroll gap-5 w-[560px]'>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <FaHtml5  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <RiReactjsFill  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <IoLogoCss3  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <IoLogoJavascript  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <SiTailwindcss  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <FaBootstrap  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <IoLogoNodejs  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <FaGitAlt  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <TbBrandAdobePhotoshop  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <TiVendorMicrosoft  size={50}/>
            </div>
            <div className=' bg-[#28272B] w-[120px] h-[120px] items-center flex justify-center py-5 text-white hover:text-[#00FD9A] transition-colors ease-in-out duration-400 rounded'>
              <FaGithub  size={50}/>
            </div>
          </div>
        </div>
  )
}

export default Skill