'use client'

/**
 * hooks/useScrollReveal.ts
 * Path: ./hooks/useScrollReveal.ts  (project root, since @/* → ./*)
 * Import: import { useScrollReveal, stagger } from '@/hooks/useScrollReveal'
 */

import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -60px 0px',
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Already visible above the fold → fire immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}

/**
 * Returns the correct animation class for staggered children.
 * Falls back to opacity-0 while not in view.
 */
export function stagger(inView: boolean, index: number) {
  const classes = [
    'animate-fade-up',
    'animate-fade-up-d1',
    'animate-fade-up-d2',
    'animate-fade-up-d3',
    'animate-fade-up-d4',
    'animate-fade-up-d5',
  ]
  if (!inView) return 'opacity-0 translate-y-7'
  return classes[Math.min(index, classes.length - 1)]
}