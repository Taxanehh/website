// Placeholder SVG icons for the Galactic Roadmap
// These can be replaced with AI-generated images using the MidJourney prompts in the comments

export const LaunchpadIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="launchpadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00bcd4" />
        <stop offset="100%" stopColor="#2196f3" />
      </linearGradient>
    </defs>
    {/* Simple rocket/launchpad representation */}
    <rect x="35" y="60" width="30" height="30" fill="url(#launchpadGrad)" rx="5" />
    <polygon points="50,20 40,60 60,60" fill="url(#launchpadGrad)" />
    <circle cx="50" cy="15" r="8" fill="#ff5722" />
    {/* MidJourney prompt: "Futuristic space launch pad with glowing blue energy, cosmic background, minimalist sci-fi style, 4k" */}
  </svg>
)

export const OrbitalStationIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9c27b0" />
        <stop offset="100%" stopColor="#e91e63" />
      </linearGradient>
    </defs>
    {/* Orbital station with rings */}
    <circle cx="50" cy="50" r="15" fill="url(#orbitalGrad)" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="url(#orbitalGrad)" strokeWidth="2" opacity="0.6" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="url(#orbitalGrad)" strokeWidth="1" opacity="0.3" />
    {/* MidJourney prompt: "Orbital space station with purple energy rings, advanced technology, floating in cosmic void, sci-fi illustration" */}
  </svg>
)

export const SpaceshipIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="shipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4caf50" />
        <stop offset="100%" stopColor="#00e676" />
      </linearGradient>
    </defs>
    {/* Spaceship silhouette */}
    <ellipse cx="50" cy="50" rx="20" ry="35" fill="url(#shipGrad)" />
    <polygon points="50,15 45,25 55,25" fill="#00e676" />
    <polygon points="30,45 35,55 25,55" fill="#00e676" />
    <polygon points="70,45 75,55 65,55" fill="#00e676" />
    {/* MidJourney prompt: "Spaceship on first mission through nebula, green energy trails, exploration theme, futuristic design" */}
  </svg>
)

export const AINodeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9800" />
        <stop offset="100%" stopColor="#ffc107" />
      </linearGradient>
    </defs>
    {/* Neural network representation */}
    <circle cx="30" cy="30" r="8" fill="url(#aiGrad)" />
    <circle cx="70" cy="30" r="8" fill="url(#aiGrad)" />
    <circle cx="50" cy="50" r="12" fill="url(#aiGrad)" />
    <circle cx="30" cy="70" r="8" fill="url(#aiGrad)" />
    <circle cx="70" cy="70" r="8" fill="url(#aiGrad)" />
    {/* Connection lines */}
    <line x1="30" y1="30" x2="50" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6" />
    <line x1="70" y1="30" x2="50" y2="50" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6" />
    <line x1="50" y1="50" x2="30" y2="70" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6" />
    <line x1="50" y1="50" x2="70" y2="70" stroke="url(#aiGrad)" strokeWidth="2" opacity="0.6" />
    {/* MidJourney prompt: "AI consciousness awakening in space, golden neural networks, cosmic intelligence, abstract digital art" */}
  </svg>
)

export const CommandCenterIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="commandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f44336" />
        <stop offset="100%" stopColor="#e91e63" />
      </linearGradient>
    </defs>
    {/* Command center structure */}
    <rect x="20" y="40" width="60" height="40" fill="url(#commandGrad)" rx="10" />
    <rect x="35" y="20" width="30" height="30" fill="url(#commandGrad)" rx="5" />
    <circle cx="35" cy="55" r="5" fill="#fff" opacity="0.8" />
    <circle cx="50" cy="55" r="5" fill="#fff" opacity="0.8" />
    <circle cx="65" cy="55" r="5" fill="#fff" opacity="0.8" />
    {/* MidJourney prompt: "Commanding space station with red energy core, multiple docking bays, leadership hub, futuristic architecture" */}
  </svg>
)

export const ExplorerIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="explorerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#673ab7" />
        <stop offset="100%" stopColor="#9c27b0" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Explorer ship with cosmic energy */}
    <path d="M50 15 L65 35 L80 25 L70 45 L85 55 L65 65 L75 85 L50 75 L25 85 L35 65 L15 55 L30 45 L20 25 L35 35 Z" 
          fill="url(#explorerGrad)" filter="url(#glow)" />
    <circle cx="50" cy="50" r="8" fill="#fff" opacity="0.9" />
    {/* MidJourney prompt: "Majestic space explorer ship venturing beyond known galaxies, violet cosmic energy, stellar voyager, epic space adventure" */}
  </svg>
)
