
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AppIntegration: React.FC = () => {
  return (
    <section id="app" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
              Control at your fingertips.
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Our intuitive app gives you full control over every light, scene, and schedule.
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection className="[animation-delay:200ms]">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[472px] max-w-[232px] md:h-[600px] md:max-w-[300px] shadow-2xl shadow-purple-500/10">
              <div className="rounded-xl overflow-hidden h-full bg-black">
                  <img src="https://i.imgur.com/8aV3Z2w.png" className="object-cover h-full w-full" alt="Moodlit App Interface with color wheel" />
              </div>
          </div>
          <div className="relative -mt-2 mx-auto bg-gray-900 rounded-b-xl h-[24px] max-w-[248px] md:h-[42px] md:max-w-[320px]"></div>
          <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[35px] max-w-[200px] md:h-[55px] md:max-w-[264px]"></div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppIntegration;
