import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Numbers from '../component/Numbers'
import Resume from '../component/Resume'
import Projects from '../component/Projects'
import Contact from '../component/Contact'
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, 
  FaDocker, FaAws, FaNpm, FaGithub, FaFigma 
} from "react-icons/fa"
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, 
  SiTailwindcss, SiFirebase, SiRedux, SiGraphql,
  SiNextdotjs, SiVite, SiWebpack, SiSupabase
} from "react-icons/si"

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Programming icons with different sizes and colors
  const floatingIcons = [
    // Top section
    { Icon: FaReact, color: "#61DAFB", size: 40, top: "8%", left: "5%", delay: 0, duration: 25 },
    { Icon: SiJavascript, color: "#F7DF1E", size: 35, top: "15%", right: "8%", delay: 2, duration: 28 },
    { Icon: FaNodeJs, color: "#339933", size: 45, top: "12%", left: "15%", delay: 4, duration: 30 },
    { Icon: SiTypescript, color: "#3178C6", size: 38, top: "20%", right: "12%", delay: 1, duration: 27 },
    
    // Middle-top section
    { Icon: SiTailwindcss, color: "#06B6D4", size: 42, top: "28%", left: "8%", delay: 3, duration: 26 },
    { Icon: FaPython, color: "#3776AB", size: 36, top: "32%", right: "6%", delay: 5, duration: 29 },
    { Icon: SiMongodb, color: "#47A248", size: 40, top: "35%", left: "18%", delay: 2, duration: 31 },
    { Icon: FaGitAlt, color: "#F05032", size: 38, top: "40%", right: "15%", delay: 4, duration: 28 },
    
    // Middle section
    { Icon: SiNextdotjs, color: "#FFFFFF", size: 44, top: "48%", left: "6%", delay: 1, duration: 27 },
    { Icon: FaDatabase, color: "#00758F", size: 37, top: "52%", right: "10%", delay: 3, duration: 30 },
    { Icon: SiRedux, color: "#764ABC", size: 39, top: "55%", left: "12%", delay: 5, duration: 26 },
    { Icon: SiFirebase, color: "#FFCA28", size: 41, top: "58%", right: "7%", delay: 2, duration: 29 },
    
    // Middle-bottom section
    { Icon: FaDocker, color: "#2496ED", size: 43, top: "65%", left: "9%", delay: 4, duration: 28 },
    { Icon: SiGraphql, color: "#E10098", size: 36, top: "68%", right: "14%", delay: 1, duration: 31 },
    { Icon: FaAws, color: "#FF9900", size: 40, top: "72%", left: "16%", delay: 3, duration: 27 },
    { Icon: SiPostgresql, color: "#4169E1", size: 38, top: "75%", right: "9%", delay: 5, duration: 30 },
    
    // Bottom section
    { Icon: FaNpm, color: "#CB3837", size: 42, top: "82%", left: "7%", delay: 2, duration: 26 },
    { Icon: FaGithub, color: "#FFFFFF", size: 39, top: "85%", right: "11%", delay: 4, duration: 29 },
    { Icon: SiVite, color: "#646CFF", size: 37, top: "88%", left: "13%", delay: 1, duration: 28 },
    { Icon: SiSupabase, color: "#3ECF8E", size: 41, top: "92%", right: "8%", delay: 3, duration: 31 },
    { Icon: FaFigma, color: "#F24E1E", size: 35, top: "95%", left: "10%", delay: 5, duration: 27 },
    
    // Extra scattered icons
    { Icon: FaReact, color: "#61DAFB", size: 33, top: "22%", left: "25%", delay: 3, duration: 32 },
    { Icon: SiJavascript, color: "#F7DF1E", size: 31, top: "45%", right: "22%", delay: 1, duration: 28 },
    { Icon: FaNodeJs, color: "#339933", size: 36, top: "62%", left: "23%", delay: 4, duration: 30 },
    { Icon: SiTailwindcss, color: "#06B6D4", size: 34, top: "78%", right: "20%", delay: 2, duration: 29 },
  ]

  // Section Header Component
  const SectionHeader = ({ title, gradient = "from-[#00FD9A] to-[#00d484]" }) => (
    <div className="flex justify-center items-center my-20 max-tablet:my-12">
      <div className="relative group">
        {/* Glowing background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>
        
        {/* Main title */}
        <div className="relative">
          <h2 className={`text-6xl font-black text-center px-12 py-4 max-tablet:text-4xl max-tablet:px-8 max-tablet:py-3
            bg-gradient-to-r ${gradient} bg-clip-text text-transparent
            transform transition-all duration-500 group-hover:scale-105`}>
            {title}
          </h2>
          
          {/* Underline decoration */}
          <div className="flex justify-center mt-3 gap-2">
            <div className={`h-1 w-16 bg-gradient-to-r ${gradient} rounded-full`}></div>
            <div className={`h-1 w-8 bg-gradient-to-r ${gradient} rounded-full opacity-50`}></div>
            <div className={`h-1 w-4 bg-gradient-to-r ${gradient} rounded-full opacity-25`}></div>
          </div>
        </div>

        {/* Corner accents */}
        <div className={`absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00FD9A] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        <div className={`absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00FD9A] rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      </div>
    </div>
  )

  return (
    <main className="relative overflow-hidden">
      {/* Floating Programming Icons */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="absolute opacity-8 max-tablet:hidden"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animation: `floatSlow ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <item.Icon 
              size={item.size} 
              color={item.color}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.3))',
                animation: `rotate ${item.duration * 1.5}s linear infinite`,
                animationDelay: `${item.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <div className='max-tablet:mb-8'>
          <Navbar />
        </div>
        
        <Hero />
        <Numbers />
        
        <SectionHeader title="RESUME" gradient="from-purple-500 via-pink-500 to-rose-500" />
        <Resume />
        
        <SectionHeader title="PROJECTS" gradient="from-cyan-400 via-blue-500 to-purple-500" />
        <Projects />
        
        <SectionHeader title="CONTACT" gradient="from-[#00FD9A] via-emerald-400 to-teal-500" />
        <Contact />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(-15px) translateX(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(7deg);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .opacity-8 {
          opacity: 0.08;
        }

        .opacity-8:hover {
          opacity: 0.15;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </main>
  )
}

export default Homepage