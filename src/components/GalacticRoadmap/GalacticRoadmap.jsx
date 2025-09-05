import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const GalacticRoadmap = () => {
  const [activeNode, setActiveNode] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef(null)

  // Roadmap nodes representing your galactic journey
const roadmapNodes = [
  {
    id: 'launchpad',
    title: 'Launchpad',
    subtitle: 'University of Amsterdam (AI)',
    period: '2023 – 2024',
    description: 'Studied Artificial Intelligence with a strong programming and data foundation; completed first year before pivoting fully to cybersecurity.',
    achievements: [
      'Solid grounding in AI/ML fundamentals',
      'Strengthened Python and full-stack basics',
      'Defined security-focused career direction',
      'Built early personal projects'
    ],
    techStack: ['Python', 'Data', 'ML Basics', 'Web Fundamentals', 'Documentation'],
    coordinates: { x: 10, y: 50 },
    size: 'large',
    glowColor: 'from-blue-400 to-cyan-400',
    icon: '🌑'
  },
  {
    id: 'first-orbit',
    title: 'First Orbit',
    subtitle: 'Self-Educated Cybersecurity (HTB & CTFs)',
    period: '2023 – Present',
    description: 'Developed hands-on offensive and defensive skills via HackTheBox labs and regular CTF participation.',
    achievements: [
      'HackTheBox: Hacker rank',
      'Built repeatable pentest methodology',
      'Web app security and privilege escalation',
      'Evidence-driven note-taking and reporting'
    ],
    techStack: ['Linux', 'Burp Suite', 'Metasploit', 'Web Security', 'CTFs'],
    coordinates: { x: 25, y: 30 },
    size: 'medium',
    glowColor: 'from-purple-400 to-pink-400',
    icon: '🚀'
  },
  {
    id: 'cosmic-shift',
    title: 'Cosmic Shift',
    subtitle: 'Amsterdam University of Applied Sciences (Cybersecurity)',
    period: '2024 – Present',
    description: 'Pursuing a Cybersecurity bachelor with a strong emphasis on secure systems, blue-team basics, and professional documentation.',
    achievements: [
      'Propedeuse (first-year diploma) — 10/10',
      'Collaborative lab work and peer learning',
      'Structured methodology for assessments',
      'Improved executive-level reporting'
    ],
    techStack: ['Networks', 'Threat Modeling', 'SIEM Basics', 'Documentation', 'Risk'],
    coordinates: { x: 35, y: 60 },
    size: 'large',
    glowColor: 'from-green-400 to-emerald-400',
    icon: '🛰️'
  },
  {
    id: 'leadership-orbit',
    title: 'Leadership Orbit',
    subtitle: 'Workshops & Community',
    period: '2024 – Present',
    description: 'Delivered cybersecurity workshops and knowledge-sharing sessions; focused on clear demos, reproducible steps, and good evidence practices.',
    achievements: [
      'Multiple student workshops delivered',
      'Live demos with safe, reproducible labs',
      'Mentoring peers on note-taking and reports',
      'Community contributions and collaboration'
    ],
    techStack: ['Teaching', 'Live Demos', 'Report Craft', 'Version Control', 'Collaboration'],
    coordinates: { x: 55, y: 35 },
    size: 'medium',
    glowColor: 'from-orange-400 to-red-400',
    icon: '🎯'
  },
  {
    id: 'conference-command',
    title: 'Conference Command',
    subtitle: 'Freelance Web Development',
    period: '2024 – Present',
    description: 'Built security-aware, responsive sites and tools for small businesses (Horologic, Wiedijk Woning & Project Stoffering).',
    achievements: [
      'Horologic: PHP app for watch management & invoicing',
      'Wiedijk: responsive site with clean UX',
      'Deployed with attention to security and performance',
      'Client collaboration and iterative delivery'
    ],
    techStack: ['PHP', 'JavaScript', 'HTML5/CSS3', 'NGINX', 'Git/GitHub'],
    coordinates: { x: 75, y: 55 },
    size: 'large',
    glowColor: 'from-purple-400 to-violet-400',
    icon: '👥'
  },
  {
    id: 'systems-forge',
    title: 'Systems Forge',
    subtitle: 'Certifications & Pro Labs',
    period: '2024 – 2025',
    description: 'Validated skills with targeted certifications and deeper lab practice to refine methodology and speed.',
    achievements: [
      'HTB CJCA certification',
      'Dante Pro Lab certificate',
      'P.O.O certificate',
      'Faster, more reliable exploitation playbooks'
    ],
    techStack: ['Pentest Methodology', 'Privilege Escalation', 'AD Basics', 'Evidence Collection', 'QA'],
    coordinates: { x: 65, y: 25 },
    size: 'medium',
    glowColor: 'from-yellow-400 to-orange-400',
    icon: '🪐'
  },
  {
    id: 'architects-orbit',
    title: 'Architects Orbit',
    subtitle: 'Pentesting, SIEM & Reporting Excellence',
    period: '2025',
    description: 'Focusing on end-to-end attack chains, SIEM alert validation, and commercial-grade reporting for professional engagements.',
    achievements: [
      'Clear attack-path diagrams and narratives',
      'SIEM alert triage and validation workflows',
      'Executive summaries and remediation roadmaps',
      'High-quality, reproducible evidence packs'
    ],
    techStack: ['Burp Suite', 'Metasploit', 'Linux', 'Pytest/Unittest (evidence)', 'Report Engineering'],
    coordinates: { x: 90, y: 30 },
    size: 'xlarge',
    glowColor: 'from-violet-400 to-purple-400',
    icon: '🌌'
  }
];


  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated connection lines between nodes
  const ConnectionLine = ({ from, to, delay = 0 }) => {
    const fromNode = roadmapNodes.find(node => node.id === from)
    const toNode = roadmapNodes.find(node => node.id === to)

    if (!fromNode || !toNode) return null

    return (
      <motion.line
        x1={`${fromNode.coordinates.x}%`}
        y1={`${fromNode.coordinates.y}%`}
        x2={`${toNode.coordinates.x}%`}
        y2={`${toNode.coordinates.y}%`}
        stroke="url(#connectionGradient)"
        strokeWidth="2"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, delay }}
        className="opacity-60"
      />
    )
  }

  ConnectionLine.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    delay: PropTypes.number
  }

  // Individual roadmap node component
  const RoadmapNode = ({ node, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    const sizeClasses = {
      medium: 'w-16 h-16',
      large: 'w-20 h-20',
      xlarge: 'w-24 h-24'
    }

    return (
      <motion.div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Node Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${node.glowColor} opacity-20 blur-lg`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Main Node */}
        <motion.div
          className={`relative ${sizeClasses[node.size]} rounded-full bg-gradient-to-r ${node.glowColor} p-1 shadow-2xl`}
          whileHover={{
            scale: 1.15,
            boxShadow: `0 0 30px rgba(${node.glowColor.includes('blue') ? '6, 182, 212' :
              node.glowColor.includes('purple') ? '147, 51, 234' :
                node.glowColor.includes('green') ? '34, 197, 94' :
                  node.glowColor.includes('yellow') ? '251, 146, 60' :
                    node.glowColor.includes('red') ? '239, 68, 68' : '139, 92, 246'}, 0.6)`,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-2xl">{node.icon}</span>
          </div>
        </motion.div>

        {/* Node Label */}
        <motion.div
          className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.3 + 0.5 }}
        >
          <motion.div
            className="bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 py-2 whitespace-nowrap"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(6, 182, 212, 0.6)',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-sm font-bold text-cyan-400">{node.title}</h3>
            <p className="text-xs text-gray-300">{node.period}</p>
          </motion.div>
        </motion.div>

        {/* Orbital Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/20"
          style={{
            width: `${sizeClasses[node.size] === 'w-16 h-16' ? '80px' :
              sizeClasses[node.size] === 'w-20 h-20' ? '100px' : '120px'}`,
            height: `${sizeClasses[node.size] === 'w-16 h-16' ? '80px' :
              sizeClasses[node.size] === 'w-20 h-20' ? '100px' : '120px'}`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            rotate: 360,
            borderColor: isHovered ? 'rgba(6, 182, 212, 0.6)' : 'rgba(6, 182, 212, 0.2)',
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
        />

        {/* Hover Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 border border-cyan-400/50 rounded-lg px-3 py-2 text-xs text-cyan-400 whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{ zIndex: 1000 }}
            >
              Click to explore {node.subtitle}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-cyan-400/50 rotate-45 -mt-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  RoadmapNode.propTypes = {
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      glowColor: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-black"
      id="roadmap"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Flying Rocket Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            style={{ filter: 'hue-rotate(180deg) brightness(0.7)' }}
            initial={{ scale: 1.1 }}
            animate={{
              scale: [1.1, 1.05, 1.1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <source src="/assets/contact-page-background-video.mp4" type="video/mp4" />
          </motion.video>

          {/* Video overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Starfield */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Cosmic Nebula Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl" />
        </div>

        {/* Flying Rocket Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rocket 1 - Top to bottom diagonal */}
          <motion.div
            className="absolute text-2xl opacity-60"
            initial={{ x: '-100px', y: '-100px', rotate: 45 }}
            animate={{
              x: 'calc(100vw + 100px)',
              y: 'calc(100vh + 100px)',
              rotate: 45
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 0
            }}
          >
            🚀
          </motion.div>

          {/* Rocket 2 - Bottom to top diagonal */}
          <motion.div
            className="absolute text-xl opacity-40"
            initial={{ x: '-80px', y: 'calc(100vh + 80px)', rotate: -135 }}
            animate={{
              x: 'calc(100vw + 80px)',
              y: '-80px',
              rotate: -135
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 8
            }}
          >
            🚀
          </motion.div>

          {/* Rocket 3 - Left to right */}
          <motion.div
            className="absolute text-lg opacity-50 top-1/3"
            initial={{ x: '-60px', rotate: 90 }}
            animate={{
              x: 'calc(100vw + 60px)',
              rotate: 90
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 4
            }}
          >
            🚀
          </motion.div>
        </div>
      </div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="inline-block mb-4 sm:mb-6"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-violet-400/10 to-purple-400/10 border border-violet-400/30 rounded-full px-4 sm:px-6 py-2">
            <span className="text-violet-400 font-mono text-xs sm:text-sm">JOURNEY.LOG</span>
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 text-violet-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-violet-400 sm:via-cyan-400 sm:to-green-400">
          Galactic Roadmap
        </h2>




        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          Navigate through the cosmic milestones of my technical evolution — from AI foundations to cybersecurity expertise and web development
        </p>

        {/* Mission Status */}
        <motion.div
          className="mt-6 sm:mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-black/80 border border-green-500/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center space-x-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">MISSION_STATUS: ACTIVE</span>
              </div>
              <div className="text-gray-400 hidden sm:block">|</div>
              <div className="text-cyan-400 text-center sm:text-left mt-1 sm:mt-0">NODES_EXPLORED: {roadmapNodes.length}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Roadmap Visualization */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full hidden md:block">
          {/* SVG for connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Connection lines between nodes */}
            <ConnectionLine from="launchpad" to="first-orbit" delay={1} />
            <ConnectionLine from="first-orbit" to="cosmic-shift" delay={1.5} />
            <ConnectionLine from="cosmic-shift" to="leadership-orbit" delay={2} />
            <ConnectionLine from="leadership-orbit" to="systems-forge" delay={2.5} />
            <ConnectionLine from="systems-forge" to="conference-command" delay={3} />
            <ConnectionLine from="conference-command" to="architects-orbit" delay={3.5} />
          </svg>

          {/* Roadmap Nodes */}
          {roadmapNodes.map((node, index) => (
            <RoadmapNode key={node.id} node={node} index={index} />
          ))}
        </div>

        {/* Mobile Timeline Alternative */}
        <div className="block md:hidden mt-12">
          <div className="space-y-8">
            {roadmapNodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="relative flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < roadmapNodes.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-purple-400 opacity-60" />
                )}

                {/* Node icon */}
                <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${node.glowColor} p-1 shadow-lg flex-shrink-0`}>
                  <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                    <span className="text-lg">{node.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 bg-black/80 border border-cyan-400/30 rounded-lg p-4 cursor-pointer hover:border-cyan-400/60 transition-all duration-300"
                  onClick={() => setActiveNode(node)}
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-1">{node.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{node.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{node.description}</p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {node.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800/60 rounded text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                    {node.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/60 rounded text-xs text-gray-400">
                        +{node.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Node Details Modal */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveNode(null)}
          >
            <motion.div
              className="bg-black/90 border border-cyan-400/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeNode.glowColor} p-1`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-xl">{activeNode.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeNode.title}</h3>
                    <p className="text-cyan-400">{activeNode.subtitle}</p>
                    <p className="text-gray-400 text-sm">{activeNode.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveNode(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{activeNode.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Mission Achievements</h4>
                <div className="grid gap-2">
                  {activeNode.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technology Arsenal</h4>
                <div className="flex flex-wrap gap-2">
                  {activeNode.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-sm text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
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

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-6 lg:left-10 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-violet-400/50" />
        <div className="absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-violet-400/50" />
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-violet-400/50" />
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-10 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-violet-400/50" />
      </div>
    </section>
  )
}

export default GalacticRoadmap
