import React, { useState, useEffect } from 'react';

const About = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [dedication, setDedication] = useState(0);

  useEffect(() => {
    // 1. Experience Counter (0 to 2) - Slower Interval
    let currentExp = 0;
    const expInterval = setInterval(() => {
      currentExp += 1;
      setExperience(currentExp);
      if (currentExp >= 2) clearInterval(expInterval);
    }, 1000);

    // 2. Projects Counter (0 to 10) - Smooth Step
    let currentProj = 0;
    const projInterval = setInterval(() => {
      currentProj += 1;
      setProjects(currentProj);
      if (currentProj >= 10) clearInterval(projInterval);
    }, 200);

    // 3. Dedication Counter (0 to 100) - Controlled Pacing
    let currentDed = 0;
    const dedInterval = setInterval(() => {
      currentDed += 1;
      setDedication(currentDed);
      if (currentDed >= 100) clearInterval(dedInterval);
    }, 35);

    return () => {
      clearInterval(expInterval);
      clearInterval(projInterval);
      clearInterval(dedInterval);
    };
  }, []);

  return (
    <section id="about" className="relative py-24 bg-bg-dark text-text-white overflow-hidden">
      
      {/* Background Animated Light Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#141c21_1px,transparent_1px),linear-gradient(to_bottom,#141c21_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary-pink/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-bg-surface-color border border-primary-pink/30 text-primary-pink text-xs font-semibold tracking-wider uppercase">
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Driven by Passion, <br />
              <span className="text-primary-pink">Crafting with Purpose</span>
            </h2>

            <p className="text-text-foreground text-base sm:text-lg leading-relaxed font-light">
              I am a dedicated Web Developer and Frontend Specialist passionate about turning complex problems into intuitive, responsive, and visually compelling web applications.
            </p>

            <p className="text-text-foreground text-sm sm:text-base leading-relaxed font-light">
              With a strong foundation in modern web technologies, I focus on clean code architecture, engaging user experiences, and seamless UI performance.
            </p>

            {/* Quick Stats Grid with Slow Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-bg-surface-color/60 border border-bg-foreground/60 backdrop-blur-md transition-all duration-300 hover:border-primary-pink/50 hover:scale-105">
                <h3 className="text-3xl font-extrabold text-primary-pink">
                  {experience}+
                </h3>
                <p className="text-xs text-text-foreground mt-1">Years Experience</p>
              </div>

              <div className="p-4 rounded-xl bg-bg-surface-color/60 border border-bg-foreground/60 backdrop-blur-md transition-all duration-300 hover:border-primary-pink/50 hover:scale-105">
                <h3 className="text-3xl font-extrabold text-primary-pink">
                  {projects}+
                </h3>
                <p className="text-xs text-text-foreground mt-1">Projects Built</p>
              </div>

              <div className="p-4 rounded-xl bg-bg-surface-color/60 border border-bg-foreground/60 backdrop-blur-md transition-all duration-300 hover:border-primary-pink/50 hover:scale-105">
                <h3 className="text-3xl font-extrabold text-primary-pink">
                  {dedication}%
                </h3>
                <p className="text-xs text-text-foreground mt-1">Dedication</p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* View Resume Button (Opens PDF in New Tab) */}
              <a
                href="/wordpress-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full font-medium text-sm bg-primary-pink text-text-white transition-all duration-300 hover:bg-primary-pink/80 hover:shadow-lg hover:shadow-primary-pink/30 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>View Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-medium text-sm border border-primary-pink text-primary-pink transition-all duration-300 hover:bg-primary-pink hover:text-white hover:scale-[1.02]"
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* Right Column: Image Frame */}
          <div className="flex justify-center items-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary-pink/40 to-transparent blur-md group-hover:from-primary-pink/70 transition-all duration-500"></div>

              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-bg-surface-color border border-primary-pink/30 shadow-2xl">
                <img
                  src="/summanoorimg.jpg"
                  alt="Summa Noor"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About