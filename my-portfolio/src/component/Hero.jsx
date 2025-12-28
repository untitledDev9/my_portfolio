import React, { useEffect, useState } from 'react'
import { FiDownload } from "react-icons/fi";
import Photo from '../assets/WhatsApp_Image_2025-08-23_at_14.49.11_93a877ee-removebg-preview.png'
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/untitledDev9", 
      label: "GitHub",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: FaWhatsapp, 
      url: "https://wa.me/2349091324697", 
      label: "WhatsApp",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const floatingIcons = [
    { Icon: FaReact, color: "#61DAFB", delay: 0, position: "top-[15%] left-[3%]", size: 45 },
    { Icon: SiJavascript, color: "#F7DF1E", delay: 1, position: "top-[55%] left-[5%]", size: 40 },
    { Icon: FaNodeJs, color: "#339933", delay: 2, position: "top-[35%] right-[6%]", size: 48 },
    { Icon: SiTailwindcss, color: "#06B6D4", delay: 1.5, position: "top-[65%] right-[3%]", size: 42 },
    { Icon: FaGithub, color: "#FFFFFF", delay: 0.5, position: "top-[80%] left-[10%]", size: 38 },
  ];

  const titles = [
    { text: "Software Developer", gradient: "from-[#00FD9A] to-[#00d484]" },
    { text: "Full-Stack Engineer", gradient: "from-[#00d484] to-[#00FD9A]" },
    { text: "Problem Solver", gradient: "from-[#00FD9A] via-[#00d484] to-[#00FD9A]" },
    { text: "UI/UX Enthusiast", gradient: "from-[#00d484] to-[#00FD9A]" }
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[currentTitle].text;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentWord) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText !== "") {
        setDisplayText(displayText.slice(0, -1));
      } else if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  const stats = [
    { value: "1+", label: "Years" },
    { value: "12+", label: "Projects" },
    { value: "500+", label: "Commits" }
  ];

  return (
    <div id='home' className='relative width flex justify-center items-center pt-16 gap-12 overflow-hidden
      max-tablet:flex-col-reverse max-tablet:gap-8 max-tablet:pt-10
      max-mobile:gap-6 max-mobile:pt-4
    '>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden max-tablet:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FD9A08_1px,transparent_1px),linear-gradient(to_bottom,#00FD9A08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} opacity-20 max-tablet:hidden z-500`}
          style={{
            animation: `float ${3 + index}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon size={40} color={item.color} />
        </div>
      ))}

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-10 blur-3xl opacity-20 max-tablet:hidden"
        style={{
          background: 'radial-gradient(circle, #00FD9A, transparent)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'left 0.3s, top 0.3s'
        }}
      />

      {/* Left Section - Text Content */}
      <div className='flex flex-col gap-6 flex-1 z-10'>
        {/* Typewriter Title */}
        <div className='mb-3 max-tablet:text-center flex flex-col gap-3'>
          <div className='h-[30px] max-tablet:h-[35px] max-mobile:h-[28px]'>
            <h4 
              className={`text-[14px] font-bold tracking-[0.3em] uppercase
                max-tablet:text-[19px] max-mobile:text-[17px]
                bg-gradient-to-r ${titles[currentTitle].gradient} bg-clip-text text-transparent
                animate-pulse`}
            >
              {displayText}
              <span className="animate-blink">|</span>
            </h4>
          </div>

          {/* Name with Stunning Animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className='text-6xl font-semibold text-white max-tablet:text-[55px] max-mobile:text-[40px] mb-2'>
              Hello I<span className='text-[#00FD9A] animate-wave inline-block origin-[70%_70%]'>'</span>m 
            </h2>
            <h2 className='text-7xl font-black max-tablet:text-[60px] max-mobile:text-[45px]
              bg-gradient-to-r from-[#00FD9A] via-[#00d484] to-[#00FD9A] bg-clip-text text-transparent
              animate-gradient-x bg-[length:200%_auto] leading-tight
            '>
              Ahmed Suleiman
            </h2>
          </div>
        </div>

        {/* Stats Mini Cards */}
        <div className={`flex gap-4 mb-2 max-tablet:justify-center max-mobile:gap-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1a1a2e] border border-[#00FD9A]/20 rounded-lg px-4 py-2 
                hover:border-[#00FD9A] hover:shadow-[0_0_20px_rgba(0,253,154,0.3)]
                transition-all duration-300 hover:scale-105 group
                max-mobile:px-3 max-mobile:py-1"
            >
              <div className="text-[#00FD9A] font-bold text-xl max-mobile:text-lg group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[#BDBDC1] text-xs max-mobile:text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Description with Highlight */}
        <div className={`w-[95%] max-tablet:mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-[#BDBDC1] text-[15px] leading-relaxed mb-6
            max-tablet:text-center max-tablet:text-[17px]
            max-mobile:text-[13px]
          '>
            Creative and adaptable developer driven by <span className="text-[#00FD9A] font-semibold">clarity</span>, <span className="text-[#00FD9A] font-semibold">performance</span>, and the craft of building <span className="text-[#00FD9A] font-semibold">meaningful digital experiences</span>.
          </p>

          {/* CTA Section */}
          <div className='flex gap-6 items-center max-tablet:flex-col max-tablet:gap-5'>
            {/* Download CV Button with Shimmer */}
            <a href="/AhmedCV.pdf" download className='group relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <button className='relative text-black bg-[#00FD9A] border-2 border-[#00FD9A] 
                px-6 py-3 rounded-full flex items-center gap-3 font-bold
                hover:bg-transparent hover:text-[#00FD9A] hover:shadow-[0_0_30px_rgba(0,253,154,0.6)]
                transition-all duration-300 ease-in-out transform hover:scale-110
                max-tablet:mx-auto max-tablet:text-[17px]
                max-mobile:text-[13px] max-mobile:px-5 max-mobile:py-2
              '>
                <p className='text-[13px] max-tablet:text-[17px] max-mobile:text-[13px] font-bold uppercase tracking-wider'>
                  Download CV
                </p>
                <FiDownload className='group-hover:animate-bounce' size={18} />
              </button>
            </a>

            {/* Enhanced Social Links */}
            <div className='flex justify-center items-center gap-4 max-tablet:gap-6 max-mobile:gap-4'>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className='group relative'
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}></div>
                  <div className={`relative border-2 border-[#00FD9A] text-[#00FD9A] w-fit p-3 rounded-full
                    bg-[#1a1a2e] group-hover:bg-gradient-to-r group-hover:${social.color} group-hover:text-white group-hover:border-transparent
                    transition-all duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-12
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

      {/* Right Section - Photo with 3D Effect */}
      <div 
        className={`relative flex-shrink-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='relative w-[400px] max-tablet:w-[350px] max-mobile:w-[280px]'>
          {/* Animated Rings */}
          <div className='absolute inset-0 rounded-full'>
            <div className='absolute inset-0 rounded-full border-2 border-[#00FD9A] opacity-30 animate-ping-slow'></div>
            <div className='absolute inset-4 rounded-full border-233 border-[#00d484] opacity-20 animate-ping-slow' style={{ animationDelay: '1s' }}></div>
            <div className='absolute inset-8 rounded-full border-2 border-[#00FD9A] opacity-10 animate-ping-slow' style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Rotating Gradient Ring */}
          <div className='absolute inset-[-10px] rounded-full bg-gradient-to-r from-[#00FD9A] via-[#00d484] to-[#00FD9A] animate-spin-slow blur-md opacity-50'></div>
          
          {/* Main Photo Container with 3D Transform */}
          <div 
            className='relative rounded-full overflow-hidden
              shadow-[0_0_60px_rgba(0,253,154,0.4)] 
              transition-all duration-500
              bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1e] to-[#1a1a2e]
              border-4 border-[#00FD9A]'
            style={{
              transform: isHovering ? 'rotateY(10deg) rotateX(10deg) scale(1.05)' : 'rotateY(0deg) rotateX(0deg) scale(1)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-br from-[#00FD9A]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500'></div>
            <img 
              src={Photo} 
              alt="Ahmed Suleiman - Software Developer" 
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-2 bg-[#00FD9A] rounded-full opacity-60'
              style={{
                top: '50%',
                left: '50%',
                animation: `orbit ${5 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(220px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(220px) rotate(-360deg);
          }
        }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default Hero