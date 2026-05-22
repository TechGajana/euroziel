"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Phone,
  Plane,
  Users,
} from "lucide-react";
import { Btn, EyeBrow } from "@/components/ui";
import { CountryFlag, type CountryCode } from "@/components/CountryFlag";

// ─── Float Card ────────────────────────────────────────────────────────────────

interface FloatCardProps {
  Icon?: typeof GraduationCap;
  flag?: CountryCode;
  title: string;
  sub: string;
  chip: string;
  animationClass?: string;
  className?: string;
  offsetX?: number;
  offsetY?: number;
  delay?: number;
}

function FloatCard({
  Icon,
  flag,
  title,
  sub,
  chip,
  animationClass = "",
  className = "",
  offsetX = 0,
  offsetY = 0,
}: FloatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseX(x * 10);
      setMouseY(y * 10);
    };

    const handleMouseLeave = () => {
      setMouseX(0);
      setMouseY(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={[
        "rounded-xl border border-[rgba(74,144,217,0.18)] bg-gradient-to-br from-[#0f2035] to-[#0D1B2A]",
        "p-4 shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-sm",
        "transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(74,144,217,0.40)] hover:shadow-[0_8px_40px_rgba(74,144,217,0.18)]",
        animationClass,
        className,
      ].join(" ")}
      style={{
        transform: `translate(${offsetX + mouseX * 0.3}px, ${offsetY + mouseY * 0.3}px) rotateX(${mouseY * 0.5}deg) rotateY(${mouseX * 0.5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="mb-3 flex h-8 w-8 items-center justify-center">
        {flag ? (
          <CountryFlag code={flag} className="h-6 w-8 rounded-sm object-cover" />
        ) : Icon ? (
          <Icon className="h-6 w-6 text-[#4A90D9]" strokeWidth={1.5} />
        ) : null}
      </div>

      <div className="mb-0.5 font-heading text-[12.5px] font-bold leading-snug text-[#E8EDF5]">
        {title}
      </div>
      <div className="text-[11px] leading-snug text-[#A8C8F0]">{sub}</div>
      <div className="mt-2.5 inline-block rounded-full border border-[rgba(74,144,217,0.30)] bg-[rgba(74,144,217,0.10)] px-2.5 py-[3px] text-[10px] font-semibold tracking-[0.05em] text-[#A8C8F0]">
        {chip}
      </div>
    </div>
  );
}

// ─── Parallax Background Orbs ───────────────────────────────────────────────────

// Fixed particle positions - deterministic between server and client
const PARTICLE_POSITIONS = [
  { left: "15%", top: "20%", duration: 4.2, opacity: 0.45 },
  { left: "85%", top: "15%", duration: 3.8, opacity: 0.35 },
  { left: "45%", top: "75%", duration: 5.1, opacity: 0.5 },
  { left: "70%", top: "45%", duration: 4.5, opacity: 0.4 },
  { left: "10%", top: "60%", duration: 3.5, opacity: 0.3 },
  { left: "55%", top: "10%", duration: 4.8, opacity: 0.55 },
  { left: "90%", top: "80%", duration: 5.5, opacity: 0.35 },
  { left: "25%", top: "85%", duration: 3.9, opacity: 0.4 },
  { left: "65%", top: "55%", duration: 4.3, opacity: 0.45 },
  { left: "35%", top: "30%", duration: 5.2, opacity: 0.5 },
  { left: "80%", top: "65%", duration: 3.7, opacity: 0.38 },
  { left: "5%", top: "40%", duration: 4.6, opacity: 0.42 },
  { left: "50%", top: "90%", duration: 5.0, opacity: 0.48 },
  { left: "75%", top: "5%", duration: 3.4, opacity: 0.32 },
  { left: "30%", top: "50%", duration: 4.4, opacity: 0.44 },
  { left: "95%", top: "35%", duration: 5.3, opacity: 0.39 },
  { left: "40%", top: "95%", duration: 3.6, opacity: 0.36 },
  { left: "20%", top: "15%", duration: 4.7, opacity: 0.47 },
  { left: "60%", top: "30%", duration: 5.4, opacity: 0.43 },
  { left: "48%", top: "48%", duration: 4.1, opacity: 0.41 },
];

function ParallaxOrbs({ scrollProgress }: { scrollProgress: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orb 1 - Top Left */}
      <div
        className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(74,144,217,0.15) 0%, transparent 70%)",
          transform: `translate(${scrollProgress * 50}px, ${scrollProgress * 30}px) scale(${1 + scrollProgress * 0.5})`,
          filter: "blur(60px)",
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Orb 2 - Bottom Right */}
      <div
        className="absolute -bottom-[30%] -right-[20%] h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(86,207,178,0.12) 0%, transparent 70%)",
          transform: `translate(${-scrollProgress * 40}px, ${-scrollProgress * 40}px) scale(${1 + scrollProgress * 0.3})`,
          filter: "blur(80px)",
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Orb 3 - Center Right */}
      <div
        className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(189,16,224,0.08) 0%, transparent 70%)",
          transform: `translate(${scrollProgress * 30}px, ${-scrollProgress * 20}px)`,
          filter: "blur(70px)",
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Floating particles - only render on client to avoid hydration mismatch */}
      {mounted && PARTICLE_POSITIONS.map((particle, i) => (
        <div
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-[#4A90D9]"
          style={{
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            transform: `translateY(${scrollProgress * 50}px)`,
            transition: "transform 0.1s ease-out",
            animation: `floatParticle ${particle.duration}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Float Cluster (desktop) ───────────────────────────────────────────────────

function FloatCluster({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="relative mx-auto hidden h-[500px] w-[440px] md:block">
      <FloatCard
        Icon={GraduationCap}
        title="Profile Evaluated & Admitted"
        sub="Technical University of Munich"
        chip="MSc Engineering · Winter 2025"
        animationClass="animate-float-a"
        className="absolute left-1/2 top-1/2 z-10 w-[230px] -translate-x-1/2 -translate-y-1/2 border-[rgba(74,144,217,0.36)] shadow-[0_4px_48px_rgba(74,144,217,0.22)]"
        offsetY={scrollProgress * -20}
      />
      <FloatCard
        flag="de"
        title="Germany"
        sub="€0 Tuition · Public Uni"
        chip="400+ Universities"
        animationClass="animate-float-b"
        className="absolute left-0 top-[28px] w-[168px]"
        offsetX={scrollProgress * -15}
        offsetY={scrollProgress * 10}
      />
      <FloatCard
        Icon={Award}
        title="DAAD Scholarship"
        sub="€861/month awarded"
        chip="Fully Funded"
        animationClass="animate-float-c"
        className="absolute right-0 top-[20px] w-[168px]"
        offsetX={scrollProgress * 15}
        offsetY={scrollProgress * 10}
      />
      <FloatCard
        Icon={Plane}
        title="Visa Approved"
        sub="German Student Visa"
        chip="98% Success Rate"
        animationClass="animate-float-d"
        className="absolute bottom-[36px] left-0 w-[168px]"
        offsetX={scrollProgress * -10}
        offsetY={scrollProgress * -15}
      />
      <FloatCard
        Icon={Users}
        title="Peer Mentorship"
        sub="Live from TU Berlin"
        chip="Student Network"
        animationClass="animate-float-e"
        className="absolute bottom-[28px] right-0 w-[168px]"
        offsetX={scrollProgress * 10}
        offsetY={scrollProgress * -15}
      />
    </div>
  );
}

// ─── Mobile Float Stack ────────────────────────────────────────────────────────

function MobileFloatStack({ scrollProgress }: { scrollProgress: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe opacity calculation - ensure value is between 0 and 1
  const safeOpacity = Math.max(0, Math.min(1, 1 - scrollProgress * 0.3));
  const safeOpacityValue = isNaN(safeOpacity) ? 1 : safeOpacity;

  return (
    <div className="mt-8 flex flex-col gap-3 md:hidden">
      {[
        {
          Icon: GraduationCap,
          title: "Profile Evaluated & Admitted",
          sub: "Technical University of Munich",
          chip: "MSc Engineering · Winter 2025",
        },
        {
          flag: "de" as CountryCode,
          title: "Germany",
          sub: "€0 Tuition · Public University",
          chip: "400+ Universities",
        },
        {
          Icon: Award,
          title: "DAAD Scholarship",
          sub: "€861/month awarded",
          chip: "Fully Funded",
        },
      ].map((card, i) => {
        // Safe transform calculation
        const translateY = mounted ? scrollProgress * 30 * (i + 1) : 0;
        const safeTranslateY = isNaN(translateY) ? 0 : translateY;
        
        return (
          <div
            key={card.title}
            style={{
              transform: `translateY(${safeTranslateY}px)`,
              opacity: safeOpacityValue,
              transition: mounted ? "transform 0.1s ease-out, opacity 0.1s ease-out" : "none",
            }}
          >
            <FloatCard {...card} className="w-full" />
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Hero Component ───────────────────────────────────────────────────────

export function HeroSection({ onScrollProgress }: { onScrollProgress?: (progress: number) => void }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) as user scrolls through the hero section
      const start = 0;
      const end = rect.height - windowHeight;
      const scrolled = -rect.top;
      let progress = Math.max(0, Math.min(1, scrolled / end));
      
      // Easing function for smoother parallax
      progress = Math.pow(progress, 1.5);
      
      // Ensure progress is a valid number
      const safeProgress = isNaN(progress) ? 0 : progress;
      
      setScrollProgress(safeProgress);
      onScrollProgress?.(safeProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollProgress]);

  // Safe transform values
  const safeTransformY = mounted && !isNaN(scrollProgress * 40) ? scrollProgress * 40 : 0;
  const safeOpacity = mounted && !isNaN(1 - scrollProgress * 0.5) ? Math.max(0, Math.min(1, 1 - scrollProgress * 0.5)) : 1;
  const safeGridTransformY = mounted && !isNaN(scrollProgress * 30) ? scrollProgress * 30 : 0;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100dvh] flex-col justify-center overflow-hidden bg-[#06080F] px-4 sm:px-[5%]"
    >
      {/* Parallax Background Orbs */}
      <ParallaxOrbs scrollProgress={scrollProgress} />

      {/* Grid texture overlay with parallax */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,144,217,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,144,217,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          transform: `translateY(${safeGridTransformY}px)`,
        }}
      />

      {/* Content grid */}
      <div className="relative z-[1] mx-auto flex w-full max-w-[1240px] flex-1 items-center">
        <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-[60px]">
          
          {/* Left column — text with parallax */}
          <div
            className="flex flex-col justify-center"
            style={{
              transform: `translateY(${safeTransformY}px)`,
              opacity: safeOpacity,
            }}
          >
            {/* Badge */}
            <div className="animate-fade-up mb-4 inline-flex max-w-full w-fit items-center gap-2 rounded-full border border-[rgba(74,144,217,0.30)] bg-[rgba(74,144,217,0.09)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A8C8F0] sm:text-[11.5px]">
              <span className="animate-blink h-[7px] w-[7px] shrink-0 rounded-full bg-[#4A90D9]" />
              Germany&apos;s Trusted Student Bridge
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-d1 mb-4 font-heading text-[clamp(30px,4.8vw,64px)] font-bold leading-[1.11] tracking-[-0.01em] sm:mb-5">
              Your{" "}
              <em className="relative not-italic text-[#4A90D9]">
                European Dream
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#4A90D9] opacity-30"
                  aria-hidden="true"
                />
              </em>
              <br />
              Starts Here
            </h1>

            {/* Sub */}
            <p className="animate-fade-up-d2 mb-6 max-w-[490px] text-[14.5px] font-light leading-[1.85] text-[#A8C8F0] sm:text-[16px] md:text-[15.5px] lg:text-[17px]">
              EuroZiel connects ambitious Indian students directly to
              Germany&apos;s top public universities — with guidance from
              students who are already there.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-d3 mb-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Btn href="/contact">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                Book Free Counselling
              </Btn>
              <Btn href="/europe" variant="ghost">
                Explore Germany
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Btn>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up-d4 mb-6 flex items-center gap-3">
              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.08)] hover:text-[#25D366]"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#E1306C] hover:bg-[rgba(225,48,108,0.08)] hover:text-[#E1306C]"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#0A66C2] hover:bg-[rgba(10,102,194,0.08)] hover:text-[#0A66C2]"
              >
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up-d5 grid grid-cols-3 divide-x divide-[rgba(74,144,217,0.16)] border-t border-[rgba(74,144,217,0.16)] pt-5">
              {[
                ["2,000+", "Students Placed"],
                ["200+", "Universities"],
                ["98%", "Visa Success"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="group min-w-0 px-2 text-center first:pl-0 last:pr-0 sm:px-4"
                >
                  <div className="font-heading text-[clamp(1rem,4.5vw,1.75rem)] font-bold leading-none text-[#4A90D9] transition-colors duration-200 group-hover:text-[#7AB8E8]">
                    {n}
                  </div>
                  <div className="mt-1 text-[10px] leading-snug text-[rgba(232,237,245,0.50)] sm:text-[11px]">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile float stack */}
            <div className="mt-5 md:hidden">
              <MobileFloatStack scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* Right column — float cluster (desktop only) */}
          <div className="animate-slide-in-right hidden md:flex md:items-center md:justify-center">
            <FloatCluster scrollProgress={scrollProgress} />
          </div>
        </div>
      </div>

      {/* Scroll indicator with parallax fade */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: Math.max(0, Math.min(1, 1 - scrollProgress * 2)) }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.12em] text-[rgba(168,200,240,0.40)]">
            Scroll
          </span>
          <div className="flex h-8 w-[1px] items-end justify-center overflow-hidden bg-[rgba(74,144,217,0.15)]">
            <div
              className="h-4 w-full bg-[#4A90D9]"
              style={{ animation: "scrollDrop 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}