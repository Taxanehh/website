import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroVideo from './components/IntroVideo/IntroVideo'
import NameReveal from './components/NameReveal/NameReveal'
import BootingScreen from './components/BootingScreen/BootingScreen'
import HeroSection from './components/HeroSection/HeroSection'
import BentoGrid from './components/ProjectSection/BentoGrid'
import TechnicalArsenal from './components/TechnicalArsenal/TechnicalArsenal'
import GalacticRoadmap from './components/GalacticRoadmap/GalacticRoadmap'
import ProfessionalInvolvements from './components/ProfessionalInvolvements/ProfessionalInvolvements'
import ContactSection from './components/ContactSection/ContactSection'
import { userData } from './data/userData'

function App() {
  const [currentSection, setCurrentSection] = useState('video') // Start with video
  const [showSkipButton, setShowSkipButton] = useState(true)

  // Handle section transitions
  const handleSectionComplete = (nextSection) => {
    setCurrentSection(nextSection)
  }

  const skipToHome = () => {
    setCurrentSection('home')
    setShowSkipButton(false)
  }

  useEffect(() => {
    // Hide skip button after intro sequence
    if (currentSection === 'home') {
      setShowSkipButton(false)
    }
  }, [currentSection])

  return (
    <div className="min-h-screen bg-cosmic-black text-white overflow-x-hidden">
      {/* Skip Button - Only show during intro sequence */}
      <AnimatePresence>
        {showSkipButton && currentSection !== 'home' && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={skipToHome}
            className="fixed top-6 right-6 z-50 px-4 py-2 bg-cosmic-purple/80 hover:bg-cosmic-purple border border-cosmic-glow rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-glow/30"
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section Transitions */}
      <AnimatePresence mode="wait">
        {currentSection === 'video' && (
          <IntroVideo 
            key="video"
            onComplete={() => handleSectionComplete('nameReveal')}
            userData={userData}
          />
        )}

        {currentSection === 'nameReveal' && (
          <NameReveal 
            key="nameReveal"
            onComplete={() => handleSectionComplete('booting')}
            userData={userData}
          />
        )}
        
        {currentSection === 'booting' && (
          <BootingScreen 
            key="booting"
            onComplete={() => handleSectionComplete('home')}
            userData={userData}
          />
        )}
        
        {currentSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen"
          >
            {/* Starfield Background */}
            <div className="starfield" />
            
            {/* Main Content */}
            <HeroSection userData={userData} />
            <TechnicalArsenal userData={userData} />
            <GalacticRoadmap />
            <BentoGrid userData={userData} />
            <ProfessionalInvolvements userData={userData} />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
