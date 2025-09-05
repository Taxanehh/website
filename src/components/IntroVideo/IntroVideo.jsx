import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const IntroVideo = ({ onComplete }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    
    if (video) {
      // Auto-play the video
      video.play().catch(console.error)
      
      // Set up completion handler
      const handleVideoEnd = () => {
        setTimeout(() => {
          onComplete()
        }, 500) // Small delay before transition
      }
      
      video.addEventListener('ended', handleVideoEnd)
      
      // Cleanup
      return () => {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-40 bg-cosmic-black"
    >
      {/* Video Container */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/Web_intro_video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/20 to-transparent pointer-events-none" />
      </div>
      
      {/* Loading indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center space-x-2 text-cosmic-glow"
        >
          <div className="w-2 h-2 bg-cosmic-glow rounded-full animate-pulse" />
          <span className="font-mono text-sm">Loading experience...</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default IntroVideo
