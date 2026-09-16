import React, { useState } from 'react';

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const servicesData = [
    {
      title: 'Frontend Developer',
      description: 'Building modern, fast, and responsive React web applications with clean code architecture.',
      tilt: '-rotate-2',
      icon: (
        <svg className="w-10 h-10 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Shopify E-Commerce',
      description: 'Designing high-converting Shopify store layouts, custom sections, and seamless e-commerce solutions.',
      tilt: 'rotate-3',
      icon: (
        <svg className="w-10 h-10 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: 'AI-Powered WordPress',
      description: 'Customizing tailored WordPress sites integrated with smart AI workflows and dynamic elements.',
      tilt: '-rotate-3',
      icon: (
        <svg className="w-10 h-10 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Meta Ads Strategy',
      description: 'Crafting targeted Meta Ad campaigns for maximum conversions, audience engagement, and ROI.',
      tilt: 'rotate-2',
      icon: (
        <svg className="w-10 h-10 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
  ];

  // Carousel Arrow Click Handlers
  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  // Logic to calculate visible cards based on screen array wrapping
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < servicesData.length; i++) {
      visible.push(servicesData[(startIndex + i) % servicesData.length]);
    }
    return visible;
  };

  return (
    <section id="services" className="relative py-24 bg-bg-dark text-text-white overflow-hidden">
      
      {/* Light Moving Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#141c21_1px,transparent_1px),linear-gradient(to_bottom,#141c21_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/* Background Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-pink/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section with Title & Navigation Arrows */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <p className="text-primary-pink text-xs font-semibold tracking-widest uppercase">
              My Services
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              My Extensive <br />
              <span className="text-primary-pink">List of Skills</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <p className="text-xs text-text-foreground hidden sm:block max-w-xs text-right font-light">
              Building high performance web apps, design systems, and strategic digital campaigns.
            </p>

            {/* Arrows Container */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full border border-bg-foreground/80 bg-bg-surface-color/50 text-text-white transition-all duration-300 hover:border-primary-pink hover:bg-primary-pink hover:scale-110 active:scale-95"
                aria-label="Previous Service"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="p-3.5 rounded-full border border-bg-foreground/80 bg-bg-surface-color/50 text-text-white transition-all duration-300 hover:border-primary-pink hover:bg-primary-pink hover:scale-110 active:scale-95"
                aria-label="Next Service"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getVisibleServices().slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-bg-surface-color/60 border border-bg-foreground/60 backdrop-blur-md transition-all duration-500 hover:border-primary-pink hover:shadow-2xl hover:shadow-primary-pink/20 hover:scale-105 hover:rotate-0 ${service.tilt}`}
            >
              {/* Card Header Icon */}
              <div className="p-4 rounded-xl bg-bg-dark/80 border border-bg-foreground/50 inline-block mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-text-white mb-3 group-hover:text-primary-pink transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-text-foreground text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services