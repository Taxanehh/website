import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleProjectClick = (e) => {
    e.preventDefault();
    setIsLeaving(true); // Trigger fade out
    setTimeout(() => {
      router.push('/projects'); // Navigate to projects page after fade-out
    }, 1000); // Match the duration of the fade-out
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsLeaving(true); // Trigger fade out
    setTimeout(() => {
      router.push('/contact'); // Navigate to projects page after fade-out
    }, 1000); // Match the duration of the fade-out
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsLeaving(true); // Trigger fade out
    setTimeout(() => {
      router.push('/about'); // Navigate to projects page after fade-out
    }, 1000); // Match the duration of the fade-out
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.section
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out on exit
        >
          {/* Projects, Contact, and About links */}
          <motion.div
            className="mb-16 space-x-4 text-lg sm:text-sm text-[#808080]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.25 }} // 3 seconds delay, 1 second fade-in
          >
            <a href="#projects" onClick={handleProjectClick} className="hover:text-[#dbdbdb] transition">
              Projects
            </a>
            <a href="#contact" onClick={handleContactClick} className="hover:text-[#dbdbdb] transition">
              Contact
            </a>
            <a href="#about" onClick={handleAboutClick} className="hover:text-[#dbdbdb] transition">
              About
            </a>
          </motion.div>

          {/* Main heading with scaling animation */}
          <motion.h1
            className="py-3.5 px-0.5 z-10 text-4xl text-transparent font-extrabold bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
            initial={{ opacity: 0, scale: 1.2, color: "#000" }} // Start larger and in black
            animate={{ opacity: 1, scale: 1.0, color: "#fff" }} // Fade to white and original size
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }} // Smooth transition
          >
            Paul Stokreef
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-20 text-lg sm:text-sm text-[#808080]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }} // 3 seconds delay, 1 second fade-in
          >
            A Full-Time Cybersecurity Student and developer in training <br />
            Currently building a{" "}
            <a
              href="https://github.com/Taxanehh/Secretmanager"
              className="text-[#808080] hover:text-[#dbdbdb] underline transition"
            >
              Secret Manager
            </a>
          </motion.p>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Hero;
