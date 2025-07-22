import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <h2 className='text-white text-[43px] max-Laptop:text-[40px]'>About me</h2>
        <p className=' text-[14px] text-[#BDBDC1] leading-7 
        max-Laptop:text-[13px] max-Laptop:leading-5
        '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptate.</p>
      </div>
      <div className=' flex gap-14 mt-10 max-Laptop:gap-10'>
        <div className='text-[13px] text-[#BDBDC1] flex flex-col gap-5'>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Name <span className=' text-white text-[16px]'>Ahmed Suleiman</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Experience <span className=' text-white text-[16px]'>1+ Year(s)</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Nationality <span className=' text-white text-[16px]'>Nigeria</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Freelance <span className=' text-white text-[16px]'>Available</span></p>
        </div>
        <div className='text-[13px] text-[#BDBDC1] flex flex-col gap-5'>
          <a href="https://wa.me/2349091324697" target="_blank" rel="noopener noreferrer"> <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>WhatsApp <span className=' text-white text-[16px]'>(+234) 909 132 4697</span></p></a>
          <a href="https://github.com/untitledDev9"><p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>GitHub <span className=' text-white text-[16px]'>UntitledDev9</span></p></a>
          <a href="mailto:ahmedsuleiman940@gmail.com"> <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Email <span className=' text-white text-[16px]'>ahmedsuleiman940@gmail.com</span></p></a>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center'>Languages <span className=' text-white text-[16px]'>English</span></p>
        </div>
      </div>
    </div>
  )
}

export default About