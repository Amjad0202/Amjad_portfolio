import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaMedal } from 'react-icons/fa';

interface Badge {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  category: 'certification' | 'achievement' | 'award';
}

const badges: Badge[] = [
  {
    id: 'postman',
    title: 'Student Expert',
    issuer: 'Postman',
    date: '2024',
    image: 'https://i.ibb.co/mX7SVtC/postman.jpg',
    link: 'https://badgr.com/public/assertions/tfUWNIMYQAqrt_1k1eBLzA?identity__email=mamamjadali@gmail.com',
    category: 'certification'
  },
  {
    id: 'holopin',
    title: 'Hacktoberfest2024',
    issuer: 'Holopin',
    date: '2024',
    image: 'https://i.ibb.co/0jTRbBV/holopin3.png',
    link: 'https://www.holopin.io/hacktoberfest2024/userbadge/cm2ezdde2257650cl4558dckxn',
    category: 'certification'
  },
  {
    id: 'git',
    title: 'Pull Shark',
    issuer: 'Github',
    date: '2023',
    image: 'https://i.ibb.co/DttP8xN/pull2.png',
    link: 'https://github.com/Amjad0202?tab=achievements',
    category: 'certification'
  }
];

const Badges: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const getCategoryIcon = (category: Badge['category']) => {
    switch (category) {
      case 'certification':
        return <FaCertificate className="text-2xl text-blue-500" />;
      case 'achievement':
        return <FaAward className="text-2xl text-yellow-500" />;
      case 'award':
        return <FaMedal className="text-2xl text-purple-500" />;
    }
  };

  return (
    <section id="badges" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Badges
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className="card p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
              variants={badgeVariants}
            >
              <div className="relative group">
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 rounded-full transition-opacity duration-300" />
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                {getCategoryIcon(badge.category)}
                <h3 className="text-xl font-bold">{badge.title}</h3>
              </div>

              <p className="text-secondary mb-2">{badge.issuer}</p>
              <p className="text-sm mb-4">{badge.date}</p>

              <motion.a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button text-sm py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Verify Badge
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Badges;