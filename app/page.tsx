"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Diamond,
  GraduationCap,
  PartyPopper,
  Phone,
  Plane,
  Star,
  Users,
} from "lucide-react";
import { Btn, CtaBand, EyeBrow, Rule, SectionTitle } from "@/components/ui";
import { CountryFlag, type CountryCode } from "@/components/CountryFlag";
import { useScrollReveal, stagger } from "@/hooks/useScrollReveal";
import Image from "next/image";

// ─── Float Card ────────────────────────────────────────────────────────────────
// No more `absolute` by default — caller decides positioning via className.
// Sizes are fixed so cards never overlap each other.

interface FloatCardProps {
  Icon?: LucideIcon;
  flag?: CountryCode;
  title: string;
  sub: string;
  chip: string;
  animationClass?: string; // e.g. 'animate-float-a'
  glowClass?: string; // optional glow animation
  className?: string; // positioning / size
}

function FloatCard({
  Icon,
  flag,
  title,
  sub,
  chip,
  animationClass = "",
  glowClass = "",
  className = "",
}: FloatCardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-[rgba(74,144,217,0.18)] bg-gradient-to-br from-[#0f2035] to-[#0D1B2A]",
        "p-4 shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-sm",
        "transition-transform duration-300 hover:-translate-y-1 hover:border-[rgba(74,144,217,0.40)] hover:shadow-[0_8px_40px_rgba(74,144,217,0.18)]",
        animationClass,
        glowClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Icon or flag */}
      <div className="mb-3 flex h-8 w-8 items-center justify-center">
        {flag ? (
          <CountryFlag
            code={flag}
            className="h-6 w-8 rounded-sm object-cover"
          />
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

// ─── Float Cluster (desktop) ───────────────────────────────────────────────────
// Uses a fixed-height container with carefully offset absolute cards.
// Max-width ensures the cluster itself never exceeds its column.

function FloatCluster() {
  return (
    /*
     * Container: 440px wide, 500px tall on desktop.
     * Each card has explicit `w-[Npx]` and pixel offsets so nothing overlaps.
     * Cards are nudged with top/left/right/bottom + translate tricks.
     */
    <div className="relative mx-auto hidden h-[500px] w-[440px] md:block">
      {/* ── Centre hero card ── */}
      <FloatCard
        Icon={GraduationCap}
        title="Profile Evaluated & Admitted"
        sub="Technical University of Munich"
        chip="MSc Engineering · Winter 2025"
        animationClass="animate-float-a"
        glowClass="animate-glow-pulse"
        className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 border-[rgba(74,144,217,0.36)] shadow-[0_4px_48px_rgba(74,144,217,0.22)] z-10"
      />

      {/* ── Top-left: Germany ── */}
      <FloatCard
        flag="de"
        title="Germany"
        sub="€0 Tuition · Public Uni"
        chip="400+ Universities"
        animationClass="animate-float-b"
        className="absolute left-0 top-[28px] w-[168px]"
      />

      {/* ── Top-right: Scholarship ── */}
      <FloatCard
        Icon={Award}
        title="DAAD Scholarship"
        sub="€861/month awarded"
        chip="Fully Funded"
        animationClass="animate-float-c"
        className="absolute right-0 top-[20px] w-[168px]"
      />

      {/* ── Bottom-left: Visa ── */}
      <FloatCard
        Icon={Plane}
        title="Visa Approved"
        sub="German Student Visa"
        chip="98% Success Rate"
        animationClass="animate-float-d"
        className="absolute bottom-[36px] left-0 w-[168px]"
      />

      {/* ── Bottom-right: Mentorship ── */}
      <FloatCard
        Icon={Users}
        title="Peer Mentorship"
        sub="Live from TU Berlin"
        chip="Student Network"
        animationClass="animate-float-e"
        className="absolute bottom-[28px] right-0 w-[168px]"
      />
    </div>
  );
}

// ─── Mobile Float Stack ────────────────────────────────────────────────────────
// On mobile, show 3 key cards stacked in a clean column instead of overlapping.

function MobileFloatStack() {
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
      ].map((card) => (
        <FloatCard key={card.title} {...card} className="w-full" />
      ))}
    </div>
  );
}

// ─── Ticker Strip ─────────────────────────────────────────────────────────────
// Pure CSS infinite ticker — no JS, no ResizeObserver quirks.

const TICKER_ITEMS = [
  "Free Profile Evaluation",
  "APS Documentation",
  "SOP & LOR Writing",
  "Blocked Amount Setup",
  "DAAD & Scholarship Guidance",
  "IELTS & German Coaching — 50% Subsidised",
  "On-Arrival Support in Germany",
  "Direct Student Mentors · German Universities",
];

function TickerStrip() {
  // Duplicate items so the loop is seamless
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] py-3.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker items-center gap-x-8 whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 text-[13px] text-[#A8C8F0]"
          >
            <Diamond
              className="h-[7px] w-[7px] shrink-0 fill-[#4A90D9] text-[#4A90D9]"
              strokeWidth={0}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestiCard({
  initials,
  quote,
  name,
  info,
  country,
}: {
  initials: string;
  quote: string;
  name: string;
  info: string;
  country?: CountryCode;
}) {
  return (
    <div className="group rounded-xl border border-[rgba(74,144,217,0.14)] bg-[#0D1B2A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(74,144,217,0.35)] hover:shadow-[0_8px_40px_rgba(74,144,217,0.12)] sm:p-7">
      {/* Stars */}
      <div className="mb-4 flex gap-0.5 text-[#4A90D9]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 text-[14.5px] font-light italic leading-[1.85] text-[#A8C8F0]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(74,144,217,0.30)] bg-[rgba(74,144,217,0.10)] font-heading text-[12.5px] font-bold text-[#4A90D9] transition-colors duration-200 group-hover:border-[rgba(74,144,217,0.55)] group-hover:bg-[rgba(74,144,217,0.18)]">
          {initials}
        </div>
        <div>
          <div className="font-heading text-[13.5px] font-bold text-[#E8EDF5]">
            {name}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11.5px] text-[#A8C8F0]">
            <span>{info}</span>
            {country ? (
              <CountryFlag
                code={country}
                className="h-[10px] w-4 rounded-[2px]"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Uniqueness Feature Card ───────────────────────────────────────────────────

function FeatureCard({
  num,
  title,
  desc,
  inView,
  index,
}: {
  num: string;
  title: string;
  desc: string;
  inView: boolean;
  index: number;
}) {
  return (
    <div
      className={[
        "bg-[#06080F] p-6 transition-all duration-300 hover:bg-[#0a1020] sm:p-8",
        inView ? stagger(inView, index) : "opacity-0 translate-y-7",
        "transition-[opacity,transform] duration-700",
      ].join(" ")}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      <div className="mb-4 font-heading text-[32px] font-bold leading-none text-[rgba(74,144,217,0.25)] transition-colors duration-200 group-hover:text-[rgba(74,144,217,0.45)]">
        {num}
      </div>
      <h3 className="mb-2.5 text-[15px] font-bold leading-snug text-[#E8EDF5]">
        {title}
      </h3>
      <p className="text-[13.5px] leading-[1.75] text-[#A8C8F0]">{desc}</p>
    </div>
  );
}

// ─── Process Step ─────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  { n: "1", title: "Free Consultation", sub: "Profile eval & goal mapping" },
  { n: "2", title: "Documentation", sub: "APS, SOP, LOR, CV crafted" },
  {
    n: "3",
    title: "University Selection",
    sub: "Apply to best-fit universities",
  },
  { n: "4", title: "Offer & Scholarship", sub: "Admission + DAAD/Erasmus+" },
  { n: "5", title: "Visa & Finance", sub: "Blocked account, embassy prep" },
  {
    n: "6",
    title: "Arrive in Germany",
    sub: "Anmeldung, bank, campus",
    celebrate: true,
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const whyRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const processRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const statsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const testiRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <>
      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative flex h-[100dvh] flex-col justify-center overflow-hidden bg-[#06080F] px-4 sm:px-[5%]">
        
        {/* Hero background SVG — paste the SVG as a file */}
        <Image
          src="/images/euroziel_hero_bg_bridge.svg" // Public folder paths start with a slash
          alt="Decorative bridge background" // Required for Next.js Image
          aria-hidden="true"
          fill // Replaces h-full w-full absolute inset-0
          priority // Loads the hero image faster
          className="pointer-events-none object-cover opacity-60"
          style={{ objectPosition: "center center" }}
        />
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(rgba(74,144,217,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(74,144,217,0.04) 1px, transparent 1px)
      `,
            backgroundSize: "52px 52px",
          }}
        />

        {/* Ambient glow — left */}
        <div
          className="pointer-events-none absolute -left-[10%] -top-[10%] h-[80%] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(74,144,217,0.10) 0%, transparent 68%)",
          }}
        />

        {/* Ambient glow — bottom right */}
        <div
          className="pointer-events-none absolute -bottom-[5%] right-[5%] h-[50%] w-[40%]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(74,144,217,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Content grid — fills available height, centres content */}
        <div className="relative z-[1] mx-auto flex w-full max-w-[1240px] flex-1 items-center">
          <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-[60px]">
            {/* Left column — text */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="animate-fade-up mb-4 inline-flex max-w-full w-fit items-center gap-2 rounded-full border border-[rgba(74,144,217,0.30)] bg-[rgba(74,144,217,0.09)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A8C8F0] sm:text-[11.5px]">
                <span className="animate-blink h-[7px] w-[7px] shrink-0 rounded-full bg-[#4A90D9]" />
                Germany&apos;s Trusted Student Bridge
              </div>

              {/* Headline — clamp tighter so it never overflows on small screens */}
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
                {/* WhatsApp */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#25D366] hover:bg-[rgba(37,211,102,0.08)] hover:text-[#25D366]"
                >
                  {/* WhatsApp SVG */}
                  <svg
                    className="h-4 w-4 shrink-0 transition-colors duration-200 group-hover:text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#E1306C] hover:bg-[rgba(225,48,108,0.08)] hover:text-[#E1306C]"
                >
                  {/* Instagram SVG */}
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex items-center gap-2 rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] px-3.5 py-2 text-[11.5px] font-medium text-[#A8C8F0] transition-all duration-200 hover:border-[#0A66C2] hover:bg-[rgba(10,102,194,0.08)] hover:text-[#0A66C2]"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Divider */}
                {/* <div className="h-5 w-px bg-[rgba(74,144,217,0.16)]" /> */}

                {/* Email — icon only */}
                {/* <a
                  href="mailto:info@euroziel.com"
                  aria-label="Email"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(74,144,217,0.20)] bg-[rgba(74,144,217,0.06)] text-[#A8C8F0] transition-all duration-200 hover:border-[rgba(74,144,217,0.50)] hover:bg-[rgba(74,144,217,0.14)] hover:text-[#4A90D9]"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a> */}
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

              {/* Mobile float stack — only renders on mobile */}
              <div className="mt-5 md:hidden">
                <MobileFloatStack />
              </div>
            </div>

            {/* Right column — float cluster (desktop only) */}
            <div className="animate-slide-in-right hidden md:flex md:items-center md:justify-center">
              <FloatCluster />
            </div>
          </div>
        </div>

        {/* Scroll indicator — sits at bottom of the locked viewport */}
        <div className="animate-fade-in absolute bottom-6 left-1/2 -translate-x-1/2">
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
  `}</style>
      </section>

      {/* ────────────────────────── TICKER ────────────────────────── */}
      <TickerStrip />

      {/* ────────────────────────── WHY EUROZIEL ────────────────────────── */}
      <section ref={whyRef.ref} className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow className={whyRef.inView ? "animate-fade-up" : "opacity-0"}>
            Why EuroZiel
          </EyeBrow>
          <SectionTitle
            className={whyRef.inView ? "animate-fade-up-d1" : "opacity-0"}
          >
            Everything you need,
            <br />
            <em className="text-[#4A90D9] not-italic">under one roof</em>
          </SectionTitle>
          <p
            className={[
              "max-w-[560px] text-[16px] font-light leading-[1.9] text-[#A8C8F0] sm:text-[17px]",
              whyRef.inView ? "animate-fade-up-d2" : "opacity-0",
            ].join(" ")}
          >
            We are not just a consultancy — we are a living bridge between
            Indian students and Germany&apos;s top universities.
          </p>
          <Rule />

          {/* 6-feature grid */}
          <div className="relative mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.12)] min-[480px]:grid-cols-2 md:mt-[60px] lg:grid-cols-3">
            {[
              [
                "01",
                "Germany-Exclusive Focus",
                "Specialised in Germany's top public universities — deep domain expertise, not a generalist agency.",
              ],
              [
                "02",
                "Peer Mentors in Germany",
                "Direct guidance from students enrolled at TU Munich, Berlin, and other top German institutions.",
              ],
              [
                "03",
                "End-to-End Support",
                "From SOP writing to on-arrival Anmeldung — every step guided by experts with zero gaps.",
              ],
              [
                "04",
                "Personalised Strategy",
                "Every student gets a dedicated counsellor and a bespoke admission strategy, not a template.",
              ],
              [
                "05",
                "Scholarship & Finance",
                "DAAD, Erasmus+, university scholarships — plus education loan and blocked account guidance.",
              ],
              [
                "06",
                "Subsidised Language Coaching",
                "Premium IELTS, GRE, GMAT & German coaching at 50% subsidised fees for EuroZiel students.",
              ],
            ].map(([num, title, desc], i) => (
              <FeatureCard
                key={num}
                num={num}
                title={title}
                desc={desc}
                inView={whyRef.inView}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── PROCESS ────────────────────────── */}
      <section
        ref={processRef.ref}
        className="border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-16 sm:px-[5%] sm:py-24"
      >
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow
            className={processRef.inView ? "animate-fade-up" : "opacity-0"}
          >
            How It Works
          </EyeBrow>
          <SectionTitle
            className={processRef.inView ? "animate-fade-up-d1" : "opacity-0"}
          >
            Your journey in{" "}
            <em className="text-[#4A90D9] not-italic">6 clear steps</em>
          </SectionTitle>
          <Rule />

          {/* Steps */}
          <div className="relative mt-10 grid grid-cols-1 gap-y-8 min-[480px]:grid-cols-2 md:mt-14 lg:grid-cols-6 lg:gap-0">
            {/* Connector line — desktop only */}
            <div
              className="pointer-events-none absolute left-[calc(100%/12)] right-[calc(100%/12)] top-[22px] hidden h-px bg-gradient-to-r from-[#4A90D9] via-[rgba(74,144,217,0.4)] to-[rgba(74,144,217,0.1)] lg:block"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map(({ n, title, sub, celebrate }, i) => (
              <div
                key={n}
                className="relative px-2 text-center"
                style={{
                  opacity: processRef.inView ? 1 : 0,
                  transform: processRef.inView
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `opacity 0.55s ${i * 90}ms, transform 0.55s ${i * 90}ms`,
                }}
              >
                {/* Step circle */}
                <div className="relative z-[1] mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#4A90D9] bg-[#0D1B2A] font-heading text-[14.5px] font-bold text-[#4A90D9] shadow-[0_0_0_4px_#0D1B2A,0_0_0_5px_rgba(74,144,217,0.25)] transition-transform duration-200 hover:scale-110">
                  {n}
                </div>
                <div className="mb-0.5 flex flex-wrap items-center justify-center gap-1 font-heading text-[12px] font-bold leading-snug text-[#E8EDF5] sm:text-[13px]">
                  {celebrate && (
                    <PartyPopper
                      className="h-3.5 w-3.5 shrink-0 text-[#4A90D9]"
                      strokeWidth={2}
                    />
                  )}
                  {title}
                </div>
                <div className="text-[11px] leading-snug text-[#A8C8F0] sm:text-[12px]">
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── BIG STATS ────────────────────────── */}
      <div
        ref={statsRef.ref}
        className="border-b border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-14 sm:px-[5%] sm:py-[72px]"
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-[rgba(74,144,217,0.16)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["2,000+", "Students Successfully Placed"],
            ["200+", "Partner Universities"],
            ["98%", "Visa Approval Rate"],
          ].map(([n, l], i) => (
            <div
              key={l}
              className="group px-6 py-7 text-center md:py-0"
              style={{
                opacity: statsRef.inView ? 1 : 0,
                transform: statsRef.inView
                  ? "translateY(0)"
                  : "translateY(16px)",
                transition: `opacity 0.55s ${i * 120}ms, transform 0.55s ${i * 120}ms`,
              }}
            >
              <div className="mb-2.5 font-heading text-[clamp(2.2rem,9vw,3.75rem)] font-bold leading-none text-[#4A90D9] transition-colors duration-200 group-hover:text-[#7AB8E8]">
                {n}
              </div>
              <div className="text-[13.5px] text-[#A8C8F0]">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────── TESTIMONIALS ────────────────────────── */}
      <section ref={testiRef.ref} className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow
            className={testiRef.inView ? "animate-fade-up" : "opacity-0"}
          >
            Student Voices
          </EyeBrow>
          <SectionTitle
            className={testiRef.inView ? "animate-fade-up-d1" : "opacity-0"}
          >
            What our students <em className="text-[#4A90D9] not-italic">say</em>
          </SectionTitle>
          <Rule />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                initials: "AK",
                quote:
                  "EuroZiel connected me with a current TU Munich student who gave me insider tips no brochure could. My SOP was perfect and I got in first round.",
                name: "Aryan Kumar",
                info: "MSc CS · TU Munich",
                country: "de" as CountryCode,
                delay: 0,
              },
              {
                initials: "PS",
                quote:
                  "Got 70% scholarship at TU Delft with EuroZiel's scholarship strategy. The DAAD application support was exceptional — truly student-first.",
                name: "Priya Sharma",
                info: "MSc Engineering · TU Delft",
                country: "nl" as CountryCode,
                delay: 80,
              },
              {
                initials: "RV",
                quote:
                  "The peer mentor from RWTH Aachen answered every question I had about campus life. EuroZiel is not just a consultancy — it is a community.",
                name: "Rahul Verma",
                info: "MSc CS · RWTH Aachen",
                country: "de" as CountryCode,
                delay: 160,
              },
            ].map((t) => (
              <div
                key={t.initials}
                style={{
                  opacity: testiRef.inView ? 1 : 0,
                  transform: testiRef.inView
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition: `opacity 0.6s ${t.delay}ms, transform 0.6s ${t.delay}ms`,
                }}
              >
                <TestiCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── CTA BAND ────────────────────────── */}
      <CtaBand
        title={
          <>
            Ready to cross the bridge to{" "}
            <em className="text-[#4A90D9] not-italic">Germany?</em>
          </>
        }
        subtitle="Book a free 30-minute profile evaluation. No commitment, just clarity."
        btnLabel={
          <>
            <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} />
            Book Your Free Call Today
          </>
        }
        btnHref="/contact"
      />
    </>
  );
}
