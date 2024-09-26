import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      {/* Projects, Contact, and About links */}
      <motion.div
        className="mb-16 space-x-4 text-lg sm:text-sm text-[#808080]"
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ delay: 3, duration: 1 }} // 3 seconds delay, 1 second fade-in
      >
        <a href="#projects" className="hover:underline transition">
          Projects
        </a>
        <a href="#contact" className="hover:underline transition">
          Contact
        </a>
        <a href="#about" className="hover:underline transition">
          About
        </a>
      </motion.div>

      {/* Main heading */}
      <motion.h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent font-extrabold duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
                    initial={{ opacity: 0, color: "#000"}}
                    animate={{ opacity: 1, color: "#fff"}}
                    transition={{duration: 1, ease: "easeInOut", delay: 2}}>
        Paul S.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="mt-20 text-lg sm:text-sm text-[#808080]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ delay: 3, duration: 1 }} // 3 seconds delay, 1 second fade-in
      >
        A Full-Time Cybersecurity Student and developer in training <br />
        Currently building a{" "}
        <a
          href="https://github.com/Taxanehh/Secretmanager"
          className="text-[#808080] hover:underline transition"
        >
          Secret Manager
        </a>
      </motion.p>
    </section>
  );
};

export default Hero;
