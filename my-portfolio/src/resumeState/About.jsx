import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <h2 className='text-white text-[43px] max-Laptop:text-[40px]'>About me</h2>
        <p className=' text-[14px] text-[#BDBDC1] leading-7 
        max-Laptop:text-[13px] max-Laptop:leading-5
        '>I make smooth, fast web interfaces and enjoy turning ideas into real things. Always learning, always building..</p>
      </div>
      <div className=' flex gap-14 mt-10 max-Laptop:gap-10 max-mobile:gap-6 max-mobile:flex-col'>
        <div className='text-[13px] text-[#BDBDC1] flex flex-col gap-5 max-mobile:text-[11px]'>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Name <span className=' text-white text-[16px] max-mobile:text-[13px]'>Ahmed Suleiman</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Experience <span className=' text-white text-[16px] max-mobile:text-[13px]'>2+ Year(s)</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Nationality <span className=' text-white text-[16px] max-mobile:text-[13px]'>Nigeria</span></p>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Freelance <span className=' text-white text-[16px] max-mobile:text-[13px]'>Available</span></p>
        </div>
        <div className='text-[13px] text-[#BDBDC1] flex flex-col gap-5'>
          <a href="https://wa.me/2349091324697" target="_blank" rel="noopener noreferrer"> <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>WhatsApp <span className=' text-white text-[16px] max-mobile:text-[13px]'>(+234) 909 132 4697</span></p></a>
          <a href="https://github.com/untitledDev9"><p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>GitHub <span className=' text-white text-[16px] max-mobile:text-[13px]'>UntitledDev9</span></p></a>
          <a href="mailto:ahmedsuleiman940@gmail.com"> <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Email <span className=' text-white text-[16px] max-mobile:text-[13px]'>ahmedsuleiman940@gmail.com</span></p></a>
          <p className='flex gap-4 max-Laptop:flex-col max-Laptop:items-start max-Laptop:gap-1 items-center max-mobile:flex-row max-mobile:items-center max-mobile:gap-6'>Languages <span className=' text-white text-[16px] max-mobile:text-[13px]'>English</span></p>
        </div>
      </div>
    </div>
  )
}

export default About