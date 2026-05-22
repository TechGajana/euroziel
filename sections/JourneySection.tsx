"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EyeBrow, Rule, SectionTitle } from "@/components/ui";
import {
  Calendar,
  FileText,
  Globe,
  GraduationCap,
  Plane,
  PartyPopper,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

// ─── Journey Step Data with Storytelling Elements ─────────────────────────────

interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: any;
  color: string;
  bgGradient: string;
  achievements: string[];
  milestone: string;
  quote?: string;
  stats?: { label: string; value: string }[];
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Your German Dream Begins",
    description: "Free consultation & profile evaluation",
    longDescription: "Every great journey starts with a single step. Our experts analyze your academic background, career goals, and aspirations to create a personalized roadmap to Germany.",
    icon: Calendar,
    color: "#4A90D9",
    bgGradient: "from-[#4A90D9]/20 to-transparent",
    achievements: ["Profile Assessment", "Goal Mapping", "University Shortlist"],
    milestone: "30-min Free Consultation",
    quote: "The first conversation changed everything - they understood exactly what I wanted.",
    stats: [
      { label: "Success Rate", value: "98%" },
      { label: "Response Time", value: "< 24h" },
    ],
  },
  {
    id: 2,
    title: "Crafting",
    subtitle: "Your Story, Perfected",
    description: "Documentation & application mastery",
    longDescription: "Your unique story deserves to be told perfectly. Our expert writers craft compelling SOPs, LORs, and CVs that showcase your potential to German universities.",
    icon: FileText,
    color: "#56CFB2",
    bgGradient: "from-[#56CFB2]/20 to-transparent",
    achievements: ["SOP Writing", "LOR Collection", "CV Optimization", "APS Guidance"],
    milestone: "100% Plagiarism-Free Content",
    quote: "My SOP got me noticed. The attention to detail was incredible.",
    stats: [
      { label: "SOP Success", value: "95%" },
      { label: "Edits per Doc", value: "3-4" },
    ],
  },
  {
    id: 3,
    title: "Selection",
    subtitle: "Finding Your Perfect Match",
    description: "Strategic university selection",
    longDescription: "We don't just apply anywhere. Our deep understanding of German universities helps you target institutions where your profile truly shines.",
    icon: Globe,
    color: "#F5A623",
    bgGradient: "from-[#F5A623]/20 to-transparent",
    achievements: ["University Ranking", "Course Matching", "Application Strategy"],
    milestone: "200+ Partner Universities",
    quote: "They recommended universities I hadn't even considered - and I got into all of them!",
    stats: [
      { label: "Acceptance Rate", value: "87%" },
      { label: "Universities", value: "200+" },
    ],
  },
  {
    id: 4,
    title: "Victory",
    subtitle: "Your Offer Arrives",
    description: "Admission & scholarship success",
    longDescription: "The moment you've been waiting for. We celebrate every offer and maximize your chances of securing scholarships from DAAD, Erasmus+, and universities.",
    icon: GraduationCap,
    color: "#BD10E0",
    bgGradient: "from-[#BD10E0]/20 to-transparent",
    achievements: ["Offer Negotiation", "Scholarship Applications", "Acceptance Guidance"],
    milestone: "€50M+ Scholarships Secured",
    quote: "Getting that acceptance letter with a scholarship felt surreal. Thank you!",
    stats: [
      { label: "Scholarship Rate", value: "65%" },
      { label: "Average Aid", value: "€8k" },
    ],
  },
  {
    id: 5,
    title: "Flight",
    subtitle: "Ready for Takeoff",
    description: "Visa & financial preparation",
    longDescription: "From blocked accounts to visa interviews, we ensure you're fully prepared for the logistical journey ahead. No surprises, just smooth sailing.",
    icon: Plane,
    color: "#7ED321",
    bgGradient: "from-[#7ED321]/20 to-transparent",
    achievements: ["Visa Guidance", "Blocked Account", "Insurance", "Flight Booking"],
    milestone: "98% Visa Success Rate",
    quote: "The visa interview prep was spot-on. I answered every question with confidence.",
    stats: [
      { label: "Visa Success", value: "98%" },
      { label: "Processing Time", value: "4-6 weeks" },
    ],
  },
  {
    id: 6,
    title: "Arrival",
    subtitle: "Welcome to Germany!",
    description: "Settling into your new home",
    longDescription: "Your journey culminates here. From Anmeldung to bank accounts, from campus tours to your first German beer - we're with you every step of the way.",
    icon: PartyPopper,
    color: "#E8445A",
    bgGradient: "from-[#E8445A]/20 to-transparent",
    achievements: ["Anmeldung", "Bank Account", "Health Insurance", "City Guide"],
    milestone: "2,000+ Students Settled",
    quote: "They even helped me find an apartment! EuroZiel is family.",
    stats: [
      { label: "Satisfaction", value: "99%" },
      { label: "Support Time", value: "24/7" },
    ],
  },
];

// ─── Custom Cursor Component (Client-side only) ─────────────────────────────────

function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('button, a, [data-interactive]');
    
    window.addEventListener('mousemove', moveCursor);
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.05s ease-out',
      }}
    >
      <div
        className={`
          relative flex items-center justify-center
          transition-all duration-300
          ${isHovering ? 'scale-150 opacity-100' : 'scale-100 opacity-70'}
        `}
        style={{
          width: isHovering ? '60px' : '20px',
          height: isHovering ? '60px' : '20px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(74,144,217,0.3) 0%, rgba(74,144,217,0.1) 100%)`,
          backdropFilter: 'blur(4px)',
          border: `1px solid rgba(74,144,217,${isHovering ? 0.6 : 0.3})`,
        }}
      >
        {isHovering && (
          <span className="text-[10px] font-bold text-[#4A90D9]">探索</span>
        )}
      </div>
    </div>
  );
}

// ─── Animated Journey Card ───────────────────────────────────────────────────

function JourneyCard({ step, index }: { step: JourneyStep; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className="relative group"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, ${step.color}40, transparent)`,
        }}
      />

      {/* Card Content */}
      <div
        className={`
          relative rounded-2xl border border-[rgba(74,144,217,0.16)] 
          bg-gradient-to-br from-[#0D1B2A] to-[#06080F] p-6
          transition-all duration-500 overflow-hidden
          ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        `}
        style={{
          transform: `translateY(${isHovered ? -8 : 0}px)`,
        }}
      >
        {/* Step Number Background */}
        <div
          className="absolute -right-4 -top-4 text-[120px] font-black opacity-5 select-none pointer-events-none"
          style={{ color: step.color }}
        >
          {String(step.id).padStart(2, '0')}
        </div>

        {/* Icon Section */}
        <div
          className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
            border: `1px solid ${step.color}30`,
          }}
        >
          <Icon className="h-8 w-8" style={{ color: step.color }} strokeWidth={1.5} />
          
          {/* Pulsing Ring */}
          <div
            className="absolute inset-0 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              boxShadow: `0 0 0 2px ${step.color}40, 0 0 0 4px ${step.color}20`,
              transition: "opacity 0.3s",
            }}
          />
        </div>

        {/* Title Section */}
        <h3 className="mb-2 text-xl font-bold text-[#E8EDF5] group-hover:transition-colors duration-300">
          {step.title}
        </h3>
        <p className="mb-3 text-sm font-semibold" style={{ color: step.color }}>
          {step.subtitle}
        </p>
        <p className="mb-4 text-sm text-[#A8C8F0] leading-relaxed">
          {step.description}
        </p>

        {/* Milestone Badge */}
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            background: `${step.color}15`,
            border: `1px solid ${step.color}30`,
            color: step.color,
          }}
        >
          <Sparkles className="h-3 w-3" />
          {step.milestone}
        </div>

        {/* Achievements List */}
        <div className="mb-4 space-y-2">
          {step.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-xs text-[#A8C8F0]"
            >
              <CheckCircle2 className="h-3 w-3" style={{ color: step.color }} />
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        if {step.stats && (
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[rgba(74,144,217,0.16)] pt-4">
            {step.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold" style={{ color: step.color }}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-[#A8C8F0]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Quote Section (visible on hover) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 overflow-hidden"
        >
          <div
            className="rounded-lg p-3 text-xs italic"
            style={{
              background: `${step.color}10`,
              borderLeft: `2px solid ${step.color}`,
            }}
          >
            <span className="text-[#A8C8F0]">"{step.quote}"</span>
          </div>
        </motion.div>

        {/* Interactive Arrow */}
        <div
          className="absolute bottom-6 right-6 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
          style={{ opacity: isHovered ? 1 : 0.3 }}
        >
          <ArrowRight className="h-5 w-5" style={{ color: step.color }} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Parallax Background Elements ───────────────────────────────────────────

function ParallaxBackground({ scrollProgress }: { scrollProgress: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeProgress = mounted && !isNaN(scrollProgress) ? scrollProgress : 0;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating Orbs */}
      <div
        className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(74,144,217,0.15) 0%, transparent 70%)",
          transform: `translate(${safeProgress * 50}px, ${safeProgress * 20}px)`,
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(86,207,178,0.1) 0%, transparent 70%)",
          transform: `translate(${-safeProgress * 40}px, ${-safeProgress * 30}px)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute left-[30%] top-[50%] h-[250px] w-[250px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(189,16,224,0.08) 0%, transparent 70%)",
          transform: `translate(${safeProgress * 30}px, ${safeProgress * 40}px)`,
          filter: "blur(70px)",
        }}
      />

      {/* Static particles (no random values for hydration) */}
      {mounted && [...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
            background: JOURNEY_STEPS[i % JOURNEY_STEPS.length].color,
            opacity: 0.1 + (i % 5) * 0.05,
            transform: `translateY(${safeProgress * 100 * (i % 5)}px)`,
            transition: "transform 0.1s ease-out",
            animation: `float ${3 + (i % 5)}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Journey Section ───────────────────────────────────────────────────

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      const totalScrollable = rect.height - windowHeight;
      const scrolled = -rect.top;
      let progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      // Apply easing
      progress = Math.pow(progress, 1.2);
      
      const safeProgress = isNaN(progress) ? 0 : progress;
      setScrollProgress(safeProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#06080F] via-[#0D1B2A] to-[#06080F] px-4 py-24 sm:px-[5%]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <div className="mb-4 h-6 w-32 animate-pulse rounded bg-[rgba(74,144,217,0.1)] mx-auto" />
            <div className="mb-6 h-12 w-96 animate-pulse rounded bg-[rgba(74,144,217,0.1)] mx-auto" />
            <div className="h-20 w-full max-w-2xl animate-pulse rounded bg-[rgba(74,144,217,0.05)] mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <CustomCursor />
      <section
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#06080F] via-[#0D1B2A] to-[#06080F] px-4 py-24 sm:px-[5%]"
        data-section="journey"
      >
        <ParallaxBackground scrollProgress={scrollProgress} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header with Storytelling Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <EyeBrow className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Your Journey in 6 Steps
            </EyeBrow>
            
            <SectionTitle>
              From Dream to{" "}
              <em className="relative not-italic text-[#4A90D9]">
                Deutschland
                <motion.span
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#4A90D9]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </em>
            </SectionTitle>
            
            <p className="mx-auto mt-6 max-w-2xl text-[#A8C8F0]">
              Every student's path is unique, but our proven framework ensures
              you never walk alone. Here's how we transform aspirations into
              achievements.
            </p>
          </motion.div>

          <Rule />

          {/* Journey Progress Bar */}
          <div className="mb-12 mt-8">
            <div className="relative h-1 overflow-hidden rounded-full bg-[rgba(74,144,217,0.16)]">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4A90D9, #56CFB2, #BD10E0, #E8445A)",
                  width: `${scrollProgress * 100}%`,
                }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-[#A8C8F0]">
              {JOURNEY_STEPS.map((step, i) => (
                <div
                  key={step.id}
                  className="relative cursor-pointer"
                  style={{ color: i / (JOURNEY_STEPS.length - 1) <= scrollProgress ? step.color : "#A8C8F0" }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider hidden sm:inline">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider sm:hidden">
                    {step.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {JOURNEY_STEPS.map((step, index) => (
              <JourneyCard
                key={step.id}
                step={step}
                index={index}
              />
            ))}
          </div>

          {/* Scroll Indicator for Journey Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress < 0.95 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-16 text-center"
          >
          </motion.div>

          {/* Motivational Footer (appears when reaching the end) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: scrollProgress >= 0.95 ? 1 : 0, y: scrollProgress >= 0.95 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="mt-20 rounded-2xl border border-[rgba(74,144,217,0.16)] bg-gradient-to-r from-[#4A90D9]/10 to-[#BD10E0]/10 p-8 text-center"
          >
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div className="text-left">
                <h3 className="mb-2 text-xl font-bold text-[#E8EDF5]">
                  Ready to begin your journey?
                </h3>
                <p className="text-sm text-[#A8C8F0]">
                  Join 2,000+ students who found their path to Germany with us
                </p>
              </div>
              <button
                data-interactive
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#4A90D9] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4A90D9]/30"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          
          @keyframes scrollExplore {
            0% { transform: translateY(-100%); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}</style>
      </section>
    </>
  );
}