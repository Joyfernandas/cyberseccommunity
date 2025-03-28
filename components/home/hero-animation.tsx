"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-primary/10 dark:bg-primary/5";
      
      // Random size between 4px and 20px
      const size = Math.random() * 16 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Add to container
      container.appendChild(particle);
      particles.push(particle);
      
      // Animate
      animateParticle(particle);
    }

    function animateParticle(particle: HTMLDivElement) {
      // Random duration between 15s and 30s
      const duration = Math.random() * 15000 + 15000;
      
      // Random new position
      const newX = Math.random() * 100;
      const newY = Math.random() * 100;
      
      // Apply animation
      particle.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${newX - parseFloat(particle.style.left)}%, ${newY - parseFloat(particle.style.top)}%)` }
        ],
        {
          duration,
          easing: "ease-in-out",
          fill: "forwards"
        }
      ).onfinish = () => {
        // Update position
        particle.style.left = `${newX}%`;
        particle.style.top = `${newY}%`;
        
        // Continue animation
        animateParticle(particle);
      };
    }

    // Create grid lines
    const gridLinesCount = 10;
    
    // Horizontal lines
    for (let i = 1; i < gridLinesCount; i++) {
      const line = document.createElement("div");
      line.className = "absolute w-full h-px bg-primary/5";
      line.style.top = `${(i / gridLinesCount) * 100}%`;
      container.appendChild(line);
    }
    
    // Vertical lines
    for (let i = 1; i < gridLinesCount; i++) {
      const line = document.createElement("div");
      line.className = "absolute h-full w-px bg-primary/5";
      line.style.left = `${(i / gridLinesCount) * 100}%`;
      container.appendChild(line);
    }

    return () => {
      // Cleanup
      particles.forEach(particle => {
        particle.remove();
      });
    };
  }, []);

  return (
    <div className="w-full h-full" ref={containerRef}>
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  );
}