'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroAnimatedSky() {
  const sunRef = useRef<HTMLDivElement>(null);
  const cloudsContainerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      if (sunRef.current) {
        gsap.fromTo(
          sunRef.current,
          {
            boxShadow: '0 0 30px rgba(255, 200, 87, 0.3)',
          },
          {
            boxShadow: '0 0 70px rgba(255, 200, 87, 0.7)',
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          }
        );
      }

      const clouds = cloudsContainerRef.current?.querySelectorAll<HTMLDivElement>('.cloud');
      clouds?.forEach((cloud, index) => {
        const duration = 28 + index * 10;
        const distance = 180 + index * 60;

        gsap.to(cloud, {
          x: distance,
          duration,
          repeat: -1,
          ease: 'none',
          delay: index * 0.4,
        });

        gsap.to(cloud, {
          opacity: 0.28 + index * 0.12,
          duration: 6 + index * 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, cloudsContainerRef);

    return () => {
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
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

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,144,217,0.10),transparent_52%)]" />
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-[#1f3b6c] via-transparent to-transparent opacity-70" />
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

        {/* Cloud 6 - Extra soft layer */}
        <div
          className="cloud absolute top-12 -left-64 w-[420px] h-14"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 40%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(22px)',
            opacity: 0.32,
          }}
        />

        {/* Cloud 7 - Soft haze */}
        <div
          className="cloud absolute top-56 -left-72 w-[480px] h-18"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 45%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.25) 40%, rgba(255, 255, 255, 0) 100%)',
            filter: 'blur(24px)',
            opacity: 0.28,
          }}
        />
      </div>
    </div>
  );
}
