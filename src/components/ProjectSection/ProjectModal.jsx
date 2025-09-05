import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'live':
        return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'in development':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'archived':
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
      default:
        return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-black/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/20"
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700/50">
              {/* Terminal-style header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">
                    project:///{project.id || ''}
                  </span>
                </div>
                
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Title & Status */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <motion.h2 
                    layoutId={`title-${project.id}`}
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                  >
                    {project.name || 'Untitled Project'}
                  </motion.h2>
                  <motion.p 
                    layoutId={`description-${project.id}`}
                    className="text-gray-300 text-lg"
                  >
                    {project.description || 'No description available'}
                  </motion.p>
                </div>
                
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className={`px-4 py-2 rounded-full text-sm font-mono border ${getStatusColor(project.status)}`}>
                    {project.status || 'view on GitHub'}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-medium text-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a2.862 2.862 0 0 0-2.012-2.025C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.486.616A2.862 2.862 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.862 2.862 0 0 0 2.012 2.025c1.981.616 9.486.616 9.486.616s7.505 0 9.486-.616a2.862 2.862 0 0 0 2.012-2.025C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube video
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium text-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn Post
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Column - Media & Description */}
                <div className="space-y-6">
                  {/* Project Media */}
                  <div className="relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700/50">
                    {/* AI Generated Info Icon */}
                    <div className="absolute top-3 right-3 z-10 group">
                      <div className="relative">
                        <div className="w-8 h-8 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/50 shadow-lg shadow-purple-400/30 animate-pulse cursor-help">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute right-0 top-10 w-64 p-3 bg-black/90 backdrop-blur-sm border border-purple-400/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 pointer-events-none z-20">
                          <p className="text-sm text-purple-200 font-medium mb-1">AI-Generated Media</p>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            These images and videos are AI-generated for visual representation and do not depict the actual project interface.
                          </p>
                          {/* Arrow */}
                          <div className="absolute -top-2 right-6 w-4 h-4 bg-black/90 border-l border-t border-purple-400/30 transform rotate-45"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="aspect-video">
                      {project.hoverVideo ? (
                        <video
                          src={project.hoverVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to still image if video fails to load
                            e.target.style.display = 'none'
                            const img = document.createElement('img')
                            img.src = project.stillImage || '/assets/placeholder-project.png'
                            img.alt = project.name
                            img.className = 'w-full h-full object-cover'
                            e.target.parentNode.appendChild(img)
                          }}
                        />
                      ) : (
                        <img
                          src={project.stillImage}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/assets/placeholder-project.png'
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-400">Project Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.fullDescription || project.description || 'No detailed description available.'}
                    </p>
                  </div>
                </div>

                {/* Right Column - Technical Details */}
                <div className="space-y-6">
                  
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {(project.techStack || []).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features/Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metrics */}
                  {project.metrics && Object.keys(project.metrics).length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Project Metrics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-800/30 border border-gray-600/30 rounded-lg p-4 text-center"
                          >
                            <div className="text-2xl font-bold text-white mb-1">{value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700/50 bg-gray-900/30">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400 font-mono">
                  PROJECT_ID: {project.id?.toUpperCase() || 'UNKNOWN'}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">SYSTEM_OPERATIONAL</span>
                </div>
              </div>
            </div>

            {/* Floating scan lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(64, 255, 218, 0.1) 2px, rgba(64, 255, 218, 0.1) 4px)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
