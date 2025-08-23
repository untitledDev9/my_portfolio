import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {


  const notify = () => toast("Wow so easy!");





  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_zy6qwcx',
        'template_j59sla6',
        formRef.current,
        '8z-uHkOu9fhzu68wx'
      );
      console.log(result.text);
      alert(`Messaged sent, you can as well send a message on whatsapp for quick response. Thanks😊`);
    } catch (error) {
      console.error(error);
      if (error.message?.includes('Failed to fetch')) {
        alert("No internet connection. Please try again.");
      } else {
        alert("Something went wrong. Please check your form or API keys.");
      }
    }

    e.target.reset();
  };


  return (
    <div id='contact' className='width my-18 flex items-center justify-center gap-16 max-Laptop:gap-7 max-tablet:flex-col-reverse max-tablet:gap-16'>
      <form ref={formRef} onSubmit={sendEmail} className='bg-[#313036] w-[50%] p-6 flex flex-col gap-10 max-Laptop:w-[70%] max-Laptop:gap-5 max-tablet:w-[80%] max-mobile:w-full'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-[#00FD9A] text-4xl'>Let's work together</h2>
          <p className='text-[#BDBDC1] text-[14px] w-[70%] max-mobile:w-full'>"Got an idea, a project, or just want to build something cool together? I'm all ears—let's make it happen."</p>
        </div>
        <div className='flex gap-5 flex-col'>
          <div className='flex gap-4 max-mobile:flex-col'>
            <input name='name' className='w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="text" placeholder='First Name' required />
            <input name='lastName' className='w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="text" placeholder='Last Name' required />
          </div>
          <div className='flex gap-4 max-mobile:flex-col'>
            <input name='email' className='w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="email" placeholder='Email' required />
            <input name='phone' className='w-1/2 bg-[#1C1B22] py-3 max-mobile:w-full pl-3 text-[#BDBDC1] text-[12px] placeholder:text-[11px] rounded' type="tel" placeholder='Phone Number' />
          </div>
          <select name='service' className='bg-[#1C1B22] p-3 text-[#BDBDC1] text-[12px] rounded'>
            <option>Select a service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Freelance</option>
          </select>
          <textarea name='message' placeholder='Type your message here' className='bg-[#1C1B22] text-white p-3 placeholder:text-[#BDBDC1] text-[11px] rounded h-44' required></textarea>
        </div>
        <button

          type='submit' className='text-black bg-[#00FD9A] py-2 hover:border-2 hover:text-white transition-colors duration-400 ease-in-out hover:border-[#00FD9A] hover:bg-[#00FD9A00]'>
          Send message  <ToastContainer />
        </button>
      </form>


      <div className='flex flex-col gap-9 w-[32%] max-Laptop:w-[30%] max-Laptop:gap-6 max-tablet:w-[50%] max-mobile:w-full'>
        <div className='flex items-center gap-4 ...'>
          <div className='bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><FaPhoneAlt /></div>
          <div className='text-white text-[17px]'><p className='text-[#BDBDC1] text-[14px]'>Phone</p><p>(+234) 909 132 4697</p></div>
        </div>
        <div className='flex items-center gap-4 ...'>
          <div className='bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><MdEmail /></div>
          <div className='text-white text-[17px]'><p className='text-[#BDBDC1] text-[14px]'>Email</p><p>ahmedsuleiman940@gmail.com</p></div>
        </div>
        <div className='flex items-center gap-4 ...'>
          <div className='bg-[#313036e3] p-3 text-[#00FD9A] text-xl'><FaLocationDot /></div>
          <div className='text-white text-[17px]'><p className='text-[#BDBDC1] text-[14px]'>Address</p><p>Lagos, Nigeria.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
