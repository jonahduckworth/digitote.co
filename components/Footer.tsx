import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          Instagram
        </a>
        <a href="/privacy-policy" className="hover:text-primary-pink">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-primary-pink">
          Terms of Service
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
