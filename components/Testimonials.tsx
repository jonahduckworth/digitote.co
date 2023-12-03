"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BookDemoModal from "./BookDemoModal";
import Pricing from "./Pricing";

const testimonials = [
  {
    id: 1,
    content:
      "I can't imagine working without it, to be honest, it makes me very anxious to even think about it!!! It's the best!",
    author: "Maya Vorderstrasse",
    handle: "@mayavorderstrasse",
  },
  {
    id: 2,
    content:
      "This has been a complete game changer in my day to day task management and overall productivity. Loving it!",
    author: "Tara Gaucher",
    handle: "Talent Manager",
  },
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const pinkBoxVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const testimonialVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const responsiveContainerClass = "mx-2 md:mx-6 lg:mx-auto";

  return (
    <div className={`container ml-8 lg:w-3/5 ${responsiveContainerClass}`}>
      <motion.div
        className="flex flex-col lg:flex-row items-center bg-primary-pink rounded-lg px-4 lg:px-8 pt-8"
        variants={pinkBoxVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <motion.div
          className="flex flex-col bg-white p-4 rounded-md mx-4"
          variants={testimonialVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-black"
            >
              <p className="text-lg mb-4 font-avenir-heavy">
                {testimonials[current].content}
              </p>
              <p className="text-md font-semibold text-primary-blue">
                {testimonials[current].author}
              </p>
              <p className="text-sm font-sans">
                {testimonials[current].handle}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-end mt-4">
            <button
              onClick={openModal}
              type="button"
              className="bg-primary-cyan hover:bg-primary-cyan-75 text-white px-4 py-2 rounded-full text-sm font-medium font-avenir-heavy"
            >
              Book a Demo!
            </button>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto"
          variants={testimonialVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
        >
          <Pricing />
        </motion.div>
      </motion.div>
      {isModalOpen && <BookDemoModal onClose={closeModal} />}
    </div>
  );
};

export default Testimonials;
