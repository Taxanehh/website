# 🌌 Ehiane's Cosmic Portfolio

## Demo

https://github.com/user-attachments/assets/3bfa6853-510a-4c6f-bced-b003a35bd84f




A cinematic, space-exploration themed portfolio website that feels like launching into a cosmic OS. Built with React and featuring a 3D interactive experience with planetary project navigation.

## 🚀 Features

### 🎬 Step 1: Intro Video
- Fullscreen video introduction with smooth transitions
- Skip button for quick navigation
- Auto-progression to boot sequence

### 💻 Step 2: Booting Screen + 3D Globe
- Terminal-style animated text sequence
- 3D rotating Earth globe with particle effects
- Cosmic ambient lighting and atmosphere

### 🌌 Step 3: Hero Section
- Starfield background animation
- Gradient text effects and smooth animations
- "Explore My Orbit" CTA with scroll navigation

### 🪐 Step 4: Project Galaxy
- Projects displayed as interactive planets
- Hover effects with orbital rings and glowing
- Modal overlays with detailed project information
- Responsive planetary grid layout

## 🛠 Tech Stack

- **React 18** - Component-based UI framework
- **Three.js + React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast development and build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── IntroVideo/
│   │   └── IntroVideo.jsx
│   ├── BootingScreen/
│   │   ├── BootingScreen.jsx
│   │   ├── TerminalText.jsx
│   │   └── Earth3D.jsx
│   ├── HeroSection/
│   │   └── HeroSection.jsx
│   └── ProjectSection/
│       ├── ProjectSection.jsx
│       ├── PlanetCard.jsx
│       └── ProjectModal.jsx
├── data/
│   └── userData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📝 Customization

### Update Personal Information
Edit `src/data/userData.js` to update:
- Personal details (name, title, description)
- Project information
- Skills and experience
- Terminal boot sequence

### Add Media Assets
Place your media files in the `public/assets/` folder:
- `Web_intro_video.mp4` - Intro video
- `planets/` - Planet images for projects
- Other media assets as needed

### Modify Styling
- **Colors**: Update cosmic theme colors in `tailwind.config.js`
- **Fonts**: Modify font families in Tailwind config
- **Animations**: Customize animations in `index.css`

### Add New Sections
The app is structured for easy expansion:

```jsx
// In App.jsx, add new sections:
<HeroSection userData={userData} />
<ProjectSection userData={userData} />
<AboutSection userData={userData} />     // ← Add this
<SkillsSection userData={userData} />    // ← Add this
<ContactSection userData={userData} />   // ← Add this
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_CONTACT_FORM_API=your_api_endpoint
VITE_ANALYTICS_ID=your_analytics_id
```

### Performance Optimization
- Videos are optimized for web delivery
- 3D elements use efficient rendering
- Lazy loading implemented for modal content
- Smooth scroll behavior enabled

## 🎨 Design System

### Color Palette
```css
cosmic-black: #0a0a0a    /* Deep space background */
cosmic-dark: #1a1a2e     /* Nebula darkness */
cosmic-purple: #16213e   /* Planet atmosphere */
cosmic-blue: #0f3460     /* Deep ocean planet */
cosmic-accent: #e94560   /* Mars/warning planet */
cosmic-glow: #64ffda     /* Cyan energy glow */
```

### Typography
- **Headers**: Inter font family
- **Code/Terminal**: JetBrains Mono
- **Body**: Inter with optimized line heights

### Animations
- **Duration**: 0.3s for interactions, 0.8s for sections
- **Easing**: Custom cosmic timing functions
- **3D**: Subtle floating and rotation effects

## 📱 Responsive Design

- **Mobile**: Stacked layout with touch-optimized interactions
- **Tablet**: Adaptive grid with medium-sized planets
- **Desktop**: Full cosmic experience with orbital animations

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 🐛 Troubleshooting

### Common Issues

1. **Video not playing**
   - Ensure video file is in `public/assets/`
   - Check video format compatibility (MP4 recommended)

2. **3D elements not rendering**
   - Verify WebGL support in browser
   - Check Three.js console errors

3. **Slow performance**
   - Reduce particle count in BootingScreen
   - Optimize video file size
   - Use lower-quality 3D models

## 🎯 Future Enhancements

- [ ] **About Timeline** - Mission log styled experience
- [ ] **Skills Map** - Orbital module system
- [ ] **Contact Form** - "Send Transmission" interface
- [ ] **Easter Egg** - Terminal overlay with ASCII art
- [ ] **Audio** - Ambient space sounds
- [ ] **VR Support** - WebXR integration
- [ ] **Progressive Web App** - Offline capabilities

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, consider submitting a pull request.

---

**Built with ❤️ and ☕ in the cosmic void**
