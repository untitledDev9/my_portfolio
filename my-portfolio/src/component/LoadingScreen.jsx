import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Photo from '../assets/WhatsApp_Image_2025-08-23_at_14.49.11_93a877ee-removebg-preview.png'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiSupabase, SiExpress, SiPostgresql } from 'react-icons/si'

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0)
  const [glitchText, setGlitchText] = useState('')
  const [scanProgress, setScanProgress] = useState(0)
  const [stats, setStats] = useState([])
  const [codeLines, setCodeLines] = useState([])
  const [particles, setParticles] = useState([])
  const [isExiting, setIsExiting] = useState(false)
  const [ekgPoints, setEkgPoints] = useState([])

  const fullName = 'AHMED SULEIMAN'
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`01'

  const orbitIcons = useMemo(() => [
    { Icon: FaReact, color: '#61DAFB', label: 'React' },
    { Icon: SiNextdotjs, color: '#fff', label: 'Next.js' },
    { Icon: SiTypescript, color: '#3178C6', label: 'TS' },
    { Icon: FaNodeJs, color: '#339933', label: 'Node' },
    { Icon: SiTailwindcss, color: '#06B6D4', label: 'TW' },
    { Icon: SiMongodb, color: '#47A248', label: 'Mongo' },
    { Icon: SiSupabase, color: '#3ECF8E', label: 'Supa' },
    { Icon: FaGitAlt, color: '#F05032', label: 'Git' },
    { Icon: SiExpress, color: '#fff', label: 'Express' },
    { Icon: SiPostgresql, color: '#4169E1', label: 'PG' },
  ], [])

  const techStack = useMemo(() =>
    orbitIcons.map(i => i.label), [orbitIcons])

  const codeSnippets = useMemo(() => [
    'const developer = new Ahmed();',
    'await portfolio.initialize();',
    'import { creativity } from "mind";',
    'export default Excellence;',
    'const skills = await loadStack();',
    'render(<Portfolio />);',
    'if (passionate) buildAmazing();',
    'git push origin greatness',
    'npm run deploy:production',
    'const future = await dream.build();',
    'console.log("Welcome!");',
    'return <Success />;',
  ], [])

  // EKG heartbeat waveform generator
  useEffect(() => {
    if (phase < 1) return
    let offset = 0
    const interval = setInterval(() => {
      offset += 2
      const points = []
      for (let x = 0; x < 200; x += 2) {
        const pos = (x + offset) % 200
        let y = 25
        // heartbeat spike pattern
        if (pos > 60 && pos < 65) y = 18
        else if (pos > 65 && pos < 68) y = 8
        else if (pos > 68 && pos < 72) y = 40
        else if (pos > 72 && pos < 76) y = 5
        else if (pos > 76 && pos < 80) y = 32
        else if (pos > 80 && pos < 85) y = 22
        // small bump
        else if (pos > 120 && pos < 128) y = 20
        else if (pos > 128 && pos < 132) y = 28
        // flatline with tiny noise
        else y = 25 + (Math.random() - 0.5) * 1
        points.push({ x, y })
      }
      setEkgPoints(points)
    }, 50)
    return () => clearInterval(interval)
  }, [phase])

  // Glitch text effect
  useEffect(() => {
    if (phase < 2) return
    let iteration = 0
    const interval = setInterval(() => {
      setGlitchText(
        fullName.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration) return fullName[i]
          return glitchChars[Math.floor(Math.random() * glitchChars.length)]
        }).join('')
      )
      iteration += 0.5
      if (iteration > fullName.length) {
        setGlitchText(fullName)
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [phase])

  // Scan progress
  useEffect(() => {
    if (phase < 1) return
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + 1.5
      })
    }, 30)
    return () => clearInterval(interval)
  }, [phase])

  // Stats reveal
  useEffect(() => {
    if (phase < 3) return
    const items = [
      { label: 'CLEARANCE', value: 'LEVEL 5', color: '#00FD9A' },
      { label: 'EXPERIENCE', value: '3+ YRS', color: '#61DAFB' },
      { label: 'PROJECTS', value: '12+', color: '#F7DF1E' },
      { label: 'STATUS', value: 'ACTIVE', color: '#00FD9A' },
    ]
    items.forEach((item, i) => {
      setTimeout(() => setStats(prev => [...prev, item]), i * 200)
    })
  }, [phase])

  // Floating code lines
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLine = {
          id: Date.now(),
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 80 + 10,
          y: 100 + Math.random() * 20,
        }
        return [...prev.slice(-15), newLine]
      })
    }, 400)
    return () => clearInterval(interval)
  }, [codeSnippets])

  // Spawn particles for explosion
  const spawnParticles = useCallback(() => {
    const newParticles = []
    for (let i = 0; i < 80; i++) {
      const angle = (Math.PI * 2 * i) / 80
      const velocity = 2 + Math.random() * 6
      const size = Math.random() * 4 + 1
      newParticles.push({
        id: i,
        x: 0,
        y: 0,
        targetX: Math.cos(angle) * velocity * 120,
        targetY: Math.sin(angle) * velocity * 120,
        size,
        color: ['#00FD9A', '#61DAFB', '#F7DF1E', '#3178C6', '#fff'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.15,
      })
    }
    setParticles(newParticles)
  }, [])

  // Handle exit with particle explosion
  const handleExit = useCallback(() => {
    if (isExiting) return
    setIsExiting(true)
    spawnParticles()
    setTimeout(() => onComplete(), 700)
  }, [isExiting, spawnParticles, onComplete])

  // Phase progression
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => handleExit(), 4800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [handleExit])

  // Build EKG path
  const ekgPath = useMemo(() => {
    if (ekgPoints.length === 0) return ''
    return ekgPoints.map((p, i) =>
      (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)
    ).join(' ')
  }, [ekgPoints])

  return (
    <motion.div
      className='fixed inset-0 z-[9999] bg-[#08080c] flex items-center justify-center overflow-hidden cursor-pointer'
      animate={isExiting ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onClick={handleExit}
    >
      {/* Hex grid background */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#00FD9A" strokeWidth="0.5" />
              <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#00FD9A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Floating code lines */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {codeLines.map(line => (
          <motion.div
            key={line.id}
            className='absolute text-[#00FD9A]/[0.06] font-mono text-sm whitespace-nowrap'
            initial={{ x: `${line.x}%`, y: `${line.y}%`, opacity: 0 }}
            animate={{ y: '-10%', opacity: [0, 0.08, 0.08, 0] }}
            transition={{ duration: 8, ease: 'linear' }}
          >
            {line.text}
          </motion.div>
        ))}
      </div>

      {/* Corner decorations */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className='absolute top-6 left-6 max-mobile:top-4 max-mobile:left-4'>
        <div className='w-12 h-12 max-mobile:w-8 max-mobile:h-8 border-t-2 border-l-2 border-[#00FD9A]/30 rounded-tl-lg' />
        <p className='text-[#00FD9A]/30 font-mono text-[10px] mt-2 tracking-widest'>SYS.INIT</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className='absolute bottom-6 right-6 max-mobile:bottom-4 max-mobile:right-4'>
        <p className='text-[#00FD9A]/30 font-mono text-[10px] mb-2 tracking-widest text-right'>v2.0.26</p>
        <div className='w-12 h-12 max-mobile:w-8 max-mobile:h-8 border-b-2 border-r-2 border-[#00FD9A]/30 rounded-br-lg ml-auto' />
      </motion.div>

      {/* ====== PARTICLE EXPLOSION ====== */}
      {isExiting && (
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-50'>
          {particles.map(p => (
            <motion.div
              key={p.id}
              className='absolute rounded-full'
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: p.targetX, y: p.targetY, opacity: 0 }}
              transition={{ duration: 0.6 + p.delay, ease: 'easeOut', delay: p.delay }}
            />
          ))}
          {/* Central flash */}
          <motion.div
            className='absolute w-4 h-4 rounded-full bg-white'
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ boxShadow: '0 0 60px 20px rgba(0,253,154,0.8)' }}
          />
        </div>
      )}

      {/* Main content */}
      <motion.div
        className='relative flex flex-col items-center gap-8 max-mobile:gap-6'
        animate={isExiting ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >

        {/* ====== HOLOGRAPHIC ORBIT RING ====== */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div className='relative w-[520px] h-[520px] max-mobile:w-[400px] max-mobile:h-[400px]'>

            {/* Outer ring */}
            <motion.div
              className='absolute inset-0 rounded-full border border-[#00FD9A]/10'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner ring */}
            <motion.div
              className='absolute inset-8 rounded-full border border-[#00FD9A]/[0.06]'
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Dashed ring */}
            <motion.div
              className='absolute inset-4 rounded-full'
              style={{ border: '1px dashed rgba(0,253,154,0.08)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Orbiting tech icons */}
            {orbitIcons.map((item, i) => {
              const angle = (360 / orbitIcons.length) * i
              return (
                <motion.div
                  key={i}
                  className='absolute'
                  style={{
                    top: '50%',
                    left: '50%',
                    width: 0,
                    height: 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: phase >= 2 ? 1 : 0,
                    rotate: 360,
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: i * 0.08 },
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                  }}
                >
                  <motion.div
                    className='absolute flex items-center justify-center'
                    style={{
                      width: 36,
                      height: 36,
                      top: -18,
                      left: -18,
                      transform: `rotate(${angle}deg) translateY(-240px)`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  >
                    <div
                      className='w-9 h-9 max-mobile:w-7 max-mobile:h-7 rounded-lg bg-[#0d0d14] border border-white/10 flex items-center justify-center'
                      style={{ boxShadow: `0 0 15px ${item.color}25` }}
                    >
                      <item.Icon size={16} color={item.color} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Glowing orbit dots */}
            {[0, 90, 180, 270].map((angle, i) => (
              <motion.div
                key={`dot-${i}`}
                className='absolute'
                style={{ top: '50%', left: '50%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
              >
                <div
                  className='absolute w-1.5 h-1.5 rounded-full bg-[#00FD9A]'
                  style={{
                    transform: `rotate(${angle}deg) translateY(-260px) translateX(-3px)`,
                    boxShadow: '0 0 8px #00FD9A',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Access Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='relative z-10'
        >
          <div className='relative bg-[#0d0d14]/95 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 max-mobile:p-5 w-[380px] max-mobile:w-[320px] overflow-hidden'>

            {/* Card top accent */}
            <motion.div
              className='absolute top-0 left-0 right-0 h-[2px]'
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              style={{ background: 'linear-gradient(90deg, transparent, #00FD9A, transparent)' }}
            />

            {/* Scan line sweep */}
            {phase >= 1 && phase < 4 && (
              <motion.div
                className='absolute left-0 right-0 h-[2px] bg-[#00FD9A]/60 z-20 pointer-events-none'
                style={{ boxShadow: '0 0 20px 5px rgba(0,253,154,0.3)' }}
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            )}

            {/* Top row: Photo + Info */}
            <div className='flex gap-6 max-mobile:gap-4 items-start mb-5'>
              {/* Photo */}
              <div className='relative w-[100px] h-[120px] max-mobile:w-[80px] max-mobile:h-[100px] rounded-xl overflow-hidden shrink-0'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 1 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={Photo}
                    alt="Ahmed"
                    className='w-full h-full object-cover'
                    style={{
                      filter: phase < 2 ? 'grayscale(1) brightness(0.6)' : 'grayscale(0) brightness(1)',
                      transition: 'filter 0.8s ease',
                    }}
                  />
                </motion.div>

                {phase >= 1 && scanProgress < 100 && (
                  <div
                    className='absolute inset-0 bg-gradient-to-b from-[#00FD9A]/20 to-transparent'
                    style={{ height: `${scanProgress}%`, transition: 'height 0.1s linear' }}
                  />
                )}

                <div className='absolute inset-0 border border-[#00FD9A]/20 rounded-xl' />

                <AnimatePresence>
                  {phase >= 3 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='absolute -bottom-1 -right-1 w-6 h-6 bg-[#00FD9A] rounded-full flex items-center justify-center'
                    >
                      <svg className='w-3.5 h-3.5 text-[#08080c]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Info */}
              <div className='flex-1 min-w-0'>
                <div className='mb-3 h-[28px] max-mobile:h-[24px]'>
                  {phase >= 2 ? (
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='text-white font-bold text-lg max-mobile:text-base tracking-wider font-mono'
                    >
                      {glitchText}
                    </motion.h1>
                  ) : (
                    <div className='flex gap-1'>
                      {[...Array(14)].map((_, i) => (
                        <motion.div
                          key={i}
                          className='w-2 h-4 bg-white/10 rounded-sm'
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase >= 2 ? 1 : 0 }}
                  className='text-[#00FD9A] text-xs font-mono tracking-[0.2em] uppercase mb-3'
                >
                  Software Developer
                </motion.p>

                {/* Biometric bars */}
                <div className='flex gap-1'>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='flex-1 rounded-full bg-[#00FD9A]'
                      initial={{ height: 2, opacity: 0.1 }}
                      animate={{
                        height: phase >= 2 ? [8, 16, 8, 24, 12, 20][i % 6] : 2,
                        opacity: phase >= 2 ? 0.4 : 0.1,
                      }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ====== EKG HEARTBEAT LINE ====== */}
            <div className='mb-4 relative h-[50px] overflow-hidden rounded-lg bg-white/[0.02] border border-white/[0.04]'>
              {/* Label */}
              <div className='absolute top-1.5 left-2 z-10 flex items-center gap-1.5'>
                <motion.div
                  className='w-1.5 h-1.5 rounded-full bg-[#00FD9A]'
                  animate={{
                    scale: phase >= 4 ? [1, 1.5, 1] : 1,
                    opacity: phase >= 4 ? [1, 0.5, 1] : 0.5,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className='text-[8px] font-mono text-white/20 tracking-widest'>
                  {phase >= 4 ? 'VITALS OK' : 'MONITORING'}
                </span>
              </div>

              {/* BPM readout */}
              <div className='absolute top-1.5 right-2 z-10'>
                <motion.span
                  className='text-[10px] font-mono font-bold'
                  animate={{ color: phase >= 4 ? '#00FD9A' : '#ffffff40' }}
                >
                  {phase >= 2 ? '72' : '--'} <span className='text-[8px] font-normal text-white/20'>BPM</span>
                </motion.span>
              </div>

              {/* EKG SVG */}
              <svg
                viewBox="0 0 200 50"
                className='w-full h-full'
                preserveAspectRatio='none'
              >
                <defs>
                  <linearGradient id="ekgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00FD9A" stopOpacity="0" />
                    <stop offset="30%" stopColor="#00FD9A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00FD9A" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="ekgGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid lines */}
                {[12.5, 25, 37.5].map(y => (
                  <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(0,253,154,0.05)" strokeWidth="0.5" />
                ))}

                {/* EKG trace */}
                {ekgPath && (
                  <path
                    d={ekgPath}
                    fill="none"
                    stroke="url(#ekgGradient)"
                    strokeWidth="1.5"
                    filter="url(#ekgGlow)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>

            {/* Divider */}
            <div className='h-px bg-white/[0.06] mb-4 relative'>
              <motion.div
                className='absolute top-0 left-0 h-full bg-[#00FD9A]/40'
                animate={{ width: phase >= 2 ? '100%' : '0%' }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Stats grid */}
            <div className='grid grid-cols-4 gap-3 max-mobile:gap-2 mb-4'>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-center'
                >
                  <p className='font-mono font-bold text-sm max-mobile:text-xs' style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className='text-white/20 text-[9px] max-mobile:text-[8px] font-mono tracking-wider mt-1'>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className='flex flex-wrap gap-1.5 justify-center'>
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: phase >= 3 ? 1 : 0,
                    scale: phase >= 3 ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className='px-2.5 py-1 text-[10px] font-mono text-white/30 bg-white/[0.03] rounded-md border border-white/[0.05]'
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Access status */}
            <AnimatePresence>
              {phase >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='mt-5 flex items-center justify-center gap-2'
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6 }}
                    className='w-2 h-2 rounded-full bg-[#00FD9A]'
                    style={{ boxShadow: '0 0 12px #00FD9A, 0 0 24px #00FD9A50' }}
                  />
                  <span className='text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase font-bold'>
                    Access Granted
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Outer glow */}
          <motion.div
            className='absolute -inset-[1px] rounded-3xl pointer-events-none'
            animate={{
              boxShadow: phase >= 4
                ? '0 0 50px rgba(0,253,154,0.2), inset 0 0 50px rgba(0,253,154,0.05)'
                : '0 0 0px transparent',
            }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{ delay: 0.5 }}
          className='w-[200px] max-mobile:w-[160px] z-10'
        >
          <div className='w-full h-[3px] bg-white/[0.05] rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-[#00FD9A] rounded-full'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4.5, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='text-center text-white/20 text-[10px] font-mono mt-3 tracking-widest'
          >
            {phase < 2 ? 'SCANNING' : phase < 4 ? 'VERIFYING' : 'LAUNCHING'}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
