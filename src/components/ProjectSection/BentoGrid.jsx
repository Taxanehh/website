import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BentoCard from './BentoCard'
import ProjectModal from './ProjectModal'

const BentoGrid = ({ userData }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  // Arrange projects in a non-conventional bento grid pattern
  const getGridLayout = () => {
    const projects = userData.projects || []

    // Create a more sophisticated grid layout
    const layout = []

    projects.forEach((project, index) => {
      let className = ""

      // Create asymmetric bento patterns for visual interest
      switch (project.gridSize) {
        case "large":
          // Large items take 2x2 space
          className = "col-span-2 row-span-2"
          break
        case "medium":
          // Alternate medium items between wide and tall
          if (index % 4 === 1 || index % 4 === 3) {
            className = "col-span-2 row-span-1" // Wide
          } else {
            className = "col-span-1 row-span-2" // Tall
          }
          break
        case "small":
          // Small items take single space
          className = "col-span-1 row-span-1"
          break
        default:
          className = "col-span-1 row-span-1"
      }

      layout.push({
        ...project,
        className
      })
    })

    return layout
  }

  const projectLayout = getGridLayout()

  return (
    <>
      <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Floating cosmic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid lines for cyber effect */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(64, 255, 218, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(64, 255, 218, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-16 px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-mono text-sm">PROJECTS.EXE</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
              Personal Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate through the cosmic milestones of my technical evolution — from AI foundations to cybersecurity expertise and web development
          </p>

          {/* Terminal-style decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="bg-black/80 border border-green-500/30 rounded px-4 py-2 font-mono text-sm">
              <span className="text-green-400">$</span>
              <span className="text-white ml-2">ls -la /projects/</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-green-400 ml-1"
              >
                _
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {projectLayout.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={project.className}
              >
                <BentoCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <motion.a
              href="https://github.com/Ehiane?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/30 rounded-lg font-mono text-cyan-400 hover:text-white transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Explore More Projects</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Terminal Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >

            <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 sm:px-6 py-2 sm:py-3 mx-2 sm:mx-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 font-mono text-xs sm:text-sm space-y-1 sm:space-y-0">
                {/* Status - Always visible */}
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">STATUS: OPERATIONAL</span>
                </div>

                {/* Projects count - Show on mobile */}
                <div className="text-gray-400 hidden sm:block">|</div>
                <div className="text-cyan-400 text-center sm:text-left">
                  PROJECTS: {userData.projects?.length || 0}
                </div>

                {/* Tech stack - Hide on mobile */}
                <div className="text-gray-400 hidden md:block">|</div>
                <div className="text-yellow-400 hidden md:block">
                  TECH_STACK: FULL_SPECTRUM
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HUD Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner brackets */}
          <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50"></div>
          <div className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50"></div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default BentoGrid
