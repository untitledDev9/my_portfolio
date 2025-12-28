import React, { useRef, useState } from 'react'
import Movie from '../assets/movie-api-desktop.png'
import Movie2 from '../assets/movie-api-mobile.png'
import virtual from '../assets/virtual-desktop.png'
import virtual2 from '../assets/virtual-mobile.png'
import country from '../assets/country-desktop.png'
import country2 from '../assets/country-mobile.png'
import { BsArrowUpRight, BsApple, BsGooglePlay, BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import { FaGithub, FaGlobe } from "react-icons/fa";
import piggy from '../assets/piggy-desktop.png'
import piggy2 from '../assets/piggy-mobile.png'
import speak from '../assets/speaktribe-desktop.png'
import speaktribe from '../assets/speaktribe-mobile.png'
// GadgetVault app screenshots
import add from '../assets/mobile/add.jpg'
import home from '../assets/mobile/home.jpg'
import profile from '../assets/mobile/profile.jpg'
import group from '../assets/mobile/groupp.jpg'
import report from '../assets/mobile/report.jpg'
import help from '../assets/mobile/help.jpg'
import snap from '../assets/mobile/snap.jpg'
import vault from '../assets/mobile/vault.jpg'

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

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

  // Image Modal Component
  const ImageModal = () => {
    if (!modalImage) return null;

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        onClick={closeModal}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-white hover:text-cyan-400 bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <BsX size={32} />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
          {currentImageIndex + 1} / {allImages.length}
        </div>

        {/* Previous Button */}
        {allImages.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-cyan-400 bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all duration-300 hover:scale-110 max-mobile:left-2 max-mobile:p-3"
            aria-label="Previous image"
          >
            <BsChevronLeft size={28} className="max-mobile:w-5 max-mobile:h-5" />
          </button>
        )}

        {/* Image Container */}
        <div 
          className="relative max-w-lg w-full max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={modalImage}
            alt="Full screen preview"
            className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>

        {/* Next Button */}
        {allImages.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-cyan-400 bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all duration-300 hover:scale-110 max-mobile:right-2 max-mobile:p-3"
            aria-label="Next image"
          >
            <BsChevronRight size={28} className="max-mobile:w-5 max-mobile:h-5" />
          </button>
        )}

        {/* Keyboard hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs max-mobile:hidden">
          Use arrow keys or swipe to navigate • Press ESC to close
        </div>
      </div>
    );
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!modalImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalImage, currentImageIndex, allImages]);

  const appsData = [
    {
      id: "01",
      title: "GadgetVault",
      tagline: "Your Digital Safe",
      description: "GadgetVault is a comprehensive device protection and verification platform designed to keep users safe in a world of rising gadget theft and fraud. It allows individuals and vendors to securely register their devices, verify electronics before purchase, and trade on a trusted marketplace where every user and device is properly verified. GadgetVault helps prevent stolen devices from circulating while protecting buyers and sellers from scams.",
      technologies: ["React Native", "Next.js", "Supabase", "Socket.IO"],
      features: [
        "Device Protection & IMEI Verification",
        "Secure Marketplace with Verified Users",
        "Real-time Chat & Notifications",
        "Location-based Market Groups"
      ],
      platforms: {
        ios: null,
        android: 'https://play.google.com/store/apps/details?id=com.gadgetvault&pcampaignid=web_share',
        github: null,
        website: 'https://gadgetvaultng.vercel.app'
      },
      screenshots: [home, vault, profile, group, add, snap, report, help],
      accentColor: "#00D4FF", // Cyan/Blue
      secondaryColor: "#8B5CF6", // Purple
      bgGradient: "from-cyan-500/10 via-blue-500/5 to-purple-500/10"
    }
  ];

  const projectsData = [
    {
      id: "01",
      title: "Local Language Web-App",
      description: "A Full-Stack Local Learning Language Web-App (SpeakTribe), to learn local languages e.g yoruba, hausa, igbo.",
      technologies: ["React.js", "Tailwind.css", "Node.js(Express)"],
      liveUrl: "https://speaktribe-frontend.vercel.app",
      githubUrl: "https://github.com/untitledDev9/speaktribe-frontend.git",
      desktopImage: speak,
      mobileImage: speaktribe,
      bgColor: "bg-[#266361]",
      mobilePosition: "-left-20"
    },
    {
      id: "02",
      title: "Netflix Clone",
      description: "A Netflix clone, with ability to search and navigate through all movies",
      technologies: ["React.js", "Tailwind.css", "Owl-carousel"],
      liveUrl: "https://movie-api-delta-dun.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/movie-api",
      desktopImage: Movie,
      mobileImage: Movie2,
      bgColor: "bg-[#1a1a2e]",
      mobilePosition: "left-6"
    },
    {
      id: "03",
      title: "Landing Page",
      description: "Built a simple Landing page that improved my knowledge on CSS grid",
      technologies: ["React.js", "Tailwind.css"],
      liveUrl: "https://virtual-r-vert.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/VirtualR",
      desktopImage: virtual,
      mobileImage: virtual2,
      bgColor: "bg-[#2d3561]",
      mobilePosition: "left-6"
    },
    {
      id: "04",
      title: "PiggyVest",
      description: "Cloned a Real life website, to build more knowledge on how Pro Devs create websites",
      technologies: ["React.js", "Tailwind.css", "React State"],
      liveUrl: "https://piggy-vest-full-function.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/piggyVest-full-function",
      desktopImage: piggy,
      mobileImage: piggy2,
      bgColor: "bg-[#0c4a6e]",
      mobilePosition: "left-6"
    },
    {
      id: "05",
      title: "Countries API",
      description: "Worked with APIs, and had better understanding on Array methods",
      technologies: ["React.js", "Tailwind.css", "APIs"],
      liveUrl: "https://country-api-gray.vercel.app/",
      githubUrl: "https://github.com/untitledDev9/Country-Api",
      desktopImage: country,
      mobileImage: country2,
      bgColor: "bg-[#1e3a5f]",
      mobilePosition: "left-6"
    }
  ];

  const ScreenshotCarousel = ({ screenshots, title }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = direction === 'left' ? -280 : 280;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    return (
      <div className="relative group/carousel">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:scale-110 max-mobile:opacity-100 max-mobile:bg-black/60"
          aria-label="Scroll left"
        >
          <BsChevronLeft size={20} />
        </button>

        {/* Screenshots Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth max-mobile:gap-2 pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshots.map((screenshot, i) => (
            <div
              key={i}
              onClick={() => openModal(screenshot, i, screenshots)}
              className="flex-shrink-0 w-[130px] aspect-[9/16] rounded-lg overflow-hidden border-2 border-white/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-cyan-400/20 max-mobile:w-[110px] group/img relative"
            >
              <img
                src={screenshot}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:scale-110 max-mobile:opacity-100 max-mobile:bg-black/60"
          aria-label="Scroll right"
        >
          <BsChevronRight size={20} />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#BDBDC1] text-xs opacity-50 max-mobile:hidden">
          Scroll for more • Click to view →
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#BDBDC1] text-xs opacity-50 hidden max-mobile:block">
          Tap to view
        </div>
      </div>
    );
  };

  const renderTechnologies = (technologies) => {
    return technologies.map((tech, index) => {
      const parts = tech.split(/(\.|-)|\(|\)/);
      return (
        <p key={index}>
          {parts.map((part, i) => {
            if (part === '.' || part === '-' || part === '(' || part === ')') {
              return <span key={i} className='text-white'>{part}</span>;
            }
            return part;
          })}
          {index < technologies.length - 1 && ','}
        </p>
      );
    });
  };

  return (
    <>
      {/* Image Modal */}
      <ImageModal />

      <div id='work' className='flex-col flex gap-32 mb-10 max-tablet:gap-20 max-mobile:px-4'>
      {/* ============ MOBILE APPS SECTION ============ */}
      <div className="mb-16">
        <div className="text-center mb-16 max-mobile:mb-10">
          <div className="inline-block">
            <h2 className="text-6xl font-bold text-white mb-3 max-mobile:text-4xl relative">
              Mobile Apps
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-[#BDBDC1] mt-4 text-sm">Native mobile experiences</p>
        </div>

        <div className="flex flex-col gap-24 max-tablet:gap-16">
          {appsData.map((app, index) => (
            <div key={app.id} className="group/app">
              {/* App Showcase Card - Enhanced Design */}
              <div className={`bg-gradient-to-br ${app.bgGradient} rounded-3xl p-10 max-mobile:p-6 border-2 border-white/5 hover:border-cyan-400/30 transition-all duration-500 shadow-2xl hover:shadow-cyan-400/10 mb-10`}>
                {/* Header Section */}
                <div className="flex items-start justify-between gap-6 mb-8 max-tablet:flex-col">
                  <div className="flex-1">
                    {/* Title Row */}
                    <div className="flex items-center gap-5 mb-4 max-mobile:gap-3">
                      <div className="relative">
                        <h2 className="font-bold text-8xl text-transparent stroke-text max-mobile:text-6xl group-hover/app:text-cyan-400 transition-colors duration-300">
                          {app.id}
                        </h2>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-[40px] max-mobile:text-[30px] leading-tight">
                          {app.title}
                        </h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-[18px] max-mobile:text-[15px] italic font-medium">
                          {app.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="leading-8 text-[17px] text-[#BDBDC1] max-mobile:text-[15px] max-mobile:leading-7 mb-6 max-w-3xl">
                      {app.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex gap-3 text-[#00FD9A] max-mobile:text-[13px] flex-wrap mb-2">
                      {app.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platform Links - Enhanced */}
                  <div className="flex gap-4 max-tablet:w-full max-tablet:justify-center max-tablet:flex-wrap">
                    {app.platforms.ios && (
                      <a href={app.platforms.ios} target="_blank" rel="noopener noreferrer">
                        <div className="text-white hover:text-cyan-400 hover:bg-cyan-400/10 bg-[#1a1a1a] rounded-2xl p-4 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30 shadow-lg">
                          <BsApple size={26} />
                        </div>
                      </a>
                    )}
                    {app.platforms.android && (
                      <a href={app.platforms.android} target="_blank" rel="noopener noreferrer">
                        <div className="text-white hover:text-cyan-400 hover:bg-cyan-400/10 bg-[#1a1a1a] rounded-2xl p-4 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30 shadow-lg">
                          <BsGooglePlay size={26} />
                        </div>
                      </a>
                    )}
                    {app.platforms.github && (
                      <a href={app.platforms.github} target="_blank" rel="noopener noreferrer">
                        <div className="text-white hover:text-cyan-400 hover:bg-cyan-400/10 bg-[#1a1a1a] rounded-2xl p-4 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30 shadow-lg">
                          <FaGithub size={26} />
                        </div>
                      </a>
                    )}
                    {app.platforms.website && (
                      <a href={app.platforms.website} target="_blank" rel="noopener noreferrer">
                        <div className="text-white hover:text-cyan-400 hover:bg-cyan-400/10 bg-[#1a1a1a] rounded-2xl p-4 transition-all duration-300 hover:scale-110 border border-white/10 hover:border-cyan-400/30 shadow-lg">
                          <FaGlobe size={26} />
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="w-full h-[2px] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full mb-8"></div>

                {/* Features & Screenshots Grid - Improved Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 max-tablet:gap-6">
                  {/* Features List - 2 columns */}
                  <div className="xl:col-span-2 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-cyan-400/20 transition-all duration-300">
                    <h4 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl">✦</span> 
                      <span>Key Features</span>
                    </h4>
                    <ul className="space-y-4">
                      {app.features.map((feature, i) => (
                        <li key={i} className="text-[#BDBDC1] text-[16px] flex items-start gap-4 group/feature hover:text-white transition-colors duration-300">
                          <span className="text-cyan-400 mt-1 text-lg group-hover/feature:scale-125 transition-transform duration-300">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshots Preview - 3 columns - Netflix Style Carousel */}
                  <div className="xl:col-span-3 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-cyan-400/20 transition-all duration-300">
                    <h4 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-3xl">✦</span> 
                      <span>App Preview</span>
                    </h4>
                    <ScreenshotCarousel screenshots={app.screenshots} title={app.title} />
                  </div>
                </div>
              </div>

              {/* Elegant Separator */}
              <div className="relative py-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-black px-6 py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-sm font-medium rounded-full border border-cyan-400/20">
                    ◆
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ WEB PROJECTS SECTION ============ */}
      <div>
        <div className="text-center mb-16 max-mobile:mb-10">
          <div className="inline-block">
            <h2 className="text-6xl font-bold text-white mb-3 max-mobile:text-4xl relative">
              Web Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00FD9A] via-cyan-400 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-[#BDBDC1] mt-4 text-sm">Full-stack web applications</p>
        </div>

        <div className="flex flex-col gap-24 max-tablet:gap-20">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="cursor-pointer width flex gap-8 max-tablet:flex-col group"
            >
              {/* Left Section - Project Info */}
              <div className="w-[45%] flex flex-col gap-5 max-tablet:w-full max-mobile:gap-3">
                <h2 className="font-bold text-7xl text-transparent stroke-text max-mobile:text-6xl group-hover:text-[#00FD9A] transition-colors duration-300">
                  {project.id}
                </h2>
                <p className="font-bold text-white text-[32px] max-mobile:text-[26px] leading-tight">
                  {project.title}
                </p>
                <p className="leading-7 text-[16px] text-[#BDBDC1] max-mobile:text-[13px] max-mobile:leading-6">
                  {project.description}
                </p>
                <div className="flex gap-3 text-[#08c17a] max-mobile:text-[13px] flex-wrap">
                  {renderTechnologies(project.technologies)}
                </div>
                <div className="w-[95%] h-[1px] bg-gradient-to-r from-[#00FD9A] to-transparent"></div>
                <div className="flex gap-5 max-tablet:mx-auto max-tablet:my-3 max-mobile:my-0">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <div className="text-white hover:text-[#00FD9A] hover:bg-[#00FD9A]/10 bg-[#33333355] rounded-full p-3 transition-all duration-300 hover:scale-110">
                      <BsArrowUpRight size={23} />
                    </div>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <div className="text-white hover:text-[#00FD9A] hover:bg-[#00FD9A]/10 bg-[#33333355] rounded-full p-3 transition-all duration-300 hover:scale-110">
                      <FaGithub size={23} />
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Section - Project Images */}
              <div
                className={`flex items-center justify-end ${project.bgColor} relative w-[55%] h-[400px] pt-6 rounded-2xl overflow-hidden
                  hover:pt-0 transition-all duration-500 ease-in-out shadow-2xl
                  max-tablet:w-full max-tablet:h-[350px] max-tablet:justify-center max-tablet:bg-[#3330] max-tablet:transition-none max-tablet:pt-0 max-mobile:h-[280px]
                  group-hover:shadow-[0_0_30px_rgba(0,253,154,0.3)]`}
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                {/* Desktop Image */}
                <div className="w-[420px] h-[360px] object-cover transition-all duration-500 ease-in-out 
                  group-hover:w-[450px] group-hover:h-[385px]
                  max-tablet:w-full max-tablet:h-full max-tablet:group-hover:w-full max-tablet:group-hover:h-full max-tablet:transition-none 
                  max-mobile:w-[340px] max-mobile:h-[260px] max-mobile:group-hover:w-[340px] max-mobile:group-hover:h-[260px]">
                  <img 
                    src={project.desktopImage} 
                    alt={`${project.title} desktop view`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Mobile Image Overlay */}
                <div className={`w-[180px] h-[320px] absolute top-12 ${project.mobilePosition} 
                  shadow-2xl transition-all duration-500 ease-in-out
                  group-hover:scale-110 group-hover:top-10
                  max-tablet:hidden`}>
                  <img 
                    src={project.mobileImage} 
                    alt={`${project.title} mobile view`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar globally for carousel */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>
    </>
  )
}

export default Projects