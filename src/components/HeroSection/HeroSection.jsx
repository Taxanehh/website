import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = ({ userData }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [terminalLines, setTerminalLines] = useState([])
  const [showInterface, setShowInterface] = useState(false)
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(false)
  const [terminalHeight, setTerminalHeight] = useState(320) // 20rem = 320px
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStart, setResizeStart] = useState({ y: 0, startHeight: 0 })
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  // Update time every second for live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulate terminal startup sequence
  useEffect(() => {
    const startupSequence = [
      "$ whoami",
      userData?.personal?.name || "Paul Stokreef"
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < startupSequence.length) {
        setTerminalLines(prev => [...prev, startupSequence[index]])
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowInterface(true), 1000)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [userData])

  // Command processing function
  const processCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    const responses = {
      '/help': [
        'Available commands:',
        '  /help     - Show this help menu',
        '  /about    - Learn more about Paul',
        '  /skills   - View technical skills',
        '  /projects - Show recent projects',
        '  /roadmap  - View galactic journey',
        '  /contact  - Get contact information',
        '  /joke     - Random dad joke (proceed with caution)',
        '  /clear    - Clear terminal (also: clear, /cls, cls)',
        '  /time     - Show current time',
        '  /status   - System status'
            ],
      '/about': [
        'Paul Stokreef - Cybersecurity Student & Developer-in-Training',
        'CTF Enthusiast & Security Explorer',
        '',
        'Passionate about building secure solutions that',
        'bridge technology, problem-solving, and human impact.',
        '',
        'Fun fact: Nothing beats the dopamine rush of solving a CTF 🕵️‍♂️'
      ],
      '/skills': [
        'Technical Arsenal:',
        '• Languages: Python, SQL, JavaScript, TypeScript, HTML5, CSS3, PHP',
        '• Frameworks: Flask, React.js, Node.js, SQL Alchemy',
        '• Databases: SQL, SQLite',
        '• Tools: Linux, Windows, Git/GitHub, NGINX, Burp Suite, Metasploit, Figma',
        '• Testing: Pytest, Unittest',
        '• Methodologies: Agile, Scrum, Version Control, Code Review, Documentation',
        '',
        'Current superpower: Exploiting and patching vulnerabilities ⚡'
      ],
      '/projects': [
        'Personal Projects (TBA):',
        '• Security labs, CTF writeups, and freelance web apps',
        '',
        'Recent freelance work:',
        '• Horologic - Watch management & invoicing system (PHP)',
        '• Wiedijk Stoffering - Responsive portfolio website',
        '',
        'More projects will be announced soon... 🚀'
      ],
      '/roadmap': [
        'Galactic Journey Initiated 🌌',
        '',
        'Navigating to roadmap section...',
        'Mission timeline loading...',
        '',
        'From AI foundations to cybersecurity expertise — explore my path! 🚀'
      ],
      '/contact': [
        'How to reach me:',
        '• GitHub: https://github.com/paulstokreef',
        '• LinkedIn: https://www.linkedin.com/in/paul-stokreef/',
        '• Email: Professional inquiries welcome',
        '',
        'I respond faster than most firewalls block scans 📧'
      ],
      '/joke': [
        'Why did the hacker break up with the developer?',
        '',
        'Because they just couldn’t commit 😅',
        '',
        '...I\'ll see myself out 🚪'
      ],
      '/time': [`Current time: ${new Date().toLocaleString()}`],
      '/status': [
        'System Status: ✅ OPERATIONAL',
        'Coffee Level: ☕ CRITICAL BUT MANAGED',
        'Bug Count: 🐛 PATCHING...',
        'Motivation: 🚀 SKY-HIGH',
        'CTF Energy: 🔋 ALWAYS FULL'
      ],
      '/clear': ['clear'],
      '/cls': ['clear'],
      'clear': ['clear'],
      'cls': ['clear']
    }

    // Check if user forgot the "/" prefix for valid commands
    const validCommands = ['help', 'about', 'skills', 'projects', 'roadmap', 'contact', 'joke', 'time', 'status']
    const commandWithoutSlash = command.replace(/^\//, '') // Remove leading slash if exists
    
    if (!command.startsWith('/') && validCommands.includes(commandWithoutSlash)) {
      return [
        `Did you mean "/${commandWithoutSlash}"? 🤔`,
        `Tip: Commands need a "/" prefix. Try "/${commandWithoutSlash}" instead!`
      ]
    }

    const funnyResponses = [
      "I'm not going to lie, I didn't see this question coming 😂, ask another one",
      "See, I'm not an AI, Ehiane just built me for decoration... if you want smarter answers, pay for my OpenAI API key 💸",
      "Error 404: Sense of humor not found. Try /joke instead 🤖",
      "I'm just a humble terminal, not a search engine. Try /help for things I actually know 🤷‍♂️",
      "That's not in my programming manual! Type /help for commands that won't break me 🔧",
      "Did you try turning it off and on again? No? Well, neither did I 🔄",
      "I'm fluent in Python, JavaScript, and sarcasm. Your command speaks none of these 😏",
      "My creator taught me to code, not to read minds. /help might help though 🧠"
    ]

    if (responses[command]) {
      return responses[command]
    } else if (command === '') {
      return []
    } else {
      const randomResponse = funnyResponses[Math.floor(Math.random() * funnyResponses.length)]
      return [randomResponse]
    }
  }

  // Handle command submission
  const handleCommandSubmit = (e) => {
    e.preventDefault()
    if (!currentCommand.trim()) return

    const newLines = [...terminalLines]
    newLines.push(`$ ${currentCommand}`)
    
    const response = processCommand(currentCommand)
    
    // Handle special commands that trigger actions
    if (currentCommand.toLowerCase().trim() === '/roadmap') {
      setTimeout(() => {
        const roadmapSection = document.getElementById('roadmap')
        if (roadmapSection) {
          roadmapSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 1000) // Delay to show the response first
    }
    
    if (response[0] === 'clear') {
      setTerminalLines([
        "$ whoami", 
        userData?.personal?.name || "Paul Stokreef"
      ])
    } else {
      // Add a separator line before the response (except for empty responses)
      if (response.length > 0) {
        newLines.push('--------------------------------------') // Visual separator
      }
      response.forEach(line => newLines.push(line))
      // Add another separator line after the response
      if (response.length > 0) {
        newLines.push('--------------------------------------') // Visual separator
      }
      setTerminalLines(newLines)
    }

    // Add to command history
    if (currentCommand.trim() && !commandHistory.includes(currentCommand)) {
      setCommandHistory(prev => [...prev, currentCommand])
    }
    
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(commandHistory[newIndex])
        }
      }
    }
  }

  // Handle terminal resize
  const handleResizeStart = (e) => {
    e.preventDefault()
    setIsResizing(true)
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
    setResizeStart({
      y: clientY,
      startHeight: terminalHeight
    })
  }

  const handleResizeMove = (e) => {
    if (!isResizing) return
    e.preventDefault()
    
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
    const deltaY = clientY - resizeStart.y
    const newHeight = resizeStart.startHeight + deltaY
    
    // Constrain height between 200px and 600px
    const constrainedHeight = Math.max(200, Math.min(600, newHeight))
    setTerminalHeight(constrainedHeight)
  }

  const handleResizeEnd = () => {
    setIsResizing(false)
  }

  // Add event listeners for resize
  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e) => handleResizeMove(e)
      const handleMouseUp = () => handleResizeEnd()
      const handleTouchMove = (e) => handleResizeMove(e)
      const handleTouchEnd = () => handleResizeEnd()

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isResizing, resizeStart, terminalHeight])

  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects')
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('professional')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/Hero_background_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Terminal Interface */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div 
          className={`grid grid-cols-1 gap-8 items-center transition-all duration-300 ${isTerminalExpanded ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}
          layout
        >
          
          {/* Left Side - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`order-2 lg:order-1 ${isTerminalExpanded ? 'w-full max-w-4xl mx-auto' : ''}`}
          >
            <div className={`bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ${isTerminalExpanded ? 'shadow-green-500/30 border-green-400/50' : 'shadow-green-500/20'} relative`}>
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 px-4 py-3 border-b border-green-500/30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-green-400 font-mono text-sm">
                    zsh - taxane@cosmic-os: ~
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-green-400/70 font-mono text-xs">
                    {currentTime.toLocaleTimeString()}
                  </div>
                  <motion.button
                    onClick={() => {
                      if (isTerminalExpanded) {
                        setTerminalHeight(320) // Reset to default height
                        setIsTerminalExpanded(false)
                      } else {
                        setTerminalHeight(500) // Expand to larger height
                        setIsTerminalExpanded(true)
                      }
                    }}
                    className="text-green-400/70 hover:text-green-400 transition-colors p-1 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={isTerminalExpanded ? "Collapse terminal" : "Expand terminal"}
                  >
                    {isTerminalExpanded ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Terminal Content */}
              <div 
                ref={terminalRef}
                style={{ height: `${terminalHeight}px` }}
                className="p-6 overflow-y-auto transition-all duration-200 ease-out"
              >
                <div className="font-mono text-sm space-y-1">
                  <AnimatePresence>
                    {terminalLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                          ${typeof line === 'string' && line.startsWith('$') ? 'text-green-400' : 'text-white'}
                          ${line === '' ? 'h-4' : ''}
                        `}
                      >
                        {line || '\u00A0'}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Interactive Command Input */}
                  {terminalLines.length >= 2 && (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      onSubmit={handleCommandSubmit}
                      className="flex items-center space-x-2 mt-4"
                    >
                      <span className="text-green-400">$</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={currentCommand}
                        onChange={(e) => setCurrentCommand(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        className="flex-1 bg-transparent text-white border-none outline-none"
                        placeholder="Type /help for commands..."
                        autoComplete="off"
                      />
                      <motion.span
                        animate={{ opacity: isInputFocused ? [1, 0, 1] : 1 }}
                        transition={{ repeat: isInputFocused ? Infinity : 0, duration: 1 }}
                        className="text-green-400"
                      >
                        _
                      </motion.span>
                    </motion.form>
                  )}
                  
                  {/* Social Links Buttons */}
                  {terminalLines.length >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="flex space-x-4 mt-6 pt-4 border-t border-green-500/30"
                    >
                      <motion.a
                        href={userData?.personal?.github || "https://github.com/ehiane"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600/50 hover:border-green-400/50 rounded-lg transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                      </motion.a>

                      <motion.a
                        href={userData?.personal?.linkedin || "https://www.linkedin.com/in/ehiane-oigiagbe/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-800/50 hover:bg-blue-700/70 border border-blue-600/50 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-blue-300 group-hover:text-white transition-colors">LinkedIn</span>
                      </motion.a>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Resize Handle */}
              <div
                onMouseDown={handleResizeStart}
                onTouchStart={handleResizeStart}
                className={`absolute bottom-0 right-0 w-4 h-4 cursor-se-resize group ${isResizing ? 'bg-green-400/30' : 'hover:bg-green-400/20'} transition-colors duration-200`}
                style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }}
                title="Drag to resize terminal"
              >
                {/* Resize icon - three diagonal lines */}
                <div className="absolute bottom-1 right-1 opacity-50 group-hover:opacity-80 transition-opacity">
                  <div className="w-0.5 h-2 bg-green-400 rotate-45 absolute bottom-0 right-0"></div>
                  <div className="w-0.5 h-1.5 bg-green-400 rotate-45 absolute bottom-0.5 right-0.5"></div>
                  <div className="w-0.5 h-1 bg-green-400 rotate-45 absolute bottom-1 right-1"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - HUD Interface */}
          {!isTerminalExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="order-1 lg:order-2 space-y-6 mt-20 sm:mt-10 lg:mt-0"
            >
            {/* Main Identity Card */}
            <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 relative overflow-hidden mt-16 sm:mt-20 lg:mt-8">
              {/* Animated corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-mono text-sm">OPERATOR_ID</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-xs">ONLINE</span>
                  </div>
                </div>

                {/* Astronaut Portrait */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-400/30">
                    <img
                      src="/assets/astronaut-portrait.png"
                      alt="Ehiane Oigiagbe - Space Explorer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a gradient background if image fails to load
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #64ffda 0%, #16213e 100%)'
                      }}
                    />
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                  <span className="text-white">Hi, I'm </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                    {userData?.personal?.name?.split(' ')[0] || 'Paul'}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-4 text-center">
                  {userData?.personal?.title || 'Full-Stack Engineer'}. {userData?.personal?.subtitle || 'AI Explorer. Systems Thinker.'}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <motion.div 
                    onClick={scrollToExperience}
                    className="bg-green-500/10 border border-green-500/30 rounded p-3 cursor-pointer transition-all duration-300 hover:bg-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/20 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-green-400 font-mono text-xs group-hover:text-green-300 transition-colors">EXPERIENCE</div>
                    <div className="text-white font-bold group-hover:text-green-100 transition-colors">2+ Years </div>
                    <div className="text-white font-bold group-hover:text-green-100 transition-colors">(Personal) </div>
                    <motion.div
                      className="text-green-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Click to explore →
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    onClick={scrollToProjects}
                    className="bg-cyan-500/10 border border-cyan-500/30 rounded p-3 cursor-pointer transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-cyan-400 font-mono text-xs group-hover:text-cyan-300 transition-colors">PROJECTS</div>
                    <div className="text-white font-bold group-hover:text-cyan-100 transition-colors">Some active, to be announced</div>
                    <motion.div
                      className="text-cyan-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Click to explore →
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Command Interface */}
            <AnimatePresence>
              {showInterface && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  {/* Mission Statement */}
                  <div className="bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-yellow-400 font-mono text-xs">MISSION_BRIEF</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {userData?.personal?.description || "Building innovative solutions that bridge technology and human experience."}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={scrollToProjects}
                      className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 rounded-lg border border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
                    >
                      <span className="text-white font-medium">EXPLORE_PROJECTS</span>
                      <motion.span
                        className="text-white"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        →
                      </motion.span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-3 bg-black/50 hover:bg-black/70 border border-gray-500/30 hover:border-gray-400 rounded-lg transition-all duration-300">
                      <a download href="/assets/Paul Stokreef.pdf" className="text-gray-300 font-mono text-sm">DOWNLOAD_CV</a>
                      <span className="text-gray-400">↓</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top System Bar */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded px-4 py-2">
            <span className="text-cyan-400 font-mono text-xs">SYSTEM_STATUS: OPERATIONAL</span>
          </div>
          <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded px-4 py-2">
            <span className="text-green-400 font-mono text-xs">
              {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Floating Data Points */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Scan Lines Effect */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)',
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-cyan-400 font-mono text-xs">SCROLL_TO_EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default HeroSection
