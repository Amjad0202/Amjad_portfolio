import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaReact, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: <FaMobile />,
    skills: ['Dart', 'Flutter', 'Android Studio', 'iOS/Android Development'],
  },
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Tailwind CSS', 'JavaScript/TypeScript'],
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Others',
    icon: <FaTools />,
    skills: ['Git', 'Figma', 'Docker', 'Github', 'VS Code', 'Postman', 'Firebase', 'Android Studio', 'Adobe Photoshop/Illustrator'],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 bg-gray-800/30 group overflow-hidden"
            >
              {/* Ambient light effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-300/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shimmering border effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.1), transparent)',
                }}
                animate={{
                  backgroundPosition: ['200% 50%', '-200% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative">
                <div className="flex items-center mb-6 group">
                  <motion.span 
                    className="text-2xl mr-4 text-blue-400 transition-all duration-300 group-hover:text-blue-300 group-hover:shadow-lg group-hover:shadow-blue-400/20"
                    whileHover={{
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-white transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={skillItemVariants}
                      whileHover="hover"
                      className="flex items-center text-gray-300 hover:text-blue-300 transition-all duration-300 group/item"
                    >
                      <motion.span
                        className="w-2 h-2 bg-blue-400 rounded-full mr-3 transition-all duration-300 group-hover/item:bg-blue-300 group-hover/item:shadow-lg group-hover/item:shadow-blue-400/20"
                        whileHover={{
                          scale: 1.3,
                        }}
                      />
                      <span className="relative">
                        {skill}
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 group-hover/item:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.15), transparent 100px)',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;