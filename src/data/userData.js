// User data extracted from resume and portfolio requirements
export const userData = {
  personal: {
    name: "Paul Stokreef",
    title: "Cybersecurity student",
    subtitle: "Developer in training. Systems Thinker.",
    description: "Cybersecurity student and developer-in-training with a background in Artificial Intelligence and full-stack development. Passionate about problem-solving, CTF competitions, and contributing to the tech community through continuous learning and collaboration.",
    location: "Available Worldwide",
    email: "paul.stokreef@planet.nl",
    github: "https://github.com/taxanehh",
    linkedin: "https://www.linkedin.com/in/paul-stokreef/",
  },
  
  terminalSequence: [
    "> initializing protocol...",
    "> loading personal modules...", 
    "> compiling thoughts...",
    "> syncing timeline...",
    "> welcome, explorer_"
  ],
  
  projects: [
  {
    id: "security-dashboard",
    name: "Security Dashboard",
    description: "Year 1 HTML/CSS & Flask web app for loading, processing, and visualizing security logs with role-based access and one-click ETL.",
    fullDescription: "The Security Dashboard is a Flask-based web application that ingests HTTP and auth logs into a MySQL/MariaDB database, processes them (including invalid login/session analysis), and auto-generates graphs (invalid logins, active users, HTTP status codes, requests per country). It implements role-based access control with USER, SECURITY_MANAGER, and SYSTEM_MANAGER roles, offers a one-click ETL to incrementally load new data (ignoring duplicates via unique constraints), and provides an /events page with filtering and pagination for recent activity. The app uses ASGI, Flask routing & blueprinting, Bcrypt for password hashing, SQLAlchemy for ORM, and GeoLite2 for geolocation. It can run locally or via Docker and stores generated visuals under static/img/.",
    techStack: ["HTML", "CSS", "Python", "Flask", "ASGI", "Flask Blueprints", "Flask Routing", "Bcrypt", "SQLAlchemy", "MySQL/MariaDB", "Docker", "GeoLite2 City"],
    highlights: [
      "Role-based access (USER, SECURITY_MANAGER, SYSTEM_MANAGER)",
      "One-click ETL: incremental load, auth.log parsing, graph generation",
      "Auto visuals: invalid logins, active users, status codes, geo requests",
      "Events page with filtering and pagination"
    ],
    metrics: {
      items: "Processes HTTP & auth logs (incremental)",
      test_coverage: "Classroom-level manual + unit tests",
      impact: "Faster triage and insights for coursework demos"
    },
    status: "Complete (Year 1 project)",
    linkedin: "",
    youtube: "",
    stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
    hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
    gridSize: "large"
  },
  {
    id: "horologic-webapp",
    name: "Horologic Watch Repair Webapp",
    description: "PHP & SQL-based web application for managing customer watches, tagging repair statuses, and sending PDF invoices via email.",
    fullDescription: "The Horologic Webapp was developed for a professional watch repair company to streamline their workflow. It allows staff to register and track watches received from customers, apply dynamic tags such as 'Sent', 'To Be Repaired', or 'Ready to Send', and store watch-specific details including brand, model, calibre, serial number, and water resistance test results. The platform includes integrated invoicing: generating PDF invoices enriched with repair comments and service data, and automatically sending them directly to the customer via email. The system was built entirely in PHP with a SQL backend for persistence, and includes security measures against common threats such as URL manipulation and local file inclusion.",
    techStack: ["PHP", "SQL", "HTML", "CSS", "JavaScript", "PDF Generation", "Email Integration"],
    highlights: [
      "Customer watch inventory with tagging system",
      "Repair notes and characteristics logging (e.g., water depth tests)",
      "Automatic PDF invoice generation and email delivery",
      "Role-based secure access and hardened against URL manipulation/LFI"
    ],
    metrics: {
      items: "Dozens of watches inventoried seamlessly",
      test_coverage: "Functional testing in production with Horologic",
      impact: "Replaced manual tracking with a professional automated workflow"
    },
    status: "Complete (Production use)",
    linkedin: "",
    youtube: "",
    stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
    hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
    gridSize: "large"
  },
  {
    id: "fundraiser",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      workflows: "TBA",
      testing: "TBA",
      architecture: "TBA"
    },
    github: "TBA",
    stillImage: "/assets/bentoGrids/Fundraiser/Fundraiser_still.png",
    hoverVideo: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
    gridSize: "small"
  },
  {
    id: "spreadsheet",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      tests: "TBA",
      features: "TBA",
      architecture: "TBA"
    },
    github: "TBA",
    stillImage: "/assets/bentoGrids/SpreadSheet/SpreadSheet_still.png",
    hoverVideo: "/assets/bentoGrids/SpreadSheet/SpreadSheet_hover.mp4",
    gridSize: "medium"
  },
  {
    id: "imdb",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      reviews: "TBA",
      accuracy: "TBA",
      model: "TBA"
    },
    github: "TBA",
    stillImage: "/assets/bentoGrids/IMDB/imdb_still.png",
    hoverVideo: "/assets/bentoGrids/IMDB/imdb_hover.mp4",
    gridSize: "medium"
  },
  {
    id: "yelp-data",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      data: "TBA",
      cities: "TBA",
      insights: "TBA"
    },
    github: "TBA",
    youtube: "TBA",
    stillImage: "/assets/bentoGrids/YelpData/yelp_data_still.png",
    hoverVideo: "/assets/bentoGrids/YelpData/yelp_data_hover.mp4",
    gridSize: "small"
  },
  {
    id: "harvard-school",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      enrollment: "TBA",
      certifications: "TBA",
      optimization: "TBA"
    },
    status: "TBA",
    demo: "TBA",
    stillImage: "/assets/bentoGrids/HarvardSchool/Harvard School_still.png",
    hoverVideo: "/assets/bentoGrids/HarvardSchool/Harvard School_hover.mp4",
    gridSize: "large"
  },
  {
    id: "faculty-research",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      test_coverage: "TBA",
      phase: "TBA",
      impact: "TBA"
    },
    github: "TBA",
    youtube: "TBA",
    stillImage: "/assets/bentoGrids/FacultyResearch/FacultyResearch_still.png",
    hoverVideo: "/assets/bentoGrids/FacultyResearch/FacultyResearch_hover.mp4",
    gridSize: "medium"
  },
  {
    id: "python-100-days",
    name: "To Be Announced",
    description: "Project details coming soon.",
    fullDescription: "This project is currently under development. More information will be announced in the future.",
    techStack: ["To Be Announced"],
    highlights: [
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon",
      "Feature details coming soon"
    ],
    metrics: {
      days: "TBA",
      projects: "TBA",
      gui_apps: "TBA",
      games: "TBA"
    },
    github: "TBA",
    stillImage: "/assets/bentoGrids/100DaysOfCode/100Days_still.png",
    hoverVideo: "/assets/bentoGrids/100DaysOfCode/100Days_hover.mp4",
    gridSize: "large"
  }
],


  professionalInvolvements: [
  {
    id: "self-educated-cybersecurity",
    name: "Cybersecurity Specialist (Self-Educated)",
    description: "Independent study and hands-on practice in cybersecurity through platforms like HackTheBox.",
    fullDescription: "Since 2023, I have been pursuing cybersecurity education independently, focusing on penetration testing, exploit development, and defensive security techniques. My learning has been primarily hands-on, leveraging HackTheBox and similar platforms. I have achieved Hacker rank on HackTheBox and earned certifications including CJCA, Dante Pro Lab, and P.O.O.",
    role: "Independent Learner",
    period: "2023 - Present",
    company: "Self-Education via HackTheBox & Independent Study",
    tags: ["Cybersecurity", "HackTheBox", "Penetration Testing", "CTFs"],
    highlights: [
      "Achieved Hacker rank on HackTheBox",
      "Earned HTB CJCA certification",
      "Completed Dante Pro Lab certificate",
      "Obtained P.O.O certificate"
    ],
    achievements: [
      "Built strong offensive and defensive security skills",
      "Developed hands-on penetration testing methodology",
      "Strengthened problem-solving through CTF competitions"
    ],
    type: "professional",
    gridSize: "large",
    icon: "/assets/professional_icons/htb.png"
  },
  {
    id: "web-development-freelance",
    name: "Web Development for Small Businesses",
    description: "Designed and developed websites and applications for local companies.",
    fullDescription: "Since 2024, I have been working with smaller companies to design, develop, and maintain their websites and digital solutions. Projects include building a modern web platform for Horologic (watch repair company) and a responsive website for Wiedijk Woning & Project Stoffering. My work focuses on usability, responsive design, and security-aware development.",
    role: "Freelance Web Developer",
    period: "2024 - Present",
    company: "Independent / Freelance",
    tags: ["Web Development", "Frontend", "Backend", "Responsive Design", "PHP", "JavaScript", "CSS"],
    highlights: [
      "Built watch management and invoicing system for Horologic",
      "Developed responsive portfolio website for Wiedijk Woning & Project Stoffering",
      "Focused on usability, aesthetics, and secure coding practices"
    ],
    achievements: [
      "Delivered functional and secure websites tailored to client needs",
      "Implemented responsive and modern UI designs",
      "Strengthened skills in full-stack development through real-world projects"
    ],
    type: "professional",
    gridSize: "medium",
    icon: "/assets/professional_icons/webdev.png"
  }
],

  
  skills: {
    languages: [
      "Python", "SQL", "JavaScript", "TypeScript", "HTML5", "CSS3", "PHP"
    ],
    concepts: [
      "Data Structures and Algorithms", "Scalability", "OOP", "Software Design Patterns", "Agile Development"
    ],
    frameworks: [
      "Flask", "React.js", "Node.js", "SQL Alchemy"
    ],
    systems: [
      "CI/CD Pipelines"
    ],
    databases: [
      "SQL", "SQLite"
    ],
    development: [
      "Git/GitHub", "Linux", "Windows", "NGINX", "Metasploit", "Burp Suite", "Figma"
    ],
    testing: [
      "Unittest", "Pytest"
    ],
    analytics: [
      "Data Visualization", "Statistical Analysis"
    ],
    methodologies: [
      "Agile", "Scrum", "Code Review", "Version Control", "Documentation"
    ]
  },


  
  experience: [
    {
      title: "Cybersecurity Specialist (Self-Educated)",
      company: "HackTheBox & Independent Study",
      period: "2023 - Present", 
      description: "Focused on developing offensive and defensive cybersecurity skills through hands-on labs, certifications, and Capture the Flag challenges.",
      achievements: [
        "Achieved Hacker rank on HackTheBox",
        "Earned HTB Certified Junior Cybersecurity Analyst (CJCA) certification",
        "Completed Dante Pro Lab certificate",
        "Obtained P.O.O certificate"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Artificial Intelligence (not completed)",
      institution: "University of Amsterdam",
      period: "2023 - 2024",
      achievements: [
        "Completed first year before transitioning focus to cybersecurity"
      ]
    },
    {
      degree: "Bachelor in Cybersecurity (Ongoing)",
      institution: "Amsterdam University of Applied Sciences",
      period: "2024 - Present",
      achievements: [
        "Awarded a 10/10 for the Propedeuse (first-year diploma)",
        "Delivered multiple cybersecurity workshops to peers and student groups"
      ]
    }
  ]
}

