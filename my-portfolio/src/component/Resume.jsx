import React, { useState } from 'react'

import Experience from '../resumeState/Experience';
import Education from '../resumeState/Education';
import Skill from '../resumeState/Skill';
import About from '../resumeState/About';

const Resume = () => {


  // const [experience, setExperience] = useState(true)
  // const [education, setEducation] = useState(false)
  // const [skill, setSkill] = useState(false)
  // const [about, setAbout] = useState(false)


  const [activeSection, setActiveSection] = useState('experience');

  // const toggle = () => {
  //   setEducation(!education)
  // }


  return (
    <div id='resume' className=' width flex justify-between mt-20 gap-22 mb-30 max-tablet:flex-col max-tablet:items-center max-tablet:gap-10'>
      <div className=' w-[40%] max-tablet:w-full max-tablet:flex max-tablet:flex-col max-tablet:items-center'>
        <div className='  max-tablet:text-center'>
          <h2 className=' text-[55px] text-white w-[400px] max-Laptop:text-[50px] max-tablet:w-full
          max-mobile:text-[40px]
          '>Why hire me<span className='text-[#00FD9A]'>?</span></h2>
          <p className=' text-[#BDBDC1] w-[80%] mb-8 mt-5 leading-8 max-tablet:mx-auto max-tablet:mt-2 max-tablet:leading-6
          max-mobile:text-[14px]
          '>Clean code, quick solutions, always learning, always improving.</p>
        </div>
        <div className=' flex flex-col gap-5 w-[400px] max-mobile:w-[300px]'>

          <div
            onClick={() => setActiveSection('experience')}
            className={`text-[#BDBDC1] py-3 w-full rounded-xl text-center cursor-pointer ${activeSection === 'experience' ? 'bg-[#00FD9A] text-black' : 'bg-[#28272B]'}`}>
            <p>Experience</p>
          </div>

          <div
            onClick={() => setActiveSection('education')}
            className={`text-[#BDBDC1] py-3 w-full rounded-xl text-center cursor-pointer ${activeSection === 'education' ? 'bg-[#00FD9A] text-black' : 'bg-[#28272B]'}`}>
            <p>Training</p>
          </div>

          <div
            onClick={() => setActiveSection('skill')}
            className={`text-[#BDBDC1] py-3 w-full rounded-xl text-center cursor-pointer ${activeSection === 'skill' ? 'bg-[#00FD9A] text-black' : 'bg-[#28272B]'}`}>
            <p>Skills</p>
          </div>

          <div
            onClick={() => setActiveSection('about')}
            className={`text-[#BDBDC1] py-3 w-full rounded-xl text-center cursor-pointer ${activeSection === 'about' ? 'bg-[#00FD9A] text-black' : 'bg-[#28272B]'}`}>
            <p>About me</p>
          </div>

        </div>
      </div>
      <div className=' w-[60%] max-mobile:w-full max-mobile:px-6'>
        {activeSection === 'experience' && (
          <Experience />
        )}
        {activeSection === 'education' && (
          <Education />
        )}
        {activeSection === 'skill' && (
          <Skill />
        )}
        {activeSection === 'about' && (
          <About />
        )}
      </div>
    </div>
  )
}

export default Resume