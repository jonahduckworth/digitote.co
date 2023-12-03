import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import "./styles.css";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-primary-blue overflow-x-hidden">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />

      {/* White background for Testimonials */}
      <div className="sm:flex-1 lg:flex flex-row bg-white py-12">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
