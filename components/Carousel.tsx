// Carousel.tsx

"use client";

import React from "react";

import { motion } from "framer-motion";

// Function to generate image URLs
const generateImageUrls = (totalImages: number) => {
  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(`images/carousel${i}.jpg`);
  }

  // Fisher-Yates (Knuth) Shuffle
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return images;
};

const Carousel: React.FC = () => {
  // Generate and duplicate images
  const images = generateImageUrls(27);
  const allImages = [...images, ...images];

  // Assuming each image is 320px wide (80 width + 2 * 4px margin)
  // Adjust this based on your actual image and margin sizes
  const singleSetWidth = images.length * 320;

  // Animation settings (customize as needed)
  const variants = {
    animate: {
      x: [0, -singleSetWidth], // Move from 0 to negative one set width
      transition: {
        x: {
          repeat: Infinity,
          duration: 96, // Shorter duration for faster movement
          ease: "linear",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full overflow-hidden relative bg-white py-12">
        <motion.div
          className="flex"
          variants={variants}
          initial="start"
          animate="animate"
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="w-80 h-80 mx-4 flex-shrink-0 relative group border-primary-blue border-8"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Carousel;
