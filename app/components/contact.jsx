import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleNavigation = (url) => {
    setIsLeaving(true);
    setTimeout(() => {
      router.push(url);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          className="min-h- bg-[#101010] text-white px-8 sm:px-12 lg:px-24 xl:px-32 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Back button and About/Projects links */}
          <header className="flex justify-between items-center mb-16">
            <motion.a
              onClick={() => handleNavigation('/')}
              className="text-white text-2xl hover:text-gray-300 cursor-pointer transition"
            >
              ←
            </motion.a>
            <nav className="space-x-8">
              <motion.a
                onClick={() => handleNavigation('/projects')}
                className="hover:text-gray-300 cursor-pointer transition"
              >
                Projects
              </motion.a>
              <motion.a
                onClick={() => handleNavigation('/about')}
                className="hover:text-gray-300 cursor-pointer transition"
              >
                About
              </motion.a>
            </nav>
          </header>

          {/* Main content */}
          <main>
            <motion.h1
              className="text-5xl font-bold mb-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }}
            >
              Contact Me
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
            >
              Feel free to reach out through any of the platforms below! Or on Discord: paulus2692
            </motion.p>

            {/* Icons and Links */}
            <motion.div
              className="flex space-x-8 text-4xl flex-grow flex row-start-2 items-center sm:items-start relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
            >
              {/* GitHub */}
              <a href="https://github.com/Taxanehh" target="_blank" className="hover:text-gray-300 transition">
                <FaGithub />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/paul-stokreef/" target="_blank" className="hover:text-gray-300 transition">
                <FaLinkedin />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/paul.stokreef/" target="_blank" className="hover:text-gray-300 transition">
                <FaInstagram />
              </a>
              {/* Email */}
              <a href="mailto:paul.stokreef@gmail.com" target="_blank" className="hover:text-gray-300 transition">
                <FaEnvelope />
              </a>
            </motion.div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
