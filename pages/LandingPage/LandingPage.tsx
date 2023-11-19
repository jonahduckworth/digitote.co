import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import "./styles.css";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-blue">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />
      <div className="sm:flex-1 lg:flex flex-row">
        <Testimonials />
        <Pricing />
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
        <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
