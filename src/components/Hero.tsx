import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-like intro */}
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/50 border border-border rounded-full font-mono text-sm text-muted-foreground animate-fade-in">
            <span className="text-primary">$</span> whoami
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="text-gradient">Your Name</span>
          </h1>

          {/* Subtitle with typing effect simulation */}
          <div className="font-mono text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary">&gt;</span> BTech CSE Student | Full Stack Developer | Problem Solver
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about building scalable web applications and solving complex algorithmic problems. 
            Currently exploring the intersection of technology and innovation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary border border-border rounded-lg hover:border-primary hover:glow-box transition-all duration-300 hover-lift group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:glow-box transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary font-mono font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
