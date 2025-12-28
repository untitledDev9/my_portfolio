import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiPostgresql, SiSupabase, SiRedux, SiSocketdotio } from "react-icons/si";

const Skill = () => {
  const skills = [
    { icon: FaReact, name: "React.js", color: "#61DAFB", category: "frontend" },
    { icon: FaReact, name: "React Native", color: "#61DAFB", category: "mobile" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF", category: "frontend" },
    { icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E", category: "language" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "language" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", category: "frontend" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933", category: "backend" },
    { icon: SiExpress, name: "Express.js", color: "#FFFFFF", category: "backend" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "database" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "database" },
    { icon: SiSupabase, name: "Supabase", color: "#3ECF8E", category: "backend" },
    { icon: SiRedux, name: "Redux", color: "#764ABC", category: "frontend" },
    { icon: SiSocketdotio, name: "Socket.IO", color: "#FFFFFF", category: "backend" },
    { icon: FaGitAlt, name: "Git", color: "#F05032", category: "tools" },
    { icon: FaGithub, name: "GitHub", color: "#FFFFFF", category: "tools" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E", category: "design" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26", category: "frontend" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", category: "frontend" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className='text-white text-[43px] max-mobile:text-[32px] font-bold mb-3'>
          My Tech Stack
        </h2>
        <p className='text-[15px] text-[#BDBDC1] leading-7 mb-5 max-Laptop:leading-6 max-mobile:mb-7 max-w-2xl'>
          I build <span className="text-[#00FD9A] font-semibold">production-ready applications</span> with modern technologies. 
          From <span className="text-cyan-400 font-semibold">web apps</span> to <span className="text-purple-400 font-semibold">mobile applications</span>, 
          I create full-stack solutions with clean, scalable code.
        </p>
      </div>

      {/* Skills Grid */}
      <div className='grid grid-cols-4 max-Laptop:grid-cols-3 gap-4 max-mobile:grid-cols-2 max-mobile:gap-3'>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div 
              key={index}
              className='group relative bg-[#1a1a2e] border border-white/5 rounded-2xl p-6 
                hover:border-[#00FD9A]/30 transition-all duration-500 
                hover:shadow-[0_8px_30px_rgba(0,253,154,0.15)] hover:scale-105
                flex flex-col items-center justify-center gap-3
                overflow-hidden cursor-pointer
                max-mobile:p-4'
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}, transparent)`
                }}
              />

              {/* Icon */}
              <div className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <Icon 
                  size={50} 
                  className="text-white/80 group-hover:text-white transition-colors duration-500 max-mobile:w-10 max-mobile:h-10"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </div>

              {/* Skill Name */}
              <p className="relative z-10 text-white/70 group-hover:text-[#00FD9A] font-medium text-sm text-center transition-colors duration-500 max-mobile:text-xs">
                {skill.name}
              </p>

              {/* Colored accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, ${skill.color}, transparent)`
                }}
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          );
        })}
      </div>

      {/* Stats/Summary */}
      <div className="mt-10 flex gap-6 flex-wrap max-mobile:gap-3 max-mobile:mt-6">
        <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a2e]/60 backdrop-blur-sm rounded-xl border border-white/5 max-mobile:px-4 max-mobile:py-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-[#BDBDC1] text-sm max-mobile:text-xs">
            <span className="text-cyan-400 font-bold">Frontend</span> Development
          </p>
        </div>
        
        <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a2e]/60 backdrop-blur-sm rounded-xl border border-white/5 max-mobile:px-4 max-mobile:py-2">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <p className="text-[#BDBDC1] text-sm max-mobile:text-xs">
            <span className="text-purple-400 font-bold">Mobile</span> Development
          </p>
        </div>
        
        <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a2e]/60 backdrop-blur-sm rounded-xl border border-white/5 max-mobile:px-4 max-mobile:py-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: '1s' }} />
          <p className="text-[#BDBDC1] text-sm max-mobile:text-xs">
            <span className="text-emerald-400 font-bold">Backend</span> Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill