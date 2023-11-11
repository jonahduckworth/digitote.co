// Hero.tsx

"use client";

import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-screen flex flex-col">
      <div
        className="flex-1 bg-primary-blue flex items-center justify-center"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <h1 className="text-5xl font-black mb-2 text-white">
          In a World Where You Can Be Anything Be
        </h1>
      </div>
      <div
        className="flex-1 bg-primary-pink flex items-center justify-center"
        style={{ transform: `translateY(-${offset * 0.3}px)` }}
      >
        <p className="text-lg text-white">
          2-3 sentences that explains what Digitote is.
        </p>
      </div>
    </header>
  );
};

export default Hero;
