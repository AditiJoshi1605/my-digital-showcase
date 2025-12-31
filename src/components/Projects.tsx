import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Filter } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import Card3D from './Card3D';

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce.vercel.app',
      featured: true,
      category: 'fullstack',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://your-taskmanager.vercel.app',
      featured: true,
      category: 'fullstack',
    },
    {
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot powered by OpenAI API with context-aware responses and conversation history.',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/yourusername/chatbot',
      featured: true,
      category: 'ai',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
      category: 'frontend',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive weather maps.',
      tech: ['React', 'Weather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather',
      live: 'https://your-weather.vercel.app',
      category: 'frontend',
    },
    {
      title: 'URL Shortener',
      description: 'A URL shortening service with analytics tracking and custom short links.',
      tech: ['Node.js', 'Redis', 'Express'],
      github: 'https://github.com/yourusername/urlshortener',
      category: 'backend',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary border border-border hover:border-primary text-muted-foreground hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid lg:grid-cols-2 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUpVariants}
                layout
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="h-full">
                  <div className="card-gradient border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 h-full group">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="p-3 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Folder className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub"
                          whileHover={{ scale: 1.2, y: -2 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Live Demo"
                            whileHover={{ scale: 1.2, y: -2 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 bg-secondary text-primary rounded"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Other Projects */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`other-${filter}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUpVariants}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="card-gradient border border-border rounded-lg p-5 hover:border-primary transition-all duration-300 h-full group">
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                    >
                      <Folder className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-primary hover:text-gradient transition-all"
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <Github className="w-4 h-4" />
            View More on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
