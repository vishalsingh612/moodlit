import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import baseImage from './images/room.jpeg'; // replace with your local image

type Mood = 'party' | 'relax' | 'focus' | 'creative';

const moodFilters: Record<Mood, string> = {
  party: 'brightness(1.2) contrast(1.3) saturate(1.6) hue-rotate(330deg)',
  relax: 'brightness(1.05) contrast(0.95) saturate(1.2) hue-rotate(25deg)',
  focus: 'brightness(0.95) contrast(1.1) saturate(0.9) hue-rotate(200deg)',
  creative: 'brightness(1.1) contrast(1.25) saturate(1.4) hue-rotate(270deg)',
};

const moodStyles = {
  party: 'bg-pink-500 hover:bg-pink-600 shadow-[0_0_20px_rgba(219,39,119,0.7)]',
  relax: 'bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.7)]',
  focus: 'bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.7)]',
  creative: 'bg-purple-500 hover:bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.7)]',
};

const InteractiveDemo: React.FC = () => {
  const [activeMood, setActiveMood] = useState<Mood>('focus');

  return (
    <section id="demo" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Control at your fingertips.
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Change the mood and watch the atmosphere transform instantly.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="[animation-delay:200ms]">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <img
              src={baseImage}
              alt="Mood demo"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={{
                filter: moodFilters[activeMood],
              }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="[animation-delay:400ms]">
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {(Object.keys(moodFilters) as Mood[]).map((mood) => (
              <button
                key={mood}
                onClick={() => setActiveMood(mood)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize text-white transition-all duration-300 transform hover:scale-105
                  ${moodStyles[mood]}
                  ${activeMood === mood ? 'ring-2 ring-offset-2 ring-offset-black ring-white/60' : ''}
                `}
              >
                {mood}
              </button>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default InteractiveDemo;
