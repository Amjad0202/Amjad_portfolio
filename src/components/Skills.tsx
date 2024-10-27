import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaReact, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: <FaMobile />,
    skills: ['Dart' , 'Flutter', 'Android Studio', 'iOS/Android Development'],
  },
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: ['HTML5' , 'CSS3' , 'React.js' , 'Bootstrap', 'Tailwind CSS' ,, 'JavaScript/TypeScript'],
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    skills: ['Node.js' , 'Express.js',],
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: [ 'MySQL', 'MongoDB' , 'PostgreSQL' ],
  },
  {
    title: 'Tools & Others',
    icon: <FaTools />,
    skills: ['Git' ,  'Figma' , 'Docker' , 'Github' , 'VS Code' , 'Postman' , 'Firebase' , 'Android Studio' , 'Adobe Photoshop/Illustrator' ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 text-tokyo-night-accent">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="list-disc list-inside">
                {category.skills.map((skill) => (
                  <li key={skill} className="mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;