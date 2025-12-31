import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
      scaleX.set(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
