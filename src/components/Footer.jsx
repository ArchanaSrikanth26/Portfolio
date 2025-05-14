import React from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary } from './Button';

const Footer = () => {
  return (
    <footer className="bg-[#001f3d] mt-0 border-t border-[#003366]/50 text-white py-6">
      <div className="container mx-auto px-2 flex flex-col items-center">
        {/* Top: Open to Roles + Button */}
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 80 }}
        >
          <motion.h2
            className="headline-1 text-center lg:text-left text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Open to Roles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <ButtonPrimary
              href="mailto:archanasrikanth26@gmail.com"
              label="Stay in Touch"
              icon="chevron_right"
            />
          </motion.div>
        </motion.div>

        {/* Bottom: Logo + Text */}
        <motion.div
          className="flex flex-col items-center pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <p className="text-[#A3BFFA] text-sm text-center">
            © 2025 <span className="text-white">ArchanaSrikanth</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;