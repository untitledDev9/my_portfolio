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
import speak from '../assets/speaktribe-desktop.png'
import speaktribe from '../assets/speaktribe-mobile.png'

const Projects = () => {
  const projectsData = [
    {
      id: "01",
      title: "Local Language Web-App",
      description: "A Full-Stack Local Learning Language Web-App (SpeakTribe), to learn local languages e.g yoruba, hausa, igbo.",
      technologies: ["React.js", "Tailwind.css", "Node.js(Express)"],
      liveUrl: "https://speaktribe-frontend.vercel.app",
      githubUrl: "https://github.com/untitledDev9/speaktribe-frontend.git",
      desktopImage: speak,
      mobileImage: speaktribe,
      bgColor: "bg-[#266361]",
      mobilePosition: "-left-20"
    },
    {
      id: "02",
      title: "Netflix Clone",
      description: "A Netflix clone, with ability to search and navigate through all movies",
      technologies: ["React.js", "Tailwind.css", "Owl-carousel"],
      liveUrl: "https://movie-api-delta-dun.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/movie-api",
      desktopImage: Movie,
      mobileImage: Movie2,
      bgColor: "bg-[#1a1a2e]",
      mobilePosition: "left-6"
    },
    {
      id: "03",
      title: "Landing Page",
      description: "Built a simple Landing page that improved my knowledge on CSS grid",
      technologies: ["React.js", "Tailwind.css"],
      liveUrl: "https://virtual-r-vert.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/VirtualR",
      desktopImage: virtual,
      mobileImage: virtual2,
      bgColor: "bg-[#2d3561]",
      mobilePosition: "left-6"
    },
    {
      id: "04",
      title: "PiggyVest",
      description: "Cloned a Real life website, to build more knowledge on how Pro Devs create websites",
      technologies: ["React.js", "Tailwind.css", "React State"],
      liveUrl: "https://piggy-vest-full-function.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/piggyVest-full-function",
      desktopImage: piggy,
      mobileImage: piggy2,
      bgColor: "bg-[#0c4a6e]",
      mobilePosition: "left-6"
    },
    {
      id: "05",
      title: "Countries API",
      description: "Worked with APIs, and had better understanding on Array methods",
      technologies: ["React.js", "Tailwind.css", "APIs"],
      liveUrl: "https://country-api-gray.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/Country-Api",
      desktopImage: country,
      mobileImage: country2,
      bgColor: "bg-[#1e3a5f]",
      mobilePosition: "left-6"
    }
  ];

  const renderTechnologies = (technologies) => {
    return technologies.map((tech, index) => {
      const parts = tech.split(/(\.|-)|\(|\)/);
      return (
        <p key={index}>
          {parts.map((part, i) => {
            if (part === '.' || part === '-' || part === '(' || part === ')') {
              return <span key={i} className='text-white'>{part}</span>;
            }
            return part;
          })}
          {index < technologies.length - 1 && ','}
        </p>
      );
    });
  };

  return (
    <div id='work' className='flex-col flex gap-24 mb-10 max-tablet:gap-20 max-mobile:px-4'>
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className="cursor-pointer width flex gap-8 max-tablet:flex-col group"
        >
          {/* Left Section - Project Info */}
          <div className="w-[45%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
            <h2 className="font-bold text-7xl text-transparent stroke-text max-mobile:text-6xl group-hover:text-[#00FD9A] transition-colors duration-300">
              {project.id}
            </h2>
            <p className="font-bold text-white text-[32px] max-mobile:text-[26px] leading-tight">
              {project.title}
            </p>
            <p className="leading-7 text-[16px] text-[#BDBDC1] max-mobile:text-[13px] max-mobile:leading-6">
              {project.description}
            </p>
            <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px] flex-wrap">
              {renderTechnologies(project.technologies)}
            </div>
            <div className="w-[95%] h-[1px] bg-gradient-to-r from-[#00FD9A] to-transparent"></div>
            <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <div className="text-white hover:text-[#00FD9A] hover:bg-[#00FD9A]/10 bg-[#33333355] rounded-full p-3 transition-all duration-300 hover:scale-110">
                  <BsArrowUpRight size={23} />
                </div>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <div className="text-white hover:text-[#00FD9A] hover:bg-[#00FD9A]/10 bg-[#33333355] rounded-full p-3 transition-all duration-300 hover:scale-110">
                  <FaGithub size={23} />
                </div>
              </a>
            </div>
          </div>

          {/* Right Section - Project Images */}
          <div
            className={`flex items-center justify-end ${project.bgColor} relative w-[55%] h-[400px] pt-6 rounded-2xl overflow-hidden
              hover:pt-0 transition-all duration-500 ease-in-out shadow-2xl
              max-tablet:w-full max-tablet:h-[350px] max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0 max-mobile:h-[280px]
              group-hover:shadow-[0_0_30px_rgba(0,253,154,0.3)]`}
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            {/* Desktop Image */}
            <div className="w-[420px] h-[360px] object-cover transition-all duration-500 ease-in-out 
              group-hover:w-[450px] group-hover:h-[385px]
              max-tablet:w-full max-tablet:h-full max-tablet:group-hover:w-full max-tablet:group-hover:h-full max-tablet:transition-none 
              max-mobile:w-[340px] max-mobile:h-[260px] max-mobile:group-hover:w-[340px] max-mobile:group-hover:h-[260px]">
              <img 
                src={project.desktopImage} 
                alt={`${project.title} desktop view`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Mobile Image Overlay */}
            <div className={`w-[180px] h-[320px] absolute top-12 ${project.mobilePosition} 
              shadow-2xl transition-all duration-500 ease-in-out
              group-hover:scale-110 group-hover:top-10
              max-tablet:hidden`}>
              <img 
                src={project.mobileImage} 
                alt={`${project.title} mobile view`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects