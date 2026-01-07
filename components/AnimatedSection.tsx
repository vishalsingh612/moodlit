
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
