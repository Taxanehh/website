import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);

  // Sample data for important and other projects
  const importantProjects = [
    {
      title: 'PSS, Protect, Store, Succeed',
      description: 'An open-source Secret Manager for storing passwords',
      githubLink: 'https://github.com/Taxanehh/Secretmanager',
      date: 'September 2024',
      views: '0',
    },
    {
      title: 'TO BE ANNOUNCED',
      description: 'TO BE ANNOUNCED',
      githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      date: 'TO BE ANNOUNCED',
      views: '0',
    },
  ];

  const otherProjects = [
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'TO BE ANNOUNCED', date: 'TO BE ANNOUNCED', views: 'TO BE ANNOUNCED', githubLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];

  // Function to handle navigation with fade-out animation
  const handleNavigation = (url: string) => {
    setIsLeaving(true); // Trigger fade out
    setTimeout(() => {
      router.push(url); // Navigate to the new page after fade-out
    }, 1000); // Match the duration of the fade-out
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          className="min-h-screen bg-[#101010] text-white p-8 sm:p-12"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }} // Fade-out on exit
        >
          {/* Back arrow and About/Contact links */}
          <header className="flex justify-between items-center mb-16">
            <motion.a
              onClick={() => handleNavigation('/')} // Handle navigation to Home with fade-out
              className="text-white text-2xl hover:text-gray-300 cursor-pointer transition"
            >
              ←
            </motion.a>
            <nav className="space-x-8">
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

          {/* Main content */}
          <main>
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-gray-400 mb-8">
              Some of the projects are from school and some are on my own time.
            </p>

            {/* Important Projects */}
            <section className="grid gap-8 mb-16">
              {importantProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-[#1a1a1a] rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{project.date}</span>
                    <span className="text-sm text-gray-400">{project.views} views</span>
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
                  className="p-6 bg-[#1a1a1a] rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">{project.date}</span>
                    <span className="text-sm text-gray-400">{project.views} views</span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
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
