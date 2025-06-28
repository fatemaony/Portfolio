import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';
import image1 from '../assets/Image1.png'; 
import image2 from '../assets/Image2.png';
import portfolioImage from '../assets/Portfolio.png';


const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projects = [
    {
      title: "ReadRipple",
      description: "Read Ripple is a dynamic web platform designed for book lovers to organize their reading journey, explore new books through community reviews, and stay motivated with reading progress tracking.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Javascript", "Firebase"],
      github: "https://github.com/fatemaony/Virtual-Bookshelf-Client.git",
      live: "https://astounding-klepon-e1d5c3.netlify.app",
      image: image1 
    },
    {
      title: "Roomies",
      description: "Roomies is a full-stack web application that allows users to find compatible roommates based on their preferences, location, budget, and lifestyle. Users can register, add posts, browse listings, and connect with potential roommates through a seamless interface",
      tags: ["React", "Firebase", "Javascript", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/fatemaony/Roommate-Finder-Client.git",
      live: "https://famous-tiramisu-4acaab.netlify.app/browselisting",
      image: image2 
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio showcasing projects and skills with smooth animations and clean design. Built with performance and accessibility in mind.",
      tags: ["Javascript", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/fatemaony/Portfolio.git",
      live: "",
      image: portfolioImage 
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-base-content relative"
          >
            My Recent Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg text-center mb-16 text-base-content/80 max-w-2xl mx-auto"
          >
            Here are some of my featured projects with detailed case studies.
          </motion.p>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Project Image */}
                <div 
                  className="lg:w-1/2 w-full h-80 rounded-xl overflow-hidden shadow-lg relative cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    >
                      <div className="text-white flex flex-col items-center">
                        <FiEye className="text-4xl mb-2" />
                        <span className="text-lg font-medium">View Project</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-base-content">{project.title}</h3>
                  <p className="text-base-content/80 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;