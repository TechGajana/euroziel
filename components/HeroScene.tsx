'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const studentRef   = useRef<HTMLDivElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);
  const vignetteRef  = useRef<HTMLDivElement>(null);
  const ctxRef       = useRef<gsap.Context | null>(null);
  const rafRef       = useRef<number | null>(null);

  useEffect(() => {
    // Defer until after React has fully committed & painted the DOM.
    // This prevents StrictMode double-invoke and the removeChild crash.
    rafRef.current = requestAnimationFrame(() => {
      const student = studentRef.current;
      const university = universityRef.current;
      const vignette = vignetteRef.current;

      if (!student || !university) return;

      const heroSection = student.closest('section') as HTMLElement | null;
      if (!heroSection) return;

      const TOTAL_SCROLL = window.innerHeight * 3.2;
      const HOLD_TIME = 0.68;
      const WALK_TIME = 0.26;
      const ENTER_TIME = 0.32;

      // gsap.context() scopes all ScrollTriggers + tweens —
      // calling ctx.revert() on cleanup removes them cleanly
      // without touching React-managed DOM nodes.
      ctxRef.current = gsap.context(() => {
        ScrollTrigger.create({
          trigger: heroSection,
          start: 'top top',
          end: `+=${TOTAL_SCROLL}`,
          pin: true,
          pinSpacing: true,
          id: 'hero-pin',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: `+=${TOTAL_SCROLL}`,
            scrub: 1.4,
            id: 'hero-walk',
          },
        });

        // Hold the university static while the hero story begins.
        tl.to({}, { duration: HOLD_TIME });

        // Student starts walking toward the university.
        tl.to(
          student,
          {
            y: -96,
            scale: 1.52,
            duration: WALK_TIME,
            ease: 'power1.inOut',
          },
          HOLD_TIME
        );

        // Student enters the campus and fades into the building.
        tl.to(
          student,
          {
            y: -270,
            scale: 3.05,
            opacity: 0,
            duration: ENTER_TIME,
            ease: 'power3.in',
          },
          HOLD_TIME + WALK_TIME
        );

        if (vignette) {
          tl.to(
            vignette,
            { opacity: 0.8, duration: ENTER_TIME, ease: 'power3.in' },
            HOLD_TIME + WALK_TIME
          );
        }

        // Keep the university still until the student is nearly inside.
        tl.to(
          university,
          { scale: 1.045, duration: 0.36, ease: 'power1.out' },
          HOLD_TIME + WALK_TIME + ENTER_TIME * 0.22
        );
      });
    });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  return (
    <>
      {/* University background */}
      <div
        ref={universityRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: 'center center', willChange: 'transform' }}
      >
        {/* Plain img avoids Next.js fill/height-0 issues */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/german-university2.png"
          alt="German University"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.88) contrast(1.05) saturate(0.92)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,144,217,0.10),transparent_48%)] pointer-events-none" />
        <div className="absolute left-1/2 bottom-8 h-24 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_70%)] opacity-80 blur-2xl" />
        <div className="absolute left-1/2 bottom-14 h-1 w-[170px] -translate-x-1/2 rounded-full bg-white/10 blur-sm" />
        <div className="absolute left-1/2 bottom-8 h-2 w-[90px] -translate-x-1/2 rounded-full bg-[#4A90D9]/20" />
        {/* Bottom fade — text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[rgba(6,8,15,0.4)] to-transparent" />
        {/* Top fade — navbar blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(6,8,15,0.5)] to-transparent" />
      </div>

      {/* Graduating student */}
      <div
        ref={studentRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{
          width: 'clamp(260px, 38vw, 580px)',
          height: 'clamp(420px, 62vw, 860px)',
          transformOrigin: 'center bottom',
          willChange: 'transform, opacity',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/graduating-student2.png"
          alt="Graduating student walking toward the university"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      {/* Walk-in vignette */}
      <div
        ref={vignetteRef}
        className="absolute inset-0 pointer-events-none bg-[#06080F]"
        style={{ opacity: 0, willChange: 'opacity' }}
      />
    </>
  );
}