import React from 'react'
import { FiDownload } from "react-icons/fi";
import Photo from '../assets/photo.png'
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=' width flex justify-center items-center pt-16'>
      <div className=' '>
        <div className=' mb-3 '>
          <h4 className=' text-[#BDBDC1] text-[14px]'>Software Developer</h4>
          <h2 className=' text-6xl font-semibold text-white'>Hello I'm </h2>
          <h2 className=' text-6xl font-semibold text-[#00FD9A]'>Ahmed Suleiman</h2>
        </div>
        <div className=' w-[90%]'>
          <p className='text-[#BDBDC1] text-[13px] mb-4'>Creative and adaptable developer driven by clarity, performance, and the craft of building meaningful digital experiences.</p>
          <div className=' flex  gap-6'>
            <a href="/Ahmed-Suleiman-CV.pdf" download>
            <button className='text-[#00FD9A] border-2 border-[#00FD9A] px-4 py-2 rounded-2xl flex  items-center gap-2 font-light hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out'>
              <p className=' text-[13px]'>DOWNLOAD CV</p>
              <FiDownload />
            </button>
            </a>
            <div className=' flex justify-center items-center gap-3'>
              <a href="https://github.com/untitledDev9" target='blank'>
              <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out'>
                <FaGithub />
              </div>
          </a>
              <a href="https://wa.me/2349091324697" target="_blank" rel="noopener noreferrer">
              <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out'>
                <FaWhatsapp />
              </div>
              </a>
              <a href="#">
              <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out'>
                <FiDownload />
              </div>
              </a>
              <a href="#">
              <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out'>
                <FiDownload />
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=' border-dotted border-green-600 border-2 rounded-full w-[80%] '>
        <img src={Photo} alt="" />
      </div>
    </div>
  )
}

export default Hero