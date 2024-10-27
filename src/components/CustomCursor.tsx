import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 250,
      }}
    />
  );
};

export default CustomCursor;