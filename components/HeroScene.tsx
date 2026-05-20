'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const studentRef = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const perspectiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!studentRef.current || !universityRef.current || !perspectiveRef.current) {
      return;
    }

    // Create scroll-triggered animation for student moving toward university
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom center',
        scrub: 1.2, // Smooth scrubbing
        onUpdate: (self) => {
          const progress = self.progress;
          console.log('[v0] scroll progress:', progress);
        },
      },
    });

    // Student movement: comes closer to camera (Z-axis)
    timeline.to(
      studentRef.current,
      {
        y: -100, // Move up slightly
        scale: 1.4, // Get bigger (coming closer)
        opacity: 0.9,
        duration: 1,
      },
      0
    );

    // Student parallax left movement
    timeline.to(
      studentRef.current,
      {
        x: -30,
      },
      0
    );

    // University parallax effect (slight move down as student approaches)
    timeline.to(
      universityRef.current,
      {
        y: 40,
        scale: 1.08,
      },
      0
    );

    // Fade out effect at bottom to transition to next section
    timeline.to(studentRef.current, {
      opacity: 0,
    });

    return () => {
      // Cleanup
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={perspectiveRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* University Building - Background */}
      <div
        ref={universityRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transformOrigin: 'center center',
        }}
      >
        <Image
          src="/images/german-university.jpg"
          alt="German University"
          fill
          className="object-cover object-center"
          priority
          style={{
            filter: 'brightness(0.95) contrast(1.05)',
          }}
        />
        {/* University overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-40" />
      </div>

      {/* Graduating Student - Foreground */}
      <div
        ref={studentRef}
        className="absolute bottom-0 left-1/3 translate-x-[-50%] w-[280px] h-[400px] md:w-[350px] md:h-[480px]"
        style={{
          transformOrigin: 'center bottom',
        }}
      >
        <Image
          src="/images/graduating-student.png"
          alt="Graduating Student in Cap and Gown"
          fill
          className="object-contain object-bottom pointer-events-none"
          priority
          quality={90}
        />
      </div>

      {/* Perspective vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(6,8,15,0.3)]" />
    </div>
  );
}
