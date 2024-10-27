import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

const Hero: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesConfig: ISourceOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: ["#3b82f6", "#60a5fa", "#93c5fd"]  // Multiple blue shades
      },
      shape: {
        type: ["circle", "triangle"],  // Mix of shapes
        stroke: {
          width: 1,
          color: "#3b82f6"
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 180,
        color: "#60a5fa",
        opacity: 0.4,
        width: 1.2,
        triangles: {
          enable: true,
          opacity: 0.1
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1600
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble", "repulse"]
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 0.9,
            color: "#93c5fd"
          }
        },
        bubble: {
          distance: 300,
          size: 8,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 250,
          duration: 0.6
        },
        push: {
          quantity: 5
        }
      }
    },
    background: {
      color: "transparent"
    },
    detectRetina: true
  };

  const nameAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-12"
        >
          <motion.h1
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-colors duration-300"
          >
            Mohamed Amjad
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer 👨‍💻',
                2000,
                'Mobile App Developer 📱',
                2000,
                'UI/UX Designer 🎨',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-light"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="profile-image mb-12 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/30 w-48 h-48 mx-auto hover:border-blue-300 transition-colors duration-300"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.6 
          }}
        >
          <img
            src="src/assets/profile1.jpg"
            alt="Mohamed Amjad"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-10 py-4 rounded-full text-lg font-semibold inline-block text-white shadow-lg shadow-blue-500/30 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center hover:border-blue-300 transition-colors duration-300">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce hover:bg-blue-300 transition-colors duration-300" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;