import React from 'react';

const Project = () => {
  const projectsData = [
    {
      title: 'Firebase Authentication App',
      description:
        'A high-security auth system featuring instant signup, login, and real-time user session handling.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      liveLink: 'https://summa-noor.github.io/Authentication-website-signup-login/',
      githubLink: 'https://github.com/Summa-Noor/Authentication-website-signup-login',
      category: 'Web Application',
    },
    {
      title: 'Interactive Calculator',
      description:
        'A sleek, responsive calculator built for fast arithmetic computations with clean UI interactions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://summa-noor.github.io/code-alpha-calculator-project/',
      githubLink: 'https://github.com/Summa-Noor/code-alpha-calculator-project',
      category: 'Frontend App',
    },
    {
      title: 'Responsive Image Gallery',
      description:
        'A modern dynamic gallery featuring clean lightbox view, grid management, and smooth transitions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://summa-noor.github.io/code-alpha-image-gallery-project/',
      githubLink: 'https://github.com/Summa-Noor/code-alpha-image-gallery-project',
      category: 'UI/UX Interactive',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-bg-dark text-text-white relative overflow-hidden">
      
      {/* Background Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#141c21_1px,transparent_1px),linear-gradient(to_bottom,#141c21_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/* Ambient Pink Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-pink/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-bg-surface-color border border-primary-pink/30 text-primary-pink text-xs font-semibold tracking-wider uppercase">
            My Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-primary-pink">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-text-foreground font-light max-w-md mx-auto">
            Explore my latest web development projects, UI components, and web applications.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-bg-surface-color/60 border border-bg-foreground/60 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary-pink hover:shadow-[0_20px_40px_-15px_rgba(229,47,114,0.3)]"
            >
              <div>
                {/* Browser Window Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-bg-foreground/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-pink"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-bg-foreground/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-bg-foreground/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-primary-pink font-medium">
                    0{index + 1} // {project.category}
                  </span>
                </div>

                {/* Card Title & Hover Arrow Icon */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-text-white group-hover:text-primary-pink transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-bg-dark/60 text-text-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary-pink transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-text-foreground text-sm mt-3 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[11px] font-medium px-3 py-1 rounded-full bg-bg-dark border border-bg-foreground/60 text-text-foreground group-hover:border-primary-pink/40 group-hover:text-text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-bg-foreground/40">
                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs font-semibold py-3 rounded-xl bg-primary-pink text-white transition-all duration-300 hover:bg-primary-pink/80 hover:shadow-lg hover:shadow-primary-pink/30 hover:scale-[1.02]"
                >
                  Live Demo
                </a>

                {/* View Source Button (Fixed White Text on Hover) */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs font-semibold py-3 rounded-xl border border-primary-pink text-primary-pink transition-all duration-300 hover:bg-primary-pink hover:!text-white hover:shadow-lg hover:shadow-primary-pink/20 hover:scale-[1.02]"
                >
                  View Source
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project