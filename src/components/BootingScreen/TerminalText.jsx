import { motion, AnimatePresence } from 'framer-motion'

const TerminalText = ({ lines, currentLineIndex }) => {
  return (
    <div className="font-mono space-y-3">
      <AnimatePresence>
        {lines.slice(0, currentLineIndex).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="text-base md:text-lg flex items-center"
          >
            <span className="text-green-400 mr-2 font-bold">$</span>
            <span className="text-white">{line}</span>
            {/* Completion indicator */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="ml-2 text-green-400"
            >
              ✓
            </motion.span>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Active line with typing cursor */}
      {currentLineIndex < lines.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-base md:text-lg flex items-center"
        >
          <span className="text-green-400 mr-2 font-bold">$</span>
          <span className="text-white">{lines[currentLineIndex]}</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-5 bg-green-400 ml-1 inline-block"
          />
        </motion.div>
      )}
      
      {/* Final completion state */}
      {currentLineIndex >= lines.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 space-y-4"
        >
          {/* System ready indicator */}
          <div className="flex items-center justify-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full"
            />
            <span className="text-green-400 font-bold text-lg">SYSTEM READY</span>
          </div>
          
          {/* Boot completion message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-2"
          >
            <div className="text-white text-lg font-medium">
              Boot sequence complete
            </div>
            <div className="text-green-400/70 text-sm">
              Launching cosmic interface in 3... 2... 1...
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="h-1 bg-green-900/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default TerminalText
