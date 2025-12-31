import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

const Card3D = ({ children, className = '' }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const maxRotation = 15;
    const rotateXValue = (mouseY / (rect.height / 2)) * -maxRotation;
    const rotateYValue = (mouseX / (rect.width / 2)) * maxRotation;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10"
        animate={{ opacity: isHovering ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
};

export default Card3D;
