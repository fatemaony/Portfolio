import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Contact', sectionId: 'contact' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Projects', sectionId: 'projects' }
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: 'https://github.com/fatemaony' },
    { icon: <FaLinkedinIn className="text-xl" />, url: 'https://www.linkedin.com/in/fatema-akter-a299a6317/' },
    { icon: <FaEnvelope className="text-xl" />, url: 'mailto:fatema77095@gmail.com' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="footer bg-primary text-white p-10"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between mx-auto">
        <div>
          {/* Navigation Links */}
          <motion.nav 
            className="grid grid-flow-col gap-6 justify-center mb-8"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.sectionId}
                whileHover={{ scale: 1.1, color: '#f4f2fc' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link.sectionId)}
                className="link link-hover font-medium text-white text-lg cursor-pointer transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        <div className="flex flex-col items-center">
          {/* Social Icons */}
          <motion.nav className="flex justify-center mb-8">
            <div className="grid grid-flow-col gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    color: '#f4f2fc'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-ghost btn-circle bg-white/10 shadow-md hover:shadow-lg hover:bg-white/20 transition-all duration-300 text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.nav>

          {/* Copyright */}
          <motion.aside 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-white/80">
              Copyright © {currentYear} - All right reserved by 
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="font-bold text-white ml-1"
              >
                Fatema Ony
              </motion.span>
            </p>
          </motion.aside>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;