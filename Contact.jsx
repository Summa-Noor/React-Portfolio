import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/summa-noor',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Summa-Noor',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/summa_noor/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: '#', // Aap yahan apna Facebook link add kar sakti hain
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-bg-dark text-text-white overflow-hidden">
      
      {/* Animated Moving Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#141c21_1px,transparent_1px),linear-gradient(to_bottom,#141c21_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[pulse_6s_ease-in-out_infinite]"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-pink/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-primary-pink text-xs font-semibold tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Work <span className="text-primary-pink">Together</span>
          </h2>
          <div className="w-12 h-[3px] bg-primary-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Socials (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 bg-bg-surface-color/40 backdrop-blur-md p-8 rounded-2xl border border-bg-foreground/50">
            <div>
              <h3 className="text-2xl font-bold mb-3">Reach Out To Me</h3>
              <p className="text-text-foreground text-sm font-light leading-relaxed">
                Have a project idea, question, or just want to connect? Feel free to send a message or find me on my social handles.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-primary-pink uppercase tracking-wider mb-4">
                Social Profiles
              </p>

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-bg-dark/80 border border-bg-foreground/60 transition-all duration-300 hover:border-primary-pink hover:-translate-x-1 group"
                >
                  <div className="text-text-foreground group-hover:text-primary-pink transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium text-text-white group-hover:text-primary-pink transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-bg-surface-color/40 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-bg-foreground/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-semibold text-text-foreground uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Summa Noor"
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-dark/80 border border-bg-foreground/80 text-text-white placeholder-text-foreground/40 text-sm focus:outline-none focus:border-primary-pink transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-text-foreground uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@domain.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-dark/80 border border-bg-foreground/80 text-text-white placeholder-text-foreground/40 text-sm focus:outline-none focus:border-primary-pink transition-colors duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-semibold text-text-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-bg-dark/80 border border-bg-foreground/80 text-text-white placeholder-text-foreground/40 text-sm focus:outline-none focus:border-primary-pink transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary-pink text-text-white text-sm font-semibold transition-all duration-300 hover:bg-primary-pink/80 hover:shadow-lg hover:shadow-primary-pink/30 hover:scale-[1.01]"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;