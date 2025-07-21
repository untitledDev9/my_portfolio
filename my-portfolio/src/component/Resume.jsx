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
    <div className=' width flex justify-between'>
      <div>
        <div>
          <h2>Why hire me?</h2>
          <p>Lorem ipsum dolor sit amet consectetur .</p>
        </div>
        <div className=' flex flex-col gap-3'>

          <div
            onClick={() => setActiveSection('experience')}
            className={`px-14 py-2 w-[220px] text-center cursor-pointer ${activeSection === 'experience' ? 'bg-blue-500' : 'bg-red-500'}`}>
            <p>Experience</p>
          </div>

          <div
            onClick={() => setActiveSection('education')}
            className={`px-14 py-2 w-[220px] text-center cursor-pointer ${activeSection === 'education' ? 'bg-blue-500' : 'bg-red-500'}`}>
            <p>Education</p>
          </div>

          <div
            onClick={() => setActiveSection('skill')}
            className={`px-14 py-2 w-[220px] text-center cursor-pointer ${activeSection === 'skill' ? 'bg-blue-500' : 'bg-red-500'}`}>
            <p>Skills</p>
          </div>

          <div
            onClick={() => setActiveSection('about')}
            className={`px-14 py-2 w-[220px] text-center cursor-pointer ${activeSection === 'about' ? 'bg-blue-500' : 'bg-red-500'}`}>
            <p>About me</p>
          </div>

        </div>
      </div>
      <div>
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