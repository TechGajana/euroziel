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
        trigger: document.querySelector('body'),
        start: 'top top',
        end: '200% bottom',
        scrub: 1.5, // Smooth scrubbing
        markers: false,
      },
    });

    // Student perspective approach: Scale up and move down (walking toward camera)
    timeline.to(
      studentRef.current,
      {
        scale: 3.2, // Significantly larger as they approach
        y: 120, // Move down in frame
        opacity: 0.85,
        duration: 1,
        ease: 'none',
      },
      0
    );

    // Subtle horizontal sway for realism
    timeline.to(
      studentRef.current,
      {
        x: 15, // Slight left/right movement
      },
      0
    );

    // University subtle parallax (moves slightly to create depth)
    timeline.to(
      universityRef.current,
      {
        y: -25, // Slight upward movement for parallax depth
        scale: 1.1,
        ease: 'none',
      },
      0
    );

    // Gradual fade to transition at the end
    timeline.to(
      studentRef.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      0.8
    );

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
        className="absolute bottom-0 left-1/2 translate-x-[-50%] w-[240px] h-[360px] md:w-[300px] md:h-[420px] lg:w-[380px] lg:h-[520px]"
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
          quality={95}
        />
      </div>

      {/* Perspective vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(6,8,15,0.3)]" />
    </div>
  );
}
