import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function About() {
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
          className="min-h-screen bg-[#101010] text-white px-8 sm:px-12 lg:px-24 xl:px-32 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Back button and Projects/Contact links */}
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
                onClick={() => handleNavigation('/contact')}
                className="hover:text-gray-300 cursor-pointer transition"
              >
                Contact
              </motion.a>
            </nav>
          </header>

          {/* Main content */}
          <main>
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }}
            >
              About Me
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
            >
              I’m Paul S., a full-time Cybersecurity student and developer in training from the Netherlands.
            </motion.p>

            <motion.p
              className="text-lg sm:text-sm text-[#808080]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
            >
              I've worked on projects like building a secure secret manager. My passion lies in learning and contributing to the cybersecurity and software development communities.
            </motion.p>

            {/* Timeline Section */}
            <section className="mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                className="p-8 bg-[#1a1a1a] rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
                <p className="text-gray-400 mb-4">
                Hello! I'm Paul, a cybersecurity enthusiast currently diving into my studies with a passion for tech and problem-solving. I have a background in Artificial Intelligence from the University of Amsterdam and hands-on experience in both front-end and back-end development, next to also having participated in many CTF's. I enjoy working with various tools and technologies and am always eager to learn something new. My journey has been shaped by a mix of academic learning and practical experimentation, and I’m excited to apply this blend of skills to the cybersecurity field. I’m also a fan of the collaborative spirit of the tech community, and I’m always open to contributing and learning from others. Speaking about open, <a className="text-gray-200 underline" href="https://github.com/Taxanehh/website-master" target="_blank" rel="noopener noreferrer">this website is open-source!</a> :)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
                className="p-8 bg-[#1a1a1a] rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Key Skills</h2>
                <p className="text-gray-400 mb-4">
                  Secure coding, penetration testing, vulnerability management, and cloud infrastructure security.
                </p>
              </motion.div>
            </section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
