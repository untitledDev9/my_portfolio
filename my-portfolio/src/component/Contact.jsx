import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaPaperPlane, FaRocket, FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_zy6qwcx',
        'template_j59sla6',
        formRef.current,
        '8z-uHkOu9fhzu68wx'
      );
      console.log(result.text);

      toast.success("🎉 Message sent successfully! I'll get back to you ASAP!", {
        position: "top-center",
        autoClose: 4000,
      });

      e.target.reset();
    } catch (error) {
      console.error(error);

      if (error.message?.includes("Failed to fetch")) {
        toast.error("📡 No internet connection. Please try again.");
      } else {
        toast.error("⚠️ Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: '(+234) 909 132 4697',
      displayValue: ['(+234)', ' 909 132 4697'],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      link: 'tel:+2349091324697'
    },
    {
      icon: MdEmail,
      label: 'Email',
      value: 'ahmedsuleiman940@gmail.com',
      displayValue: ['ahmedsuleiman940', '@', 'gmail', '.', 'com'],
      gradient: 'from-pink-500 via-purple-500 to-indigo-600',
      link: 'mailto:ahmedsuleiman940@gmail.com'
    },
    {
      icon: FaLocationDot,
      label: 'Address',
      value: 'Lagos, Nigeria',
      displayValue: ['Lagos', ',', ' Nigeria', '.'],
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      link: null
    }
  ];

  return (
    <div id='contact' className='width my-20 flex items-start justify-between gap-20 max-Laptop:gap-10 max-tablet:flex-col max-tablet:gap-16 max-tablet:items-center'>
      
      {/* Form Section */}
      <div className='w-[55%] max-Laptop:w-[60%] max-tablet:w-[85%] max-mobile:w-full'>
        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-8'>
          
          {/* Header */}
          <div className='flex flex-col gap-4 mb-4'>
            <div className='flex items-center gap-4 group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-[#00FD9A] to-[#00d484] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                <FaRocket className='relative text-[#00FD9A] text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300' />
              </div>
              <h2 className='text-white text-6xl font-black max-tablet:text-5xl max-mobile:text-4xl'>
                Let's <span className='bg-gradient-to-r from-[#00FD9A] via-[#00d484] to-[#00FD9A] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]'>Talk</span>
              </h2>
            </div>
            <p className='text-[#BDBDC1] text-lg max-mobile:text-base leading-relaxed pl-1'>
              Have a project in mind? <span className='text-[#00FD9A] font-semibold'>Let's build something incredible together.</span>
            </p>
          </div>

          {/* Form Grid */}
          <div className='flex flex-col gap-6'>
            
            {/* Name Row */}
            <div className='flex gap-5 max-mobile:flex-col'>
              <div className='relative flex-1 group'>
                <input 
                  name='name'
                  type="text"
                  placeholder='First Name'
                  onMouseEnter={() => setHoveredField('name')}
                  onMouseLeave={() => setHoveredField(null)}
                  className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                    focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                    hover:border-[#555] transition-all duration-300 outline-none text-[15px]
                    placeholder:text-[#666]'
                  required 
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <div className='relative flex-1 group'>
                <input 
                  name='lastName'
                  type="text"
                  placeholder='Last Name'
                  onMouseEnter={() => setHoveredField('lastName')}
                  onMouseLeave={() => setHoveredField(null)}
                  className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                    focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                    hover:border-[#555] transition-all duration-300 outline-none text-[15px]
                    placeholder:text-[#666]'
                  required 
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'lastName' ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className='flex gap-5 max-mobile:flex-col'>
              <div className='relative flex-1 group'>
                <input 
                  name='email'
                  type="email"
                  placeholder='Your Email'
                  onMouseEnter={() => setHoveredField('email')}
                  onMouseLeave={() => setHoveredField(null)}
                  className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                    focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                    hover:border-[#555] transition-all duration-300 outline-none text-[15px]
                    placeholder:text-[#666]'
                  required 
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <div className='relative flex-1 group'>
                <input 
                  name='phone'
                  type="tel"
                  placeholder='Phone Number (Optional)'
                  onMouseEnter={() => setHoveredField('phone')}
                  onMouseLeave={() => setHoveredField(null)}
                  className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                    focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                    hover:border-[#555] transition-all duration-300 outline-none text-[15px]
                    placeholder:text-[#666]'
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'phone' ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>

            {/* Service Select */}
            <div className='relative group'>
              <select 
                name='service'
                onMouseEnter={() => setHoveredField('service')}
                onMouseLeave={() => setHoveredField(null)}
                className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                  focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                  hover:border-[#555] transition-all duration-300 outline-none cursor-pointer text-[15px]
                  [&>option]:bg-[#1a1a2e] [&>option]:text-white'
              >
                <option value="">What can I help you with?</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Full-Stack Development">Full-Stack Development</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'service' ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            {/* Message Textarea */}
            <div className='relative group'>
              <textarea 
                name='message'
                placeholder='Tell me about your project...'
                onMouseEnter={() => setHoveredField('message')}
                onMouseLeave={() => setHoveredField(null)}
                className='w-full bg-transparent border-2 border-[#333] text-white px-6 py-4 rounded-2xl
                  focus:border-[#00FD9A] focus:shadow-[0_0_30px_rgba(0,253,154,0.15)]
                  hover:border-[#555] transition-all duration-300 outline-none resize-none h-48 text-[15px]
                  placeholder:text-[#666]'
                required
              />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FD9A]/5 to-[#00d484]/5 pointer-events-none transition-opacity duration-300 ${hoveredField === 'message' ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='group relative overflow-hidden px-8 py-5 rounded-2xl font-bold text-[17px] transition-all duration-500
              bg-gradient-to-r from-[#00FD9A] to-[#00d484] text-black
              hover:shadow-[0_0_40px_rgba(0,253,154,0.4),0_0_80px_rgba(0,253,154,0.2)]
              hover:scale-[1.02] active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              flex items-center justify-center gap-3'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            
            <span className='relative z-10 flex items-center gap-3'>
              {isSubmitting ? (
                <>
                  <div className='w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin'></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                </>
              )}
            </span>
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className='flex flex-col gap-8 w-[40%] max-Laptop:w-[35%] max-tablet:w-[85%] max-mobile:w-full'>
        
        {/* Info Cards */}
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          const CardContent = (
            <div 
              className='group relative p-6 rounded-2xl border-2 border-[#333] hover:border-[#00FD9A]
                transition-all duration-500 cursor-pointer overflow-hidden
                hover:shadow-[0_0_30px_rgba(0,253,154,0.15)]'
              style={{
                animation: `slideInRight 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
              
              <div className='relative flex items-center gap-5'>
                {/* Icon with gradient */}
                <div className='relative'>
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-r ${info.gradient} p-4 rounded-xl
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className='text-white text-2xl' />
                  </div>
                </div>
                
                {/* Text */}
                <div className='flex-1'>
                  <p className='text-[#888] text-sm mb-1 font-medium uppercase tracking-wider'>{info.label}</p>
                  <p className='text-white text-[17px] font-semibold max-mobile:text-[15px] break-words'>
                    {Array.isArray(info.displayValue) ? (
                      info.displayValue.map((part, i) => (
                        <span key={i} className={part === '@' || part === '.' || part === ',' ? 'text-[#00FD9A]' : ''}>
                          {part}
                        </span>
                      ))
                    ) : info.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'>
                  <svg className="w-6 h-6 text-[#00FD9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          );

          return info.link ? (
            <a key={index} href={info.link} target={info.link.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
              {CardContent}
            </a>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}

        {/* Quick Response Badge */}
        <div className='relative p-6 rounded-2xl border-2 border-[#00FD9A]/30 overflow-hidden group cursor-pointer
          hover:border-[#00FD9A] transition-all duration-500'
          style={{ animation: 'slideInRight 0.6s ease-out 0.45s both' }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-[#00FD9A]/5 to-[#00d484]/5 group-hover:from-[#00FD9A]/10 group-hover:to-[#00d484]/10 transition-all duration-500'></div>
          
          <div className='relative flex items-start gap-4'>
            <FaCheckCircle className='text-[#00FD9A] text-3xl mt-1 group-hover:scale-110 transition-transform duration-300' />
            <div>
              <p className='text-white text-lg font-bold mb-2 flex items-center gap-2'>
                Fast Response Time
                <span className='text-[#00FD9A] animate-pulse'>⚡</span>
              </p>
              <p className='text-[#BDBDC1] text-[15px] leading-relaxed'>
                I typically respond within <span className='text-[#00FD9A] font-bold'>24 hours</span>. Need something urgent? Hit me up on WhatsApp for instant replies!
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer 
        theme="dark"
        position="top-center"
      />

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Contact;