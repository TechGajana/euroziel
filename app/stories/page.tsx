'use client'

import { useState } from 'react'
import { PageHero } from '@/components/ui'

interface Story {
  initials: string
  name: string
  uni: string
  quote: string
  tags: string[]
  filter: string[]
}

const stories: Story[] = [
  {
    initials: 'AK', name: 'Aryan Kumar', uni: 'TU Munich · MSc Computer Science',
    quote: 'EuroZiel connected me with a TU Munich student who told me exactly what admissions looks for. I got in first round with a scholarship.',
    tags: ['Germany 🇩🇪', 'Masters', 'DAAD Scholar'], filter: ['germany', 'masters'],
  },
  {
    initials: 'PS', name: 'Priya Sharma', uni: 'TU Delft · MSc Engineering',
    quote: '70% scholarship at TU Delft. The team\'s scholarship strategy was exceptional — something I could never have navigated alone.',
    tags: ['Netherlands 🇳🇱', 'Masters', 'Scholarship'], filter: ['netherlands', 'masters'],
  },
  {
    initials: 'RV', name: 'Rahul Verma', uni: 'RWTH Aachen · MSc CS',
    quote: 'The peer mentor from RWTH told me which professors to contact and how to write my research interests. That changed everything.',
    tags: ['Germany 🇩🇪', 'Masters'], filter: ['germany', 'masters'],
  },
  {
    initials: 'SK', name: 'Sanya Khanna', uni: 'RWTH Aachen · BSc Mechanical',
    quote: 'APS was the most confusing step. EuroZiel\'s team handled everything and I passed in my first attempt. Now at the MIT of Germany!',
    tags: ['Germany 🇩🇪', 'Bachelors'], filter: ['germany', 'bachelors'],
  },
  {
    initials: 'SC', name: 'Sneha Chandra', uni: 'Ausbildung · Mechatronics, Stuttgart',
    quote: 'EuroZiel introduced me to the Ausbildung route — I am now earning while learning at a Bosch partner company in Stuttgart!',
    tags: ['Germany 🇩🇪', 'Ausbildung', 'Employed'], filter: ['germany', 'ausbildung'],
  },
  {
    initials: 'ND', name: 'Nisha Desai', uni: 'KTH Stockholm · MSc Biotech',
    quote: 'Applied to 8 universities, got 5 offers. EuroZiel\'s university selection strategy was data-driven and spot-on. Now in Sweden on partial scholarship.',
    tags: ['Sweden 🇸🇪', 'Masters', 'Scholarship'], filter: ['sweden', 'masters'],
  },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'germany', label: '🇩🇪 Germany' },
  { id: 'netherlands', label: '🇳🇱 Netherlands' },
  { id: 'sweden', label: '🇸🇪 Sweden' },
  { id: 'masters', label: 'Masters' },
  { id: 'bachelors', label: 'Bachelors' },
  { id: 'ausbildung', label: 'Ausbildung' },
]

const placements = [
  '🇩🇪 TU Munich', '🇩🇪 RWTH Aachen', '🇩🇪 Heidelberg University', '🇩🇪 KIT Karlsruhe',
  '🇩🇪 FU Berlin', '🇩🇪 University of Stuttgart', '🇩🇪 Humboldt Berlin', '🇳🇱 TU Delft',
  '🇳🇱 University of Amsterdam', '🇸🇪 KTH Stockholm', '🇫🇷 École Polytechnique',
  '🇦🇹 Vienna University of Tech', '🇫🇮 Aalto University', '🇩🇰 DTU Copenhagen',
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

      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          {/* Filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-[18px] py-[7px] rounded-full border text-[13px] font-body cursor-pointer transition-all duration-200
                  ${active === f.id
                    ? 'bg-[#4A90D9] text-[#06080F] border-[#4A90D9] font-semibold'
                    : 'bg-transparent text-[#A8C8F0] border-[rgba(74,144,217,0.16)] hover:bg-[#4A90D9] hover:text-[#06080F] hover:border-[#4A90D9]'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Story cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mb-14">
            {visible.map((s) => (
              <div key={s.name} className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] overflow-hidden transition-all duration-200 hover:border-[rgba(74,144,217,0.32)] hover:-translate-y-[2px]">
                <div className="bg-[#06080F] border-b border-[rgba(74,144,217,0.16)] px-[22px] py-5 flex items-center gap-[13px]">
                  <div className="w-[42px] h-[42px] rounded-full bg-[rgba(74,144,217,0.10)] border border-[rgba(74,144,217,0.32)] flex items-center justify-center font-heading font-bold text-[13px] text-[#4A90D9] shrink-0">
                    {s.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[14px]">{s.name}</div>
                    <div className="text-[12px] text-[#A8C8F0] mt-[2px]">{s.uni}</div>
                  </div>
                </div>
                <div className="p-[22px]">
                  <p className="text-[13.5px] text-[#A8C8F0] italic leading-[1.8] mb-[14px] font-light">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <div className="flex gap-[6px] flex-wrap">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10.5px] font-semibold px-[9px] py-[3px] rounded-full bg-[rgba(74,144,217,0.10)] text-[#A8C8F0] tracking-[0.04em] border border-[rgba(74,144,217,0.16)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placements board */}
          <div className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[34px]">
            <h3 className="font-heading text-[19px] font-bold mb-[22px]">🏛️ University Placements Board</h3>
            <div className="flex flex-wrap gap-[9px]">
              {placements.map((uni) => (
                <div key={uni} className="bg-[#06080F] border border-[rgba(74,144,217,0.16)] rounded-[4px] px-[14px] py-[7px] text-[12.5px] text-[#A8C8F0] flex items-center gap-[6px] hover:border-[rgba(74,144,217,0.32)] hover:text-[#E8EDF5] transition-all duration-200 cursor-default">
                  {uni}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
