import React, { useRef, useState, useEffect } from 'react'
import { BsArrowUpRight, BsChevronLeft, BsChevronRight, BsX, BsArrowRight, BsArrowDown } from "react-icons/bs";
import { FaGithub, FaGlobe, FaGooglePlay } from "react-icons/fa";
import { HiSparkles, HiShieldCheck, HiChatAlt2, HiLocationMarker, HiUserGroup, HiBadgeCheck, HiHome, HiCurrencyDollar } from "react-icons/hi";

// GadgetVault app screenshots
import add from '../assets/mobile/gv/add.jpg'
import home from '../assets/mobile/gv/home.jpg'
import profile from '../assets/mobile/gv/profile.jpg'
import group from '../assets/mobile/gv/groupp.jpg'
import report from '../assets/mobile/gv/report.jpg'
import help from '../assets/mobile/gv/help.jpg'
import snap from '../assets/mobile/gv/snap.jpg'
import vault from '../assets/mobile/gv/vault.jpg'
// Roomie app screenshots
import one from '../assets/mobile/rommie/one.jpeg'
import two from '../assets/mobile/rommie/two.jpeg'
import three from '../assets/mobile/rommie/three.jpeg'
import four from '../assets/mobile/rommie/four.jpeg'
import five from '../assets/mobile/rommie/five.jpeg'
import six from '../assets/mobile/rommie/six.jpeg'
import seven from '../assets/mobile/rommie/seven.jpeg'
// web app screenshot
import vaayakMobile from '../assets/web/vaayakMobile.png'
import vaayakDesktop from '../assets/web/vaayakDesktop.png'
import sharplookMobile from '../assets/web/sharplookMobile.png'
import sharplookDesktop from '../assets/web/sharplookDesktop.png'
import sttechlabMobile from '../assets/web/sttechlabMobile.png'
import sttechlabDesktop from '../assets/web/sttechlabDesktop.png'


const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef(null);

  const openModal = (image, index, images) => {
    setModalImage(image);
    setCurrentImageIndex(index);
    setAllImages(images);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setAllImages([]);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % allImages.length
      : (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(newIndex);
    setModalImage(allImages[newIndex]);
  };

  // Switch app with transition
  const switchApp = (index) => {
    if (index === activeAppIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveAppIndex(index);
      setActiveScreenshot(0);
      setIsTransitioning(false);
    }, 200);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!modalImage) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') navigateImage('prev');
      else if (e.key === 'ArrowRight') navigateImage('next');
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalImage, currentImageIndex, allImages]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ============================================
  // APP DATA - Add your apps here
  // ============================================
  const appsData = [
    {
      id: "01",
      title: "GadgetVault",
      tagline: "Your Digital Safe",
      description: "A comprehensive device protection and verification platform designed to keep users safe. Register devices, verify electronics before purchase, and trade on a trusted marketplace.",
      technologies: ["React Native", "Next.js", "Supabase", "Socket.IO"],
      features: [
        { icon: HiShieldCheck, title: "Device Protection", desc: "IMEI verification & theft prevention" },
        { icon: HiChatAlt2, title: "Real-time Chat", desc: "Instant messaging with notifications" },
        { icon: HiLocationMarker, title: "Market Groups", desc: "Location-based trading communities" },
        { icon: HiSparkles, title: "Verified Users", desc: "Trusted marketplace with KYC" },
      ],
      platforms: {
        ios: null,
        android: 'https://play.google.com/store/apps/details?id=com.gadgetvault&pcampaignid=web_share',
        github: null,
        website: 'https://gadgetvaultng.vercel.app'
      },
      screenshots: [home, vault, profile, group, add, snap, report, help],
    },
    {
      id: "02",
      title: "Roomie",
      tagline: "Match. Connect. Move In.",
      description: "A secure roommate matching platform that helps users find compatible, verified roommates, discover housing, and build trusted living arrangements through smart lifestyle-based matching.",
      technologies: ["React Native", "AI Matching", "Real-time Chat", "Verification"],
      features: [
        { icon: HiUserGroup, title: "Smart Matching", desc: "Lifestyle & preference-based roommate matching" },
        { icon: HiBadgeCheck, title: "Verified Users", desc: "ID and social verification for safety" },
        { icon: HiHome, title: "Housing Listings", desc: "Browse verified on-campus & off-campus housing" },
        { icon: HiChatAlt2, title: "Chat & Connect", desc: "Message and build rapport before moving in" },
        { icon: HiCurrencyDollar, title: "Expense Splitting", desc: "Track rent, bills, and shared expenses" },
        { icon: HiShieldCheck, title: "Secure Platform", desc: "Encrypted system with privacy protection" }
      ],
      platforms: {
        ios: null,
        android: null,
        github: null,
        website: "https://www.roomieapp.com"
      },
      screenshots: [one, two, three, four, five, six, seven],
    },
    // ============================================
    // ADD MORE APPS HERE - Just copy this template
    // ============================================
    // {
    //   id: "03",
    //   title: "YourAppName",
    //   tagline: "Your Catchy Tagline",
    //   description: "Description of what your app does...",
    //   technologies: ["Tech1", "Tech2", "Tech3"],
    //   features: [
    //     { icon: HiSparkles, title: "Feature 1", desc: "Feature description" },
    //     { icon: HiShieldCheck, title: "Feature 2", desc: "Feature description" },
    //   ],
    //   platforms: {
    //     ios: "https://apps.apple.com/...",      // or null
    //     android: "https://play.google.com/...", // or null
    //     github: "https://github.com/...",       // or null
    //     website: "https://yourapp.com"          // or null
    //   },
    //   screenshots: [img1, img2, img3],
    // },
  ];

  const projectsData = [
    {
      id: "01",
      title: "VAAYAK Motors",
      subtitle: "Corporate Website",
      description: "Official website for VAAYAK Motors — a commercial vehicle manufacturer providing fleet solutions and heavy-duty trucks for industry-specific needs.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://www.vaayakmotors.com/",
      githubUrl: "",
      desktopImage: vaayakDesktop,
      mobileImage: vaayakMobile,
      year: "2024"
    },
    {
      id: "02",
      title: "Sharplook Website",
      subtitle: "Portfolio / Business Web-App",
      description: "Official website for Sharplook — a modern web platform showcasing projects, services, and digital solutions with a clean and interactive UI.",
      technologies: ["Tailwind.css", "Next.js"],
      liveUrl: "https://sharplook-website.vercel.app/",
      githubUrl: "", // Add repo URL if available
      desktopImage: sharplookDesktop, // Replace with your imported desktop image
      mobileImage: sharplookMobile,   // Replace with your imported mobile image
      year: "2026"
    },
  {
    id: "03",
    title: "ST Tech Lab",
    subtitle: "Corporate / Tech Services Website",
    description: "Official website for ST Tech Lab — a tech solutions provider offering software, IT services, and digital products.",
    technologies: ["React.js", "Tailwind.css", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://sttechlab.com/",
    githubUrl: "", // add GitHub repo URL if available
    desktopImage: sttechlabDesktop,
    mobileImage: sttechlabMobile,
    year: "2025"
  }
];


  // Auto-rotate screenshots for current app
  useEffect(() => {
    const currentApp = appsData[activeAppIndex];
    const screenshotCount = currentApp.screenshots.length;

    const timer = setInterval(() => {
      setActiveScreenshot(prev => (prev + 1) % screenshotCount);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeAppIndex]);

  // Current active app
  const currentApp = appsData[activeAppIndex];

  // Fullscreen Modal
  const ImageModal = () => {
    if (!modalImage) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={closeModal}>
        <div className="absolute inset-0 bg-[#0a0a0b]/98 backdrop-blur-3xl" />

        <button onClick={closeModal} className="absolute top-6 right-6 z-50 w-14 h-14 flex items-center justify-center text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-2xl transition-all duration-500 group border border-white/[0.05]" aria-label="Close">
          <BsX size={28} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>

        <div className="absolute top-6 left-6 z-50">
          <div className="flex items-baseline gap-1 font-mono">
            <span className="text-4xl font-light text-white">{String(currentImageIndex + 1).padStart(2, '0')}</span>
            <span className="text-white/20 text-lg">/</span>
            <span className="text-white/30 text-lg">{String(allImages.length).padStart(2, '0')}</span>
          </div>
        </div>

        {allImages.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-32 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300 group max-mobile:left-2 max-mobile:w-12">
              <BsChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-32 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300 group max-mobile:right-2 max-mobile:w-12">
              <BsChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        )}

        <div className="relative max-w-sm w-full px-4" onClick={(e) => e.stopPropagation()}>
          <img src={modalImage} alt="" className="relative w-full h-auto max-h-[85vh] object-contain rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]" />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 max-w-[90vw] overflow-x-auto scrollbar-hide p-2">
          {allImages.map((img, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); setModalImage(img); }}
              className={`flex-shrink-0 w-12 h-16 rounded-xl overflow-hidden transition-all duration-500 ${i === currentImageIndex ? 'ring-2 ring-white/80 scale-110' : 'opacity-30 hover:opacity-60 grayscale hover:grayscale-0'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <ImageModal />

      <div id='work' className='relative'>

        {/* ==================== APP SWITCHER ==================== */}
        {appsData.length > 1 && (
          <div className="width pt-10">
            <div className="flex items-center gap-2 max-mobile:flex-wrap max-mobile:justify-center">
              <span className="text-white/30 text-xs font-mono uppercase tracking-wider mr-4 max-mobile:w-full max-mobile:text-center max-mobile:mb-2">Apps</span>
              {appsData.map((app, index) => (
                <button
                  key={app.id}
                  onClick={() => switchApp(index)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${index === activeAppIndex
                      ? 'bg-[#00FD9A] text-[#09090b]'
                      : 'bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.06] border border-white/[0.05]'
                    }`}
                >
                  {app.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ==================== HERO SECTION ==================== */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className={`width relative z-10 pt-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="grid grid-cols-12 gap-6 items-center max-lg:grid-cols-1">

              {/* Left: Content */}
              <div className="col-span-5 max-lg:col-span-1 max-lg:text-center max-lg:order-2">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase">
                    {String(activeAppIndex + 1).padStart(2, '0')} / {String(appsData.length).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-px bg-gradient-to-r from-[#00FD9A] to-transparent" />
                </div>

                {/* Title - splits the app name into two parts */}
                <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extralight text-white leading-[0.95] tracking-tight mb-4">
                  {currentApp.title.split('').slice(0, Math.ceil(currentApp.title.length / 2)).join('')}
                  <span className="block font-medium text-[#00FD9A]">
                    {currentApp.title.split('').slice(Math.ceil(currentApp.title.length / 2)).join('')}
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-white/60 text-lg mb-6 font-light">{currentApp.tagline}</p>

                {/* Description */}
                <p className="text-white/40 text-base leading-relaxed mb-8 max-w-md max-lg:mx-auto">
                  {currentApp.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8 max-lg:justify-center">
                  {currentApp.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-2 text-xs font-mono text-white/40 bg-white/[0.03] rounded-full border border-white/[0.05]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4 max-lg:justify-center flex-wrap">
                  {currentApp.platforms.android && (
                    <a href={currentApp.platforms.android} target="_blank" rel="noopener noreferrer"
                      className="group px-6 py-3.5 bg-[#00FD9A] rounded-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 text-[#09090b] font-semibold text-sm">
                        <FaGooglePlay size={16} />
                        <span>Play Store</span>
                        <BsArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={12} />
                      </div>
                    </a>
                  )}
                  {currentApp.platforms.website && (
                    <a href={currentApp.platforms.website} target="_blank" rel="noopener noreferrer"
                      className="group px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-3 text-white/60 hover:text-white text-sm">
                      <FaGlobe size={14} />
                      <span className="font-medium">Website</span>
                    </a>
                  )}
                  {currentApp.platforms.github && (
                    <a href={currentApp.platforms.github} target="_blank" rel="noopener noreferrer"
                      className="group px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-3 text-white/60 hover:text-white text-sm">
                      <FaGithub size={14} />
                      <span className="font-medium">GitHub</span>
                    </a>
                  )}
                  {!currentApp.platforms.android && !currentApp.platforms.ios && !currentApp.platforms.website && !currentApp.platforms.github && (
                    <span className="px-6 py-3.5 rounded-xl border border-white/[0.05] text-white/30 text-sm font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Phone Display */}
              <div className="col-span-7 max-lg:col-span-1 max-lg:order-1 relative">
                <div className="relative h-[650px] max-lg:h-[500px] max-mobile:h-[420px] flex items-center justify-center">

                  <div className="relative w-full max-w-2xl mx-auto">

                    {/* Back left phone */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 opacity-30 blur-[1px] max-lg:hidden"
                      style={{
                        transform: `translate(${-32 + mousePosition.x * 0.5}px, ${-50 + mousePosition.y * 0.5}%) rotateY(15deg) rotateX(5deg)`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="w-[140px] h-[280px] rounded-[1.5rem] overflow-hidden border border-white/10">
                        <img src={currentApp.screenshots[(activeScreenshot + currentApp.screenshots.length - 1) % currentApp.screenshots.length]} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Back right phone */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 opacity-30 blur-[1px] max-lg:hidden"
                      style={{
                        transform: `translate(${32 + mousePosition.x * 0.5}px, ${-50 + mousePosition.y * 0.5}%) rotateY(-15deg) rotateX(5deg)`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="w-[140px] h-[280px] rounded-[1.5rem] overflow-hidden border border-white/10">
                        <img src={currentApp.screenshots[(activeScreenshot + 1) % currentApp.screenshots.length]} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Center main phone */}
                    <div
                      className="relative z-20 mx-auto"
                      style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                      }}
                    >
                      <div className="relative w-[260px] h-[540px] mx-auto max-mobile:w-[200px] max-mobile:h-[420px]">
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[3px] max-mobile:rounded-[2rem]">
                          <div className="w-full h-full rounded-[2.35rem] bg-[#0c0c0c] p-2 max-mobile:rounded-[1.85rem]">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-2 max-mobile:w-16 max-mobile:h-5">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
                            </div>

                            {/* Screen */}
                            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black max-mobile:rounded-[1.5rem] cursor-pointer relative group"
                              onClick={() => openModal(currentApp.screenshots[activeScreenshot], activeScreenshot, currentApp.screenshots)}>
                              <img
                                src={currentApp.screenshots[activeScreenshot]}
                                alt="App screenshot"
                                className="w-full h-full object-cover transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">View Gallery</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Side buttons */}
                        <div className="absolute -left-[2px] top-28 w-[3px] h-6 bg-zinc-700 rounded-l-full" />
                        <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-zinc-700 rounded-l-full" />
                        <div className="absolute -left-[2px] top-52 w-[3px] h-12 bg-zinc-700 rounded-l-full" />
                        <div className="absolute -right-[2px] top-36 w-[3px] h-16 bg-zinc-700 rounded-r-full" />
                      </div>
                    </div>
                  </div>

                  {/* Screenshot dots */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {currentApp.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScreenshot(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${i === activeScreenshot ? 'w-6 bg-[#00FD9A]' : 'w-1 bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
              <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
              <BsArrowDown className="animate-bounce" size={14} />
            </div>
          </div>
        </section>

        {/* ==================== FEATURES SECTION ==================== */}
        <section className="py-24 relative overflow-hidden">
          <div className={`width relative transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase">Features</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white mt-4 mb-4">
                What <span className="font-medium">{currentApp.title}</span> offers
              </h2>
              <p className="text-white/40 max-w-md mx-auto text-sm">Key capabilities that make this app stand out</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-mobile:grid-cols-1">
              {currentApp.features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#00FD9A]/10 text-[#00FD9A] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={18} />
                  </div>
                  <h3 className="text-white font-medium text-base mb-1.5">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== GALLERY SECTION ==================== */}
        <section className="py-24 overflow-hidden">
          <div className={`width mb-10 transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <span className="text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase">Gallery</span>
                <h2 className="text-3xl md:text-4xl font-extralight text-white mt-3">
                  {currentApp.title} <span className="font-medium">Screenshots</span>
                </h2>
              </div>
              <p className="text-white/40 text-xs">Click to view fullscreen</p>
            </div>
          </div>

          <div className={`relative transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-5 overflow-x-auto scrollbar-hide px-[5vw] py-6">
              {currentApp.screenshots.map((screenshot, i) => (
                <div
                  key={i}
                  onClick={() => openModal(screenshot, i, currentApp.screenshots)}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative w-[160px] h-[340px] max-mobile:w-[130px] max-mobile:h-[280px] rounded-[1.5rem] overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <img src={screenshot} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/50 group-hover:text-white/80 transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== WEB PROJECTS ==================== */}
        <section className="py-24 relative">
          <div className="width">
            <div className="mb-16">
              <span className="text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase">Web Development</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white mt-4">
                Web <span className="font-medium">Projects</span>
              </h2>
            </div>

            <div className="space-y-24">
              {projectsData.map((project, index) => (
                <div key={project.id} className="group">
                  <div className="grid grid-cols-12 gap-8 items-center max-lg:grid-cols-1">

                    <div className={`col-span-7 max-lg:col-span-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div
                        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group/img"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.05]">
                          <img
                            src={project.desktopImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />

                          <div className="absolute bottom-5 right-5 w-[90px] h-[180px] rounded-xl overflow-hidden border-2 border-white/10 shadow-xl transition-transform duration-500 group-hover/img:scale-105 group-hover/img:-translate-y-2 max-md:hidden">
                            <img src={project.mobileImage} alt="" className="w-full h-full object-cover" />
                          </div>

                          <div className="absolute top-5 left-5 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full font-mono text-[10px] text-white/50">
                            {project.year}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`col-span-5 max-lg:col-span-1 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                      <span className="text-[100px] font-extralight text-white/[0.03] leading-none block -mb-14 max-md:text-7xl max-md:-mb-10">
                        {project.id}
                      </span>

                      <span className="text-[#00FD9A] font-mono text-xs tracking-[0.2em] uppercase">
                        {project.subtitle}
                      </span>

                      <h3 className="text-3xl md:text-4xl font-medium text-white mt-2 mb-4">
                        {project.title}
                      </h3>

                      <p className="text-white/40 leading-relaxed mb-6 text-sm max-lg:max-w-lg">
                        {project.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs font-mono text-white/40 bg-white/[0.03] rounded-full border border-white/[0.05]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className={`flex gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-[#00FD9A]/30 bg-white/[0.02] hover:bg-[#00FD9A]/5 transition-all duration-300 text-white/60 hover:text-[#00FD9A] text-sm"
                        >
                          <span className="font-medium">Visit Site</span>
                          <BsArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" size={12} />
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] text-white/40 hover:text-white transition-all duration-300"
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-24">
          <div className="width">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.05]">
              <div className="relative py-20 px-8 text-center">
                <span className="text-[#00FD9A] font-mono text-xs tracking-[0.3em] uppercase">Get in Touch</span>

                <h2 className="text-4xl md:text-5xl font-extralight text-white mt-5 mb-5">
                  Let's Build Something
                  <span className="block font-medium text-[#00FD9A]">Extraordinary</span>
                </h2>

                <p className="text-white/40 mb-10 max-w-md mx-auto text-sm">
                  Have a project in mind? I'm always excited to discuss new opportunities and bring ideas to life.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#00FD9A] text-[#09090b] font-semibold transition-all duration-300 hover:scale-105 text-sm"
                >
                  <span>Start a Conversation</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </>
  )
}

export default Projects