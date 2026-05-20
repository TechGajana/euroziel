import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Create a staggered fade-in animation for elements in a container
 */
export function createSectionReveal(
  container: HTMLElement,
  selector: string,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    fromY?: number;
  } = {}
) {
  const {
    duration = 0.65,
    stagger = 0.1,
    delay = 0,
    fromY = 28,
  } = options;

  const elements = container.querySelectorAll(selector);

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
      delay,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Create a parallax effect on scroll for an element
 */
export function createParallax(
  element: HTMLElement,
  trigger: string | HTMLElement,
  options: {
    moveY?: number;
    moveX?: number;
    scale?: number;
    opacity?: number;
  } = {}
) {
  const { moveY = 0, moveX = 0, scale = 1, opacity = 1 } = options;

  gsap.to(element, {
    y: moveY,
    x: moveX,
    scale,
    opacity,
    scrollTrigger: {
      trigger,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
}

/**
 * Create a scroll-based timeline animation
 */
export function createScrollTimeline(
  trigger: string | HTMLElement,
  animation: (timeline: gsap.core.Timeline) => void,
  options: {
    scrub?: number | boolean;
    start?: string;
    end?: string;
    toggleActions?: string;
  } = {}
) {
  const {
    scrub = true,
    start = 'top center',
    end = 'bottom center',
    toggleActions = 'play none none reverse',
  } = options;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      toggleActions,
    },
  });

  animation(timeline);
  return timeline;
}

/**
 * Animate counter numbers
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  options: {
    duration?: number;
    delay?: number;
    format?: (value: number) => string;
  } = {}
) {
  const { duration = 2, delay = 0, format = Math.round } = options;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration,
    delay,
    onUpdate: () => {
      element.textContent = format(obj.value).toString();
    },
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Kill all ScrollTrigger instances (useful for cleanup)
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
