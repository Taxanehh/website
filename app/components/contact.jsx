import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDiscord, FaBars, FaTimes } from 'react-icons/fa';

export default function Contact() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (url) => {
    setIsLeaving(true);
    setTimeout(() => {
      router.push(url);
    }, 1000);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          className="bg-[#101010] text-white px-4 sm:px-8 lg:px-16 xl:px-24 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Header with hamburger menu */}
          <header className="flex justify-between items-center mb-8">
            <motion.a
              onClick={() => handleNavigation('/')}
              className="text-white text-2xl hover:text-gray-300 cursor-pointer transition"
            >
              ←
            </motion.a>
            {/* Hamburger Icon */}
            <div className="block sm:hidden">
              <button onClick={toggleMenu} className="text-white text-2xl">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <nav className="hidden sm:flex space-x-4">
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

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 z-10 bg-[#101010] bg-opacity-90 flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  <FaTimes />
                </button>
                <motion.a
                  onClick={() => { handleNavigation('/projects'); setIsMenuOpen(false); }}
                  className="text-white text-2xl hover:text-gray-300 mb-4"
                >
                  Projects
                </motion.a>
                <motion.a
                  onClick={() => { handleNavigation('/about'); setIsMenuOpen(false); }}
                  className="text-white text-2xl hover:text-gray-300 mb-4"
                >
                  About
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <main className="flex flex-col items-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }}
            >
              Contact Me
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-6 text-center px-4 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
            >
              Feel free to reach out through any of the platforms below!
            </motion.p>

            {/* Icons and Links */}
            <motion.div
              className="flex flex-wrap justify-center items-center space-x-10 py-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
            >
              {/* GitHub */}
              <div className="flex flex-col items-center">
                <a href="https://github.com/Taxanehh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition text-3xl pt-4">
                  <FaGithub />
                </a>
                <p className="text-gray-400 text-sm">GitHub</p>
              </div>
              
              {/* LinkedIn */}
              <div className="flex flex-col items-center">
                <a href="https://www.linkedin.com/in/paul-stokreef/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition text-3xl pt-4">
                  <FaLinkedin />
                </a>
                <p className="text-gray-400 text-sm">LinkedIn</p>
              </div>
              
              {/* Instagram */}
              <div className="flex flex-col items-center">
                <a href="https://www.instagram.com/paul.stokreef/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition text-3xl pt-4">
                  <FaInstagram />
                </a>
                <p className="text-gray-400 text-sm">Instagram</p>
              </div>
              
              {/* Email */}
              <div className="flex flex-col items-center">
                <a href="mailto:paul.stokreef@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition text-3xl pt-4">
                  <FaEnvelope />
                </a>
                <p className="text-gray-400 text-sm">Email</p>
              </div>
              
              {/* Discord (non-clickable) */}
              <div className="flex flex-col items-center pt-4">
                <FaDiscord className="text-3xl text-gray-400 " />
                <p className="text-gray-400 text-sm">paulus2692</p>
              </div>
            </motion.div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
