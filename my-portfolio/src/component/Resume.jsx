import React, { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";

const Resume = () => {


  const [experience, setExperience] = useState(true)
  const [education, setEducation] = useState(false)
  const [skill, setSkill] = useState(false)

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
            onClick={() => setExperience(!experience)}
            className='px-14 py-2 w-[220px] text-center cursor-pointer'
            style={{
              background: experience ? "red" : "blue"
            }}>
            <p>Experience</p>
          </div>


          <div
            onClick={() => setEducation(!education)}
            className='px-14 py-2 w-[220px] text-center cursor-pointer'
            style={{
              background: education ? "red" : "blue"
            }}>
            <p>Education</p>
          </div>



          <div
            onClick={() => setSkill(!skill)}
            className='px-14 py-2 w-[220px] text-center cursor-pointer'
            style={{
              background: skill ? "red" : "blue"
            }}>
            <p>Skills</p>
          </div>






          <div className=' bg-gray-700 px-14 py-2 w-[220px] text-center'>
            <p>About me</p>
          </div>
        </div>
      </div>



      {/* {experience && (
        <div className=' '>
          <div>
            <h2>My expereience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicingt modi tempora nisi.</p>
          </div>

          <div className=' grid gap-2 grid-cols-2 bg-amber-500 h-[300px] overflow-hidden overflow-y-auto custom-scroll'>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>
          </div>
        </div>
      )} */}



      {/* {education && (
        <div className=' '>
          <div>
            <h2>My expereience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicingt modi tempora nisi.</p>
          </div>

          <div className=' grid gap-2 grid-cols-2 bg-amber-500 h-[300px] overflow-hidden overflow-y-auto custom-scroll'>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>

            <div className=' bg-gray-700 p-6 w-[230px]'>
              <div>
                <p>2022 - Present</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <span>.</span>
                <p>Tech Solution Inc.</p>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {skill && (
        <div>
          <div>
            <h2>My Skills</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, hic.</p>
          </div>
          <div className=' grid grid-cols-4 bg-amber-400'>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
            <div className=' bg-gray-600 w-[100px] flex justify-center py-5 text-white hover:text-[#87fe42] transition-colors ease-in-out duration-300'>
              <FaHtml5  size={40}/>
            </div>
          </div>
        </div>
      )}




    </div>
  )
}

export default Resume