import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import ellipes1 from '../assets/Logo.png';

const Navbar = () => {
  
  const navItems = [
    { name: 'Home', sectionId: 'Home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="navbar px-6 md:px-10 bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-90"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {navItems.map((item) => (
              <motion.li 
                key={item.sectionId}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                <a onClick={() => handleNavClick(item.sectionId)} className="cursor-pointer">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.a 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img className='w-10 h-10' src={ellipes1} alt="Logo" />
        </motion.a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navItems.map((item) => (
            <motion.li 
              key={item.sectionId}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary font-semibold relative group"
            >
              <a 
                onClick={() => handleNavClick(item.sectionId)} 
                className="px-4 py-2 cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end flex gap-4">
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input type="checkbox" className="theme-controller" value="forest" />
          <FiSun className="swap-off w-6 h-6 text-primary" />
          <FiMoon className="swap-on w-6 h-6 text-primary" />
        </label>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-secondary rounded-full px-6 shadow-lg hover:shadow-secondary/50 transition-shadow"
          href="#resume"  // Changed to anchor link
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('resume');
          }}
        >
          Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Navbar;