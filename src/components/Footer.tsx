import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-tokyo-night-bg py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mohamed Amjad. All rights reserved.</p>
        <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        <p className="text-sm text-gray-400 mt-2">
          Designed and Developed by Mohamed Amjad
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;