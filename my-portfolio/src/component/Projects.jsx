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
    <div id='work' className=' flex-col flex gap-30 max-tablet:gap-22 mb-10  max-mobile:px-4'>



      <div
        className="cursor-pointer width flex gap-3 max-tablet:flex-col"
      >
        <div className="w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">01</h2>
          <p className="font-semibold text-white text-[30px] max-mobile:text-[24px]">Local Language Web-App</p>
          <p className="leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            A Full-Stack Local Learning Language Web-App, to learn local languages e.g yoruba, hausa, igbo.
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
            <p>React<span className='text-white'>.</span>js,</p>
            <p>Tailwind<span className='text-white'>.</span>css,</p>
            <p>Node<span className='text-white'>.</span>js<span className='text-white'>(</span>Express<span className='text-white'>)</span></p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://movie-api-delta-dun.vercel.app/" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a href="https://github.com/untitledDev9/movie-api" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out 
    max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0"
          onClick={() => window.open("https://movie-api-delta-dun.vercel.app/", "_blank")}
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={Movie} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
            <img src={Movie2} alt="" />
          </div>
        </div>
      </div>



      <div
        className="cursor-pointer width flex gap-3 max-tablet:flex-col"
      >
        <div className="w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">02</h2>
          <p className="font-semibold text-white text-[30px] max-mobile:text-[24px]">Netflix Clone</p>
          <p className="leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            A Netflix clone, with ability to search and navigate through all movies
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
            <p>React<span className='text-white'>.</span>js,</p>
            <p>Tailwind<span className='text-white'>.</span>css,</p>
            <p>Owl<span className='text-white'>-</span>carousel</p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://movie-api-delta-dun.vercel.app/" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a href="https://github.com/untitledDev9/movie-api" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out 
    max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0"
          onClick={() => window.open("https://movie-api-delta-dun.vercel.app/", "_blank")}
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={Movie} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
            <img src={Movie2} alt="" />
          </div>
        </div>
      </div>



      <div
        className="cursor-pointer width flex gap-3 max-tablet:flex-col"
      >
        <div className="w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">03</h2>
          <p className="font-semibold text-white text-[30px] max-mobile:text-[24px]">Landing Page</p>
          <p className="leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            Built a simple Landing page that improved my knowledge on CSS grid
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
            <p>React<span className='text-white'>.</span>js,</p>
            <p>Tailwind<span className='text-white'>.</span>css</p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://virtual-r-vert.vercel.app/" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a href="https://github.com/untitledDev9/VirtualR" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out 
    max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0"
          onClick={() => window.open("https://virtual-r-vert.vercel.app/", "_blank")}
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={virtual} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
            <img src={virtual2} alt="" />
          </div>
        </div>
      </div>



      <div
        className="cursor-pointer width flex gap-3 max-tablet:flex-col"
      >
        <div className="w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">04</h2>
          <p className="font-semibold text-white text-[30px] max-mobile:text-[24px]">PiggyVest</p>
          <p className="leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            Cloned a Real life website, to build more knowledge on how Pro Devs create websites
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
            <p>React<span className='text-white'>.</span>js,</p>
              <p>Tailwind<span className='text-white'>.</span>css,</p>
              <p>React State</p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://piggy-vest-full-function.vercel.app/" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a href="https://github.com/untitledDev9/piggyVest-full-function" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out 
    max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0"
          onClick={() => window.open("https://piggy-vest-full-function.vercel.app/", "_blank")}
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={piggy} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
            <img src={piggy2} alt="" />
          </div>
        </div>
      </div>



      <div
        className="cursor-pointer width flex gap-3 max-tablet:flex-col"
      >
        <div className="w-[50%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
          <h2 className="font-bold text-6xl text-transparent stroke-text max-mobile:text-5xl">05</h2>
          <p className="font-semibold text-white text-[30px] max-mobile:text-[24px]">Countries API</p>
          <p className="leading-7 text-[15px] text-[#BDBDC1] max-mobile:text-[12px] max-mobile:leading-6">
            Worked with APIs, and had better understanding on Array methods
          </p>
          <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px]">
                <p>React<span className='text-white'>.</span>js,</p>
              <p>Tailwind<span className='text-white'>.</span>css,</p>
              <p>API<span className='text-white'>s</span></p>
          </div>
          <div className="w-[95%] h-[1px] bg-[#BDBDC1] mb-3"></div>
          <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
            <a href="https://country-api-gray.vercel.app/" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <BsArrowUpRight size={23} />
              </div>
            </a>
            <a href="https://github.com/untitledDev9/Country-Api" target="_blank">
              <div className="text-white hover:text-[#00FD9A] bg-[#33333355] rounded-full p-3">
                <FaGithub size={23} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex items-center justify-end bg-[#266361] relative max-Laptop:w-[50%] h-fit pt-4 w-[60%] hover:pt-0 transition-all duration-400 ease-in-out 
    max-tablet:w-full max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0"
          onClick={() => window.open("https://country-api-gray.vercel.app/", "_blank")}
        >
          <div className="w-[450px] hover:w-[480px] transition-all duration-400 ease-in-out max-Laptop:hover:w-[450px] max-tablet:transition-none">
            <img src={country} alt="" />
          </div>
          <div className="w-[200px] absolute top-10 left-6 max-Laptop:w-[140px] max-tablet:hidden">
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
