import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    { date: 'Feb 2026 - April 2026', title: 'Next.js Frontend Developer Intern', company: 'Giftseon' },
    { date: 'Jan 2026 - March 2026', title: 'Frontend & UI/UX Mobile Developer Intern', company: 'Isabi Tech' },
    { date: 'Sep 2025 - Present', title: 'Founder & Software Developer', company: 'Gadgetvault' },
    { date: 'Mar 2025 - Dec 2025', title: 'Dev Team Lead', company: 'Stainless Technology' },
    { date: 'May 2024 - Nov 2024', title: 'Frontend Developer', company: 'Renbo Studio' },
  ]

  return (
    <div>
      <div className='mb-8 max-mobile:mb-6'>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white text-[40px] max-Laptop:text-[33px] max-mobile:text-[28px] font-bold mb-2'
        >
          My Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-[15px] text-white/40 leading-relaxed max-Laptop:text-[13px] max-w-lg'
        >
          I don't just write code — I've built and deployed websites, solved real bugs, and worked across the stack when needed.
        </motion.p>
      </div>

      <div className='flex flex-col gap-4 max-h-[420px] overflow-y-auto custom-scroll pr-2'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
            className='group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl px-7 py-6
              max-Laptop:px-5 max-Laptop:py-5 max-mobile:px-4 max-mobile:py-4
              hover:border-[#00FD9A]/20 hover:bg-white/[0.05] transition-all duration-400
              hover:shadow-[0_4px_20px_rgba(0,253,154,0.08)]'
          >
            <div className='absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[#00FD9A]/20 group-hover:bg-[#00FD9A]/60 transition-colors duration-400' />

            <div className='flex items-start justify-between gap-4 max-mobile:flex-col max-mobile:gap-2'>
              <div className='flex flex-col gap-1.5'>
                <h3 className='text-white text-[16px] max-Laptop:text-[14px] font-medium leading-snug'>
                  {exp.title}
                </h3>
                <div className='flex items-center gap-2'>
                  <div className='w-1.5 h-1.5 rounded-full bg-[#00FD9A]' />
                  <p className='text-white/50 text-[13px] max-Laptop:text-[12px]'>{exp.company}</p>
                </div>
              </div>
              <span className='text-[#00FD9A] text-[13px] max-Laptop:text-[12px] font-mono whitespace-nowrap shrink-0'>
                {exp.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
