import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-4 sm:py-3 md:py-5 mt-4">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-base sm:text-lg md:text-xl font-semibold">
          © {new Date().getFullYear()} Rai Gulfam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;