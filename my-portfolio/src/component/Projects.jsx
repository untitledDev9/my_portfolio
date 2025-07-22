import React from 'react'
import Movie from '../assets/movie-api-desktop.png'
import Movie2 from '../assets/movie-api-mobile.png'
import virtual from '../assets/virtual-desktop.png'
import virtual2 from '../assets/virtual-mobile.png'
import country from '../assets/country-desktop.png'
import country2 from '../assets/country-mobile.png'
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import piggy from '../assets/piggy-desktop.png'
import piggy2 from '../assets/piggy-mobile.png'

const Projects = () => {
  return (
    <div className=' flex-col flex gap-30'>




      <a href="https://movie-api-delta-dun.vercel.app/" target='blank'>
        <div className=' width flex gap-3'>
          <div className='w-[50%]  flex flex-col gap-5'>
            <h2 className=" font-bold text-6xl text-transparent stroke-text">01</h2>
            <p className=' font-semibold text-white text-[30px]'>Netflix Clone</p>
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
          <div className='flex items-center justify-end bg-[#266361] relative max-Laptop:bg-amber-700 max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out'>
            <div className=' w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px]'>
              <img src={Movie} alt="" />
            </div>
            <div className=' w-[200px] absolute top-10 left-6 max-Laptop:w-[140px]'>
              <img src={Movie2} alt="" />
            </div>
          </div>
        </div>
      </a>




      <a href="https://virtual-r-vert.vercel.app/" target='blank'>
        <div className=' width flex gap-3'>
          <div className='w-[50%]  flex flex-col gap-5'>
            <h2 className=" font-bold text-6xl text-transparent stroke-text">02</h2>
            <p className=' font-semibold text-white text-[30px]'>Landing Page</p>
            <p className=' leading-7 text-[15px] text-[#BDBDC1]'>Built a simple Landing page that improved my knowledge on CSS grid</p>
            <div className=' flex gap-3 text-[#08c17a]'>
              <p>React.js,</p>
              <p>Tailwind.css</p>
              
            </div>
            <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
            <div className='  flex gap-5'>
              <a href="https://virtual-r-vert.vercel.app/ "><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
              <a href="https://github.com/untitledDev9/VirtualR"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
            </div>
          </div>
          <div className='flex items-center justify-end bg-[#633626] relative max-Laptop:bg-amber-700 max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out'>
            <div className=' w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px]'>
              <img src={virtual} alt="" />
            </div>
            <div className=' w-[200px] absolute top-10 left-6 max-Laptop:w-[140px]'>
              <img src={virtual2} alt="" />
            </div>
          </div>
        </div>
      </a>



      <a href="https://piggy-vest-full-function.vercel.app/" target='blank'>
        <div className=' width flex gap-3'>
          <div className='w-[50%]  flex flex-col gap-5'>
            <h2 className=" font-bold text-6xl text-transparent stroke-text">03</h2>
            <p className=' font-semibold text-white text-[30px]'>PiggyVest</p>
            <p className=' leading-7 text-[15px] text-[#BDBDC1]'>Cloned a Real life website, to build more knowledge on how Pro Devs create websites</p>
            <div className=' flex gap-3 text-[#08c17a]'>
              <p>React.js,</p>
              <p>Tailwind.css,</p>
              <p>React State</p>
            </div>
            <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
            <div className='  flex gap-5'>
              <a href="https://piggy-vest-full-function.vercel.app/"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
              <a href="https://github.com/untitledDev9/piggyVest-full-function"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
            </div>
          </div>
          <div className='flex items-center justify-end bg-[#23276d] relative max-Laptop:bg-amber-700 max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out'>
            <div className=' w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px]'>
              <img src={piggy} alt="" />
            </div>
            <div className=' w-[200px] absolute top-10 left-6 max-Laptop:w-[140px]'>
              <img src={piggy2} alt="" />
            </div>
          </div>
        </div>
      </a>



      <a href="https://country-api-gray.vercel.app/" target='blank'>
        <div className=' width flex gap-3'>
          <div className='w-[50%]  flex flex-col gap-5'>
            <h2 className=" font-bold text-6xl text-transparent stroke-text">03</h2>
            <p className=' font-semibold text-white text-[30px]'>Countries API</p>
            <p className=' leading-7 text-[15px] text-[#BDBDC1]'>Worked with APIs, and had better understanding on Array methods</p>
            <div className=' flex gap-3 text-[#08c17a]'>
              <p>React.js,</p>
              <p>Tailwind.css,</p>
              <p>APIs</p>
            </div>
            <div className=' w-[95%] h-[1px] bg-[#BDBDC1] mb-3'></div>
            <div className='  flex gap-5'>
              <a href="https://country-api-gray.vercel.app/ "><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><BsArrowUpRight size={23} /></div></a>
              <a href="https://github.com/untitledDev9/Country-Api"><div className='text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3 ' ><FaGithub size={23} /></div></a>
            </div>
          </div>
          <div className='flex items-center justify-end bg-[#236d27] relative max-Laptop:bg-amber-700 max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out'>
            <div className=' w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px]'>
              <img src={country} alt="" />
            </div>
            <div className=' w-[200px] absolute top-10 left-6 max-Laptop:w-[140px]'>
              <img src={country2} alt="" />
            </div>
          </div>
        </div>
      </a>




    </div>
  )
}

export default Projects



// https://movie-api-delta-dun.vercel.app/   https://github.com/untitledDev9/movie-api
// https://virtual-r-vert.vercel.app/   https://github.com/untitledDev9/VirtualR
// https://country-api-gray.vercel.app/  https://github.com/untitledDev9/Country-Api
