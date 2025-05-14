import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Pet Shop Static Website',
    description: 'A responsive static webpage for a pet shop, showcasing products and services, designed with HTML, CSS, and Tailwind CSS.',
    tags: ['HTML', 'CSS', 'Java Script'],
    year: '2023',
  },
  {
    title: 'Plant E-Commerce Website',
    description: 'A simple e-commerce platform for selling plants, with product listings and a user-friendly interface, created using React, Vite, and Tailwind CSS.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    year: '2024',
  },
  {
    title: 'Warehouse Management System',
    description: 'A system for a drone company to manage inventory, track drone parts, and streamline warehouse operations using Java, Spring Boot, and MySQL.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
    year: '2024',
  },
  {
    title: 'KSG Fuel Canada',
    description: 'A fuel card management system for tracking fuel transactions, managing customer accounts, and generating reports, built with Java, React, and Tailwind CSS.',
    tags: ['Java', 'React', 'Material UI', 'Dynamo DB', 'Spring Boot', 'Maven'],
    year: '2024',
  },
  {
    title: 'VRS Bloom',
    description: 'A billing management system for a flower shop, enabling invoice generation and inventory tracking, developed using Java, Spring Boot, and React.',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL', 'Java Script'],
    year: '2024',
  },
  {
    title: 'Pick n Pack Sri Lanka',
    description: 'A grocery delivery app similar to Swiggy Instamart, featuring order placement and delivery tracking, built with React, Java, and MySQL.',
    tags: ['React', 'Java', 'Dynamo DB', 'Material UI', 'Spring Boot', 'Maven'],
    year: '2025',
  },
];

const Project = () => {
  return (
    <section id="projects" className="section bg-[#001f3d] text-white py-12 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10">
          My Portfolio Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-[#002a54]/90 border border-[#003366]/50 rounded-2xl p-6 shadow-md hover:shadow-[#4682B4]/50 transition-all duration-300 relative min-h-[240px]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut', type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start gap-4">
                <motion.span
                  className="material-symbols-rounded text-[#4682B4] text-4xl"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                >
                  work
                </motion.span>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                >
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-[#B0C4DE]">{project.year}</p>
                  <p className="text-sm text-[#A3BFFA] mt-2">{project.tags.join(', ')}</p>
                </motion.div>
              </div>
              <motion.p
                className="mt-4 text-[#B0C4DE] text-sm leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: 'easeOut' }}
              >
                {project.description}
              </motion.p>
              <motion.a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#4682B4] text-sm font-medium hover:underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
              >
                {/* View Project */}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;