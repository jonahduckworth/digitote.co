"use client";

import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-5xl font-black mb-6 text-primary-blue">Welcome to Digitote</h1>
      <h2 className="text-3xl font-semibold max-w-lg text-center mb-4 text-primary-pink">Empowering an industry with the tools
needed to confidently and efficiently
grow their business.</h2>
      <p className="text-lg max-w-lg text-center mb-6 font-visby text-black">
        Discover the power of our platform and how it can revolutionize the way you do business. Our tools are designed with your success in mind.
      </p>
      <button className="bg-primary-cyan hover:bg-primary-cyan-75 text-white font-semibold py-2 px-6 rounded">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
