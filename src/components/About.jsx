import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../public/assets/heroImage.png';

const aboutItems = [
  {
    label: 'Projects Completed',
    number: 4,
  },
  {
    label: 'Years of Experience',
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#001f3d]">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-[#002a54]/90 p-8 rounded-3xl shadow-2xl md:p-12 transition-all duration-300 hover:shadow-[#4682B4]/50 group"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 }}
        >
          <motion.p
            className="text-[#B0C4DE] text-lg md:text-xl leading-relaxed mb-6 md:mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Hello, I'm Archana Srikanth, a dedicated Java Full Stack Developer. I specialize in building robust and responsive web applications using Java, Spring Boot, React, HTML, CSS, Tailwind CSS, MySQL, and Maven. I enjoy crafting seamless user interfaces and efficient backend systems to deliver high-quality digital solutions. With a passion for problem-solving and collaboration, I'm eager to contribute to innovative projects and create impactful products. Let's work together to bring your ideas to life!
          </motion.p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {aboutItems.map(({ label, number }, key) => (
              <motion.div
                key={key}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + key * 0.2, ease: 'easeOut', type: 'spring', stiffness: 100 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-white md:text-5xl">
                    {number}
                  </span>
                </div>
                <p className="text-sm text-[#A3BFFA] font-medium">{label}</p>
              </motion.div>
            ))}
            <motion.img
              src={heroImage}
              alt="Logo"
              width={40}
              height={40}
              className="ml-auto md:w-[50px] md:h-[50px] rounded-full border-2 border-[#4682B4] p-1"
              initial={{ opacity: 0, rotate: 360, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut', type: 'spring', stiffness: 90 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;