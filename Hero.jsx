import React from 'react';

function Hero() {
  return (
    <div>
      <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center bg-bg-dark text-text-white overflow-hidden py-16">
        
        {/* Dynamic Animated Background Mesh Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Pink Blob 1 */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-pink/20 blur-[130px] animate-[pulse_8s_infinite_alternate]"></div>
          
          {/* Animated Secondary Dark Blob 2 */}
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-bg-foreground/40 blur-[150px] animate-[ping_12s_infinite_alternate]"></div>

          {/* Dynamic Floating Gradient Light 3 */}
          <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-primary-pink/15 blur-[100px] animate-bounce duration-[10000ms]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl space-y-8">
            
            {/* Main Typography Header with Modern Dark Badge Styling */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-text-white">
              Trusted{' '}
              <span className="inline-block bg-bg-surface-color text-text-white border border-bg-foreground/80 px-4 py-1 rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                Partner
              </span>{' '}
              for <br />
              Your Website{' '}
              <span className="inline-block bg-primary-pink text-text-white px-5 py-1 rounded-2xl shadow-lg shadow-primary-pink/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                Develop.
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-text-foreground text-base sm:text-xl font-light leading-relaxed max-w-2xl pt-2">
              Building high-performance, responsive marketing websites and digital web apps. Your trusted partner for modern UI strategy, clean code design, and fullstack development.
            </p>

            {/* Call-to-action Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary-pink text-text-white text-sm font-semibold bg-bg-surface-color/50 backdrop-blur-md transition-all duration-300 hover:bg-primary-pink hover:shadow-lg hover:shadow-primary-pink/30 hover:scale-[1.02]"
              >
                {/* Icon Circle (Normal State: Pink Tinted Circle, Hover State: Solid White Circle with Pink Icon) */}
                <span className="w-8 h-8 rounded-full bg-primary-pink/20 text-primary-pink flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-primary-pink">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>Schedule a Call</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;