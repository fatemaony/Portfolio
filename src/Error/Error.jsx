import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router';

const Error = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 to-base-200 px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="text-center max-w-md mx-auto"
      >
        <motion.div variants={item}>
          <FiAlertTriangle className="mx-auto text-6xl md:text-8xl text-error mb-6" />
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="text-4xl md:text-5xl font-bold text-error mb-4"
        >
          404 Error
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-lg text-base-content/80 mb-8"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div variants={item}>
          <Link
            to="/"
            className="btn btn-primary px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Return Home
          </Link>
        </motion.div>
        
        <motion.div 
          variants={item}
          className="mt-12 text-sm text-base-content/60"
        >
          <p>If you believe this is an error, please contact support.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Error;