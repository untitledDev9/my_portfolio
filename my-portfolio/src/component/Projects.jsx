import React from 'react'
import Movie from '../assets/movie-api-desktop.png'
import Movie2 from '../assets/movie-api-mobile.png'
import virtual from '../assets/virtual-desktop.png'
import virtual2 from '../assets/virtual-mobile.png'
import country from '../assets/country-desktop.png'
import country2 from '../assets/country-mobile.png'
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className=' flex-col flex gap-30'>
      <div className=' width flex gap-3'>
        <div className='w-[50%]  flex flex-col gap-5'>
          <h2 className=" font-bold text-6xl text-transparent stroke-text">01</h2>
          <p className=' font-semibold text-white text-[30px]'>Fullstack Project</p>
          <p className=' leading-7 text-[15px] text-[#BDBDC1]'> A Netflix clone, with ability to search and navigate through all movies</p>
          <div className=' flex gap-3 text-[#08c17a]'>
            <p>React.js,</p>
            <p>Tailwind.css,</p>
            <p>Owl-carousel</p>
          </div>
          <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
          <div className='  flex gap-5'>
            <a href="https://movie-api-delta-dun.vercel.app/ "><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
            <a href="https://github.com/untitledDev9/movie-api"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
          </div>
        </div>
        <div className='flex items-center justify-end bg-[#266361] relative h-fit pt-4 w-[60%]'>
          <div className=' w-[450px]'>
            <img src={Movie} alt="" />
          </div>
          <div className=' w-[200px] absolute top-10 left-6'>
            <img src={Movie2} alt="" />
          </div>
        </div>
      </div>






      <div className=' width flex gap-3'>
        <div className='w-[50%]  flex flex-col gap-5'>
          <h2 className=" font-bold text-6xl text-transparent stroke-text">02</h2>
          <p className=' font-semibold text-white text-[30px]'>Fullstack Project</p>
          <p className=' leading-7 text-[15px] text-[#BDBDC1]'> A Netflix clone, with ability to search and navigate through all movies</p>
          <div className=' flex gap-3 text-[#08c17a]'>
            <p>React.js,</p>
            <p>Tailwind.css,</p>
            <p>Owl-carousel</p>
          </div>
          <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
          <div className='  flex gap-5'>
            <a href="https://movie-api-delta-dun.vercel.app/ "><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
            <a href="https://github.com/untitledDev9/movie-api"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
          </div>
        </div>
        <div className='flex items-center justify-end bg-[#633626] relative h-fit pt-4 w-[60%]'>
          <div className=' w-[450px]'>
            <img src={virtual} alt="" />
          </div>
          <div className=' w-[200px] absolute top-10 left-6'>
            <img src={virtual2} alt="" />
          </div>
        </div>
      </div>





      <div className=' width flex gap-3'>
        <div className='w-[50%]  flex flex-col gap-5'>
          <h2 className=" font-bold text-6xl text-transparent stroke-text">03</h2>
          <p className=' font-semibold text-white text-[30px]'>Fullstack Project</p>
          <p className=' leading-7 text-[15px] text-[#BDBDC1]'> A Netflix clone, with ability to search and navigate through all movies</p>
          <div className=' flex gap-3 text-[#08c17a]'>
            <p>React.js,</p>
            <p>Tailwind.css,</p>
            <p>Owl-carousel</p>
          </div>
          <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
          <div className='  flex gap-5'>
            <a href="https://movie-api-delta-dun.vercel.app/ "><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
            <a href="https://github.com/untitledDev9/movie-api"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
          </div>
        </div>
        <div className='flex items-center justify-end bg-[#23276d] relative h-fit pt-4 w-[60%]'>
          <div className=' w-[450px]'>
            <img src={country} alt="" />
          </div>
          <div className=' w-[200px] absolute top-10 left-6'>
            <img src={country2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects



// https://movie-api-delta-dun.vercel.app/   https://github.com/untitledDev9/movie-api
// https://virtual-r-vert.vercel.app/   https://github.com/untitledDev9/VirtualR
// https://country-api-gray.vercel.app/  https://github.com/untitledDev9/Country-Api
