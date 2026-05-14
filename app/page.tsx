import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Award,
  Calendar,
  Diamond,
  GraduationCap,
  PartyPopper,
  Phone,
  Plane,
  Star,
  Users,
} from 'lucide-react'
import { Btn, CtaBand, EyeBrow, Rule, SectionTitle } from '@/components/ui'
import { CountryFlag, type CountryCode } from '@/components/CountryFlag'

function FloatCard({
  isStatic = false,
  Icon,
  flag,
  title,
  sub,
  chip,
  className,
}: {
  isStatic?: boolean
  Icon?: LucideIcon
  flag?: CountryCode
  title: string
  sub: string
  chip: string
  className: string
}) {
  return (
    <div
      className={`rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-gradient-to-br from-[#0f2035] to-[#0D1B2A] p-4 shadow-[0_4px_32px_rgba(0,0,0,0.45)] sm:p-5 ${isStatic ? 'relative w-full' : 'absolute'} ${className}`}
    >
      <div className="mb-2 flex h-9 items-center">
        {flag ? (
          <CountryFlag code={flag} className="h-7 w-[34px] rounded-[3px]" />
        ) : Icon ? (
          <Icon className="h-7 w-7 text-[#4A90D9]" strokeWidth={1.5} />
        ) : null}
      </div>
      <div className="mb-1 font-heading text-[13px] font-bold text-[#E8EDF5]">{title}</div>
      <div className="text-[11px] text-[#A8C8F0]">{sub}</div>
      <div className="mt-2 inline-block rounded-full border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] px-2 py-0.5 text-[10.5px] font-semibold tracking-[0.04em] text-[#A8C8F0]">
        {chip}
      </div>
    </div>
  )
}

function TestiCard({
  initials,
  quote,
  name,
  info,
  country,
}: {
  initials: string
  quote: string
  name: string
  info: string
  country?: CountryCode
}) {
  return (
    <div className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[rgba(74,144,217,0.32)] sm:p-[30px]">
      <div className="mb-4 flex gap-0.5 text-[#4A90D9]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
        ))}
      </div>
      <p className="mb-[22px] text-[14.5px] font-light italic leading-[1.8] text-[#A8C8F0]">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] font-heading text-[13px] font-bold text-[#4A90D9]">
          {initials}
        </div>
        <div>
          <div className="font-heading text-[13.5px] font-bold">{name}</div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11.5px] text-[#A8C8F0]">
            <span>{info}</span>
            {country ? <CountryFlag code={country} className="h-3 w-[18px]" /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#06080F] px-4 pb-14 pt-[4.5rem] sm:px-[5%] sm:pb-16 md:min-h-screen md:pb-[60px] md:pt-[5rem] lg:pt-[80px]">
        <div
          className="pointer-events-none absolute inset-0 bg-[length:56px_56px]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74,144,217,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74,144,217,0.035) 1px, transparent 1px)
            `,
          }}
        />
        <div
          className="animate-pulse-slow pointer-events-none absolute -left-[8%] -top-[15%] h-[90%] w-[65%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(74,144,217,0.09) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-[1] mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-[60px]">
          <div>
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A8C8F0] sm:mb-[26px] sm:px-[18px] sm:text-[12px]">
              <span className="animate-blink h-[7px] w-[7px] rounded-full bg-[#4A90D9]" />
              Germany&apos;s Trusted Student Bridge
            </div>
            <h1 className="mb-6 font-heading text-[clamp(36px,5vw,66px)] font-bold leading-[1.13]">
              Your <em className="text-[#4A90D9] not-italic">European Dream</em>
              <br />
              Starts Here
            </h1>
            <p className="mb-8 max-w-[490px] text-[16px] font-light leading-[1.85] text-[#A8C8F0] sm:mb-[38px] sm:text-[18px]">
              EuroZiel connects ambitious Indian students directly to Germany&apos;s top public universities — with guidance from students who are already there.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Btn href="/contact">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
                Book Free Counselling
              </Btn>
              <Btn href="/europe" variant="ghost">
                Explore Germany
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
              </Btn>
            </div>

            <div className="mt-10 grid grid-cols-3 divide-x divide-[rgba(74,144,217,0.16)] border-t border-[rgba(74,144,217,0.16)] pt-7 sm:mt-[52px] sm:pt-9">
              {[
                ['2,000+', 'Students Placed'],
                ['200+', 'Universities'],
                ['98%', 'Visa Success Rate'],
              ].map(([n, l]) => (
                <div key={l} className="min-w-0 px-1.5 text-center first:pl-0 last:pr-0 sm:px-3">
                  <div className="font-heading text-[clamp(1.05rem,5.5vw,1.875rem)] font-bold leading-none text-[#4A90D9]">{n}</div>
                  <div className="mt-1 text-[10px] leading-snug text-[rgba(232,237,245,0.50)] sm:text-[11.5px]">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 md:hidden">
              <FloatCard
                isStatic
                Icon={GraduationCap}
                title="Profile Evaluated & Admitted"
                sub="Technical University of Munich"
                chip="MSc Engineering · Winter 2025"
                className=""
              />
              <FloatCard isStatic flag="de" title="Germany" sub="€0 Tuition · Public Uni" chip="400+ Universities" className="" />
              <FloatCard
                isStatic
                Icon={Award}
                title="DAAD Scholarship"
                sub="€861/month awarded"
                chip="Fully Funded"
                className=""
              />
            </div>
          </div>

          <div className="relative mx-auto hidden h-[min(520px,58vh)] w-full max-w-[420px] min-h-[260px] md:flex md:items-center md:justify-center">
            <FloatCard
              Icon={GraduationCap}
              title="Profile Evaluated & Admitted"
              sub="Technical University of Munich"
              chip="MSc Engineering · Winter 2025"
              className="animate-float-m left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 border-[rgba(74,144,217,0.32)] shadow-[0_4px_40px_rgba(74,144,217,0.18)]"
            />
            <FloatCard
              flag="de"
              title="Germany"
              sub="€0 Tuition · Public Uni"
              chip="400+ Universities"
              className="animate-float-a left-5 top-[30px] w-[185px]"
            />
            <FloatCard
              Icon={Award}
              title="DAAD Scholarship"
              sub="€861/month awarded"
              chip="Fully Funded"
              className="animate-float-b right-[10px] top-5 w-[175px]"
            />
            <FloatCard
              Icon={Plane}
              title="Visa Approved"
              sub="German Student Visa"
              chip="98% Success Rate"
              className="animate-float-c bottom-10 left-0 w-[180px]"
            />
            <FloatCard
              Icon={Users}
              title="Peer Mentorship"
              sub="Live from TU Berlin"
              chip="Student Network"
              className="animate-float-a bottom-[30px] right-5 w-[175px]"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-nowrap items-center gap-x-8 gap-y-2 overflow-x-auto overscroll-x-contain border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-3.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] sm:px-[5%]">
        {[
          'Free Profile Evaluation',
          'APS Documentation',
          'SOP & LOR Writing',
          'Blocked Amount Setup',
          'DAAD & Scholarship Guidance',
          'IELTS & German Coaching (50% Subsidised)',
          'On-Arrival Support in Germany',
          'Direct Student Mentors from German Universities',
        ].map((item) => (
          <div key={item} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[13px] text-[#A8C8F0]">
            <Diamond className="h-2 w-2 shrink-0 fill-[#4A90D9] text-[#4A90D9]" strokeWidth={0} />
            {item}
          </div>
        ))}
      </div>

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Why EuroZiel</EyeBrow>
          <SectionTitle>
            Everything you need,
            <br />
            <em className="text-[#4A90D9] not-italic">under one roof</em>
          </SectionTitle>
          <p className="max-w-[560px] text-[16px] font-light leading-[1.85] text-[#A8C8F0] sm:text-[17px]">
            We are not just a consultancy — we are a living bridge between Indian students and Germany&apos;s top universities.
          </p>
          <Rule />
          <div className="relative mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.16)] min-[480px]:grid-cols-2 md:mt-[60px] lg:grid-cols-3">
            {[
              [
                '01',
                'Germany-Exclusive Focus',
                "Specialised exclusively in Germany's top public universities — not a generalist agency, but deep domain expertise.",
              ],
              [
                '02',
                'Peer Mentors in Germany',
                'Direct guidance from students currently enrolled at TU Munich, Berlin, and other top German institutions.',
              ],
              [
                '03',
                'End-to-End Support',
                'From SOP writing to on-arrival Anmeldung — every step guided by experts with zero gaps.',
              ],
              [
                '04',
                'Personalised Strategy',
                'Every student gets a dedicated counsellor and a bespoke admission strategy, not a template.',
              ],
              [
                '05',
                'Scholarship & Finance',
                'DAAD, Erasmus+, university scholarships — plus education loan and blocked account guidance.',
              ],
              [
                '06',
                'Subsidised Language Coaching',
                'Premium IELTS, GRE, GMAT & German coaching at 50% subsidised fees for EuroZiel students.',
              ],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-[#06080F] p-5 transition-colors hover:bg-[#0D1B2A] sm:p-8">
                <div className="mb-4 font-heading text-[34px] font-bold leading-none text-[rgba(74,144,217,0.32)]">{num}</div>
                <h3 className="mb-2.5 text-base font-bold">{title}</h3>
                <p className="text-[13.5px] leading-[1.75] text-[#A8C8F0]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>How It Works</EyeBrow>
          <SectionTitle>
            Your journey in <em className="text-[#4A90D9] not-italic">6 clear steps</em>
          </SectionTitle>
          <Rule />
          <div className="relative mt-10 grid grid-cols-1 gap-x-4 gap-y-8 before:hidden min-[480px]:grid-cols-2 md:mt-[60px] md:gap-y-10 lg:grid-cols-6 lg:gap-0 lg:before:absolute lg:before:left-7 lg:before:right-7 lg:before:top-[27px] lg:before:block lg:before:h-px lg:before:bg-gradient-to-r lg:before:from-[#4A90D9] lg:before:to-[rgba(74,144,217,0.1)] lg:before:content-['']">
            {[
              { n: '1', title: 'Free Consultation', sub: 'Profile eval & goal mapping' },
              { n: '2', title: 'Documentation', sub: 'APS, SOP, LOR, CV crafted' },
              { n: '3', title: 'University Selection', sub: 'Apply to best-fit universities' },
              { n: '4', title: 'Offer & Scholarship', sub: 'Admission + DAAD/Erasmus+' },
              { n: '5', title: 'Visa & Finance', sub: 'Blocked account, embassy prep' },
              { n: '6', title: 'Arrive in Germany', sub: 'Anmeldung, bank, campus', celebrate: true },
            ].map(({ n, title, sub, celebrate }) => (
              <div key={n} className="relative px-0 text-center sm:px-1.5">
                <div className="relative z-[1] mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4A90D9] bg-[#0D1B2A] font-heading text-[15px] font-bold text-[#4A90D9] sm:mb-[18px] sm:h-[54px] sm:w-[54px] sm:text-[17px]">
                  {n}
                </div>
                <div className="mb-1 flex flex-wrap items-center justify-center gap-1 font-heading text-[11px] font-bold leading-snug sm:text-[12.5px]">
                  {celebrate ? <PartyPopper className="h-3 w-3 shrink-0 text-[#4A90D9] sm:h-3.5 sm:w-3.5" strokeWidth={2} /> : null}
                  {title}
                </div>
                <div className="text-[10.5px] leading-snug text-[#A8C8F0] sm:text-[11.5px] sm:leading-normal">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-14 sm:px-[5%] sm:py-[72px]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-[rgba(74,144,217,0.16)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['2,000+', 'Students Successfully Placed'],
            ['200+', 'Partner Universities'],
            ['98%', 'Visa Approval Rate'],
          ].map(([n, l]) => (
            <div key={l} className="px-5 py-6 text-center md:py-0 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0">
              <div className="mb-2.5 font-heading text-[clamp(2rem,11vw,3.5rem)] font-bold leading-none text-[#4A90D9]">{n}</div>
              <div className="text-[14px] text-[#A8C8F0]">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Student Voices</EyeBrow>
          <SectionTitle>
            What our students <em className="text-[#4A90D9] not-italic">say</em>
          </SectionTitle>
          <Rule />
          <div className="mt-14 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            <TestiCard
              initials="AK"
              quote="EuroZiel connected me with a current TU Munich student who gave me insider tips no brochure could. My SOP was perfect and I got in first round."
              name="Aryan Kumar"
              info="MSc CS · TU Munich"
              country="de"
            />
            <TestiCard
              initials="PS"
              quote="Got 70% scholarship at TU Delft with EuroZiel's scholarship strategy. The DAAD application support was exceptional — truly student-first."
              name="Priya Sharma"
              info="MSc Engineering · TU Delft"
              country="nl"
            />
            <TestiCard
              initials="RV"
              quote="The peer mentor from RWTH Aachen answered every question I had about campus life. EuroZiel is not just a consultancy — it is a community."
              name="Rahul Verma"
              info="MSc CS · RWTH Aachen"
              country="de"
            />
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
  )
}
