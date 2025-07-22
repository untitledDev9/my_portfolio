import { useEffect, useState } from 'react';

const Experience = () => {





  const [commit, setCommit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommit(prev => {
        if (prev >= 500) {
          clearInterval(interval); 
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval); 
  }, []);








  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    tech: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const next = { ...prev };

        if (next.experience < 1) next.experience += 1;
        if (next.projects < 12) next.projects += 1;
        if (next.tech < 6) next.tech += 1;

        if (
          next.experience >= 1 &&
          next.projects >= 12 &&
          next.tech >= 6
          
        ) {
          clearInterval(interval);
        }

        return next;
      });
    }, 1500); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='width flex items-center justify-center gap-10 text-white mt-9
    max-mobile:grid max-mobile:gap-5 max-mobile:place-items-center max-mobile:text-center
    '>
      <div className='gap-2 flex items-center w-[170px] max-mobile:flex-col max-mobile:gap-1'>
        <p className='font-bold text-[56px] max-mobile:text-[50px]'>{String(counts.experience).padStart(2, '0')}</p>
        <p className='w-[60%] text-[#BDBDC1]'>Year(s) of experience</p>
      </div>
      <div className='gap-2 flex items-center w-[170px] max-mobile:flex-col max-mobile:gap-1'>
        <p className='font-bold text-[56px] max-mobile:text-[50px]'>{String(counts.projects).padStart(2, '0')}</p>
        <p className='w-[60%] text-[#BDBDC1]'>Projects completed</p>
      </div>
      <div className='gap-2 flex items-center w-[170px] max-mobile:flex-col max-mobile:gap-1'>
        <p className='font-bold text-[56px] max-mobile:text-[50px]'>{String(counts.tech).padStart(2, '0')}</p>
        <p className='w-[60%] text-[#BDBDC1]'>Technologies mastered</p>
      </div>
      <div className='gap-2 flex items-center w-[170px] max-mobile:flex-col max-mobile:gap-1'>
        <p className='font-bold text-[56px] max-mobile:text-[50px]'>{commit}</p>
        <p className='w-[60%] text-[#BDBDC1]'>Code commits</p>
      </div>
    </div>
  );
};

export default Experience;
