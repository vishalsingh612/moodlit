
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Moodlit Inc. All rights reserved.</p>
        <p className="text-sm mt-2">A conceptual design for a futuristic smart lighting product.</p>
      </div>
    </footer>
  );
};

export default Footer;
