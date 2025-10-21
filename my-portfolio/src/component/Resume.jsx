import React, { useState } from 'react'
import Experience from '../resumeState/Experience';
import Education from '../resumeState/Education';
import Skill from '../resumeState/Skill';
import About from '../resumeState/About';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const sections = [
    { id: 'experience', label: 'Experience', component: Experience },
    { id: 'education', label: 'Training', component: Education },
    { id: 'skill', label: 'Skills', component: Skill },
    { id: 'about', label: 'About me', component: About }
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component;

  return (
    <div id='resume' className='width flex justify-between mt-20 gap-22 mb-30 max-tablet:flex-col max-tablet:items-center max-tablet:gap-10'>
      {/* Left Section - Navigation */}
      <div className='w-[40%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center'>
        <div className='max-tablet:text-center mb-10 max-tablet:mb-8'>
          <h2 className='text-[55px] text-white w-[400px] leading-tight max-Laptop:text-[50px] max-tablet:w-full max-mobile:text-[40px]'>
            Why hire me<span className='text-[#00FD9A]'>?</span>
          </h2>
          <p className='text-[#BDBDC1] w-[80%] mt-5 leading-8 max-tablet:mx-auto max-tablet:mt-3 max-tablet:leading-6 max-mobile:text-[14px]'>
            Clean code, quick solutions, always learning, always improving.
          </p>
        </div>

        {/* Navigation Buttons */}
        <nav className='flex flex-col gap-4 w-[400px] max-mobile:w-[300px]' role='tablist'>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              role='tab'
              aria-selected={activeSection === section.id}
              aria-controls={`${section.id}-panel`}
              className={`
                py-4 w-full rounded-xl text-center cursor-pointer font-medium
                transition-all duration-300 ease-in-out
                ${activeSection === section.id 
                  ? 'bg-[#00FD9A] text-black shadow-[0_0_20px_rgba(0,253,154,0.3)] scale-[1.02]' 
                  : 'bg-[#28272B] text-[#BDBDC1] hover:bg-[#35343a] hover:text-white hover:scale-[1.01]'
                }
              `}
            >
              <p>{section.label}</p>
            </button>
          ))}
        </nav>
      </div>

      {/* Right Section - Content */}
      <div 
        className='w-[60%] max-tablet:w-full max-mobile:px-6'
        role='tabpanel'
        id={`${activeSection}-panel`}
        aria-labelledby={activeSection}
      >
        <div className='animate-fadeIn'>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Resume




























// import React, { useState, useEffect } from 'react'
// import Experience from '../resumeState/Experience';
// import Education from '../resumeState/Education';
// import Skill from '../resumeState/Skill';
// import About from '../resumeState/About';
// import { FaBriefcase, FaGraduationCap, FaCode, FaUser } from 'react-icons/fa';

// const Resume = () => {
//   const [activeSection, setActiveSection] = useState('experience');
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const sections = [
//     { 
//       id: 'experience', 
//       label: 'Experience', 
//       component: Experience,
//       icon: FaBriefcase,
//       gradient: 'from-purple-500 to-pink-500',
//       bgGradient: 'from-purple-500/10 to-pink-500/10'
//     },
//     { 
//       id: 'education', 
//       label: 'Training', 
//       component: Education,
//       icon: FaGraduationCap,
//       gradient: 'from-blue-500 to-cyan-500',
//       bgGradient: 'from-blue-500/10 to-cyan-500/10'
//     },
//     { 
//       id: 'skill', 
//       label: 'Skills', 
//       component: Skill,
//       icon: FaCode,
//       gradient: 'from-green-500 to-emerald-500',
//       bgGradient: 'from-green-500/10 to-emerald-500/10'
//     },
//     { 
//       id: 'about', 
//       label: 'About me', 
//       component: About,
//       icon: FaUser,
//       gradient: 'from-orange-500 to-red-500',
//       bgGradient: 'from-orange-500/10 to-red-500/10'
//     }
//   ];

//   const activeIndex = sections.findIndex(section => section.id === activeSection);
//   const ActiveComponent = sections[activeIndex]?.component;
//   const activeGradient = sections[activeIndex]?.gradient;

//   return (
//     <div id='resume' className='relative width flex justify-between mt-20 gap-22 mb-30 max-tablet:flex-col max-tablet:items-center max-tablet:gap-10 overflow-hidden'>
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-0 -left-40 w-80 h-80 bg-[#00FD9A]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 -right-40 w-80 h-80 bg-[#00d484]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       </div>

//       {/* Left Section - Navigation */}
//       <div className={`w-[40%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        
//         {/* Header */}
//         <div className='max-tablet:text-center mb-10 max-tablet:mb-8 relative'>
//           <div className='absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-r from-[#00FD9A] to-[#00d484] rounded-full blur-2xl opacity-20 animate-pulse'></div>
//           <h2 className='relative text-[55px] text-white w-[400px] leading-tight max-Laptop:text-[50px] max-tablet:w-full max-mobile:text-[40px] font-bold'>
//             Why hire me<span className='text-[#00FD9A] animate-pulse'>?</span>
//           </h2>
//           <p className='relative text-[#BDBDC1] w-[85%] mt-5 leading-8 max-tablet:mx-auto max-tablet:mt-3 max-tablet:leading-6 max-mobile:text-[14px]'>
//             Clean code, quick solutions, <span className='text-[#00FD9A] font-semibold'>always learning</span>, always improving.
//           </p>
//         </div>

//         {/* Navigation Buttons with Icons */}
//         <nav className='flex flex-col gap-5 w-[400px] max-mobile:w-[300px]' role='tablist'>
//           {sections.map((section, index) => {
//             const Icon = section.icon;
//             const isActive = activeSection === section.id;
            
//             return (
//               <button
//                 key={section.id}
//                 onClick={() => setActiveSection(section.id)}
//                 role='tab'
//                 aria-selected={isActive}
//                 aria-controls={`${section.id}-panel`}
//                 className={`
//                   group relative py-5 px-6 w-full rounded-2xl text-left cursor-pointer font-semibold
//                   transition-all duration-500 ease-out overflow-hidden
//                   ${isActive 
//                     ? 'bg-gradient-to-r ' + section.gradient + ' text-white shadow-[0_0_30px_rgba(0,253,154,0.4)] scale-[1.03] translate-x-2' 
//                     : 'bg-[#1a1a2e] text-[#BDBDC1] hover:bg-[#252538] hover:text-white hover:scale-[1.02] hover:translate-x-1 border border-[#2a2a3e]'
//                   }
//                 `}
//                 style={{
//                   transitionDelay: `${index * 50}ms`
//                 }}
//               >
//                 {/* Animated background gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
//                 {/* Shimmer effect */}
//                 {isActive && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
//                 )}
                
//                 {/* Content */}
//                 <div className='relative flex items-center gap-4'>
//                   <div className={`
//                     p-3 rounded-xl transition-all duration-300
//                     ${isActive 
//                       ? 'bg-white/20 text-white scale-110 rotate-6' 
//                       : 'bg-[#2a2a3e] text-[#00FD9A] group-hover:scale-110 group-hover:rotate-6'
//                     }
//                   `}>
//                     <Icon size={24} />
//                   </div>
//                   <div>
//                     <p className='text-[16px] max-mobile:text-[14px] font-bold'>{section.label}</p>
//                     {isActive && (
//                       <div className='h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 mt-1'></div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Active indicator */}
//                 {isActive && (
//                   <div className='absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-ping'></div>
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Progress Indicator */}
//         <div className='mt-8 w-[400px] max-mobile:w-[300px]'>
//           <div className='flex justify-between items-center mb-2'>
//             <span className='text-[#BDBDC1] text-sm'>Section Progress</span>
//             <span className='text-[#00FD9A] text-sm font-bold'>{activeIndex + 1} / {sections.length}</span>
//           </div>
//           <div className='w-full h-2 bg-[#1a1a2e] rounded-full overflow-hidden border border-[#2a2a3e]'>
//             <div 
//               className={`h-full bg-gradient-to-r ${activeGradient} transition-all duration-700 ease-out rounded-full`}
//               style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Content with Card Design */}
//       <div 
//         className={`w-[60%] max-tablet:w-full max-mobile:px-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
//         role='tabpanel'
//         id={`${activeSection}-panel`}
//         aria-labelledby={activeSection}
//       >
//         {/* Content Card */}
//         <div className='relative bg-[#1a1a2e] rounded-3xl p-8 max-mobile:p-6 border border-[#2a2a3e] shadow-2xl overflow-hidden min-h-[500px]'>
          
//           {/* Card background gradient */}
//           <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sections[activeIndex]?.bgGradient} rounded-full blur-3xl opacity-30`}></div>
//           <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${sections[activeIndex]?.bgGradient} rounded-full blur-3xl opacity-20`}></div>
          
//           {/* Content with animation */}
//           <div className='relative z-10 animate-fadeInScale'>
//             {ActiveComponent && <ActiveComponent />}
//           </div>

//           {/* Decorative corner elements */}
//           <div className='absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00FD9A]/30 rounded-tl-3xl'></div>
//           <div className='absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00FD9A]/30 rounded-br-3xl'></div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className='flex justify-between items-center mt-6 max-tablet:justify-center max-tablet:gap-4'>
//           <button
//             onClick={() => {
//               const prevIndex = (activeIndex - 1 + sections.length) % sections.length;
//               setActiveSection(sections[prevIndex].id);
//             }}
//             className='group flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-[#00FD9A] rounded-full
//               hover:bg-[#00FD9A] hover:text-black transition-all duration-300 border border-[#00FD9A]/30
//               hover:scale-105 hover:shadow-[0_0_20px_rgba(0,253,154,0.4)]'
//           >
//             <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             <span className='font-semibold'>Previous</span>
//           </button>

//           <button
//             onClick={() => {
//               const nextIndex = (activeIndex + 1) % sections.length;
//               setActiveSection(sections[nextIndex].id);
//             }}
//             className='group flex items-center gap-2 px-6 py-3 bg-[#00FD9A] text-black rounded-full
//               hover:bg-[#00d484] transition-all duration-300
//               hover:scale-105 hover:shadow-[0_0_20px_rgba(0,253,154,0.4)]'
//           >
//             <span className='font-semibold'>Next</span>
//             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInScale {
//           from {
//             opacity: 0;
//             transform: scale(0.95) translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }
//         .animate-fadeInScale {
//           animation: fadeInScale 0.5s ease-out;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Resume