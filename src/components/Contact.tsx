import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Code2, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation, fadeInUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import Card3D from './Card3D';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:your@email.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-primary text-sm">// contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUpVariants}>
              <Card3D className="card-gradient border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                      your@email.com
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Card3D className="card-gradient border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Your City, India</p>
                  </div>
                </div>
              </Card3D>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Card3D className="card-gradient border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block font-mono text-sm text-muted-foreground mb-2">Name</label>
              <motion.input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Your Name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-sm text-muted-foreground mb-2">Email</label>
              <motion.input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-sm text-muted-foreground mb-2">Message</label>
              <motion.textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Your message..."
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
