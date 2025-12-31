import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://your-ecommerce.vercel.app',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://your-taskmanager.vercel.app',
      featured: true,
    },
    {
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot powered by OpenAI API with context-aware responses and conversation history.',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/yourusername/chatbot',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive weather maps.',
      tech: ['React', 'Weather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather',
      live: 'https://your-weather.vercel.app',
    },
    {
      title: 'URL Shortener',
      description: 'A URL shortening service with analytics tracking and custom short links.',
      tech: ['Node.js', 'Redis', 'Express'],
      github: 'https://github.com/yourusername/urlshortener',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.title}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:glow-box transition-all">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
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
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 bg-secondary text-primary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              className="card-gradient border border-border rounded-lg p-5 hover:border-primary transition-all duration-300 hover-lift group"
            >
              <div className="flex items-start justify-between mb-3">
                <Folder className="w-5 h-5 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-primary hover:text-gradient transition-all"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
