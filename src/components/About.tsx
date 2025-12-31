import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '500+', label: 'Problems Solved' },
    { value: '20+', label: 'Projects Built' },
    { value: '5+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// about me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="card-gradient border border-border rounded-xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground/70">Your University Name</p>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-border rounded-xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Your City, India</p>
                </div>
              </div>
            </div>

            <div className="card-gradient border border-border rounded-xl p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Expected Graduation</h3>
                  <p className="text-muted-foreground">2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description & Stats */}
          <div className="space-y-8">
            <div className="card-gradient border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Computer Science student with a strong foundation in 
                <span className="text-primary"> data structures</span>, 
                <span className="text-primary"> algorithms</span>, and 
                <span className="text-primary"> web development</span>. 
                I love transforming ideas into elegant, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me solving problems on LeetCode, 
                contributing to open-source projects, or exploring new technologies. 
                I believe in continuous learning and building solutions that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 card-gradient border border-border rounded-xl hover:border-primary transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-gradient font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
