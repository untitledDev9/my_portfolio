import React, { useState, useEffect } from 'react'
import Experience from '../resumeState/Experience';
import Education from '../resumeState/Education';
import Skill from '../resumeState/Skill';
import About from '../resumeState/About';
import { FaBriefcase, FaGraduationCap, FaCode, FaUser, FaChevronRight } from 'react-icons/fa';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionChange = (sectionId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setIsTransitioning(false);
    }, 150);
  };

  const sections = [
    { 
      id: 'experience', 
      label: 'Experience', 
      component: Experience,
      icon: FaBriefcase,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgAccent: 'bg-purple-500/10',
      iconBg: 'bg-purple-500/20',
      borderColor: 'border-purple-500/40'
    },
    { 
      id: 'education', 
      label: 'Training', 
      component: Education,
      icon: FaGraduationCap,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgAccent: 'bg-blue-500/10',
      iconBg: 'bg-blue-500/20',
      borderColor: 'border-blue-500/40'
    },
    { 
      id: 'skill', 
      label: 'Skills', 
      component: Skill,
      icon: FaCode,
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      bgAccent: 'bg-emerald-500/10',
      iconBg: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500/40'
    },
    { 
      id: 'about', 
      label: 'About me', 
      component: About,
      icon: FaUser,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgAccent: 'bg-orange-500/10',
      iconBg: 'bg-orange-500/20',
      borderColor: 'border-orange-500/40'
    }
  ];

  const activeIndex = sections.findIndex(section => section.id === activeSection);
  const ActiveComponent = sections[activeIndex]?.component;
  const activeSection_ = sections[activeIndex];

  return (
    <div id='resume' className='relative width flex justify-between mt-20 gap-16 mb-30 max-tablet:flex-col max-tablet:items-center max-tablet:gap-12 overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-[#00FD9A]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00FD9A]/5 to-purple-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Left Section - Navigation */}
      <div className={`w-[42%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        
        {/* Header with Modern Design */}
        <div className='max-tablet:text-center mb-12 max-tablet:mb-10 relative'>
          {/* Glowing accent */}
          <div className='absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#00FD9A] to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slow'></div>
          
          <div className='relative'>
            <h2 className='text-[58px] text-white leading-tight max-Laptop:text-[52px] max-tablet:w-full max-mobile:text-[42px] font-black mb-2'>
              Why hire me<span className='text-[#00FD9A]'>?</span>
            </h2>
            <div className='w-24 h-1.5 bg-gradient-to-r from-[#00FD9A] to-purple-500 rounded-full mb-5'></div>
            <p className='text-[#BDBDC1] text-[16px] leading-relaxed max-tablet:mx-auto max-tablet:leading-7 max-mobile:text-[14px] max-w-md'>
              Clean code, quick solutions, <span className='text-[#00FD9A] font-semibold'>always learning</span>, always improving. Let's build something <span className='text-purple-400 font-semibold'>amazing</span> together.
            </p>
          </div>
        </div>

        {/* Navigation Cards with Glassmorphism */}
        <nav className='flex flex-col gap-4 w-full max-w-[420px]' role='tablist'>
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                role='tab'
                aria-selected={isActive}
                aria-controls={`${section.id}-panel`}
                className={`
                  group relative py-5 px-6 w-full rounded-2xl text-left cursor-pointer
                  transition-all duration-500 ease-out overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r ' + section.gradient + ' text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] scale-[1.02] translate-x-2' 
                    : 'bg-[#1a1a2e]/60 backdrop-blur-sm text-[#BDBDC1] hover:bg-[#252538]/80 hover:text-white hover:scale-[1.01] hover:translate-x-1 border border-white/5'
                  }
                `}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Hover glow effect */}
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                )}
                
                {/* Shimmer effect for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                
                {/* Content */}
                <div className='relative flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    {/* Icon with background */}
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-white/20 text-white scale-110' 
                        : 'bg-white/5 text-[#00FD9A] group-hover:bg-white/10 group-hover:scale-110'
                      }
                    `}>
                      <Icon size={22} />
                    </div>
                    
                    {/* Label */}
                    <div>
                      <p className='text-[17px] max-mobile:text-[15px] font-bold tracking-wide'>
                        {section.label}
                      </p>
                      {isActive && (
                        <div className='h-0.5 w-0 bg-white/60 transition-all duration-500 mt-1 group-hover:w-full'></div>
                      )}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <FaChevronRight 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                    }`}
                    size={16}
                  />
                </div>

                {/* Active pulse indicator */}
                {isActive && (
                  <div className='absolute right-3 top-3 w-2 h-2 rounded-full bg-white'>
                    <div className='absolute inset-0 rounded-full bg-white animate-ping'></div>
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Elegant Progress Indicator */}
        <div className='mt-10 w-full max-w-[420px] max-tablet:mt-8'>
          <div className='flex justify-between items-center mb-3'>
            <span className='text-[#BDBDC1] text-sm font-medium'>Progress</span>
            <span className='text-[#00FD9A] text-sm font-bold tabular-nums'>
              {activeIndex + 1} / {sections.length}
            </span>
          </div>
          <div className='w-full h-2 bg-[#1a1a2e]/60 backdrop-blur-sm rounded-full overflow-hidden border border-white/5 shadow-inner'>
            <div 
              className={`h-full bg-gradient-to-r ${activeSection_.gradient} transition-all duration-700 ease-out rounded-full relative overflow-hidden`}
              style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            >
              {/* Animated shimmer on progress bar */}
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer'></div>
            </div>
          </div>
          
          {/* Section dots */}
          <div className='flex gap-2 mt-3 justify-center'>
            {sections.map((section, idx) => (
              <div 
                key={section.id}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex 
                    ? 'w-8 bg-gradient-to-r ' + section.gradient 
                    : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Content with Premium Card Design */}
      <div 
        className={`w-[58%] max-tablet:w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        role='tabpanel'
        id={`${activeSection}-panel`}
        aria-labelledby={activeSection}
      >
        {/* Main Content Card with Glassmorphism */}
        <div className='relative bg-[#1a1a2e]/40 backdrop-blur-xl rounded-3xl p-10 max-mobile:p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden min-h-[580px]'>
          
          {/* Animated gradient backgrounds */}
          <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${activeSection_.gradient} rounded-full blur-3xl opacity-15 animate-float`}></div>
          <div className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr ${activeSection_.gradient} rounded-full blur-3xl opacity-10 animate-float`} style={{ animationDelay: '1s' }}></div>
          
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeSection_.gradient}`}></div>
          
          {/* Content */}
          <div className={`relative z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Section header */}
            <div className='flex items-center gap-3 mb-8 max-mobile:mb-6'>
              <div className={`p-3 rounded-xl ${activeSection_.iconBg} backdrop-blur-sm`}>
                <activeSection_.icon className='text-white' size={24} />
              </div>
              <div>
                <h3 className='text-white text-2xl font-bold max-mobile:text-xl'>
                  {activeSection_.label}
                </h3>
                <div className={`h-0.5 w-16 bg-gradient-to-r ${activeSection_.gradient} mt-1 rounded-full`}></div>
              </div>
            </div>

            {/* Component content */}
            {ActiveComponent && <ActiveComponent />}
          </div>

          {/* Decorative corner accents */}
          <div className={`absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 ${activeSection_.borderColor} rounded-tl-3xl opacity-40`}></div>
          <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 ${activeSection_.borderColor} rounded-br-3xl opacity-40`}></div>
        </div>

        {/* Navigation Controls */}
        <div className='flex justify-between items-center mt-6 gap-4 max-mobile:flex-col'>
          <button
            onClick={() => {
              const prevIndex = (activeIndex - 1 + sections.length) % sections.length;
              handleSectionChange(sections[prevIndex].id);
            }}
            className='group flex items-center gap-3 px-6 py-3 bg-[#1a1a2e]/60 backdrop-blur-sm text-white rounded-xl
              hover:bg-white/5 transition-all duration-300 border border-white/10
              hover:scale-105 hover:shadow-lg max-mobile:w-full max-mobile:justify-center'
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className='font-semibold text-sm'>Previous</span>
          </button>

          <button
            onClick={() => {
              const nextIndex = (activeIndex + 1) % sections.length;
              handleSectionChange(sections[nextIndex].id);
            }}
            className={`group flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${activeSection_.gradient} text-white rounded-xl
              hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300
              hover:scale-105 max-mobile:w-full max-mobile:justify-center relative overflow-hidden`}
          >
            {/* Shimmer effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            <span className='font-semibold text-sm relative z-10'>Next Section</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(2deg); }
          66% { transform: translate(-10px, 10px) rotate(-2deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default Resume