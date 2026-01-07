
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Moods from './components/Moods';
import HowItWorks from './components/HowItWorks';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black scroll-smooth">
      <Header />
      <main>
        <Hero />
        <InteractiveDemo />
        <Moods />
        <HowItWorks />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
