import { useEffect, useState } from 'react';

const Experience = () => {
  const stats = [
    { key: 'experience', label: 'Year(s) of experience', target: 2, suffix: '' },
    { key: 'projects', label: 'Projects completed', target: 12, suffix: '' },
    { key: 'tech', label: 'Technologies mastered', target: 6, suffix: '' },
    { key: 'commits', label: 'Code commits', target: 1000, suffix: '+' }
  ];

  const [counts, setCounts] = useState(
    stats.reduce((acc, stat) => ({ ...acc, [stat.key]: 0 }), {})
  );

  useEffect(() => {
    const intervals = stats.map(stat => {
      const increment = stat.target > 100 ? 5 : 1;
      const speed = stat.target > 100 ? 30 : 150;

      return setInterval(() => {
        setCounts(prev => {
          if (prev[stat.key] >= stat.target) {
            return prev;
          }
          const nextValue = Math.min(prev[stat.key] + increment, stat.target);
          return { ...prev, [stat.key]: nextValue };
        });
      }, speed);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const formatNumber = (num, padLength = 2) => {
    return String(num).padStart(padLength, '0');
  };

  return (
    <div className='width flex items-center justify-center gap-10 text-white mt-14
      max-tablet:grid max-tablet:grid-cols-2 max-tablet:place-items-center max-tablet:text-center 
      max-tablet:w-[70%] max-tablet:gap-9 max-tablet:mx-auto max-mobile:w-[90%] max-mobile:gap-6
    '>
      {stats.map((stat, index) => (
        <div 
          key={stat.key}
          className='group gap-2 flex items-center w-[170px] transition-all duration-300 
            hover:scale-105 max-tablet:flex-col max-tablet:gap-1 max-tablet:w-[100%]
          '
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animation: 'fadeInUp 0.6s ease-out forwards',
            opacity: 0
          }}
        >
          <p className='font-bold text-[56px] max-tablet:text-[40px] text-[#00FD9A] 
            transition-all duration-300 group-hover:text-white
          '>
            {stat.key === 'commits' 
              ? counts[stat.key]
              : formatNumber(counts[stat.key])}
            {stat.suffix && <span className='text-[40px] max-tablet:text-[30px]'>{stat.suffix}</span>}
          </p>
          <p className='w-[60%] text-[#BDBDC1] leading-tight max-tablet:w-full max-tablet:text-[12px]
            transition-colors duration-300 group-hover:text-white
          '>
            {stat.label}
          </p>
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;