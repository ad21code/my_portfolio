import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronDown, Terminal, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';
import ChatWidget from './components/ChatWidget';
import SkillsChart from './components/SkillsChart';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="text-slate-400 hover:text-primary transition-colors text-sm font-medium tracking-wide"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled ? 'bg-dark/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {PORTFOLIO_DATA.name}
            <span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex gap-8">
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-slate-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="about">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-primary font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Hire
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Digital Experiences
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
              {PORTFOLIO_DATA.bio}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/25">
                View Projects
              </a>
              <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 pt-8 text-slate-500">
               {PORTFOLIO_DATA.socials.map((social) => {
                 const Icon = social.icon === 'Github' ? Github : social.icon === 'Linkedin' ? Linkedin : Mail;
                 return (
                   <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                     <Icon className="w-6 h-6" />
                   </a>
                 );
               })}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in relative">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <img 
                src="https://picsum.photos/800/800?random=10" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-[2rem] border-2 border-slate-700/50 shadow-2xl relative z-10" 
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-dark/50" id="skills">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical stack and expertise levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
             {/* Chart */}
             <div className="w-full">
               <SkillsChart />
             </div>

             {/* Grid Tags */}
             <div className="grid grid-cols-2 gap-4">
                {PORTFOLIO_DATA.skills.map((skill, index) => (
                  <div key={index} className="bg-card p-4 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700`}>
                        {skill.category}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24" id="experience">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

            {PORTFOLIO_DATA.experience.map((job, index) => (
              <div key={job.id} className={`relative mb-12 md:mb-20 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Dot */}
                <div className="absolute top-0 left-0 md:left-0 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-dark md:block hidden" 
                  style={{ left: index % 2 === 0 ? 'auto' : '0', right: index % 2 === 0 ? '-8px' : 'auto' }}
                />

                <div className={`
                  bg-card p-6 rounded-2xl border border-slate-800 shadow-sm hover:border-primary/50 transition-colors
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                `}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-secondary" />
                    {job.company}
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-card/30" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div key={project.id} className="group bg-card rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <div className="flex items-center justify-center gap-3 bg-card border border-slate-700 text-slate-300 px-8 py-4 rounded-xl">
              <MapPin className="w-5 h-5 text-secondary" />
              {PORTFOLIO_DATA.location}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React, Tailwind & Gemini API.</p>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;