import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BentoCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && videoLoaded) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(console.log)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
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
    <motion.div
      className="relative h-full bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 30px rgba(64, 255, 218, 0.3)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        {/* Static Image */}
        <img
          src={project.stillImage}
          alt={project.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Hover Video */}
        <video
          ref={videoRef}
          src={project.hoverVideo}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Top Section - Status & Tech Icons */}
        <div className="flex items-start justify-between">
          {project.status && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`px-3 py-1 rounded-full text-xs font-mono border ${getStatusColor(project.status)}`}
            >
              {project.status}
            </motion.div>
          )}
          
          {/* Tech Stack Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex space-x-1"
          >
            {project.techStack.slice(0, 3).map((tech, index) => (
              <div
                key={tech}
                className="w-2 h-2 rounded-full bg-cyan-400/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Project Info */}
        <div className="space-y-2">
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
            layoutId={`title-${project.id}`}
          >
            {project.name}
          </motion.h3>
          
          <motion.p
            className="text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300"
            layoutId={`description-${project.id}`}
          >
            {project.description}
          </motion.p>

          {/* Metrics Display */}
          {project.metrics && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 text-xs font-mono"
            >
              {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                <div key={key} className="text-cyan-400">
                  <span className="text-gray-400">{key.toUpperCase()}:</span> {value}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="bg-black/90 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2 shadow-lg shadow-cyan-400/20">
              <div className="text-cyan-400 font-mono text-sm whitespace-nowrap">
                CLICK_TO_EXPLORE: {project.name.toUpperCase()}
              </div>
              
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyan-400/50"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scan Lines Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(64, 255, 218, 0.1) 2px, rgba(64, 255, 218, 0.1) 4px)',
          }}
        />
      </div>

      {/* Corner Brackets */}
      <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
      </div>

      {/* Loading Indicator */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}

export default BentoCard
