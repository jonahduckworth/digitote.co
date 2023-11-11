import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import "./styles.css";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Carousel />
      <div className="h-20 bg-white"></div>
      <Features />

      {/* Values */}
      <section className="container mx-auto mb-12 bg-primary-cyan p-6 rounded">
        <h3 className="text-3xl font-avenir-heavy mb-6 text-white">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              value: "Transparency",
              description:
                "An open and forthcoming approach to project management that ensures equal and easy access to detailed information.",
            },
            {
              value: "Technology",
              description:
                "Bringing the entire process online, using digital tools capable of unmatched accuracy, integration, and automation.",
            },
            {
              value: "Organization",
              description:
                "Everything you need, at your fingertips, to ensure efficient and effective project and client management.",
            },
            {
              value: "Efficiency",
              description:
                "Everything done effectively, using minimal effort, free from redundancy, and focused on maximized productivity.",
            },
          ].map((item) => (
            <div key={item.value}>
              <h4 className="text-xl font-avenir-black mb-4 text-white">
                {item.value}
              </h4>
              <p className="text-md font-avenir-heavy text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
        <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
