import React from 'react'

const Experience = () => {
  return (
    <div className=' '>
      <div>
        <h2 className=' text-white text-[43px]
        max-Laptop:text-[35px]
        '>My Expereience</h2>
        <p className=' text-[#BDBDC1] leading-7 mb-5
        max-Laptop:text-[13px] max-Laptop:leading-5
        '>I don’t just write code — I’ve built and deployed websites, solved real bugs, and worked across the stack when needed. </p>
      </div>

      <div className=' grid gap-5 grid-cols-2  h-[300px] overflow-hidden overflow-y-auto custom-scroll'>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>2025</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Freelance Web Developer</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' text-3xl w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>Wallect Connect.</p>
          </div>
        </div>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>Summer 2024</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Teaching Assistant</h1>
          </div>
          <div className=' flex items-center gap-2 '>
            <div className=' text-3xl w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>Untitled Dev</p>
          </div>
        </div>

         <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>2021 - 2024</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Computer Engineer & Sales Assistant</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' text-3xl w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>Whales Tech.</p>
          </div>
        </div>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>2019 - 2023</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Personal Assistant</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' text-3xl w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[11px] text-[#BDBDC1]'>JB Wine & Liquor Store.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience