import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const PlanetCard = ({ project, size = 'medium', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const sizeClasses = {
    large: 'w-64 h-64',
    medium: 'w-48 h-48',
    small: 'w-32 h-32'
  }

  const glowIntensity = {
    high: 'shadow-2xl shadow-cosmic-glow/50',
    medium: 'shadow-xl shadow-cosmic-accent/40',
    low: 'shadow-lg shadow-cosmic-blue/30'
  }

  return (
    <>
      <motion.div
        className={`relative cursor-pointer ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="planet-card group">
          {/* Planet Sphere */}
          <div className={`
            relative mx-auto rounded-full bg-gradient-to-br 
            ${sizeClasses[size]}
            ${project.planet.color === '#64ffda' ? 'from-cosmic-glow/80 to-cosmic-glow/40' : ''}
            ${project.planet.color === '#e94560' ? 'from-cosmic-accent/80 to-cosmic-accent/40' : ''}
            ${project.planet.color === '#16213e' ? 'from-cosmic-purple/80 to-cosmic-blue/40' : ''}
            ${glowIntensity[project.planet.glowIntensity]}
            transition-all duration-500 group-hover:${glowIntensity[project.planet.glowIntensity]}
          `}>
            
            {/* Planet surface details */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {/* Surface texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
              
              {/* Atmospheric glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/10" />
              
              {/* Tech stack indicators as surface features */}
              <div className="absolute inset-4 rounded-full border border-white/20 opacity-50" />
              <div className="absolute inset-8 rounded-full border border-white/10 opacity-30" />
            </div>

            {/* Orbital rings */}
            {project.planet.hasRings && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isHovered ? 1 : 0.3, scale: 1 }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-current opacity-20 rounded-full animate-spin-slow" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-current opacity-10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                </motion.div>
              </AnimatePresence>
            )}

            {/* Hover effect - planet rotation indicator */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={isHovered ? { 
                boxShadow: `0 0 40px ${project.planet.color}40`,
                scale: 1.02 
              } : {}}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Project label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-6 space-y-2"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-cosmic-glow transition-colors duration-300">
              {project.name}
            </h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-sm text-gray-400 max-w-xs mx-auto"
            >
              {project.description.slice(0, 100)}...
            </motion.p>

            {/* Status badge */}
            <div className={`
              inline-block px-3 py-1 rounded-full text-xs font-medium
              ${project.status === 'Featured' ? 'bg-cosmic-glow/20 text-cosmic-glow' : ''}
              ${project.status === 'In Development' ? 'bg-cosmic-accent/20 text-cosmic-accent' : ''}
              ${project.status === 'Open Source' ? 'bg-cosmic-blue/20 text-cosmic-blue' : ''}
            `}>
              {project.status}
            </div>

            {/* Tech stack preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-1 mt-3"
            >
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                  +{project.techStack.length - 3}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal 
        project={project}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

export default PlanetCard
