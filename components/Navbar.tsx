// Navbar.tsx

"use client";

import React, { useState } from "react";

import BookDemoModal from "./BookDemoModal";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="container mx-auto py-6 flex items-center justify-between">
        {/* Left Spacer */}
        <div className="flex-1"></div>

        {/* Center-aligned links */}
        <div className="flex justify-center items-center space-x-14">
          <a
            href="/features"
            className="text-white hover:text-primary-pink rounded-md text-sm font-medium"
          >
            FEATURES
          </a>
          <a
            href="/pricing"
            className="text-white hover:text-primary-pink rounded-md text-sm font-medium"
          >
            PRICING
          </a>
          <a href="/" className="font-bold text-2xl text-white">
            D I G I T O T E
          </a>
          <a
            href="/about"
            className="text-white hover:text-primary-pink rounded-md text-sm font-medium"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="text-white hover:text-primary-pink rounded-md text-sm font-medium"
          >
            CONTACT
          </a>
        </div>

        {/* Right Section - Book a Demo button */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={openModal}
            className="bg-primary-cyan hover:bg-primary-cyan-75 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            Book a Demo
          </button>
        </div>
        {isModalOpen && <BookDemoModal onClose={closeModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
