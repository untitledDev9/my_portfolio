import React from 'react'
import { FiDownload } from "react-icons/fi";
import Photo from '../assets/photo.png'

const Hero = () => {
  return (
    <div className=' width border-amber-500 border-2 flex justify-center items-center'>
      <div>
        <div>
          <h4>Software Developer</h4>
          <h2>Hello I'm Ahmed Suleiman</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at quod necessitatibus itaque aut quae, adipisci magnam provident suscipit corrupti!</p>
          <div className=' flex bg-red-700 gap-6'>
            <button className=' flex  items-center gap-2'>
              <p className=' text-[13px]'>DOWNLOAD CV</p>
              <FiDownload />
            </button>
            <div className=' flex justify-center items-center gap-3'>
              <div className=' border-green-700 border-2 w-fit p-2 rounded-full'>
                <FiDownload />
              </div>
              <div className=' border-green-700 border-2 w-fit p-2 rounded-full'>
                <FiDownload />
              </div>
              <div className=' border-green-700 border-2 w-fit p-2 rounded-full'>
                <FiDownload />
              </div>
              <div className=' border-green-700 border-2 w-fit p-2 rounded-full'>
                <FiDownload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' border-green-600 border-2 rounded-full'>
        <img src={Photo} alt="" />
      </div>
    </div>
  )
}

export default Hero