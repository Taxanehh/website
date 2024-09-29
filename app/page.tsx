"use client";

import React, { useEffect } from 'react';
import Hero from "./components/Hero";
import Footer from  "./components/footer";
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Home() {
    const totalStars = 10000; // Total number of stars
    const starInterval = 100; // Create a star every 100 milliseconds (0.1 seconds)
    const fallingDuration = 5; // Duration of falling in seconds

    useEffect(() => {

        // Create stars at intervals
        let starCount = 0;
        const starCreationInterval = setInterval(() => {
            if (starCount < totalStars) {
                createStar();
                starCount++;
            } else {
                clearInterval(starCreationInterval); // Stop creating stars when limit is reached
            }
        }, starInterval);

        return () => clearInterval(starCreationInterval);
    }, []);

    const createStar = () => {
        const spaceBackground = document.querySelector('.space-background');
        if (!spaceBackground) return;
        const star = document.createElement('div');
        star.className = 'star fall'; // Add fall class immediately
        const size = Math.random() * 2 + 1; // Random size for stars
        const left = Math.random() * 100; // Random horizontal position
        const animationDuration = fallingDuration + Math.random() * 10; // Ensure it falls quickly

        // Apply random styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}vw`;
        star.style.top = `-${size * 2}px`; // Start above the viewport
        star.style.animationDuration = `${animationDuration}s`;
        star.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay for twinkling effect

        spaceBackground.appendChild(star);
    };

    return (
        <div className={`${spaceGrotesk.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative`}>
            <div className="space-background"></div>
            <main className="flex-grow flex flex-col gap-8 row-start-2 items-center sm:items-start relative z-10">
                <Hero />
            </main>
            <div className="z-10 sticky top-[100vh]">
                <Footer />
            </div>
              
        </div>
    );
}
