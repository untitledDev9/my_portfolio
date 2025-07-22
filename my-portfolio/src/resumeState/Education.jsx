import React from 'react'

const Education = () => {
  return (
    <div className=' '>
      <div>
        <h2 className=' text-white text-[43px]
        max-Laptop:text-[35px]
        max-mobile:text-[32px]
        '>My Training</h2>
        {/* <p className=' text-[#BDBDC1] leading-7 mb-5'>I don’t just write code — I’ve built and deployed websites, solved real bugs, and worked across the stack when needed. </p> */}
        <p className=' text-[14px] text-[#BDBDC1] leading-7 mb-5
        max-Laptop:text-[13px] max-Laptop:leading-5 max-mobile:mb-9
        '>Made impressive progress from HTML basics to dynamic React components and backend fundamentals. And steadily evolving from a frontend learner to a well-rounded full-stack developer.</p>
      </div>

      <div className=' grid gap-5 grid-cols-2  h-[300px] overflow-hidden overflow-y-auto custom-scroll
      max-mobile:grid-cols-1
      '>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>03/2025 - Present</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Full Stack Software Development</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>SAIL Innovation Lab.</p>
          </div>
        </div>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>01/2025 - 03/2025</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>JavaScript</h1>
          </div>
          <div className=' flex items-center gap-2 '>
            <div className=' w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>SuperSimpleDev.</p>
          </div>
        </div>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>03/2024 - 07/2024</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Python Programming.</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>HiiT.</p>
          </div>
        </div>

        <div className=' bg-[#28272B] shadow-[0_4px_5px_rgba(0,253,154,0.3)] px-6 max-Laptop:px-4 py-5 w-full h-[160px] flex justify-between flex-col gap-4'>
          <div className=' grid gap-2'>
            <p className='text-[#08c17a] max-Laptop:text-[13px]'>11/2024 - 02/2025</p>
            <h1 className='max-Laptop:text-[14px] text-[17px] text-white'>Web Development</h1>
          </div>
          <div className=' flex items-center gap-2'>
            <div className=' w-1 h-1 rounded-full bg-[#00FD9A]'></div>
            <p className='max-Laptop:text-[12px] text-[#BDBDC1]'>GoMyCode.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education