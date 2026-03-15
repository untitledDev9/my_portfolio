import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const allInfo = [
    { label: 'Name', value: 'Ahmed Suleiman' },
    { label: 'Experience', value: '3+ Year(s)' },
    { label: 'Nationality', value: 'Nigeria' },
    { label: 'Freelance', value: 'Available', highlight: true },
    { label: 'WhatsApp', value: '(+234) 909 132 4697', href: 'https://wa.me/2349091324697' },
    { label: 'GitHub', value: 'UntitledDev9', href: 'https://github.com/untitledDev9' },
    { label: 'Email', value: 'ahmedsuleiman940@gmail.com', href: 'mailto:ahmedsuleiman940@gmail.com' },
    { label: 'Languages', value: 'English' },
  ]

  return (
    <div>
      <div className='mb-8 max-mobile:mb-5'>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white text-[40px] max-Laptop:text-[33px] max-mobile:text-[28px] font-bold mb-2'
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-[15px] text-white/40 leading-relaxed max-Laptop:text-[13px]'
        >
          I make smooth, fast web interfaces and enjoy turning ideas into real things. Always learning, always building.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-1 max-mobile:px-4'
      >
        {allInfo.map((item, index) => {
          const content = (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + index * 0.06 }}
              className='group flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 border-b border-white/[0.05] last:border-0
                hover:border-white/[0.1] transition-colors duration-300'
            >
              <span className='text-white/35 text-[13px] uppercase tracking-wider font-mono max-mobile:text-[11px]'>
                {item.label}
              </span>
              <span className={`text-[15px] max-Laptop:text-[13px] max-mobile:text-[12px] font-medium text-right break-all ${
                item.highlight ? 'text-[#00FD9A]' : 'text-white'
              } ${item.href ? 'group-hover:text-[#00FD9A] transition-colors duration-300' : ''}`}>
                {item.value}
              </span>
            </motion.div>
          )

          if (item.href) {
            return <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
          }
          return content
        })}
      </motion.div>
    </div>
  )
}

export default About
