import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div id='contact' className='width my-32 flex items-center justify-center gap-16 max-Laptop:gap-7
      max-tablet:flex-col-reverse max-tablet:gap-16 
    '>
      <div className=' bg-[#313036] w-[50%] p-6 flex flex-col gap-10 max-Laptop:w-[70%] max-Laptop:gap-5
      max-tablet:w-[80%] max-mobile:w-full
      '>
        <div className=' flex flex-col gap-3'>
          <h2 className=' text-[#00FD9A] text-4xl'>Let's work together</h2>
          <p className='text-[#BDBDC1] text-[14px] w-[70%] max-mobile:w-full'>"Got an idea, a project, or just want to build something cool together? I'm all ears—let's make it happen."</p>
        </div>
        <div className=' flex gap-5 flex-col'>
          <div className='flex gap-4 max-mobile:flex-col'>
            <input className=' w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] placeholder:text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="text" placeholder='FirstName' />
            <input className=' w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] placeholder:text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="text" placeholder='LastName' />
          </div>
          <div className='flex gap-4 max-mobile:flex-col'>
            <input className=' w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] placeholder:text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="email" placeholder='Email' />
            <input className=' w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] placeholder:text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="phone" placeholder='Phone Number' />
          </div>
          <select className='bg-[#1C1B22] p-3 text-[#BDBDC1] text-[12px] rounded'>
            <option value="aaaaaa">Select a service</option>
            <option value="aaaaaa">aaaaaaaa</option>
            <option value="aaaaaa">aaaaaaaa</option>
          </select>
          <textarea placeholder='Type your message here' className='bg-[#1C1B22] text-white p-3 placeholder:text-[#BDBDC1] placeholder:text-[11px] rounded h-44'></textarea>
        </div>
        <button className=' text-black bg-[#00FD9A] py-2 hover:border-2 hover:text-white transition-colors duration-400 ease-in-out hover:border-[#00FD9A] hover:bg-[#00FD9A00]'>Send message</button>
      </div>
      <div className=' flex flex-col gap-9 w-[32%] max-Laptop:w-[30%] max-Laptop:gap-6
      max-tablet:w-[50%] max-mobile:w-full
      '>
        <div className=' flex items-center gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-2
        max-tablet:flex-row max-tablet:gap-5 max-tablet:items-center 
        '>
          <div className=' bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><FaPhoneAlt /></div>
          <div className=' text-white text-[17px] max-Laptop:text-[13px] max-tablet:text-[17px]'>
            <p className=' text-[#BDBDC1] text-[14px]'>Phone</p>
            <p>(+234) 909 132 4697</p>
          </div>
        </div>
        <div className=' flex items-center gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-2
        max-tablet:flex-row max-tablet:gap-5 max-tablet:items-center 
        '>
          <div className=' bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><MdEmail /></div>
          <div className=' text-white text-[17px] max-Laptop:text-[13px] max-tablet:text-[17px]'>
            <p className=' text-[#BDBDC1] text-[14px]'>Email</p>
            <p>ahmedsuleiman940@gmail.com</p>
          </div>
        </div>
        <div className=' flex items-center gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-2
        max-tablet:flex-row max-tablet:gap-5 max-tablet:items-center 
        '>
          <div className=' bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><FaLocationDot /></div>
          <div className=' text-white text-[17px] max-Laptop:text-[13px] max-tablet:text-[17px]'>
            <p className=' text-[#BDBDC1] text-[14px]'>Address</p>
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact