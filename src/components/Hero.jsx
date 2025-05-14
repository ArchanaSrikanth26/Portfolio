import React from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary, ButtonOutline } from './Button';
import profile from '../../public/assets/ArchanaSrikanth.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 bg-[#001f3d]">
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 items-center lg:gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status + Small Profile */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-[#B0C4DE] text-base font-medium">
              <span className="relative w-3 h-3 rounded-full bg-[#4682B4]">
                <span className="absolute inset-0 rounded-full bg-[#4682B4] animate-ping opacity-75"></span>
              </span>
              Available for Work
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-[20ch] sm:max-w-[35ch] lg:max-w-[20ch] mb-10 leading-tight">
            Crafting Fast, Responsive & User-Friendly Websites & Web Applications
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" />
          </div>
        </motion.div>

        {/* Right Section - Big Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 lg:mt-0"
        >
          <figure className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] mx-auto lg:ml-auto bg-gradient-to-t from-[#003366] via-25% via-[#4682B4]/30 to-65% rounded-[80px] overflow-hidden shadow-xl">
            <img
              src={profile}
              alt="Banner"
              width={656}
              height={800}
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;