import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  ChevronRight,
  Download,
  FlaskConical,
  HeartPulse,
  Laptop,
  Palette,
  Settings2,
  Snowflake,
  Sun,
} from 'lucide-react'
import { Btn, EyeBrow, PageHero, Rule, SectionTitle } from '@/components/ui'

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-3 py-5 text-center transition-colors duration-200 hover:border-[rgba(74,144,217,0.32)] sm:px-[18px] sm:py-7">
      <div className="font-heading text-[clamp(1.25rem,4vw,2.125rem)] font-bold leading-none text-[#4A90D9]">{num}</div>
      <div className="mt-2 text-[11px] leading-snug text-[#A8C8F0] sm:text-[12.5px]">{label}</div>
    </div>
  )
}

function FieldCard({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 transition-all duration-200 hover:border-[#4A90D9] hover:bg-[#0f2035] sm:p-[26px]">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.08)]">
        <Icon className="h-5 w-5 text-[#4A90D9]" strokeWidth={1.65} />
      </div>
      <h3 className="mb-2 font-heading text-[15px] font-bold">{title}</h3>
      <p className="text-[13px] leading-[1.7] text-[#A8C8F0]">{desc}</p>
    </div>
  )
}

export default function EuropePage() {
  return (
    <>
      <PageHero
        eyebrow="Study in Germany & Europe"
        title={<>World-class education.<br /><em className="text-[#4A90D9] not-italic">Zero tuition fees.</em></>}
        subtitle="Germany's public universities are globally ranked, industry-connected, and largely free — making it the smartest move for ambitious Indian students."
      >
        <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-10 md:mt-12 lg:grid-cols-4 lg:gap-4">
          <StatCard num="400K+" label="International Students in Germany" />
          <StatCard num="€0" label="Tuition at Public Universities" />
          <StatCard num="18 Mo." label="Post-Study Job Seeker Visa" />
          <StatCard num="1.7M" label="Skilled Jobs Unfilled in Germany" />
        </div>
      </PageHero>

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Fields & Specialisations</EyeBrow>
          <SectionTitle>What can you <em className="text-[#4A90D9] not-italic">study?</em></SectionTitle>
          <Rule />
          <div className="mt-8 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            <FieldCard Icon={Laptop} title="Computer Science & IT" desc="AI, Data Science, Cybersecurity, Software Engineering — Germany hosts SAP, Siemens Digital, and Europe's fastest-growing tech scene." />
            <FieldCard Icon={Settings2} title="Engineering" desc="Mechanical, Electrical, Automotive, Civil — with direct recruitment pathways into BMW, Bosch, Volkswagen, and Airbus." />
            <FieldCard Icon={Briefcase} title="Business & Management" desc="MBA, MSc Finance, International Business — top European B-schools await your profile." />
            <FieldCard Icon={FlaskConical} title="Natural Sciences" desc="Physics, Chemistry, Biotechnology — access world-leading research labs and DFG-funded institutes." />
            <FieldCard Icon={Palette} title="Design & Architecture" desc="Germany's Bauhaus legacy — globally recognised programmes in design, urban planning, and architecture." />
            <FieldCard Icon={HeartPulse} title="Medicine & Health" desc="Medicine, Pharmacy, Public Health — European qualifications respected in over 100 countries." />
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Career Prospects</EyeBrow>
          <SectionTitle>
            EuroZiel alumni now
            <br />
            <em className="text-[#4A90D9] not-italic">work at</em>
          </SectionTitle>
          <Rule />
          <p className="max-w-[560px] text-[15px] font-light leading-[1.85] text-[#A8C8F0] sm:text-[17px]">
            Germany&apos;s skilled worker shortage means graduates are actively recruited by Europe&apos;s most prestigious companies.
          </p>
          <div className="mt-8 flex flex-wrap gap-[10px]">
            {['BMW Group', 'Siemens AG', 'Bosch', 'SAP', 'Volkswagen', 'Deutsche Bahn', 'BASF', 'Airbus', 'Allianz', 'Daimler Trucks', 'Zalando', 'DeepMind Berlin', 'N26', 'Celonis'].map((co) => (
              <div
                key={co}
                className="cursor-default rounded-[4px] border border-[rgba(74,144,217,0.16)] bg-[#06080F] px-[15px] py-[7px] text-[12.5px] text-[#A8C8F0] transition-all duration-200 hover:border-[rgba(74,144,217,0.32)] hover:text-[#E8EDF5]"
              >
                {co}
              </div>
            ))}
          </div>

          <div className="mt-8 inline-grid w-full max-w-full grid-cols-2 gap-4 rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#06080F] p-4 text-center sm:gap-7 sm:p-[22px] md:grid-cols-4">
            {[
              ['€52K', 'Avg. Graduate Salary'],
              ['3.4%', 'Graduate Unemployment'],
              ['18 Mo.', 'Job Seeker Visa'],
              ['1.7M', 'Unfilled Skilled Jobs'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-heading text-[clamp(1.1rem,3.5vw,1.5rem)] font-bold text-[#4A90D9]">{n}</div>
                <div className="mt-1 text-[12px] text-[#A8C8F0]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Semester Calendar</EyeBrow>
          <SectionTitle>When to <em className="text-[#4A90D9] not-italic">apply?</em></SectionTitle>
          <Rule />
          <div className="mt-12 grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {[
              {
                Icon: Snowflake,
                title: 'Winter Semester (Oct/Nov)',
                items: [
                  'October / November start — most popular intake',
                  'Application opens: January each year',
                  'Application deadline: July 15',
                  'Widest selection of programmes & seats',
                  'Best for Engineering, CS, and Sciences',
                  'Largest international student cohort',
                ],
              },
              {
                Icon: Sun,
                title: 'Summer Semester (Apr/May)',
                items: [
                  'April / May start',
                  'Application opens: July each year',
                  'Application deadline: January 15',
                  'Fewer programmes, less competition',
                  'Great for strong academic profiles',
                  'Selected Masters in Business & Economics',
                ],
              },
            ].map(({ Icon, title, items }) => (
              <div key={title} className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 sm:p-[34px]">
                <h3 className="mb-4 flex flex-wrap items-center gap-2 font-heading text-[17px] font-bold text-[#4A90D9] sm:mb-5 sm:text-[19px]">
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                  {title}
                </h3>
                <ul className="list-none space-y-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-[10px] border-b border-[rgba(74,144,217,0.16)] py-[7px] text-[13.5px] text-[#A8C8F0] last:border-b-0"
                    >
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#4A90D9]" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Btn href="/contact">
              <Download className="h-4 w-4 shrink-0" strokeWidth={2} />
              Download Free Germany Guide
            </Btn>
            <Btn href="/contact" variant="ghost">
              Book Counselling Call
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
