import React from 'react'
import { FiDownload } from "react-icons/fi";
import Photo from '../assets/photo.png'
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='home' className=' width flex justify-center items-center pt-16
    max-tablet:flex-col-reverse max-tablet:gap-8 max-tablet:pt-10
    max-mobile:gap-6 max-mobile:pt-4
    '>
      <div className=' flex flex-col gap-4'>
        <div className=' mb-3 max-tablet:text-center flex flex-col gap-2'>
          <h4 className=' text-[#BDBDC1] text-[14px]
          max-tablet:text-[19px]
          max-mobile:text-[17px]
          max-mobile:mb-2
          '>Software Developer</h4>
          <h2 className=' text-6xl font-semibold text-white max-tablet:text-[55px] max-mobile:text-[40px] max-mobile:mb-2'>Hello I'm </h2>
          <h2 className=' text-6xl font-semibold text-[#00FD9A] max-mobile:text-[45px] max-mobile:mb-2'>Ahmed Suleiman</h2>
        </div>
        <div className=' w-[90%] max-tablet:mx-auto'>
          <p className='text-[#BDBDC1] text-[13px] mb-4
          max-tablet:text-center max-tablet:text-[17px]
          max-mobile:text-[13px]
          '>Creative and adaptable developer driven by clarity, performance, and the craft of building meaningful digital experiences.</p>
          <div className=' flex  gap-6
          max-tablet:flex-col
          '>
            <a href="/AhmedCV.pdf" download>
              <button className='text-[#00FD9A] border-2 border-[#00FD9A] px-4 py-2 rounded-2xl flex items-center gap-2 font-light hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
            max-tablet:mx-auto max-tablet:text-[17px]
            max-mobile:text-[13px]
            '>
                <p className=' text-[13px] max-tablet:text-[17px] max-mobile:text-[13px]'>DOWNLOAD CV</p>
                <FiDownload />
              </button>
            </a>
            <div className=' flex justify-center items-center gap-3
            max-tablet:gap-7 max-mobile:gap-5
            '>
              <a href="https://github.com/untitledDev9" target='blank'>
                <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              '>
                  <FaGithub />
                </div>
              </a>
              <a href="https://wa.me/2349091324697" target="_blank" rel="noopener noreferrer">
                <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              '>
                  <FaWhatsapp />
                </div>
              </a>
              <a href="#">
                <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              '>
                  <FiDownload />
                </div>
              </a>
              <a href="#">
                <div className=' border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-2 rounded-full    hover:bg-[#00FD9A] hover:font-semibold hover:text-black transition-colors duration-500 ease-in-out
              max-tablet:text-[24px] max-mobile:text-[18px] 
              '>
                  <FiDownload />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=' border-dotted border-green-600 border-2  w-[35%] pt-5 pl-5 max-tablet:w-[45%] max-mobile:w-[65%]'>
        <img src={Photo} alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Hero