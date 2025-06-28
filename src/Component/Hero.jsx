import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import developerIllustration from '../assets/Lottie/Hero.json'; 
import Lottie from 'lottie-react';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/fatemaony' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/fatemaony' },
    { icon: <FaTwitter />, url: 'https://twitter.com/fatemaony' },
    { icon: <HiOutlineMail />, url: 'mailto:fatema@example.com' }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 px-4 sm:px-6 md:px-8 lg:px-16 py-17">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p 
            variants={textVariants}
            className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-2"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            variants={textVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-3"
          >
            Fatema Akter
          </motion.h1>
          
          <motion.h3 
            variants={textVariants}
            className="text-xl sm:text-2xl font-semibold text-secondary mb-4 sm:mb-6"
          >
            Full Stack Developer
          </motion.h3>
          
          <motion.p 
            variants={textVariants}
            className="text-sm sm:text-base md:text-lg text-base-content/80 mb-4 sm:mb-6 max-w-md sm:max-w-lg mx-auto lg:mx-0"
          >
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating efficient, scalable, and user-friendly applications.
          </motion.p>
          
          <motion.div 
            variants={textVariants}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-primary px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm md:text-base"
            >
              Contact Me
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="btn btn-outline px-4 sm:px-6 py-1 sm:py-2 rounded-full border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
            >
              <FaFileDownload className="text-xs sm:text-sm md:text-base" /> Resume
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={textVariants}
            className="flex justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-ghost btn-circle text-sm sm:text-lg text-primary hover:text-secondary hover:bg-base-300/50"
                aria-label={`${link.icon.type.name} profile`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <div className="absolute -inset-2 sm:-inset-3 bg-primary/10 rounded-3xl rotate-6"></div>
            <div className="absolute -inset-2 sm:-inset-3 bg-secondary/10 rounded-3xl -rotate-3"></div>
            <Lottie animationData={developerIllustration} loop={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;