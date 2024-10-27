import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    techStack: string[];
    features: string[];
    challenges: string[];
    demoLink: string;
    githubLink: string;
    screenshots: string[];
  };
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors"
          >
            <FaTimes />
          </button>
          
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm btn-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p className="mb-4">{project.longDescription}</p>
            
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="list-disc list-inside mb-4">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-2">Technical Challenges</h3>
            <ul className="list-disc list-inside mb-4">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;