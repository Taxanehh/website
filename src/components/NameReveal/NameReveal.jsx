import { useEffect } from 'react'
import { motion } from 'framer-motion'

const NameReveal = ({ onComplete }) => {
  useEffect(() => {
    // Auto-transition after animation completes
    const timer = setTimeout(() => {
      onComplete()
    }, 4000) // 4 seconds total for the name reveal
    
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-40 bg-cosmic-black flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle starfield */}
        <div className="starfield opacity-30" />
        
        {/* Central energy focus point */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-cosmic-glow/20 to-transparent"
        />
      </div>

      {/* Name Animation */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.8,
            type: "spring",
            stiffness: 60,
            damping: 15
          }}
          className="space-y-4"
        >
          {/* Main Name */}
          <motion.h1
            className="text-8xl md:text-9xl font-bold tracking-wider"
            style={{
              background: 'linear-gradient(45deg, #64ffda, #ffffff, #64ffda)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            TAXANE
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl text-cosmic-glow/80 font-mono tracking-widest"
          >
            INITIALIZING COSMIC INTERFACE
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center space-x-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-cosmic-glow rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Energy particles floating around the name */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-glow rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom transition indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cosmic-glow/60 font-mono text-sm"
      >
        ENTERING SYSTEM...
      </motion.div>
    </motion.div>
  )
}

export default NameReveal
