import React from 'react';

const Footer = () => {
  // Smooth Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-bg-dark border-t border-bg-foreground/40 py-8 text-text-white relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo Branding */}
        <div className="text-2xl font-extrabold tracking-tight">
          Summa Noor<span className="text-primary-pink">.</span>
        </div>

        {/* Copyright & Credit Line */}
        <div className="text-sm text-text-foreground font-light text-center">
          © {new Date().getFullYear()} All rights reserved. Developed by{' '}
          <span className="text-text-white font-medium hover:text-primary-pink transition-colors duration-300">
            Summa Noor
          </span>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-bg-surface-color/80 border border-bg-foreground/60 text-text-white transition-all duration-300 hover:border-primary-pink hover:bg-primary-pink hover:scale-110 active:scale-95 shadow-md"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
};

export default Footer 