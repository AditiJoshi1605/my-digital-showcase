import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-full bg-secondary border border-border hover:border-primary transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-primary" />
        ) : (
          <Sun className="w-4 h-4 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
