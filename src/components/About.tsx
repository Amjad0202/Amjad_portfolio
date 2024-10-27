import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About: React.FC = () => {
  const developerProfile = {
    name: "Mohamed Amjad",
    role: "Full Stack | Mobile Developer | UI/UX",
    email: "mamamjadali@gmail.com",
    expertise: "Mobile & Web Development",
    currentFocus: "Flutter & React Native Development",
    tagline: "Turning Ideas into Reality with Clean Code",
    socialLinks: {
      github: "https://github.com/amjad0202",
      linkedin: "https://www.linkedin.com/in/mohamedamjad/",
      twitter: "https://x.com/Amjadnxt"
    }
  };

  const handleCVClick = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK' with your actual Google Drive CV link
    window.open('https://drive.google.com/file/d/1MbF1lwoG9SRtoDm8Fl3AEniKOFY5FSIl/view?usp=sharing', '_blank');
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="flex flex-col items-center justify-start space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative">
                <img
                  src="src/assets/profile2.png"
                  alt={developerProfile.name}
                  className="w-64 h-64 rounded-full object-cover border-4 border-blue-500/30 shadow-lg shadow-blue-500/30"
                />
              </div>
            </motion.div>

            <div className="flex gap-6 mb-2">
              {[
                { Icon: FaGithub, link: developerProfile.socialLinks.github },
                { Icon: FaLinkedin, link: developerProfile.socialLinks.linkedin },
                { Icon: FaTwitter, link: developerProfile.socialLinks.twitter }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-400 hover:text-blue-300 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={handleCVClick}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="text-lg" />
              View CV
            </motion.button>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <p className="text-blue-400/80 italic text-sm">
                Scroll down to explore more
              </p>
              <div className="mt-2 animate-bounce text-blue-400/60">↓</div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-blue-500/10 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-2xl"></div>
            <div className="relative">
              <motion.div
                variants={fadeInUpVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {developerProfile.name}
                </h3>
                <p className="text-2xl mb-8 text-blue-200 font-light">{developerProfile.role}</p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { label: "Email", value: developerProfile.email },
                  { label: "Expertise", value: developerProfile.expertise },
                  { label: "Current Focus", value: developerProfile.currentFocus }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariant}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-semibold text-blue-400 min-w-[120px] group-hover:text-blue-300 transition-colors duration-300">
                        {item.label}:
                      </span>
                      <span className="text-gray-300">{item.value}</span>
                    </p>
                  </motion.div>
                ))}

                <motion.p
                  variants={fadeInUpVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9 }}
                  className="text-xl italic text-blue-200 mt-8 border-l-4 border-blue-500 pl-4"
                >
                  "{developerProfile.tagline}"
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUpVariant}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                className="mt-10"
              >
                <h4 className="text-2xl font-bold mb-6 text-blue-400">Core Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Flutter', 'Node.js', 'TypeScript', 'Firebase'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-blue-500/10 rounded-lg text-blue-300 font-medium border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;