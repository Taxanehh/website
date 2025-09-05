import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const ProfessionalCard = ({ involvement, onClick }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'internship':
        return '🏢'
      case 'professional':
        return '💼'
      default:
        return '🚀'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-400/30'
      case 'professional':
        return 'from-purple-500/20 to-pink-500/20 border-purple-400/30'
      default:
        return 'from-orange-500/20 to-red-500/20 border-orange-400/30'
    }
  }

  return (
    <motion.div
      className={`group relative h-80 bg-gradient-to-br ${getTypeColor(involvement.type)} backdrop-blur-sm border rounded-2xl p-6 cursor-pointer overflow-hidden`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{getTypeIcon(involvement.type)}</div>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
              {involvement.name}
            </h3>
            <p className="text-sm text-gray-400">{involvement.company}</p>
          </div>
        </div>
        <div className="text-xs text-orange-400 font-mono bg-orange-400/10 px-2 py-1 rounded">
          {involvement.period}
        </div>
      </div>

      {/* Role */}
      <div className="mb-4">
        <div className="text-cyan-400 font-semibold text-sm mb-1">{involvement.role}</div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {involvement.description}
      </p>

      {/* Tech Stack Preview */}
      <div className="flex flex-wrap gap-1 mb-4">
        {involvement.techStack.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-800/60 text-gray-400 text-xs rounded font-mono"
          >
            {tech}
          </span>
        ))}
        {involvement.techStack.length > 3 && (
          <span className="px-2 py-1 bg-gray-800/60 text-gray-400 text-xs rounded font-mono">
            +{involvement.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center space-x-1 text-orange-400 text-xs font-mono">
          <span>VIEW_DETAILS</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-400/20 to-transparent rounded-bl-full" />
    </motion.div>
  )
}

ProfessionalCard.propTypes = {
  involvement: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default ProfessionalCard
