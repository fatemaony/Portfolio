import React from 'react';
import { motion } from 'framer-motion';
import {  FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';

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
    { 
    icon: <FaEnvelope className="text-xl" />, 
    url: 'fatema77095@gmail.com.com'
  }

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
      className="footer bg-base-200 text-base-content p-10"
    >
      <div className="container flex items-center justify-between mx-auto">
        <div>
          {/* Navigation Links */}
        <motion.nav 
          className="grid grid-flow-col  gap-6 justify-center mb-8"
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={link.sectionId}
              whileHover={{ scale: 1.1, color: '#513e8c' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(link.sectionId)}
              className="link link-hover font-medium text-primary text-lg cursor-pointer transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>
        </div>

        <div>
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
                  color: '#2e2059'
                }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-ghost btn-circle bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
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
          <p className="text-sm md:text-base">
            Copyright © {currentYear} - All right reserved by 
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="font-bold text-primary ml-1"
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