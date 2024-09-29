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
              I&apos;m Paul S., a full-time Cybersecurity student and developer in training from the Netherlands.
            </motion.p>

            <motion.p
              className="text-lg sm:text-sm text-[#808080]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
            >
              I&apos;ve worked on projects like building a secure secret manager. My passion lies in learning and contributing to the cybersecurity and software development communities.
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
                  Hello! I&apos;m Paul, a cybersecurity enthusiast currently diving into my studies with a passion for tech and problem-solving. I have a background in Artificial Intelligence from the University of Amsterdam and hands-on experience in both front-end and back-end development, next to also having participated in many CTF&apos;s. I enjoy working with various tools and technologies and am always eager to learn something new. My journey has been shaped by a mix of academic learning and practical experimentation, and I&apos;m excited to apply this blend of skills to the cybersecurity field. I&apos;m also a fan of the collaborative spirit of the tech community, and I&apos;m always open to contributing and learning from others. Speaking about open, <a className="text-gray-200 underline" href="https://github.com/Taxanehh/website" target="_blank" rel="noopener noreferrer">this website is open-source!</a> :)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } }}
                className="p-8 bg-[#1a1a1a] rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <p className="text-gray-400 mb-4">
                  I can use the following languages:
                </p>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-4">
                  <img alt="Python" src="https://img.shields.io/badge/-Python-18181b?style=for-the-badge&logo=python&logoColor=3f3ff4" />
                  <img alt="SQL" src="https://img.shields.io/badge/-SQL-18181b?style=for-the-badge&logo=postgresql&logoColor=3f3ff4" />
                  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-18181b?style=for-the-badge&logo=javascript&logoColor=3f3ff4" />
                  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-18181b?style=for-the-badge&logo=typescript&logoColor=3f3ff4" />
                  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-18181b?style=for-the-badge&logo=html5&logoColor=3f3ff4" />
                  <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-18181b?style=for-the-badge&logo=css3&logoColor=3f3ff4" />
                  <img alt="php" src="https://img.shields.io/badge/-PhP-18181b?style=for-the-badge&logo=php&logoColor=3c3cf0" />
                </div>

                <p className="text-gray-400 mb-4">
                  I can use the following frameworks and libraries:
                </p>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-4">
                  <img alt="Flask" src="https://img.shields.io/badge/-Flask-18181b?style=for-the-badge&logo=flask&logoColor=3f3ff4" />
                </div>

                <p className="text-gray-400 mb-4">
                  Miscellaneous tools that I use:
                </p>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-4">
                  <img alt="Linux" src="https://img.shields.io/badge/-Linux-18181b?style=for-the-badge&logo=linux&logoColor=3f3ff4" />
                  <img alt="Git" src="https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=3f3ff4" />
                  <img alt="NGINX" src="https://img.shields.io/badge/-NGINX-18181b?style=for-the-badge&logo=nginx&logoColor=3f3ff4" />
                  <img alt="Metasploit" src="https://img.shields.io/badge/-Metasploit-18181b?style=for-the-badge&logo=metasploit&logoColor=3f3ff4" />
                  <img alt="Burpsuite" src="https://img.shields.io/badge/-Burpsuite-18181b?style=for-the-badge&logo=burpsuite&logoColor=3f3ff4" />
                  <img alt="Figma" src="https://img.shields.io/badge/-Figma-18181b?style=for-the-badge&logo=figma&logoColor=3c3cf0" />
                </div>

                <p className="text-gray-400 mb-4">
                  Currently learning:
                </p>
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-8">
                  <img alt="React" src="https://img.shields.io/badge/-React-18181b?style=for-the-badge&logo=react&logoColor=3f3ff4" />
                  <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-18181b?style=for-the-badge&logo=next.js&logoColor=3f3ff4" />
                  <img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind%20CSS-18181b?style=for-the-badge&logo=tailwindcss&logoColor=3f3ff4" />
                </div>

                <div className="text-5xl font-bold mb-8 grid grid-rows-[250px_2fr_20px] items-center justify-items-center">
                  <img alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=taxanehh&count_private=true&show_icons=true&title_color=3c3cf0&text_color=ffffff&icon_color=F43F5E&bg_color=18181b" />
                </div>
              </motion.div>

            </section>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
