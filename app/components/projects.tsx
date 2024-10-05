import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Projects() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  // Sample data for important and other projects
  const importantProjects = [
    {
      title: 'TO BE ANNOUNCED',
      description: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      date: 'September 2024',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      date: 'TO BE ANNOUNCED',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      date: 'TO BE ANNOUNCED',
    },
  ];

  const otherProjects = [
    {
      title: 'stokreef.com',
      description: 'The website you are on right now',
      date: 'October 2024',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'PSS: Protect, Store, Succeed',
      description: 'An open-source Secret Manager for storing passwords',
      date: 'October 2024',
      githubLink: 'https://github.com/Taxanehh/Secretmanager',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'Details will be revealed later.',
      date: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'Details will be revealed later.',
      date: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'Details will be revealed later.',
      date: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'Details will be revealed later.',
      date: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    // Add more projects as needed
  ];

  // Function to handle navigation with fade-out animation
  const handleNavigation = (url: string) => {
    setIsLeaving(true); // Trigger fade out
    setTimeout(() => {
      router.push(url); // Navigate to the new page after fade-out
    }, 1000); // Match the duration of the fade-out
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          className="min-h-screen bg-[#101010] text-white p-8 sm:p-12"
          initial={{ opacity: 0 }} // Initial state for fade-in
          animate={{ opacity: 1, transition: { duration: 1 } }} // Fade-in animation
          exit={{ opacity: 0, transition: { duration: 1 } }} // Fade-out on exit
        >
          {/* Header with hamburger menu */}
          <header className="flex justify-between items-center mb-16">
            <motion.a
              onClick={() => handleNavigation('/')} // Handle navigation to Home with fade-out
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

            <nav className="hidden sm:flex space-x-8">
              <motion.a
                onClick={() => handleNavigation('/about')} // Handle navigation to About with fade-out
                className="hover:text-gray-300 cursor-pointer transition"
              >
                About
              </motion.a>
              <motion.a
                onClick={() => handleNavigation('/contact')} // Handle navigation to Contact with fade-out
                className="hover:text-gray-300 cursor-pointer transition"
              >
                Contact
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
                  onClick={() => { handleNavigation('/'); setIsMenuOpen(false); }}
                  className="text-white text-2xl hover:text-gray-300 mb-4"
                >
                  Home
                </motion.a>
                <motion.a
                  onClick={() => { handleNavigation('/about'); setIsMenuOpen(false); }}
                  className="text-white text-2xl hover:text-gray-300 mb-4"
                >
                  About
                </motion.a>
                <motion.a
                  onClick={() => { handleNavigation('/contact'); setIsMenuOpen(false); }}
                  className="text-white text-2xl hover:text-gray-300 mb-4"
                >
                  Contact
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main content */}
          <main>
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }} // Fade-in for the main header
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }} // Staggered animation
            >
              Projects
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 30 }} // Fade-in for the paragraph
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }} // Staggered animation
            >
              Some of the projects are from school and some are on my own time.
            </motion.p>

            {/* Important Projects */}
            <section className="grid gap-8 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {/* Adjust the grid columns */}
              {importantProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-[#1a1a1a] rounded-lg shadow-md w-full" // Added width full
                  initial={{ opacity: 0, y: 20 }} // Fade-in for important projects
                  animate={{ opacity: 1, y: 0 }} // Animate to visible
                  transition={{ duration: 1, delay: 0.3 + index * 0.2 }} // Staggered animation with delay
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link href={project.githubLink} target="_blank" className="text-gray-300 hover:underline">
                    Read more →
                  </Link>
                </motion.div>
              ))}
            </section>

            {/* Divider */}
            <div className="h-px bg-gray-600 my-8"></div>

            {/* Other Projects */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-[#1a1a1a] rounded-lg shadow-md w-full" // Added width full
                  initial={{ opacity: 0, y: 20 }} // Fade-in for other projects
                  animate={{ opacity: 1, y: 0 }} // Animate to visible
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }} // Staggered animation with delay
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link href={project.githubLink} target="_blank" className="text-gray-300 hover:underline">
                    Read more →
                  </Link>
                </motion.div>
              ))}
            </section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
