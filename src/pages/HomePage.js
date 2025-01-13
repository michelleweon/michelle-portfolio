import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Michelle Weon";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        {typedText}<span className="animate-blink">|</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Computer Science & Economics Student at Harvard University
      </p>
      <p className="text-lg text-gray-600 max-w-2xl">
        Passionate about technology and its potential to create positive change
      </p>
    </div>
  );
};

export default HomePage;
