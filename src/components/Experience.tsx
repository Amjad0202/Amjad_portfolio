import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Marketing Team Memb',
    company: 'Old Royalists Engineering Professionals Association - OREPA',
    period: 'Jan 2024 - Present',
    description: 'Led efforts to promote association\'s events and initiatives through content creation for newsletters and social media. Managed event campaigns and member engagement while working on brand management and building partnerships to strengthen the engineering community network.',
    icon: '🎯'
  },
  {
    title: 'Webmaster',
    company: 'ITUM Computer Society',
    period: 'May 2024 - Present',
    description: 'Managing technical aspects and web presence of the society.',
    icon: '💻'
  },
  {
    title: 'Customer Relations Team Member & Special Task Force Contributor',
    company: 'AIESEC in University of Moratuwa',
    period: '23.24 Term',
    description: "Selected for the Customer Relations team, driving stakeholder engagement and member connections. Developed leadership, communication, and project management skills in LEAD CS 10.0 workshops. Joined AIESEC Colombo South's CXP Task Force to expand the iGV project’s impact, supporting international exchange and cultural understanding through global initiatives like Aquatica 3.2.",
    icon: '🌍'
  },
  {
    title: 'Graphic Design Specialist',
    company: 'ITUM English Club',
    period: 'Nov 2023 - Aug 2024',
    description: 'Created visually compelling flyers, brochures, and digital content to promote club events and initiatives. Collaborated with marketing team to ensure designs aligned with brand identity and effectively communicated key messages.',
    icon: '🎨'
  },
  {
    title: 'Member',
    company: 'Gavel Club of Institute of Technology, University of Moratuwa',
    period: 'Jan 2024 - Present',
    description: 'Active member focusing on public speaking skills development.',
    icon: '🎤'
  },
  {
    title: 'Proprietor',
    company: 'Maple Enterprises',
    period: 'Feb 2023 - Present',
    description: 'Leading business operations with focus on client relationship management and business development.',
    icon: '👔'
  },
  {
    title: 'Member',
    company: 'Majlis-Ul-Islam, University of Moratuwa',
    period: 'Dec 2022 - Aug 2024',
    description: 'Contributed to cultural awareness and community engagement initiatives.',
    icon: '🌟'
  }
];

const skills = [
  { skill: 'Photography', details: 'Portrait, Landscape, Event and Editing', icon: '📸' },
  { skill: 'Graphic Design', details: 'Adobe Photoshop, Illustrator, Canva', icon: '🎨' },
  { skill: 'Content Writing', details: 'Blogs, Articles, Copywriting', icon: '✍️' },
  { skill: 'UI/UX Design', details: 'Prototyping, Figma, Sketch', icon: '💡' },
  { skill: 'Digital Marketing', details: 'Social Media Marketing, Email Campaigns', icon: '📊' },
  { skill: 'Public Speaking', details: 'Presentations, Panel Discussion', icon: '🎙️' },
  { skill: 'Social Media Management', details: 'Facebook, Instagram, Twitter, LinkedIn Strategy', icon: '📱' },
  { skill: 'Sales and Customer Service', details: 'Client Relationship Management, Lead Generation', icon: '💼' },
  { skill: 'Leadership', details: 'Team Building, Project Management, Mentoring', icon: '👥' },
  { skill: 'Time Management', details: 'Task Prioritization, Deadlines, Multitasking', icon: '⏰' },
  { skill: 'Adaptability', details: 'Problem Solving, Flexibility, Stress Management', icon: '🔄' },
  { skill: 'Critical Thinking', details: 'Decision Making, Analytical Thinking', icon: '🧠' },
  { skill: 'Interpersonal Skills', details: 'Team Collaboration, Conflict Resolution, Empathy', icon: '🤝' }
];

const Experience = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="experience" className="py-20 bg-[#0a1929] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#4ff4d2] mb-4">Experience</h2>
          <div className="w-24 h-1 bg-[#4ff4d2] mx-auto rounded-full"/>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.h3 
              className="text-3xl font-bold text-[#4ff4d2] mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Journey
            </motion.h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-[#112240] p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{exp.icon}</span>
                    <h4 className="text-xl font-bold text-[#4ff4d2]">{exp.title}</h4>
                  </div>
                  <p className="text-[#8892b0] font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-[#4ff4d2] mb-3">{exp.period}</p>
                  <p className="text-[#a8b2d1]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <motion.h3 
              className="text-3xl font-bold text-[#4ff4d2] mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  className="bg-[#112240] p-6 rounded-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(skill.skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-semibold text-[#4ff4d2]">{skill.skill}</span>
                    </div>
                    <span className="text-[#8892b0]">{skill.details}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
