import React from 'react'

const Numbers = () => {
  return (
    <div className=' width flex items-center justify-center gap-10'>
      <div className='gap-2 flex items-center bg-red-400 w-[170px]'>
        <p className=' font-bold text-[56px]'>01</p>
        <p className=' w-[50%]'>Year(s) of experience</p>
      </div>
      <div className='gap-2 flex items-center bg-red-400 w-[170px]'>
        <p className=' font-bold text-[56px]'>12</p>
        <p className=' w-[50%]'>Projects completed</p>
      </div>
      <div className='gap-2 flex items-center bg-red-400 w-[170px]'>
        <p className=' font-bold text-[56px]'>06</p>
        <p className=' w-[50%]'>Technologies mastared</p>
      </div>
      <div className='gap-2 flex items-center bg-red-400 w-[170px]'>
        <p className=' font-bold text-[56px]'>500</p>
        <p className=' w-[50%]'>Code commits</p>
      </div>
    </div>
  )
}

export default Numbers