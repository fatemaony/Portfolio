import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt,FaHtml5, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiJavascript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const Skills = () => {
  const skillsCategories = [
    {
      title: 'Frontend',
      skills: [
        { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5' },
        { icon: <FaReact className="text-4xl text-blue-500" />, name: 'React' },
        { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: 'JavaScript' },
        { icon: <SiTailwindcss className="text-4xl text-cyan-400" />, name: 'Tailwind CSS' },  
      ]
    },
    {
      title: 'Backend',
      skills: [
        { icon: <FaNodeJs className="text-4xl text-green-600" />, name: 'Node.js' },
        { icon: <SiExpress className="text-4xl text-gray-400" />, name: 'Express' },
        { icon: <SiMongodb className="text-4xl text-green-700" />, name: 'MongoDB' },
        { icon: <SiFirebase className="text-4xl text-yellow-500" />, name: 'Firebase' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { icon: <FaGitAlt className="text-4xl text-orange-600" />, name: 'Git' },
        { icon: <FaFigma className="text-4xl text-purple-600" />, name: 'Figma' }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-base-content relative"
          >
            My Skills
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 bg-base-200 rounded-lg"
                    >
                      <div className="mb-2">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;