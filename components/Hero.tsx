
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);
  
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div ref={blobRef} className="absolute w-[80vmax] h-[80vmax] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl animate-gradient-bg"></div>
      <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-xl"></div>
      <div className="relative z-20 px-6">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-4 animate-fade-in-up bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient-text" style={{ animationDelay: '0.2s' }}>
          Light up your vibe!
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Instantly change the mood of your room. <br/>
          Fun, simple, and beautifully vibrant lighting at your fingertips.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
           <a href="#demo" onClick={handleNavClick}>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]">
              Find Your Mood
            </button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;