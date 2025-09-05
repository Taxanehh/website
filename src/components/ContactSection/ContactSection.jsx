import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Discourse Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            style={{ filter: 'hue-rotate(240deg) brightness(0.6) contrast(1.2)' }}
            initial={{ scale: 1.05 }}
            animate={{ 
              scale: [1.05, 1.02, 1.05],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <source src="/assets/discourse.mp4" type="video/mp4" />
          </motion.video>
          
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20" />
        </div>

        {/* Animated starfield */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Cosmic background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(64, 255, 218, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(64, 255, 218, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/30 rounded-full px-6 py-2">
            <span className="text-cyan-400 font-mono text-sm">CONTACT.PROTOCOL</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Let&apos;s Connect
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to explore new opportunities and collaborate on innovative projects? 
          Let&apos;s connect across the digital cosmos.
        </motion.p>

        {/* LinkedIn Connection Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/paul-stokreef/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-2 border-blue-400/30 rounded-2xl font-semibold text-lg text-blue-400 hover:text-white transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-400/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* LinkedIn Icon */}
            <svg 
              className="w-8 h-8 mr-4 relative z-10" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            
            <span className="relative z-10 flex items-center">
              Connect on LinkedIn
              <svg 
                className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Status Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs font-mono">contact_terminal.exe</span>
            </div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">$</span>
                <span className="text-white">status --check-availability</span>
              </div>
              <div className="text-cyan-400">
                ► SYSTEM_STATUS: OPERATIONAL
              </div>
              <div className="text-cyan-400">
                ► RESPONSE_TIME: &lt; 24 hours
              </div>
              <div className="text-cyan-400">
                ► COLLABORATION_MODE: ACTIVE
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-green-400">$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
        <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
      </div>
    </section>
  )
}

export default ContactSection
