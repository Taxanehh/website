import { motion } from 'framer-motion'
import PlanetCard from './PlanetCard'

const ProjectSection = ({ userData }) => {
  const mainProject = userData.projects.find(p => p.type === 'main')
  const secondaryProjects = userData.projects.filter(p => p.type === 'secondary')

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black via-cosmic-dark to-cosmic-purple/20" />
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-glow to-cosmic-accent">
            Project Galaxy
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore the cosmic landscape of my work - each project a unique world in the digital universe
        </p>
      </motion.div>

      {/* Planet Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Project - Large Central Planet */}
        {mainProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-20"
          >
            <PlanetCard 
              project={mainProject} 
              size="large" 
              className="max-w-md" 
            />
          </motion.div>
        )}

        {/* Secondary Projects - Smaller Orbiting Planets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <PlanetCard 
                project={project} 
                size="medium"
                className="max-w-sm mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 border border-cosmic-glow/30 rounded-full bg-cosmic-purple/20 backdrop-blur-sm">
            <div className="text-cosmic-glow/70 font-mono">
              <div className="text-lg mb-2">More planets forming...</div>
              <div className="w-6 h-6 border-2 border-cosmic-glow/50 border-t-cosmic-glow rounded-full animate-spin mx-auto" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background cosmic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-cosmic-glow/10 rounded-full animate-spin-slow" />
          <div className="absolute inset-8 border border-cosmic-accent/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-glow rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
