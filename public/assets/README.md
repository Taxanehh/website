# Asset Placeholders

This directory contains placeholder information for media assets.

## Required Assets

### Videos
- `Web_intro_video.mp4` - Your laptop opening intro video
- `Hero_background_video.mp4` - Optional hero background video

### Planet Images (MidJourney Generated)
- `planets/main-planet.png` - Large planet for main project (Hackronomics)
- `planets/ai-planet.png` - Medium planet for AI Explorer project  
- `planets/systems-planet.png` - Medium planet for Systems Architecture project

### Additional Assets
- `starfield-bg.jpg` - Optional starfield background image
- `cosmic-particles.png` - Optional particle texture

## Instructions

1. Replace the video files with your actual MidJourney/Veo generated content
2. Add your planet images in the `planets/` folder
3. Update the file paths in `src/data/userData.js` if needed

## Notes

- The app will work without these assets (fallback styling provided)
- Optimize videos for web delivery (H.264, progressive download)
- Use PNG format for planet images with transparency
- Recommended planet image size: 512x512px minimum
