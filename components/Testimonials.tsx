"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto lg:w-2/3">
      <div className="flex flex-row items-center bg-primary-pink rounded">
        <div className="flex flex-col items-center mb-4">
          <div className="flex-none w-80 h-120 p-4">
            <img
              src={"headshot.png"}
              alt={`headshot of digitote`}
              className="object-cover rounded-md"
            />
          </div>
          <p>Krysten Snell</p>
          <p>Founder, CEO</p>
        </div>
        <div className="flex-grow mx-12 bg-white p-4 rounded-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-black"
            >
              <p className="text-lg mb-4">{testimonials[current].content}</p>
              <p className="text-md font-semibold">
                {testimonials[current].author}
              </p>
              <p className="text-sm">{testimonials[current].handle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
