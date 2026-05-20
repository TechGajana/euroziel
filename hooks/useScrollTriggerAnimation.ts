import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollTriggerAnimationOptions {
  threshold?: number;
  duration?: number;
  stagger?: number;
  fromY?: number;
}

/**
 * Hook to add scroll trigger animations to a container's children
 * Automatically applies fade-up animation when elements come into view
 */
export function useScrollTriggerAnimation(
  options: UseScrollTriggerAnimationOptions = {}
) {
  const {
    threshold = 0.08,
    duration = 0.65,
    stagger = 0.08,
    fromY = 28,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-scroll-animate]');

    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: fromY,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        scrollTrigger: {
          trigger: ref.current,
          start: `top ${Math.round(80 + threshold * 100)}%`,
          end: `top ${Math.round(30 + threshold * 100)}%`,
          toggleActions: 'play none none reverse',
          // markers: true, // Uncomment for debugging
        },
      }
    );

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [threshold, duration, stagger, fromY]);

  return ref;
}
