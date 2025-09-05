import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

// Import skill icons
import progIcon from '/assets/skils_icons/prog.png'
import frontendIcon from '/assets/skils_icons/frontend.png'
import backendIcon from '/assets/skils_icons/backend.png'
import cloudIcon from '/assets/skils_icons/cloud.png'
import aiIcon from '/assets/skils_icons/ai.png'
import devIcon from '/assets/skils_icons/dev.png'
import testingIcon from '/assets/skils_icons/testing.png'
import analyticsIcon from '/assets/skils_icons/analytics.png'
import methodologiesIcon from '/assets/skils_icons/methodologies.png'

const TechnicalArsenal = ({ userData }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: progIcon,
      key: "languages",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-400/30",
      glowColor: "shadow-cyan-400/20"
    },
    {
      title: "Concepts",
      icon: aiIcon,
      key: "concepts",
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-400/30",
      glowColor: "shadow-green-400/20"
    },
    {
      title: "Frameworks & Libraries",
      icon: frontendIcon,
      key: "frameworks",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400/30",
      glowColor: "shadow-yellow-400/20"
    },
    {
      title: "Development & Tools",
      icon: devIcon,
      key: "development",
      color: "from-gray-400 to-slate-500",
      borderColor: "border-gray-400/30",
      glowColor: "shadow-gray-400/20"
    },
    {
      title: "Testing & Automation",
      icon: testingIcon,
      key: "testing",
      color: "from-indigo-400 to-purple-500",
      borderColor: "border-indigo-400/30",
      glowColor: "shadow-indigo-400/20"
    },
    {
      title: "Systems",
      icon: cloudIcon,
      key: "systems",
      color: "from-purple-400 to-pink-500",
      borderColor: "border-purple-400/30",
      glowColor: "shadow-purple-400/20"
    },
    {
      title: "Databases",
      icon: backendIcon,
      key: "databases",
      color: "from-red-400 to-rose-500",
      borderColor: "border-red-400/30",
      glowColor: "shadow-red-400/20"
    },
    {
      title: "Analytics & BI",
      icon: analyticsIcon,
      key: "analytics",
      color: "from-orange-400 to-red-500",
      borderColor: "border-orange-400/30",
      glowColor: "shadow-orange-400/20"
    },
    {
      title: "Methodologies",
      icon: methodologiesIcon,
      key: "methodologies",
      color: "from-teal-400 to-cyan-500",
      borderColor: "border-teal-400/30",
      glowColor: "shadow-teal-400/20"
    }
  ]

  // Data for donut chart
  const chartData = skillCategories.map(category => ({
    name: category.title,
    value: userData.skills[category.key]?.length || 0,
    color: category.color,
    fill: `url(#gradient-${category.key})`
  }))

  const COLORS = [
    '#40e0d0', // cyan - Programming Languages
    '#10b981', // emerald - Concepts
    '#f59e0b', // amber - Frameworks & Libraries  
    '#a855f7', // purple - Development & Tools
    '#ef4444', // red - Testing & Automation
    '#6b7280', // gray - Systems
    '#6366f1', // indigo - Databases
    '#fb923c', // orange - Analytics & BI
    '#14b8a6'  // teal - Methodologies
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(64, 255, 218, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 255, 218, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Terminal Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-full px-6 py-2">
              <span className="text-cyan-400 font-mono text-sm">TECHNICAL_ARSENAL.EXE</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
              Technical Arsenal
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive toolkit forged through years of exploration in the digital frontier
          </p>

          {/* Terminal Command */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="bg-black/80 border border-green-500/30 rounded px-4 py-2 font-mono text-sm">
              <span className="text-green-400">$</span>
              <span className="text-white ml-2">cat /dev/skills</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-green-400 ml-1"
              >
                _
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content - Full Width Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Distribution Chart - First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="w-full max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Skills Distribution</h3>

              <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
                {/* Chart Container */}
                <div className="h-80 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        {skillCategories.map((category, index) => (
                          <linearGradient key={category.key} id={`gradient-${category.key}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={COLORS[index]} stopOpacity={0.8} />
                            <stop offset="100%" stopColor={COLORS[index]} stopOpacity={0.4} />
                          </linearGradient>
                        ))}
                      </defs>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.9)',
                          border: '1px solid #40e0d0',
                          borderRadius: '8px',
                          color: '#ffffff',
                          fontSize: '14px'
                        }}
                        labelStyle={{ color: '#40e0d0' }}
                        itemStyle={{ color: '#ffffff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Chart Legend in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {chartData.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-gray-300 text-xs sm:text-sm truncate">{item.name}</span>
                      </div>
                      <span className="text-white font-mono text-xs sm:text-sm ml-2 flex-shrink-0">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Total Skills Count */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="text-center border-t border-gray-700/50 pt-6"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {Object.values(userData.skills).reduce((total, skillArray) => total + (skillArray?.length || 0), 0)}
                  </div>
                  <div className="text-gray-400 font-mono text-sm">Total Technologies</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Skills Breakdown - Second */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Skills Breakdown</h3>
          </motion.div>

          {/* Skills Grid - 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Category Card */}
                <div className={`
                  relative h-full bg-black/60 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300
                  hover:bg-black/80 hover:shadow-2xl
                  ${category.borderColor} ${category.glowColor}
                  group-hover:border-opacity-60 group-hover:shadow-xl
                `}>

                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={category.icon}
                        alt={category.title}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          console.log('Failed to load icon:', category.icon)
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = '<span class="text-white text-lg font-bold">' + category.title.charAt(0) + '</span>'
                        }}
                        onLoad={() => console.log('Icon loaded successfully:', category.icon)}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {category.title}
                      </h3>
                      <div className="text-gray-400 font-mono text-sm">
                        {userData.skills[category.key]?.length || 0} technologies
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {(userData.skills[category.key] || []).map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        onMouseEnter={() => setHoveredSkill(`${category.key}-${skill}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill cursor-default"
                      >
                        <div className={`
                          flex items-center justify-between p-2 rounded-lg border transition-all duration-200
                          bg-gray-800/30 border-gray-600/30
                          hover:bg-gray-700/50 hover:border-gray-500/50
                          ${hoveredSkill === `${category.key}-${skill}` ? 'bg-gray-700/70 border-gray-400/70' : ''}
                        `}>
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors text-sm">
                            {skill}
                          </span>

                          {/* Skill Level Indicator */}
                          <div className="flex space-x-1">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`
                                  w-1.5 h-1.5 rounded-full transition-all duration-200
                                  ${i < (Math.floor(Math.random() * 2) + 3)
                                    ? `bg-gradient-to-r ${category.color}`
                                    : 'bg-gray-600/50'
                                  }
                                  ${hoveredSkill === `${category.key}-${skill}` ? 'scale-125' : ''}
                                `}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Background HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30"></div>
        <div className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-cyan-400/30"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-cyan-400/30"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-cyan-400/30"></div>
      </div>
    </section>
  )
}

export default TechnicalArsenal
