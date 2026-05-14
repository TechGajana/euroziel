'use client'

import { Building2 } from 'lucide-react'
import { useState } from 'react'
import { PageHero } from '@/components/ui'
import { CountryFlag, type CountryCode } from '@/components/CountryFlag'

interface Story {
  initials: string
  name: string
  uni: string
  quote: string
  tags: string[]
  country?: CountryCode
  filter: string[]
}

const stories: Story[] = [
  {
    initials: 'AK',
    name: 'Aryan Kumar',
    uni: 'TU Munich · MSc Computer Science',
    quote:
      'EuroZiel connected me with a TU Munich student who told me exactly what admissions looks for. I got in first round with a scholarship.',
    country: 'de',
    tags: ['Masters', 'DAAD Scholar'],
    filter: ['germany', 'masters'],
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    uni: 'TU Delft · MSc Engineering',
    quote:
      "70% scholarship at TU Delft. The team's scholarship strategy was exceptional — something I could never have navigated alone.",
    country: 'nl',
    tags: ['Masters', 'Scholarship'],
    filter: ['netherlands', 'masters'],
  },
  {
    initials: 'RV',
    name: 'Rahul Verma',
    uni: 'RWTH Aachen · MSc CS',
    quote:
      'The peer mentor from RWTH told me which professors to contact and how to write my research interests. That changed everything.',
    country: 'de',
    tags: ['Masters'],
    filter: ['germany', 'masters'],
  },
  {
    initials: 'SK',
    name: 'Sanya Khanna',
    uni: 'RWTH Aachen · BSc Mechanical',
    quote:
      "APS was the most confusing step. EuroZiel's team handled everything and I passed in my first attempt. Now at the MIT of Germany!",
    country: 'de',
    tags: ['Bachelors'],
    filter: ['germany', 'bachelors'],
  },
  {
    initials: 'SC',
    name: 'Sneha Chandra',
    uni: 'Ausbildung · Mechatronics, Stuttgart',
    quote:
      'EuroZiel introduced me to the Ausbildung route — I am now earning while learning at a Bosch partner company in Stuttgart!',
    country: 'de',
    tags: ['Ausbildung', 'Employed'],
    filter: ['germany', 'ausbildung'],
  },
  {
    initials: 'ND',
    name: 'Nisha Desai',
    uni: 'KTH Stockholm · MSc Biotech',
    quote:
      'Applied to 8 universities, got 5 offers. EuroZiel\'s university selection strategy was data-driven and spot-on. Now in Sweden on partial scholarship.',
    country: 'se',
    tags: ['Masters', 'Scholarship'],
    filter: ['sweden', 'masters'],
  },
]

const filters: { id: string; label: string; country?: CountryCode }[] = [
  { id: 'all', label: 'All' },
  { id: 'germany', label: 'Germany', country: 'de' },
  { id: 'netherlands', label: 'Netherlands', country: 'nl' },
  { id: 'sweden', label: 'Sweden', country: 'se' },
  { id: 'masters', label: 'Masters' },
  { id: 'bachelors', label: 'Bachelors' },
  { id: 'ausbildung', label: 'Ausbildung' },
]

const placements: { country: CountryCode; name: string }[] = [
  { country: 'de', name: 'TU Munich' },
  { country: 'de', name: 'RWTH Aachen' },
  { country: 'de', name: 'Heidelberg University' },
  { country: 'de', name: 'KIT Karlsruhe' },
  { country: 'de', name: 'FU Berlin' },
  { country: 'de', name: 'University of Stuttgart' },
  { country: 'de', name: 'Humboldt Berlin' },
  { country: 'nl', name: 'TU Delft' },
  { country: 'nl', name: 'University of Amsterdam' },
  { country: 'se', name: 'KTH Stockholm' },
  { country: 'fr', name: 'École Polytechnique' },
  { country: 'at', name: 'Vienna University of Tech' },
  { country: 'fi', name: 'Aalto University' },
  { country: 'dk', name: 'DTU Copenhagen' },
]

export default function StoriesPage() {
  const [active, setActive] = useState('all')

  const visible = stories.filter((s) => active === 'all' || s.filter.includes(active))

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={<>2,000+ dreams, <em className="text-[#4A90D9] not-italic">realised</em></>}
        subtitle="Real students, real results. Filter by destination or programme type to find a story like yours."
      />

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-body text-[13px] transition-all duration-200 sm:px-[18px] sm:py-[7px] ${
                  active === f.id
                    ? 'border-[#4A90D9] bg-[#4A90D9] font-semibold text-[#06080F]'
                    : 'border-[rgba(74,144,217,0.16)] bg-transparent text-[#A8C8F0] hover:border-[#4A90D9] hover:bg-[#4A90D9] hover:text-[#06080F]'
                }`}
              >
                {f.country ? <CountryFlag code={f.country} className="h-3 w-[18px]" /> : null}
                {f.label}
              </button>
            ))}
          </div>

          <div className="mb-14 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {visible.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(74,144,217,0.32)]"
              >
                <div className="flex items-center gap-[13px] border-b border-[rgba(74,144,217,0.16)] bg-[#06080F] px-[22px] py-5">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] font-heading text-[13px] font-bold text-[#4A90D9]">
                    {s.initials}
                  </div>
                  <div>
                    <div className="font-heading text-[14px] font-bold">{s.name}</div>
                    <div className="mt-[2px] flex flex-wrap items-center gap-1.5 text-[12px] text-[#A8C8F0]">
                      {s.country ? <CountryFlag code={s.country} className="h-3 w-[18px]" /> : null}
                      <span>{s.uni}</span>
                    </div>
                  </div>
                </div>
                <div className="p-[22px]">
                  <p className="mb-[14px] text-[13.5px] font-light italic leading-[1.8] text-[#A8C8F0]">&ldquo;{s.quote}&rdquo;</p>
                  <div className="flex flex-wrap gap-[6px]">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.10)] px-[9px] py-[3px] text-[10.5px] font-semibold tracking-[0.04em] text-[#A8C8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 sm:p-[34px]">
            <h3 className="mb-4 flex flex-wrap items-center gap-2 font-heading text-[17px] font-bold sm:mb-[22px] sm:text-[19px]">
              <Building2 className="h-5 w-5 shrink-0 text-[#4A90D9]" strokeWidth={1.75} />
              University Placements Board
            </h3>
            <div className="flex flex-wrap gap-[9px]">
              {placements.map(({ country, name }) => (
                <div
                  key={`${country}-${name}`}
                  className="flex cursor-default items-center gap-2 rounded-[4px] border border-[rgba(74,144,217,0.16)] bg-[#06080F] px-[14px] py-[7px] text-[12.5px] text-[#A8C8F0] transition-all duration-200 hover:border-[rgba(74,144,217,0.32)] hover:text-[#E8EDF5]"
                >
                  <CountryFlag code={country} className="h-3 w-[18px]" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
