import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#3b82f6", "#60a5fa", "#93c5fd"]
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          sides: 6
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble", "repulse"],
          parallax: {
            enable: true,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
            color: "#60a5fa"
          }
        },
        bubble: {
          distance: 250,
          size: 10,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          quantity: 4
        }
      }
    },
    background: {
      color: "transparent"
    },
    detectRetina: true,
    fpsLimit: 120,
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0"
    />
  );
};

export default ParticlesBackground;