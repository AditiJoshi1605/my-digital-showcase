import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, FileDown, ChevronDown } from 'lucide-react';
import TypewriterText from './TypewriterText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  const roles = [
    'Full Stack Developer',
    'Problem Solver',
    'Open Source Enthusiast',
    'Tech Explorer',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Terminal-like intro */}
          <motion.div 
            className="inline-block mb-6 px-4 py-2 bg-secondary/50 border border-border rounded-full font-mono text-sm text-muted-foreground"
            variants={itemVariants}
          >
            <motion.span 
              className="text-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              $
            </motion.span>{' '}
            whoami
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Your Name
            </motion.span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div 
            className="font-mono text-lg md:text-xl text-muted-foreground mb-8 h-8"
            variants={itemVariants}
          >
            <span className="text-primary">&gt;</span> BTech CSE Student |{' '}
            <TypewriterText 
              texts={roles} 
              className="text-primary"
            />
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Passionate about building scalable web applications and solving complex algorithmic problems. 
            Currently exploring the intersection of technology and innovation.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                aria-label={social.label}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <MagneticButton 
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300 inline-block"
            >
              View Projects
            </MagneticButton>
            <MagneticButton 
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-primary text-primary font-mono font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton 
              href="#contact"
              className="px-8 py-3 border border-border text-muted-foreground font-mono font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300 inline-block"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 2, duration: 1.5, repeat: Infinity }
          }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="font-mono text-xs">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
