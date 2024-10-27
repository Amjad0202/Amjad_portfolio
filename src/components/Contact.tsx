import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaEnvelope,
  FaTwitter,
  FaDiscord,
  FaPhone
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#1A1F2E] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#4B7BE5] via-[#8C6BE5] to-[#4B7BE5] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <div className="mt-4 text-gray-400">Let's create something amazing together</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#111827]/80 to-[#1A2234]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#4B7BE5]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B7BE5]/5 to-[#8C6BE5]/5"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1A2234]/50 text-white rounded-xl p-4 pl-6 border border-[#4B7BE5]/30 focus:border-[#4B7BE5] focus:ring-2 focus:ring-[#4B7BE5]/20 transition-all outline-none placeholder-gray-400"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1A2234]/50 text-white rounded-xl p-4 pl-6 border border-[#4B7BE5]/30 focus:border-[#4B7BE5] focus:ring-2 focus:ring-[#4B7BE5]/20 transition-all outline-none placeholder-gray-400"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#1A2234]/50 text-white rounded-xl p-4 pl-6 border border-[#4B7BE5]/30 focus:border-[#4B7BE5] focus:ring-2 focus:ring-[#4B7BE5]/20 transition-all outline-none resize-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#4B7BE5] to-[#8C6BE5] hover:from-[#3D63B9] hover:to-[#7456B9] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-[#111827]/80 to-[#1A2234]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#4B7BE5]/20"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-[#4B7BE5] to-[#8C6BE5] bg-clip-text text-transparent">
              Connect with Me
            </h2>
            
            <div className="grid grid-cols-4 gap-8 mb-12">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohamedamjad/', color: 'hover:text-[#4B7BE5]', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://x.com/Amjadnxt', color: 'hover:text-[#1DA1F2]', label: 'Twitter' },
                { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=100012833539463', color: 'hover:text-[#4267B2]', label: 'Facebook' },
                { icon: FaInstagram, href: 'https://instagram.com/whynot_amjad', color: 'hover:text-[#E1306C]', label: 'Instagram' },
                { icon: FaDiscord, href: 'https://discord.gg/rcqZtamc', color: 'hover:text-[#5865F2]', label: 'Discord' },
                { icon: FaEnvelope, href: 'mailto:mamamjadali@gmail.com', color: 'hover:text-[#4B7BE5]', label: 'Email' },
                { icon: FaPhone, href: 'tel:+94752222254', color: 'hover:text-[#4B7BE5]', label: 'Phone' }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-4xl text-gray-400 transition-all duration-300 ${social.color} p-4 rounded-full bg-[#1A2234]/50 hover:bg-[#1A2234]/80 border border-[#4B7BE5]/20 hover:border-[#4B7BE5]/40`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                  <span className="text-xs text-gray-400">{social.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-gray-400 text-center space-y-4">
              <p className="text-lg font-medium bg-gradient-to-r from-[#4B7BE5] to-[#8C6BE5] bg-clip-text text-transparent">
                Let's Create Together!
              </p>
              <p className="text-sm">
                I'm always excited to connect with fellow developers and potential collaborators.
                Feel free to reach out on any platform that suits you best.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;