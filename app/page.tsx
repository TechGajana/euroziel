"use client";

import { useEffect, useRef } from "react";
import { Calendar, PartyPopper } from "lucide-react";
import { Btn, CtaBand, EyeBrow, Rule, SectionTitle } from "@/components/ui";
import { CountryFlag, type CountryCode } from "@/components/CountryFlag";
import { HeroSection } from "@/sections/HeroSection";
import { WhyEuroZiel } from "@/sections/WhyEuroZiel";
import { JourneySection } from "@/sections/JourneySection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Smooth Scroll Hook ────────────────────────────────────────────────────────

function useSmoothScroll() {
  const isScrolling = useRef(false);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll("section"));
    
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let currentIndex = sections.current.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      });
      
      if (currentIndex === -1) currentIndex = 0;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(sections.current.length - 1, currentIndex + direction));
      
      if (nextIndex !== currentIndex) {
        e.preventDefault();
        isScrolling.current = true;
        
        sections.current[nextIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };
    
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
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
    <div className="group rounded-xl border border-[rgba(74,144,217,0.14)] bg-[#0D1B2A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(74,144,217,0.35)] hover:shadow-[0_8px_40px_rgba(74,144,217,0.12)] sm:p-7">
      <div className="mb-4 flex gap-0.5 text-[#4A90D9]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
        ))}
      </div>
      <p className="mb-6 text-[14.5px] font-light italic leading-[1.85] text-[#A8C8F0]">
        &ldquo;{quote}&rdquo;
      </p>
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
              <CountryFlag code={country} className="h-[10px] w-4 rounded-[2px]" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Star({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  useSmoothScroll();
  
  const whyRef = useScrollReveal<HTMLElement>({ threshold: 0.08 });
  const statsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const testiRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <>
      <HeroSection />
      <WhyEuroZiel inView={whyRef.inView} sectionRef={whyRef.ref} />
      <JourneySection />

      {/* Stats Section */}
      <div
        ref={statsRef.ref}
        className="border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-14 sm:px-[5%] sm:py-[72px]"
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
                transform: statsRef.inView ? "translateY(0)" : "translateY(16px)",
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

      {/* Testimonials Section */}
      <section ref={testiRef.ref} className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow className={testiRef.inView ? "animate-fade-up" : "opacity-0"}>
            Student Voices
          </EyeBrow>
          <SectionTitle className={testiRef.inView ? "animate-fade-up-d1" : "opacity-0"}>
            What our students <em className="text-[#4A90D9] not-italic">say</em>
          </SectionTitle>
          <Rule />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                initials: "AK",
                quote: "EuroZiel connected me with a current TU Munich student who gave me insider tips no brochure could. My SOP was perfect and I got in first round.",
                name: "Aryan Kumar",
                info: "MSc CS · TU Munich",
                country: "de" as CountryCode,
                delay: 0,
              },
              {
                initials: "PS",
                quote: "Got 70% scholarship at TU Delft with EuroZiel's scholarship strategy. The DAAD application support was exceptional — truly student-first.",
                name: "Priya Sharma",
                info: "MSc Engineering · TU Delft",
                country: "nl" as CountryCode,
                delay: 80,
              },
              {
                initials: "RV",
                quote: "The peer mentor from RWTH Aachen answered every question I had about campus life. EuroZiel is not just a consultancy — it is a community.",
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
                  transform: testiRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ${t.delay}ms, transform 0.6s ${t.delay}ms`,
                }}
              >
                <TestiCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to cross the bridge to <em className="text-[#4A90D9] not-italic">Germany?</em>
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