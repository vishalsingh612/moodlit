
import React from 'react';
import AnimatedSection from './AnimatedSection';
import space from "./images/space.jpeg"
const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-900/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <AnimatedSection className="[animation-delay:200ms] md:order-last">
             <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 via-pink-600 to-purple-600 rounded-full blur-[100px] opacity-50"></div>
                <img 
                  src={space}
                  alt="The Moodlit Smart LED Strip Light"
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                />
            </div>
          </AnimatedSection>
          <AnimatedSection className="md:order-first">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
                Transform Your Space.
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Getting started with Moodlit is incredibly simple. No tools, no fuss.
              </p>
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <span className="text-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-white">Peel & Stick</h3>
                    <p className="text-gray-400">Our flexible strips have an adhesive back for easy setup anywhere.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <span className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-white">Connect the app</h3>
                    <p className="text-gray-400">Our app finds your light instantly via Bluetooth.</p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <span className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-white">Pick your mood</h3>
                    <p className="text-gray-400">Tap a preset or create your own custom color scene.</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
