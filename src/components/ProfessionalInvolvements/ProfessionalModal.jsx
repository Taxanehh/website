import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const ProfessionalModal = ({ involvement, isOpen, onClose }) => {
  if (!involvement) return null

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
        return 'from-blue-400 to-cyan-400'
      case 'professional':
        return 'from-purple-400 to-pink-400'
      default:
        return 'from-orange-400 to-red-400'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/90 border border-orange-400/30 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(involvement.type)} p-1`}>
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-xl">{getTypeIcon(involvement.type)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{involvement.name}</h3>
                  <p className="text-orange-400 font-semibold">{involvement.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-gray-400 text-sm">{involvement.company}</p>
                    <span className="text-gray-500">•</span>
                    <p className="text-gray-400 text-sm">{involvement.period}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Overview</h4>
              <p className="text-gray-300 leading-relaxed">{involvement.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Highlights</h4>
              <div className="grid gap-3">
                {involvement.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {involvement.achievements && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Achievements</h4>
                <div className="grid gap-3">
                  {involvement.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-green-800/20 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {involvement.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-sm text-gray-300 font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.5 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

ProfessionalModal.propTypes = {
  involvement: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    highlights: PropTypes.array.isRequired,
    achievements: PropTypes.array,
    techStack: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ProfessionalModal
