import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-3xl text-primary" />,
      title: "Email",
      info: "fatema77095@gamil.com",
      action: "mailto:fatema77095@gamil.com"
    },
    {
      icon: <FiMapPin className="text-3xl text-secondary" />,
      title: "Location",
      info: "Sylhet, Bangladesh",
      action: "https://maps.google.com"
    },
    {
      icon: <FiPhone className="text-3xl text-accent" />,
      title: "Phone",
      info: "+880 1516193234",
      action: "tel:+8801516193234"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/fatemaony" },
    { icon: <FaGithub />, url: "https://github.com/fatemaony" },
    { icon: <FaTwitter />, url: "https://twitter.com/fatemaony" }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-base-200">
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
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg text-center mb-16 text-base-content/80 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div 
              variants={item}
              className="space-y-6"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="mt-1">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                    <p className="text-base-content/80">{method.info}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div 
                variants={item}
                className="flex gap-4 justify-center lg:justify-start mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle text-xl text-primary hover:text-secondary hover:bg-base-300/50"
                    aria-label={social.url}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={item}
              className="bg-base-100 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn btn-primary py-3 px-6 rounded-lg font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;