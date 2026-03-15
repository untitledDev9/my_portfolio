import React from 'react'

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Ahmed Suleiman' },
    { label: 'Experience', value: '2+ Year(s)' },
    { label: 'Nationality', value: 'Nigeria' },
    { label: 'Freelance', value: 'Available', highlight: true },
  ]

  const contactInfo = [
    { label: 'WhatsApp', value: '(+234) 909 132 4697', href: 'https://wa.me/2349091324697' },
    { label: 'GitHub', value: 'UntitledDev9', href: 'https://github.com/untitledDev9' },
    { label: 'Email', value: 'ahmedsuleiman940@gmail.com', href: 'mailto:ahmedsuleiman940@gmail.com' },
    { label: 'Languages', value: 'English' },
  ]

  const InfoItem = ({ label, value, href, highlight }) => {
    const content = (
      <div className='group flex items-center justify-between gap-4 py-4 border-b border-white/[0.05] last:border-0
        hover:border-white/[0.1] transition-colors duration-300'>
        <span className='text-white/35 text-[13px] uppercase tracking-wider font-mono max-mobile:text-[11px]'>
          {label}
        </span>
        <span className={`text-[15px] max-mobile:text-[13px] font-medium text-right ${
          highlight ? 'text-[#00FD9A]' : 'text-white'
        } ${href ? 'group-hover:text-[#00FD9A] transition-colors duration-300' : ''}`}>
          {value}
        </span>
      </div>
    )

    if (href) {
      return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    }
    return content
  }

  return (
    <div>
      <div className='mb-8 max-mobile:mb-6'>
        <h2 className='text-white text-[40px] max-Laptop:text-[33px] max-mobile:text-[28px] font-bold mb-2'>
          About Me
        </h2>
        <p className='text-[15px] text-white/40 leading-relaxed max-Laptop:text-[13px] max-w-lg'>
          I make smooth, fast web interfaces and enjoy turning ideas into real things. Always learning, always building.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-8 max-mobile:grid-cols-1 max-mobile:gap-6'>
        <div className='bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-2 max-mobile:px-4'>
          {personalInfo.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
        <div className='bg-white/[0.02] border border-white/[0.05] rounded-2xl px-6 py-2 max-mobile:px-4'>
          {contactInfo.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
