import React, { useEffect, useState } from 'react'
import { FiDownload } from "react-icons/fi";
import Photo from '../assets/WhatsApp_Image_2025-08-23_at_14.49.11_93a877ee-removebg-preview.png'
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/untitledDev9", 
      label: "GitHub",
      hoverColor: "hover:bg-[#00FD9A]"
    },
    { 
      icon: FaWhatsapp, 
      url: "https://wa.me/2349091324697", 
      label: "WhatsApp",
      hoverColor: "hover:bg-[#00FD9A]"
    }
  ];

  const titles = ["Software Developer", "Full-Stack Engineer", "Problem Solver"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='width flex justify-center items-center pt-16 gap-12
      max-tablet:flex-col-reverse max-tablet:gap-8 max-tablet:pt-10
      max-mobile:gap-6 max-mobile:pt-4
    '>
      {/* Left Section - Text Content */}
      <div className='flex flex-col gap-6 flex-1'>
        <div className='mb-3 max-tablet:text-center flex flex-col gap-3'>
          {/* Animated Title */}
          <div className='h-[30px] overflow-hidden max-tablet:h-[35px] max-mobile:h-[28px]'>
            <h4 
              className='text-[#00FD9A] text-[14px] font-medium tracking-wider uppercase
                max-tablet:text-[19px] max-mobile:text-[17px] transition-all duration-500'
              style={{
                transform: `translateY(-${currentTitle * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {titles.map((title, index) => (
                <div key={index} className='h-[30px] flex items-center justify-start max-tablet:justify-center max-tablet:h-[35px] max-mobile:h-[28px]'>
                  {title}
                </div>
              ))}
            </h4>
          </div>

          {/* Name with Animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className='text-6xl font-semibold text-white max-tablet:text-[55px] max-mobile:text-[40px]'>
              Hello I<span className='text-[#00FD9A]'>'</span>m 
            </h2>
            <h2 className='text-6xl font-bold text-[#00FD9A] mt-2 max-tablet:text-[55px] max-mobile:text-[45px]
              bg-gradient-to-r from-[#00FD9A] to-[#00d484] bg-clip-text text-transparent
            '>
              Ahmed Suleiman
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className={`w-[90%] max-tablet:mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-[#BDBDC1] text-[15px] leading-relaxed mb-6
            max-tablet:text-center max-tablet:text-[17px]
            max-mobile:text-[13px]
          '>
            Creative and adaptable developer driven by clarity, performance, and the craft of building meaningful digital experiences.
          </p>

          {/* CTA Section */}
          <div className='flex gap-6 items-center max-tablet:flex-col max-tablet:gap-5'>
            {/* Download CV Button */}
            <a href="/AhmedCV.pdf" download className='group'>
              <button className='text-[#00FD9A] bg-transparent border-2 border-[#00FD9A] 
                px-6 py-3 rounded-full flex items-center gap-3 font-medium
                hover:bg-[#00FD9A] hover:text-black hover:shadow-[0_0_25px_rgba(0,253,154,0.5)]
                transition-all duration-300 ease-in-out transform hover:scale-105
                max-tablet:mx-auto max-tablet:text-[17px]
                max-mobile:text-[13px] max-mobile:px-5 max-mobile:py-2
              '>
                <p className='text-[13px] max-tablet:text-[17px] max-mobile:text-[13px] font-semibold'>
                  DOWNLOAD CV
                </p>
                <FiDownload className='group-hover:animate-bounce' />
              </button>
            </a>

            {/* Social Links */}
            <div className='flex justify-center items-center gap-4 max-tablet:gap-6 max-mobile:gap-4'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className='group'
                >
                  <div className={`border-[#00FD9A] text-[#00FD9A] border-2 w-fit p-3 rounded-full
                    ${social.hoverColor} hover:text-black hover:shadow-[0_0_20px_rgba(0,253,154,0.4)]
                    transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6
                    max-tablet:text-[24px] max-tablet:p-4
                    max-mobile:text-[18px] max-mobile:p-2
                  `}>
                    <social.icon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Photo */}
      <div className={`relative flex-shrink-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {/* Animated Border Container */}
        <div className='relative w-[380px] max-tablet:w-[350px] max-mobile:w-[280px]'>
          {/* Glowing Effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-[#00FD9A] to-[#00d484] rounded-full blur-2xl opacity-20 animate-pulse'></div>
          
          {/* Main Photo Container */}
          <div className='relative border-4 border-[#00FD9A] rounded-full overflow-hidden
            shadow-[0_0_50px_rgba(0,253,154,0.3)] hover:shadow-[0_0_80px_rgba(0,253,154,0.5)]
            transition-all duration-500 hover:scale-105 hover:rotate-3
            bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e]
          '>
            <img 
              src={Photo} 
              alt="Ahmed Suleiman - Software Developer" 
              className='w-full h-full object-cover'
            />
          </div>

          {/* Decorative Elements */}
          <div className='absolute -top-4 -right-4 w-20 h-20 border-2 border-[#00FD9A] rounded-full opacity-30 animate-ping-slow'></div>
          <div className='absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#00FD9A] rounded-full opacity-30 animate-ping-slow' style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero