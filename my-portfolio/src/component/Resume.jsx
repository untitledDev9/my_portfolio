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