import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation, fadeInUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import AnimatedCounter from './AnimatedCounter';
import Card3D from './Card3D';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { value: 200, suffix: '+', label: 'Problems Solved' },
    { value: 10, suffix: '+', label: 'Projects Built' },
    { value: 5, suffix: '+', label: 'Certifications' },
  ];

  const infoCards = [
    {
      icon: GraduationCap,
      title: 'Education',
      main: 'B.Tech in Computer Science & Engineering',
      sub: 'Graphic Era Hill University,Dehradun,Uttarakhand,India',
    },
    {
      icon: MapPin,
      title: 'Dehradun',
      main: 'Uttarakhand, India',
    },
    {
      icon: Calendar,
      title: 'Expected Graduation',
      main: '2027',
    },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="card-gradient border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <card.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                      <p className="text-muted-foreground">{card.main}</p>
                      {card.sub && (
                        <p className="text-sm text-muted-foreground/70">{card.sub}</p>
                      )}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Description & Stats */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card3D className="card-gradient border border-border rounded-xl p-8">
              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                I’m a B.Tech Computer Science student who enjoys building things that actually work 
                in the real world. Over time, I’ve developed a strong interest in  
                <span className="text-primary"> data structures</span>, 
                <span className="text-primary"> algorithms</span>, and 
                <span className="text-primary"> web development</span>. 
                and I like turning ideas into clean, maintainable code.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Outside of academics and coding projects, I spend time practicing competitive 
                programming, exploring new tools and frameworks, and learning by building small 
                side projects. When I’m away from the screen, I enjoy listening to music, 
                staying active, and taking short breaks to reset and stay creative.
              </motion.p>
            </Card3D>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center p-4 card-gradient border border-border rounded-xl hover:border-primary transition-colors group"
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
