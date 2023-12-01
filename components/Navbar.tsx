"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BookDemoModal from "./BookDemoModal";

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  // Listen for window resize and update isNavOpen accordingly
  useEffect(() => {
    // Define the function inside the effect to avoid referencing window outside
    const handleResize = () => {
      setNavOpen(window.innerWidth >= 768);
    };

    // Set the initial state based on the current window width
    handleResize();

    // Add the event listener for future window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-10">
      <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Mobile Menu Icon */}
        <div className="md:hidden absolute top-0 left-0 mt-6 ml-6">
          <button onClick={toggleNav} className="text-white text-3xl">
            ☰
          </button>
        </div>

        {/* Mobile Nav Drawer Background */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-1/2 bg-primary-blue md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              transition={{ type: "tween" }}
            ></motion.div>
          )}
        </AnimatePresence>

        {/* Center-aligned links for Desktop and Mobile */}
        <AnimatePresence>
          {isNavOpen && (
            <>
              <div className="md:hidden fixed top-0 left-0 mt-6 ml-6">
                <button onClick={toggleNav} className="text-white text-3xl">
                  ☰
                </button>
              </div>
              <motion.div
                className="md:w-full md:h-1/2 md:text-center lg:ml-32 bg-primary-blue md:bg-transparent flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-14 py-4 md:py-0"
                initial="closed"
                animate="open"
                exit="closed"
                variants={navVariants}
                transition={{ type: "tween" }}
              >
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
                <a
                  href="/"
                  className="font-bold text-2xl text-white whitespace-nowrap"
                >
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
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Right Section - Book a Demo button */}
        <div className="md:flex-grow"></div>
        {isNavOpen && (
          <div className="flex justify-end">
            <button
              onClick={openModal}
              className="bg-primary-cyan w-32 hover:bg-primary-cyan-75 text-white px-4 py-2 rounded-full text-sm font-medium z-20 font-avenir-heavy"
            >
              Book a Demo!
            </button>
          </div>
        )}
      </div>
      {isModalOpen && <BookDemoModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
