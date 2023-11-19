"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BookDemoModal from "./BookDemoModal";

const testimonials = [
  {
    id: 1,
    content:
      "I can’t imagine working without it, to be honest, it makes me very anxious to even think about it!!! It’s the best!",
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
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const pinkBoxVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const imageVariants = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const textVariants = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1 } },
  };
  const testimonialVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="container mx-auto lg:w-2/3">
      <motion.div
        className="flex flex-col lg:flex-row items-center bg-primary-pink rounded"
        variants={pinkBoxVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false }}
      >
        <motion.div
          className="flex-none w-80 h-120 p-4 mb-4 lg:mb-0"
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false }}
        >
          <img
            src={"headshot.png"}
            alt={`headshot of digitote`}
            className="object-cover rounded-md"
          />
          <motion.p
            className="text-md font-semibold"
            variants={textVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
          >
            Kristyn Snell
          </motion.p>
          <motion.p
            className="text-sm"
            variants={textVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
          >
            Founder, CEO
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col flex-grow mx-12 bg-white p-4 mb-4 rounded-md"
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
              className="text-black flex-grow"
            >
              <p className="text-lg mb-4">{testimonials[current].content}</p>
              <p className="text-md font-semibold text-primary-blue">
                {testimonials[current].author}
              </p>
              <p className="text-sm">{testimonials[current].handle}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-end mt-4">
            <button
              onClick={openModal}
              className="bg-primary-cyan hover:bg-primary-cyan-75 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Book a Demo!
            </button>
          </div>
        </motion.div>
      </motion.div>
      {isModalOpen && <BookDemoModal onClose={closeModal} />}
    </div>
  );
};

export default Testimonials;
