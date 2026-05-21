'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroAnimatedSky() {
  const sunRef = useRef<HTMLDivElement>(null);
  const cloudsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sun glow animation
    if (sunRef.current) {
      gsap.fromTo(
        sunRef.current,
        {
          boxShadow: '0 0 30px rgba(255, 200, 87, 0.3)',
        },
        {
          boxShadow: '0 0 60px rgba(255, 200, 87, 0.6)',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }

    // Clouds floating animation with parallax depth
    const cloudElements = cloudsContainerRef.current?.querySelectorAll('.cloud');
    if (cloudElements) {
      cloudElements.forEach((cloud, index) => {
        // Different speeds for parallax effect
        const duration = 25 + index * 8; // Slower, more natural
        const distance = 150 + index * 50;

        gsap.to(cloud, {
          x: distance,
          duration,
          repeat: -1,
          ease: 'none',
          delay: index * 0.5, // Staggered start
        });

        // Subtle opacity variation
        gsap.to(cloud, {
          opacity: 0.3 + index * 0.15,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Sun with realistic glow */}
      <div className="absolute top-16 right-32">
        {/* Sun outer glow layer */}
        <div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 87, 0.2) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            filter: 'blur(20px)',
          }}
        />

        {/* Sun middle glow */}
        <div
          className="absolute w-28 h-28 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 87, 0.3) 0%, transparent 60%)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            filter: 'blur(10px)',
          }}
        />

        {/* Sun core */}
        <div
          ref={sunRef}
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 230, 120, 1) 0%, rgba(255, 200, 87, 0.95) 40%, rgba(255, 160, 60, 0.8) 100%)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            filter: 'drop-shadow(0 0 40px rgba(255, 200, 87, 0.6))',
          }}
        />
      </div>

      {/* Clouds Container */}
      <div ref={cloudsContainerRef} className="absolute inset-0 overflow-hidden">
        {/* Cloud 1 - Foreground */}
        <div
          className="cloud absolute top-24 -left-40 w-64 h-16"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.1) 100%)',
            filter: 'blur(16px)',
            opacity: 0.5,
          }}
        />

        {/* Cloud 2 - Mid layer */}
        <div
          className="cloud absolute top-48 -left-48 w-72 h-20"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.05) 100%)',
            filter: 'blur(20px)',
            opacity: 0.4,
          }}
        />

        {/* Cloud 3 - Background */}
        <div
          className="cloud absolute top-72 -left-56 w-80 h-24"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(25px)',
            opacity: 0.35,
          }}
        />

        {/* Cloud 4 - Distant */}
        <div
          className="cloud absolute top-16 right-1/3 w-60 h-14"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.45) 40%, rgba(255, 255, 255, 0.05) 100%)',
            filter: 'blur(18px)',
            opacity: 0.38,
          }}
        />

        {/* Cloud 5 - Extra depth */}
        <div
          className="cloud absolute top-80 -left-32 w-56 h-12"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.55) 40%, rgba(255, 255, 255, 0.05) 100%)',
            filter: 'blur(14px)',
            opacity: 0.42,
          }}
        />
      </div>
    </div>
  );
}
