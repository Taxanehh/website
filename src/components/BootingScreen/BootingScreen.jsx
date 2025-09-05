import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import TerminalText from './TerminalText'
import Earth3D from './Earth3D'

const BootingScreen = ({ onComplete, userData }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const terminalSequence = userData.terminalSequence
    
    if (currentLineIndex < terminalSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
      }, 800) // Faster, more responsive timing
      
      return () => clearTimeout(timer)
    } else if (!isComplete) {
      // All lines completed, wait 1.5 seconds then transition
      const finalTimer = setTimeout(() => {
        setIsComplete(true)
        onComplete()
      }, 1500)
      
      return () => clearTimeout(finalTimer)
    }
  }, [currentLineIndex, isComplete, onComplete, userData.terminalSequence])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-30 bg-cosmic-black overflow-hidden"
    >
      {/* Enhanced 3D Background with Earth Globe */}
      <div className="absolute inset-0 opacity-40">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ff41" />
            <pointLight position={[-10, -10, -10]} intensity={0.2} color="#64ffda" />
            <Earth3D />
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Futuristic Terminal Interface */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-8">
          {/* Terminal Window Frame */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20"
          >
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 px-4 py-2 border-b border-green-500/30">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-green-400 font-mono text-sm">
                  COSMIC_OS_v2.1 - System Boot Sequence
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 min-h-[300px]">
              <TerminalText 
                lines={userData.terminalSequence}
                currentLineIndex={currentLineIndex}
              />
            </div>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">
                SYSTEM STATUS: ONLINE
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced cosmic grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </motion.div>
  )
}

// Particle field component for background ambiance
const ParticleField = () => {
  const particleCount = 100
  const particles = []
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]}
      >
        <sphereGeometry args={[0.01, 4, 4]} />
        <meshBasicMaterial color="#64ffda" transparent opacity={Math.random() * 0.5} />
      </mesh>
    )
  }
  
  return <group>{particles}</group>
}

export default BootingScreen
