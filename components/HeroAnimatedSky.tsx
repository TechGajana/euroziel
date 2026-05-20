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

    // Clouds floating animation
    const cloudElements = cloudsContainerRef.current?.querySelectorAll('.cloud');
    if (cloudElements) {
      cloudElements.forEach((cloud, index) => {
        const duration = 20 + index * 5;
        const yOffset = -30 + index * 15;

        gsap.to(cloud, {
          x: 100,
          y: yOffset,
          opacity: 0.8,
          duration,
          repeat: -1,
          ease: 'none',
        });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div
        ref={sunRef}
        className="absolute top-12 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-200 to-orange-300 opacity-90"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(255, 200, 87, 0.5))',
        }}
      />

      {/* Clouds Container */}
      <div ref={cloudsContainerRef} className="absolute inset-0">
        {/* Cloud 1 */}
        <div
          className="cloud absolute top-20 -left-32 w-48 h-12 bg-white rounded-full opacity-40"
          style={{
            filter: 'blur(12px)',
            boxShadow: 'inset -20px -8px 20px rgba(0,0,0,0.1)',
          }}
        />

        {/* Cloud 2 */}
        <div
          className="cloud absolute top-40 -left-40 w-56 h-14 bg-white rounded-full opacity-35"
          style={{
            filter: 'blur(15px)',
            boxShadow: 'inset -25px -10px 25px rgba(0,0,0,0.1)',
          }}
        />

        {/* Cloud 3 */}
        <div
          className="cloud absolute top-60 -left-48 w-64 h-16 bg-white rounded-full opacity-30"
          style={{
            filter: 'blur(18px)',
            boxShadow: 'inset -30px -12px 30px rgba(0,0,0,0.1)',
          }}
        />

        {/* Cloud 4 */}
        <div
          className="cloud absolute top-14 right-1/4 w-52 h-12 bg-white rounded-full opacity-25"
          style={{
            filter: 'blur(14px)',
            boxShadow: 'inset -22px -9px 22px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </div>
  );
}
