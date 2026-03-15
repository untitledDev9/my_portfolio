import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Experience from '../resumeState/Experience';
import Education from '../resumeState/Education';
import Skill from '../resumeState/Skill';
import About from '../resumeState/About';
import { FaBriefcase, FaGraduationCap, FaCode, FaUser } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sections = [
    { id: 'experience', label: 'Experience', component: Experience, icon: FaBriefcase },
    { id: 'education', label: 'Training', component: Education, icon: FaGraduationCap },
    { id: 'skill', label: 'Skills', component: Skill, icon: FaCode },
    { id: 'about', label: 'About me', component: About, icon: FaUser }
  ];

  const activeIndex = sections.findIndex(section => section.id === activeSection);
  const ActiveComponent = sections[activeIndex]?.component;
  const activeSection_ = sections[activeIndex];

  return (
    <div id='resume' className='relative width flex justify-between mt-20 gap-16 mb-30 max-tablet:flex-col max-tablet:items-center max-tablet:gap-12'>

      {/* Left Section - Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-[42%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center'
      >
        {/* Header */}
        <div className='max-tablet:text-center mb-12 max-tablet:mb-10'>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase'
          >
            Resume
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-5xl text-white leading-tight max-tablet:w-full max-mobile:text-4xl font-extralight mt-3 mb-4'
          >
            Why hire <span className='font-medium'>me</span><span className='text-[#00FD9A]'>?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-white/40 text-base leading-relaxed max-tablet:mx-auto max-mobile:text-sm max-w-md'
          >
            Clean code, quick solutions, always learning, always improving. Let's build something great together.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <nav className='flex flex-col gap-2 w-full max-w-[420px]' role='tablist'>
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSectionChange(section.id)}
                role='tab'
                aria-selected={isActive}
                aria-controls={`${section.id}-panel`}
                className={`
                  group relative py-4 px-5 w-full rounded-2xl text-left cursor-pointer
                  transition-all duration-300
                  ${isActive
                    ? 'bg-[#00FD9A] text-[#09090b]'
                    : 'bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white border border-white/[0.05]'
                  }
                `}
              >
                <div className='flex items-center gap-4'>
                  <div className={`
                    p-2.5 rounded-xl transition-all duration-300
                    ${isActive
                      ? 'bg-[#09090b]/10 text-[#09090b]'
                      : 'bg-white/[0.05] text-[#00FD9A]'
                    }
                  `}>
                    <Icon size={18} />
                  </div>
                  <span className='text-[15px] font-medium tracking-wide'>
                    {section.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-arrow"
                      className='ml-auto'
                    >
                      <BsArrowRight size={16} />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </nav>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='mt-10 w-full max-w-[420px] max-tablet:mt-8'
        >
          <div className='flex justify-between items-center mb-3'>
            <span className='text-white/30 text-xs font-mono uppercase tracking-wider'>Progress</span>
            <span className='text-white/50 text-xs font-mono'>
              {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
            </span>
          </div>
          <div className='w-full h-1 bg-white/[0.05] rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-[#00FD9A] rounded-full'
              animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className='w-[58%] max-tablet:w-full'
        role='tabpanel'
        id={`${activeSection}-panel`}
        aria-labelledby={activeSection}
      >
        {/* Content Card */}
        <div className='relative bg-white/[0.02] rounded-3xl p-10 max-mobile:p-6 border border-white/[0.05] min-h-[560px]'>
          <div className='absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00FD9A]/30 to-transparent' />

          {/* Section header */}
          <div className='flex items-center gap-3 mb-8 max-mobile:mb-6'>
            <div className='p-3 rounded-xl bg-[#00FD9A]/10'>
              <activeSection_.icon className='text-[#00FD9A]' size={20} />
            </div>
            <div>
              <h3 className='text-white text-xl font-medium max-mobile:text-lg'>
                {activeSection_.label}
              </h3>
            </div>
          </div>

          {/* Animated content switch */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className='flex justify-between items-center mt-6 gap-4 max-mobile:flex-col'>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const prevIndex = (activeIndex - 1 + sections.length) % sections.length;
              handleSectionChange(sections[prevIndex].id);
            }}
            className='group flex items-center gap-3 px-5 py-3 bg-white/[0.02] text-white/50 rounded-xl
              hover:bg-white/[0.05] hover:text-white transition-all duration-300 border border-white/[0.05]
              max-mobile:w-full max-mobile:justify-center'
          >
            <BsArrowLeft className='group-hover:-translate-x-1 transition-transform duration-300' size={16} />
            <span className='text-sm font-medium'>Previous</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const nextIndex = (activeIndex + 1) % sections.length;
              handleSectionChange(sections[nextIndex].id);
            }}
            className='group flex items-center gap-3 px-5 py-3 bg-[#00FD9A] text-[#09090b] rounded-xl
              hover:scale-105 transition-all duration-300
              max-mobile:w-full max-mobile:justify-center font-medium'
          >
            <span className='text-sm'>Next Section</span>
            <BsArrowRight className='group-hover:translate-x-1 transition-transform duration-300' size={16} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume
