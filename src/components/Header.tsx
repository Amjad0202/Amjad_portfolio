import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  const menuItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.header
      className="fixed w-full z-10 bg-tokyo-night-bg bg-opacity-90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">MA</div>
        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-tokyo-night-accent transition-colors"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="text-tokyo-night-accent"
          >
            <FaCode size={20} />
          </motion.div>
          <motion.span
            className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            animate={{
              opacity: [0.5, 1, 0.5],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Developer
          </motion.span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;