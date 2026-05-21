'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

/**
 * Wrapper component that automatically animates child elements with data-scroll-animate attribute
 * when they come into view during scroll
 */
export function ScrollAnimatedSection({
  children,
  className = '',
  stagger = 0.08,
  duration = 0.65,
  delay = 0,
}: ScrollAnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-scroll-animate]');
    if (elements.length === 0) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });

    elements.forEach((el, index) => {
      timeline.fromTo(
        el,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
        delay + index * stagger
      );
    });

    return () => {
      if (timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      timeline.kill();
    };
  }, [stagger, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
