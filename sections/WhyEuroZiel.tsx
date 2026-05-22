"use client";

import { useEffect, useRef, useCallback, type RefObject } from "react";
import { EyeBrow, Rule, SectionTitle } from "@/components/ui";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  num: string;
  icon: string; // SVG path d= string
  title: string;
  desc: string;
  accentColor: string; // CSS hex
}

// ─── Feature data ─────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    num: "01",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    title: "Germany-Exclusive Focus",
    desc: "Specialised in Germany's top public universities — deep domain expertise, not a generalist agency.",
    accentColor: "#4A90D9",
  },
  {
    num: "02",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Peer Mentors in Germany",
    desc: "Direct guidance from students enrolled at TU Munich, Berlin, and other top German institutions.",
    accentColor: "#56CFB2",
  },
  {
    num: "03",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "End-to-End Support",
    desc: "From SOP writing to on-arrival Anmeldung — every step guided by experts with zero gaps.",
    accentColor: "#F5A623",
  },
  {
    num: "04",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Personalised Strategy",
    desc: "Every student gets a dedicated counsellor and a bespoke admission strategy, not a template.",
    accentColor: "#BD10E0",
  },
  {
    num: "05",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Scholarship & Finance",
    desc: "DAAD, Erasmus+, university scholarships — plus education loan and blocked account guidance.",
    accentColor: "#7ED321",
  },
  {
    num: "06",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
    title: "Subsidised Language Coaching",
    desc: "Premium IELTS, GRE, GMAT & German coaching at 50% subsidised fees for EuroZiel students.",
    accentColor: "#E8445A",
  },
];

// ─── Magnetic Feature Card ────────────────────────────────────────────────────

function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: Feature;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const updatePointerEffect = useCallback(
    (clientX: number, clientY: number) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (clientX - cx) / (rect.width / 2);
        const dy = (clientY - cy) / (rect.height / 2);

        // Magnetic tilt — max ±8 degrees
        card.style.transform = `perspective(800px) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) translateZ(6px)`;

        // Inner glow follows cursor
        const gx = ((clientX - rect.left) / rect.width) * 100;
        const gy = ((clientY - rect.top) / rect.height) * 100;
        glow.style.background = `radial-gradient(circle at ${gx}% ${gy}%, ${feature.accentColor}22 0%, transparent 65%)`;
      });
    },
    [feature.accentColor]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => updatePointerEffect(e.clientX, e.clientY),
    [updatePointerEffect]
  );

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    glow.style.background = "transparent";
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerenter", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerenter", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handlePointerMove, handlePointerLeave]);

  const delay = index * 80;

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden bg-[#06080F] p-5 transition-transform duration-200 ease-out md:p-6"
      style={{
        transition: inView
          ? `opacity 0.7s ${delay}ms, transform 0.7s ${delay}ms, box-shadow 0.3s`
          : "opacity 0.7s, transform 0.7s",
        opacity: inView ? 1 : 0,
        clipPath: inView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        willChange: "transform",
      }}
    >
      {/* Cursor-following inner glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 transition-[background] duration-200"
        aria-hidden="true"
      />

      {/* Animated top-edge accent line */}
      <div
        className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${feature.accentColor}, transparent)` }}
        aria-hidden="true"
      />

      {/* Hover left-border glow */}
      <div
        className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 transition-transform duration-500"
        style={{ background: feature.accentColor }}
        aria-hidden="true"
      />

      {/* Card number — big watermark */}
      <div
        className="absolute right-4 top-3 font-heading text-4xl font-bold leading-none select-none md:right-5 md:top-4 md:text-[56px]"
        style={{ color: `${feature.accentColor}12` }}
        aria-hidden="true"
      >
        {feature.num}
      </div>

      {/* Icon */}
      <div
        className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 md:mb-5 md:h-11 md:w-11"
        style={{ background: `${feature.accentColor}18`, border: `1px solid ${feature.accentColor}30` }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={feature.accentColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 md:h-5 md:w-5"
          aria-hidden="true"
        >
          <path d={feature.icon} />
        </svg>
      </div>

      {/* Text */}
      <h3 className="mb-2 text-sm font-bold leading-snug text-[#E8EDF5] md:text-[15px]">
        {feature.title}
      </h3>
      <p className="text-xs leading-relaxed text-[#7A9CC0] md:text-[13.5px] md:leading-[1.75]">
        {feature.desc}
      </p>

      {/* Bottom accent chip */}
      <div
        className="mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[9px] font-semibold tracking-[0.06em] md:mt-5 md:px-3 md:py-1 md:text-[10.5px]"
        style={{
          background: `${feature.accentColor}12`,
          border: `1px solid ${feature.accentColor}28`,
          color: feature.accentColor,
        }}
      >
        <span
          className="h-1 w-1 rounded-full md:h-1.5 md:w-1.5"
          style={{ background: feature.accentColor }}
          aria-hidden="true"
        />
        {feature.num} / 06
      </div>
    </div>
  );
}

// ─── Parallax Orb ─────────────────────────────────────────────────────────────

function ParallaxOrb({
  className,
  color,
  speed,
  scrollY,
}: {
  className: string;
  color: string;
  speed: number;
  scrollY: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[80px] ${className}`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: `translateY(${scrollY * speed}px)`,
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}

// ─── Why EuroZiel Section ─────────────────────────────────────────────────────

export function WhyEuroZiel({
  inView,
  sectionRef,
}: {
  inView: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const orbsRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef(0);
  const lastScrollRef = useRef(0);

  // ── Cursor glow tracker ──────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    const glow = cursorGlowRef.current;
    if (!section || !glow) return;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    };

    const leave = () => {
      if (glow) glow.style.opacity = "0";
    };

    section.addEventListener("mousemove", move, { passive: true });
    section.addEventListener("mouseleave", leave);
    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseleave", leave);
    };
  }, [sectionRef]);

  // ── Parallax orb scroll ──────────────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    const orbs = orbsRef.current;
    if (!section || !orbs) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      // Parallax offset relative to section centre
      const sectionMid = rect.top + rect.height / 2;
      const viewMid = window.innerHeight / 2;
      scrollYRef.current = (sectionMid - viewMid) * 0.1;

      if (Math.abs(scrollYRef.current - lastScrollRef.current) > 0.5) {
        lastScrollRef.current = scrollYRef.current;
        // Update individual orb children
        const orbEls = orbs.querySelectorAll<HTMLElement>("[data-orb]");
        orbEls.forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "0.2");
          el.style.transform = `translateY(${scrollYRef.current * speed}px)`;
        });
      }

      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-12 sm:px-[5%] md:py-16 lg:py-20"
    >
      {/* ── Parallax orb layer ── */}
      <div ref={orbsRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          data-orb
          data-speed="0.15"
          className="absolute -left-[15%] top-[10%] h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(74,144,217,0.09) 0%, transparent 65%)",
            filter: "blur(60px)",
            willChange: "transform",
          }}
        />
        <div
          data-orb
          data-speed="0.28"
          className="absolute -right-[10%] top-[40%] h-[300px] w-[300px] rounded-full md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
          style={{
            background: "radial-gradient(circle, rgba(86,207,178,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
        <div
          data-orb
          data-speed="0.08"
          className="absolute bottom-[-5%] left-[35%] h-[250px] w-[250px] rounded-full md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px]"
          style={{
            background: "radial-gradient(circle, rgba(189,16,224,0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* ── Cursor glow ── */}
      <div
        ref={cursorGlowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(74,144,217,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,144,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,144,217,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-[1] mx-auto w-full max-w-7xl">
        <EyeBrow className={inView ? "animate-fade-up" : "opacity-0"}>
          Why EuroZiel
        </EyeBrow>

        <SectionTitle className={inView ? "animate-fade-up-d1" : "opacity-0"}>
          Everything you need,
          <br />
          <em className="text-[#4A90D9] not-italic">under one roof</em>
        </SectionTitle>

        <p
          className={[
            "max-w-2xl text-sm font-light leading-relaxed text-[#A8C8F0] sm:text-base md:leading-[1.9]",
            inView ? "animate-fade-up-d2" : "opacity-0",
          ].join(" ")}
        >
          We are not just a consultancy — we are a living bridge between
          Indian students and Germany&apos;s top universities.
        </p>

        <Rule />

        {/* ── 6-card grid ── */}
        <div
          className={[
            "relative mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl",
            "border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.08)]",
            "sm:grid-cols-2 lg:grid-cols-3",
            "md:mt-12 lg:mt-16",
          ].join(" ")}
          style={{
            // Animated conic gradient behind cards (shows through gap-px gutters)
            backgroundImage: inView
              ? "conic-gradient(from var(--angle, 0deg) at 50% 50%, rgba(74,144,217,0.18), rgba(86,207,178,0.10), rgba(189,16,224,0.08), rgba(74,144,217,0.18))"
              : undefined,
          }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.num}
              feature={feature}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Rotating conic border keyframe injection */}
        {inView && (
          <style>{`
            @property --angle {
              syntax: '<angle>';
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes rotateConic {
              to { --angle: 360deg; }
            }
            [class*="grid-cols"] {
              animation: rotateConic 8s linear infinite;
            }
          `}</style>
        )}
      </div>
    </section>
  );
}