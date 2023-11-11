// Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="w-full h-screen flex flex-col opacity-0 animate-fadeIn">
      <div className="flex-1 flex-col bg-primary-blue flex items-center justify-end">
        <h1 className="text-5xl font-black mb-4 text-white">
          In a World Where You Can Be Anything Be
        </h1>
      </div>
      <div className="flex-1 bg-primary-pink flex items-center justify-center">
        <div className="container mx-auto text-center px-6 md:px-12"></div>
      </div>
    </header>
  );
};

export default Hero;
