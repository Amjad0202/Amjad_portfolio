import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    title: 'GrillinHill',
    description: 'A premier dining destination offering exquisite cuisine and unforgettable experiences.',
    longDescription: 'GrillinHill is a renowned restaurant established in 2019, focusing on locally-sourced ingredients, sustainable practices, and warm hospitality. With a diverse menu, curated beverage selection, event hosting, and online reservations, GrillinHill provides a top-tier dining experience.',
    image: 'https://i.ibb.co/BnQrrL1/gnh.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Exquisite dining with diverse menu options',
      'Curated beverage selection',
      'Event hosting and catering services',
      'Online reservation system for customer convenience'
    ],
    challenges: [
      'Delivering a seamless online reservation experience',
      'Maintaining consistent quality for large events',
      'Implementing sustainability and eco-friendly practices'
    ],
    demoLink: 'https://demo-link-grillinhill.com',
    githubLink: 'https://github.com/Amjad0202/grillinhill',
    category: 'Web',
    screenshots: [
      'https://i.ibb.co/ZTZpR1h/home.png',
      'https://i.ibb.co/JsJ3ZQ5/about.png',
      'https://i.ibb.co/DD73g1r/cart.png',
      'https://i.ibb.co/tz4vzsc/pay.png'
    ]
},
{
  title: 'Busify - Public Transport Service Tracking and Tickets Booking Application',
  description: 'A comprehensive application designed to streamline public transportation services in Sri Lanka.',
  longDescription: 'Busify allows passengers to book bus tickets, track bus locations in real-time, rate services, and receive assistance for journey planning. Developed as part of the "Fundamentals of Software Engineering" module at the University of Moratuwa, this application enhances the public transport experience.',
  image: 'https://i.ibb.co/MBY8fBV/image.png', // Change this to the appropriate logo path
  techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
  features: [
    'Real-time bus tracking',
    'Ticket booking and cancellation',
    'Passenger dashboard',
    'User authentication and profiles'
  ],
  challenges: [
    'Ensuring accurate real-time tracking',
    'Managing user data securely',
    'Creating a user-friendly interface for booking'
  ],
  demoLink: 'https://demo-link-busify.com',
  githubLink: 'https://github.com/Amjad0202/Busify',
  category: 'Web',
  screenshots: [
    'https://i.ibb.co/XxN676N/interface.png'  // Update with actual screenshot paths
    
  ]
},

{
  title: 'Seyoni - Home Services Management System',
  description: 'A mobile application connecting service seekers with reliable providers quickly and efficiently.',
  longDescription: 'Seyoni is designed to simplify the process of finding and booking home services. With a user-friendly interface built on Flutter, it allows users to connect with providers for various services like home repairs, cleaning, and more, while ensuring a seamless experience.',
  image: 'https://i.ibb.co/6v0PPTS/logo.png',
  techStack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'Microsoft Azure'],
  features: [
    'User Authentication and Authorization',
    'Service Listings and Search',
    'Booking and Scheduling',
    'Real-time Location Tracking',
    'In-app Messaging and Communication',
    'Secure Payment Processing',
    'Rating and Review System',
    'Admin Dashboard'
  ],
  challenges: [
    'Implementing real-time location tracking',
    'Ensuring seamless communication between users and providers',
    'Maintaining a scalable backend with Node.js and MongoDB'
  ],
  demoLink: 'https://demo-link-seyoni.com',
  githubLink: 'https://github.com/Amjad0202/Seyoni',
  category: 'Mobile',
  screenshots: [
    'https://i.ibb.co/9N8ymdH/profile.jpg',
    'https://i.ibb.co/Fm7V7d7/chat.jpg',
    'https://i.ibb.co/Zch3HtY/form.jpg',
    'https://i.ibb.co/tB3JMJv/search.jpg'
  ]
}

];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div
          className="mb-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Web', 'Mobile'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category ? 'btn-primary' : 'card'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button 
                  className="btn-primary px-6 py-3 rounded-full w-full font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;