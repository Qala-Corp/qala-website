"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react';
import '@/styles/background.css';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isExternalHoverRef = useRef(false);

  // Track mouse position using refs instead of triggering re-renders
  const mousePosition = useRef({ x: 0, y: 0 });
  const prevMousePosition = useRef({ x: 0, y: 0 });
  const scrollPosition = useRef(0);

  // Check dark mode once on mount and when theme changes
  const checkDarkMode = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  // Handle mouse movement without causing re-renders
  const handleMouseMove = useCallback((e) => {
    prevMousePosition.current = { ...mousePosition.current };
    mousePosition.current = { x: e.clientX, y: e.clientY };

    // Check if mouse is over the canvas or another element
    const canvas = canvasRef.current;
    if (canvas) {
      // Get element under cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

      // Check if cursor is over another interactive element
      const isOverInteractive =
        elementUnderCursor &&
        (elementUnderCursor !== canvas) &&
        (elementUnderCursor.tagName === 'BUTTON' ||
         elementUnderCursor.tagName === 'A' ||
         elementUnderCursor.tagName === 'INPUT' ||
         elementUnderCursor.tagName === 'SELECT' ||
         elementUnderCursor.tagName === 'TEXTAREA' ||
         elementUnderCursor.closest('button, a, input, select, textarea, [role="button"]'));

      // Update the ref instead of state
      isExternalHoverRef.current = isOverInteractive;
    }
  }, []);

  // Handle scroll without causing re-renders
  const handleScroll = useCallback(() => {
    scrollPosition.current = window.scrollY;
  }, []);

  // Set canvas size without causing re-renders
  const setCanvasSize = useCallback((canvas) => {
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  // Function to clear canvas and set background
  const clearCanvas = useCallback((ctx, canvas) => {
    if (!ctx || !canvas) return;

    // First, completely clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Then fill with proper background based on dark mode
    if (isDarkMode) {
      // For dark mode, fill with a very dark color with some transparency
      ctx.fillStyle = "rgba(10, 10, 20, 0.2)"; // Very dark blue with transparency
    } else {
      // For light mode, fill with white with some transparency
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // White with transparency
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [isDarkMode]);

  // Animation loop - separated from component body
  const animate = useCallback((ctx, canvas, particles, connectionDistance) => {
    if (!ctx || !canvas) return;

    // Calculate mouse velocity for inertia
    const mouseVelocity = {
     x: mousePosition.current.x - prevMousePosition.current.x,
     y: mousePosition.current.y - prevMousePosition.current.y
   };

    // Clear canvas with proper background
     clearCanvas(ctx, canvas);

    // Calculate slowdown factor when hovering external elements
    const isExternalHover = isExternalHoverRef.current;
    const slowdownFactor = isExternalHover ? 0.2 : 1.0;

    // Draw and update particles
    particles.forEach((particle, i) => {
      // Apply inertia decay to any existing momentum
      if (particle.momentum) {
        // Apply slowdown when hovering external elements
        particle.x += particle.momentum.x * slowdownFactor;
        particle.y += particle.momentum.y * slowdownFactor;

        // Gradually reduce momentum (inertia decay) - more when hovering elsewhere
        const decayRate = isExternalHover ? 0.85 : 0.95;
        particle.momentum.x *= decayRate;
        particle.momentum.y *= decayRate;

        // Clear momentum when it becomes negligible
        if (Math.abs(particle.momentum.x) < 0.01 && Math.abs(particle.momentum.y) < 0.01) {
          particle.momentum = null;
        }
      } else {
        // Normal movement when no momentum is present - apply slowdown
        particle.x += particle.speedX * slowdownFactor;
        particle.y += particle.speedY * slowdownFactor;
      }

      // If hovering external element, reduce or skip mouse influence
      if (!isExternalHover) {
        // Influence particles by mouse (subtle attraction)
        const mouseInfluenceRadius = 200;
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Track if the particle was previously influenced by mouse
        const wasInfluenced = particle.underMouseInfluence;

        if (distance < mouseInfluenceRadius) {
          // Particle is under mouse influence
          particle.underMouseInfluence = true;
          const influence = (mouseInfluenceRadius - distance) / mouseInfluenceRadius * 0.05;

          // Apply influence and capture velocity for inertia
          const moveX = dx * influence;
          const moveY = dy * influence;

          particle.x += moveX;
          particle.y += moveY;

          // Store the mouse velocity to apply as momentum later
          particle.lastMouseVelocity = {
            x: mouseVelocity.x * 0.2,
            y: mouseVelocity.y * 0.2
          };
        } else {
          // If particle just left mouse influence, apply momentum
          if (wasInfluenced && !particle.momentum) {
            particle.momentum = {
              x: (particle.lastMouseVelocity?.x || 0) * 0.8,
              y: (particle.lastMouseVelocity?.y || 0) * 0.8
            };
          }
          particle.underMouseInfluence = false;
        }
      } else if (particle.underMouseInfluence) {
        // When external hover starts, release any particles under influence with reduced momentum
        particle.underMouseInfluence = false;
        if (!particle.momentum && particle.lastMouseVelocity) {
          particle.momentum = {
            x: particle.lastMouseVelocity.x * 0.4, // Reduced momentum on external hover
            y: particle.lastMouseVelocity.y * 0.4
          };
        }
      }

      // Influence by scroll - with slowdown
      const scrollInfluence = scrollPosition.current * 0.005 * slowdownFactor;
      particle.y -= scrollInfluence * particle.speedY;

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
        if (particle.momentum) {
          particle.momentum.x = -particle.momentum.x * 0.7; // Bounce with energy loss
        }
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
        if (particle.momentum) {
          particle.momentum.y = -particle.momentum.y * 0.7; // Bounce with energy loss
        }
      }

      // Return particles to canvas if they get too far
      if (particle.x < -50 || particle.x > canvas.width + 50 ||
          particle.y < -50 || particle.y > canvas.height + 50) {
        particle.x = particle.originalX;
        particle.y = particle.originalY;
        particle.momentum = null;
      }

      // Draw the particle - adjusted color based on theme
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

      // Adjust opacity based on external hover state
      const opacity = isExternalHover ? 0.5 : 1.0;
      ctx.fillStyle = isDarkMode
        ? `rgba(255, 255, 255, ${opacity})` // White in dark mode
        : `rgba(0, 0, 0, ${opacity})`;     // Black in light mode
      ctx.fill();

      // Draw connections to nearby particles
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (1 - (distance / connectionDistance)) * (isExternalHover ? 0.1 : 0.2);
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          // Line color adjusted for dark/light mode
          ctx.strokeStyle = isDarkMode
            ? `rgba(255, 255, 255, ${opacity})` // White lines in dark mode
            : `rgba(0, 0, 0, ${opacity})`;     // Black lines in light mode
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    // Update previous mouse position for next frame
    prevMousePosition.current = { ...mousePosition.current };

    // Use ref for animation frame to allow proper cleanup
    animationRef.current = requestAnimationFrame(() =>
      animate(ctx, canvas, particles, connectionDistance)
    );
  }, [isDarkMode, clearCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    setCanvasSize(canvas);

    // Initial dark mode check
    checkDarkMode();

    // Setup theme change observer
    const observer = new MutationObserver(() => {
      checkDarkMode();
      // When dark mode changes, we need to immediately apply the background
      if (canvas && ctx) {
        clearCanvas(ctx, canvas);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Event listeners
    const handleResize = () => setCanvasSize(canvas);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Initialize previous mouse position
    prevMousePosition.current = { x: 0, y: 0 };
    mousePosition.current = { x: 0, y: 0 };

    // Initial background fill
    clearCanvas(ctx, canvas);

    // Particles configuration
    const particleCount = 80;
    const particles = [];
    const connectionDistance = 150;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
        underMouseInfluence: false,
        momentum: null,
        lastMouseVelocity: { x: 0, y: 0 }
      });
    }

    // Start animation
    animate(ctx, canvas, particles, connectionDistance);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [clearCanvas, animate, checkDarkMode]); // Dependencies updated

  return (
    <canvas
      id="background-canvas"
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}
      ref={canvasRef}
    />
  );
};

export default BackgroundAnimation;
