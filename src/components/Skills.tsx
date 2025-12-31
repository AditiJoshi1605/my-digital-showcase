import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import Card3D from './Card3D';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Java' },
        { name: 'SQL' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'HTML/CSS' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'REST APIs' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git'},
        { name: 'Docker' },
        { name: 'AWS'},
        { name: 'VS Code' },
      ],
    },
  ];

  /*const codingProfiles = [
    { name: 'LeetCode', url: 'https://leetcode.com/aditijoshi1605', badge: '500+ Problems', color: 'from-amber-500 to-orange-500' },
    { name: 'CodeForces', url: 'https://codeforces.com/profile/yourusername', badge: 'Specialist', color: 'from-blue-500 to-cyan-500' },
    { name: 'HackerRank', url: 'https://hackerrank.com/yourusername', badge: '5★', color: 'from-green-500 to-emerald-500' },
    { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org/user/yourusername', badge: '200+ Problems', color: 'from-green-600 to-lime-500' },
  ];
  */

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUpVariants}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card3D className="card-gradient border border-border rounded-xl p-6 h-full">
                <h3 className="font-mono text-primary text-sm mb-4">
                  {`{ ${category.title} }`}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary-foreground">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Profiles */}
        {/*
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center font-mono text-muted-foreground mb-8">
            <span className="text-primary">//</span> Coding Profiles
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 card-gradient border border-border rounded-lg hover:border-primary transition-all duration-300 group relative overflow-hidden"
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                //Hover gradient effect
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <span className="font-semibold group-hover:text-primary transition-colors relative z-10">
                  {profile.name}
                </span>
                <motion.span 
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-mono relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {profile.badge}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default Skills;
