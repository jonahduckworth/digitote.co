// Carousel.tsx

"use client";

import React from "react";

const images = [
  "images/carousel1.jpg",
  "images/carousel2.jpg",
  "images/carousel3.jpg",
];

// Repeat the images multiple times to fill the carousel
const allImages = Array(100).fill(images).flat();

const Carousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden h-48 relative">
      <div
        className="flex animate-slide"
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="w-64 h-64 mx-8 flex-shrink-0 relative group"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover group-hover:border-8 group-hover:border-primary-cyan-75 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
