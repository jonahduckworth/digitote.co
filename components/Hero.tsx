// Hero.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordList = ["Transparency", "Organization", "Technology", "Efficiency"];

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % wordList.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const wordVariants = {
    initial: { y: -20, opacity: 0.1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.5 } },
  };

  // Calculate the width needed for the largest word
  const maxWidth = Math.max(...wordList.map((word) => word.length)) * 15; // 15 is an approximate width per character

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
        <h1 className="text-3xl md:text-5xl font-black text-white px-4 text-center">
          <div className="flex flex-wrap justify-center items-baseline">
            <p className="mr-2">
              Where <span className="text-primary-cyan">Talent Management</span>{" "}
              Meets{" "}
            </p>
            <div style={{ width: maxWidth, height: "1em" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordList[currentWord]}
                  className="text-primary-pink-75 block"
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {wordList[currentWord]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </h1>
      </div>
      <div
        className="flex-1 flex-col bg-primary-pink flex items-center justify-center px-4 md:px-44 text-start"
        style={{ transform: `translateY(-${offset * 0.3}px)` }}
      >
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
          <span className="text-primary-cyan"> it’s in your tote!</span>
        </p>
      </div>
    </header>
  );
};

export default Hero;
