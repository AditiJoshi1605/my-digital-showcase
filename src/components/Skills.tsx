const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Redux'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'Linux', 'AWS', 'Postman', 'VS Code'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-mono text-primary text-sm mb-4 group-hover:text-gradient transition-all">
                {`{ ${category.title} }`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-sm text-secondary-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mt-16">
          <h3 className="text-center font-mono text-muted-foreground mb-8">
            <span className="text-primary">//</span> Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'LeetCode', url: 'https://leetcode.com/yourusername', badge: '500+ Problems' },
              { name: 'CodeForces', url: 'https://codeforces.com/profile/yourusername', badge: 'Specialist' },
              { name: 'HackerRank', url: 'https://hackerrank.com/yourusername', badge: '5★' },
              { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org/user/yourusername', badge: '200+ Problems' },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 card-gradient border border-border rounded-lg hover:border-primary transition-all duration-300 hover-lift group"
              >
                <span className="font-semibold group-hover:text-primary transition-colors">{profile.name}</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-mono">
                  {profile.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
