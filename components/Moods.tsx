
import React from 'react';
import AnimatedSection from './AnimatedSection';
import party from "./images/party.jpeg";
import relax from "./images/relax.jpeg";
import creative from "./images/creative.jpeg";
const moods = [
  {
    image: party,
    title: 'Party',
    description: 'Crank up the energy with dynamic, colorful scenes that sync to your music.',
    glowColor: 'hover:border-pink-500/50',
  },
  {
    image: relax,
    title: 'Relax',
    description: 'Unwind with warm, gentle light that mimics a calming sunset.',
     glowColor: 'hover:border-orange-500/50',
  },
  {
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Focus',
    description: 'Stay sharp and concentrated with cool, bright white light.',
     glowColor: 'hover:border-blue-500/50',
  },
  {
    image: creative,
    title: 'Creative',
    description: 'Inspire your next big idea with a swirl of vibrant, motivating colors.',
     glowColor: 'hover:border-purple-500/50',
  },
];

interface MoodCardProps {
  image: string;
  title: string;
  description: string;
  glowColor: string;
}

const MoodCard: React.FC<MoodCardProps> = ({ image, title, description, glowColor }) => (
  <div className={`bg-gray-900/50 border border-gray-800 rounded-2xl p-6 transition-all duration-300 group ${glowColor} hover:bg-gray-900 transform hover:-translate-y-2`}>
    <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-gray-700">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} alt={title} loading="lazy" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Moods: React.FC = () => {
  return (
    <section id="moods" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
              Find Your Mood
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Whatever your vibe, there’s a light for that. Explore scenes designed for every moment.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {moods.map((mood, index) => (
             <AnimatedSection key={mood.title} className={`[animation-delay:${index * 150}ms]`}>
              <MoodCard {...mood} />
             </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moods;
