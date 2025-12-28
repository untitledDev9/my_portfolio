import React, { useState, useEffect } from 'react'
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import logo from '../assets/Untitled-1-white.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = ['home', 'resume', 'work', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);

  const navLinks = [
    { href: '#home', label: 'Home', icon: FaHome },
    { href: '#resume', label: 'Resume', icon: FaFileAlt },
    { href: '#work', label: 'Work', icon: FaBriefcase },
    { href: '#contact', label: 'Contact', icon: FaEnvelope },
  ]

  const handleNavClick = () => {
    setMenu(false)
  }

  return (
    <>
      {/* Navbar */}
      <div className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-[#0a0a0a]/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5' 
          : 'backdrop-blur-md bg-[#1C1B22]/50'
      }`}>
        <main className='width flex justify-between items-center h-20 max-mobile:h-16'>
          {/* Logo with Animation */}
          <a href="#home" className='flex items-center gap-2 group'>
            <div className='w-[40px] h-[40px] relative overflow-hidden rounded-xl bg-gradient-to-br from-[#00FD9A]/20 to-transparent p-1 
              group-hover:scale-110 transition-transform duration-300'>
              <img 
                src={logo} 
                alt="Portfolio Logo" 
                className='w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,253,154,0.6)]'
              />
            </div>
            <span className='text-white font-bold text-lg tracking-wider hidden sm:block group-hover:text-[#00FD9A] transition-colors duration-300'>
              AHMED
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className='flex items-center gap-8 text-white max-mobile:hidden'>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a 
                  key={link.href}
                  href={link.href}
                  className='relative group'
                >
                  <p className={`text-[14px] font-medium transition-all duration-300 cursor-pointer
                    ${isActive ? 'text-[#00FD9A]' : 'text-white/80 hover:text-[#00FD9A]'}
                  `}>
                    {link.label}
                  </p>
                  {/* Active indicator */}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00FD9A] to-purple-500 rounded-full transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></div>
                </a>
              )
            })}
            
            {/* CTA Button */}
            <a href="#contact">
              <button className='relative overflow-hidden group px-5 py-2.5 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-[#00FD9A] to-[#00d484] text-black
                hover:shadow-[0_0_30px_rgba(0,253,154,0.4)] transition-all duration-300
                hover:scale-105'>
                <span className='relative z-10'>Hire me</span>
                {/* Shimmer effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className='hidden max-mobile:flex items-center justify-center w-12 h-12 rounded-xl
              bg-[#00FD9A]/10 border border-[#00FD9A]/30 hover:bg-[#00FD9A]/20 transition-all duration-300
              active:scale-95'
            aria-label="Toggle menu"
          >
            {menu ? (
              <AiOutlineClose size={24} className='text-red-400' />
            ) : (
              <CgMenuMotion size={28} className='text-[#00FD9A]' />
            )}
          </button>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        menu ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${
            menu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenu(false)}
        />

        {/* Mobile Menu Panel */}
        <div className={`absolute top-20 right-0 left-0 transition-all duration-500 ${
          menu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className='mx-4 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-3xl border border-white/10 
            shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden'>
            
            {/* Decorative top accent */}
            <div className='h-1 bg-gradient-to-r from-[#00FD9A] via-purple-500 to-[#00FD9A]'></div>
            
            {/* Menu Content */}
            <nav className='p-6'>
              {/* Navigation Links */}
              <div className='space-y-2 mb-6'>
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  const isActive = activeSection === link.href.slice(1)
                  
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r from-[#00FD9A] to-[#00d484] text-black shadow-lg scale-[1.02]' 
                          : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white active:scale-95'
                        }
                      `}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-black/20' : 'bg-[#00FD9A]/10'
                      }`}>
                        <Icon size={20} className={isActive ? 'text-black' : 'text-[#00FD9A]'} />
                      </div>
                      <span className='font-semibold text-[15px] flex-1'>
                        {link.label}
                      </span>
                      {isActive && (
                        <div className='w-2 h-2 rounded-full bg-black animate-pulse'></div>
                      )}
                    </a>
                  )
                })}
              </div>

              {/* CTA Button */}
              <a href="#contact" onClick={handleNavClick} className='block'>
                <button className='w-full py-4 rounded-xl font-bold text-[15px]
                  bg-gradient-to-r from-[#00FD9A] to-[#00d484] text-black
                  hover:shadow-[0_0_30px_rgba(0,253,154,0.4)] transition-all duration-300
                  active:scale-95 relative overflow-hidden group'>
                  <span className='relative z-10'>Hire Me Now</span>
                  {/* Shimmer effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700'></div>
                </button>
              </a>

              {/* Social Links or Extra Info */}
              <div className='mt-6 pt-6 border-t border-white/10 text-center'>
                <p className='text-white/60 text-sm'>
                  Available for work
                </p>
                <div className='flex items-center justify-center gap-2 mt-2'>
                  <div className='w-2 h-2 rounded-full bg-[#00FD9A] animate-pulse'></div>
                  <span className='text-[#00FD9A] text-xs font-medium'>Online</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className='h-20 max-mobile:h-16'></div>
    </>
  )
}

export default Navbar