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
        <h1 className="text-3xl md:text-5xl font-black mb-2 text-white px-4 text-center">
          In a World Where You Can Be Anything Be
        </h1>
      </div>
      <div
        className="flex-1 flex-col bg-primary-pink flex items-center justify-center px-4 md:px-52 text-center"
        style={{ transform: `translateY(-${offset * 0.3}px)` }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">
          Where Talent Management Meets Technology
        </h3>
        <p className="text-lg md:text-xl text-white mb-4 md:mb-8">
          Welcome to your Digital Tote-bag! A catch all for campaign data,
          communication, calendars, payments, and so much more. Born from
          real-life challenges as a talent manager and a relentless pursuit of
          transparency, Digitote is your ultimate partner in streamlining brand
          collaborations. We intimately understand the nuances of this job, so
          we created a platform that supports and systematizes life between
          talent and manager. We go as far as to say, it’s life changing.
        </p>
        <p className="text-lg md:text-xl text-white">
          Next time your talent is looking for campaign details, tell them,
          “it’s in your tote!”
        </p>
      </div>
    </header>
  );
};

export default Hero;
