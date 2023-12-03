import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
      <div className="flex justify-center space-x-6 mb-4">
        <Link
          href="https://www.linkedin.com/company/digitote-inc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.instagram.com/digitote/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-pink"
        >
          Instagram
        </Link>
        <Link href="/privacy-policy" className="hover:text-primary-pink">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:text-primary-pink">
          Terms of Service
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
