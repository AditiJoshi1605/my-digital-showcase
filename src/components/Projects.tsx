import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import Card3D from './Card3D';

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      title: 'KindMeal – Food Redistribution System',
      description:
        'A full-stack web application for real-time food donation, matching, and delivery tracking. Includes automated donation workflows and audit logging for transparency.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/aditijoshi1605/pbl-dbms',
      featured: true,
      category: 'fullstack',
    },
    {
      title: 'Smart Bus Routing & Optimization System',
      description:
        'A data-driven system that optimizes bus routes based on student capacity and demand using real university data of 100+ buses.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS'],
      github: 'https://github.com/aditijoshi1605/pbl-daa',
      featured: true,
      category: 'backend',
    },
    {
      title: 'Human Activity Anomaly Detection System',
      description:
        'An unsupervised machine learning system to detect abnormal human activities using computer vision and real-time video streams.',
      tech: ['Python', 'OpenCV', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/aditijoshi1605/pbl-ai',
      featured: true,
      category: 'ai',
    },
    {
      title: 'Face Detection Attendance Management System',
      description:
        'An automated attendance system that verifies faces and marks attendance using KNN-based face recognition.',
      tech: ['Python', 'OpenCV', 'KNN', 'Tkinter'],
      github: 'https://github.com/aditijoshi1605/Face-Detection-Attendance-Management-System',
      featured: true,
      category: 'ai',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI / ML' },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary border border-border text-muted-foreground hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid lg:grid-cols-2 gap-6 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUpVariants}>
                <Card3D className="h-full">
                  <div className="card-gradient border border-border rounded-xl p-6 h-full hover:border-primary transition-all">
                    <div className="flex justify-between mb-4">
                      <Folder className="w-6 h-6 text-primary" />
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </motion.a>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-1 bg-secondary text-primary rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Other */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {otherProjects.map(project => (
            <motion.div key={project.title} variants={fadeInUpVariants}>
              <div className="card-gradient border border-border rounded-lg p-5 hover:border-primary transition-all h-full">
                <div className="flex justify-between mb-3">
                  <Folder className="w-5 h-5 text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>

                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 text-xs font-mono text-muted-foreground">
                  {project.tech.slice(0, 4).join(' • ')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/aditijoshi1605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-primary hover:text-gradient"
          >
            <Github className="w-4 h-4" />
            View More on GitHub →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
