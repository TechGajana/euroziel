'use client'

import { useState } from 'react'
import { PageHero, Btn } from '@/components/ui'

const roadmap = [
  {
    month: 'Month 1–2',
    tasks: [
      { label: '✓ Free Profile Evaluation', done: true },
      { label: '✓ Goal Setting & Roadmap', done: true },
      { label: '✓ University Shortlist', done: true },
    ],
  },
  {
    month: 'Month 2–4',
    tasks: [
      { label: '✓ IELTS / German Coaching Begins', done: true },
      { label: '✓ APS Application Filed', done: true },
      { label: '● SOP Draft in Progress', now: true },
    ],
  },
  {
    month: 'Month 4–5',
    tasks: [
      { label: 'LOR Collection', done: false },
      { label: 'CV European Format', done: false },
      { label: 'uni-assist Portal Setup', done: false },
    ],
  },
  {
    month: 'Month 5–7',
    tasks: [
      { label: 'Submit All Applications', done: false },
      { label: 'Deadline: July 15', done: false },
      { label: 'Track Application Status', done: false },
    ],
  },
  {
    month: 'Month 7–8',
    tasks: [
      { label: 'Offer Letters Received', done: false },
      { label: 'Accept Best Offer', done: false },
      { label: 'Scholarship Applications', done: false },
    ],
  },
  {
    month: 'Month 8–9',
    tasks: [
      { label: 'Sperrkonto Funded €11,904', done: false },
      { label: 'Health Insurance Arranged', done: false },
      { label: 'Embassy Appointment Booked', done: false },
    ],
  },
  {
    month: 'Month 10–12',
    tasks: [
      { label: 'Visa Stamped ✓', done: false },
      { label: 'Accommodation Confirmed', done: false },
      { label: 'Pre-Departure Briefing', done: false },
      { label: '🎉 Fly to Germany!', now: true },
    ],
  },
]

const checklistItems = [
  'APS Certificate obtained',
  'IELTS score 6.5+ / German B2',
  'SOP finalised and reviewed',
  '2 LORs on letterhead obtained',
  'CV updated to European format',
  'All applications submitted',
  'Offer letter (Zulassung) received',
  'Blocked account funded (€11,904)',
  'Health insurance confirmed',
  'Student visa approved',
  'Accommodation confirmed',
  'Flight tickets booked',
]

export default function ProcessPage() {
  const [checked, setChecked] = useState<boolean[]>(Array(checklistItems.length).fill(false))

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <>
      <PageHero
        eyebrow="The EuroZiel Roadmap"
        title={<>Your step-by-step journey<br /><em className="text-[#4A90D9] not-italic">to Germany</em></>}
        subtitle="A clear, semester-wise timeline so you always know what to do and when. Start at least 12 months before your target intake for a stress-free experience."
      />

      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          <div className="inline-block bg-[rgba(74,144,217,0.10)] border border-[rgba(74,144,217,0.32)] text-[#A8C8F0] font-heading text-[11.5px] font-bold tracking-[0.1em] uppercase px-5 py-[7px] rounded-full mb-7">
            12 Months Before Intake — Winter Semester (Oct)
          </div>

          {/* Roadmap rows */}
          {roadmap.map((row, idx) => (
            <div
              key={row.month}
              className={`grid grid-cols-[88px_1fr] gap-6 mb-9 pb-9 ${idx < roadmap.length - 1 ? 'border-b border-[rgba(74,144,217,0.16)]' : ''}`}
            >
              <div className="font-heading text-[12.5px] font-bold text-[#4A90D9] pt-2">{row.month}</div>
              <div className="flex flex-wrap gap-[9px]">
                {row.tasks.map((task) => (
                  <div
                    key={task.label}
                    className={`flex items-center gap-[6px] rounded-[4px] px-[15px] py-2 text-[12.5px] border
                      ${task.now
                        ? 'bg-[#4A90D9] text-[#06080F] border-[#4A90D9] font-semibold'
                        : task.done
                        ? 'bg-[rgba(74,144,217,0.10)] border-[rgba(74,144,217,0.32)] text-[#A8C8F0]'
                        : 'bg-[#0D1B2A] border-[rgba(74,144,217,0.16)] text-[#A8C8F0]'
                      }`}
                  >
                    {task.label}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Checklist */}
          <div className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[38px] mt-11">
            <h3 className="font-heading text-[20px] font-bold mb-[26px]">📋 Pre-Departure Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[9px]">
              {checklistItems.map((item, i) => (
                <div
                  key={item}
                  onClick={() => toggle(i)}
                  className={`flex items-center gap-[11px] text-[13.5px] px-[11px] py-[9px] rounded-[4px] cursor-pointer transition-colors duration-150 border
                    ${checked[i]
                      ? 'border-transparent'
                      : 'border-transparent hover:bg-[#06080F]'
                    }`}
                >
                  <div className={`w-[19px] h-[19px] min-w-[19px] rounded-[3px] border flex items-center justify-center transition-all duration-150
                    ${checked[i]
                      ? 'bg-[#4A90D9] border-[#4A90D9]'
                      : 'border-[rgba(74,144,217,0.32)]'
                    }`}>
                    {checked[i] && <span className="text-[#06080F] text-[11px] font-bold">✓</span>}
                  </div>
                  <span className={`text-[#A8C8F0] ${checked[i] ? 'line-through opacity-40' : ''}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-11">
            <Btn href="/contact">📅 Book Your Appointment</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
