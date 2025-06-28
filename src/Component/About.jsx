import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/ProfilePic.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-base-100 min-h-[60vh] flex items-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 3 }}
                className="absolute inset-0 bg-primary/10 rounded-3xl"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -3 }}
                className="absolute inset-0 bg-secondary/10 rounded-3xl"
              />
              <motion.img 
                src={profileImage} 
                alt="Fatema Akter"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative rounded-2xl w-full h-full object-cover shadow-xl border-4 border-base-200"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div 
            variants={containerVariants}
            className="w-full lg:w-2/3 space-y-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-base-content relative inline-block"
            >
              About Me
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-secondary rounded-full"
              />
            </motion.h1>

            <motion.div className="space-y-4">
              {[
                "Hi! I'm <span>Fatema Akter</span>, a passionate web developer specializing in <span>React.js</span>. I love building clean, responsive websites and web applications that solve real-world problems and create meaningful user experiences.",
                "With hands-on experience in the <span>MERN stack (MongoDB, Express.js, React, Node.js)</span>, I enjoy crafting dynamic front-end interfaces and developing efficient, scalable back-end systems. I'm always eager to learn new technologies.",
                "Beyond coding, I enjoy solving logical puzzles and sharing knowledge as a tutor."
              ].map((text, i) => (
                <motion.p 
                  key={i}
                  custom={i}
                  variants={textVariants}
                  className="text-base md:text-lg leading-relaxed text-base-content/90"
                  dangerouslySetInnerHTML={{
                    __html: text.replace(
                      /<span>(.*?)<\/span>/g, 
                      '<span class="font-semibold text-primary">$1</span>'
                    )
                  }}
                />
              ))}

              <motion.p
                variants={textVariants}
                custom={3}
                className="text-lg font-medium text-accent mt-6 animate-pulse"
              >
                Let's build something great together!
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;