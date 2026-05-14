'use client'

import type { LucideIcon } from 'lucide-react'
import { Calendar, Check, CircleDot, ClipboardList, Plane } from 'lucide-react'
import { useState } from 'react'
import { Btn, PageHero } from '@/components/ui'

type RoadTask = {
  label: string
  done?: boolean
  now?: boolean
  leadIcon?: LucideIcon
  trailCheck?: boolean
}

const roadmap: { month: string; tasks: RoadTask[] }[] = [
  {
    month: 'Month 1–2',
    tasks: [
      { label: 'Free Profile Evaluation', done: true },
      { label: 'Goal Setting & Roadmap', done: true },
      { label: 'University Shortlist', done: true },
    ],
  },
  {
    month: 'Month 2–4',
    tasks: [
      { label: 'IELTS / German Coaching Begins', done: true },
      { label: 'APS Application Filed', done: true },
      { label: 'SOP Draft in Progress', now: true },
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
      { label: 'Visa Stamped', done: false, trailCheck: true },
      { label: 'Accommodation Confirmed', done: false },
      { label: 'Pre-Departure Briefing', done: false },
      { label: 'Fly to Germany!', now: true, leadIcon: Plane },
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

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 inline-block rounded-full border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] px-5 py-[7px] font-heading text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#A8C8F0]">
            12 Months Before Intake — Winter Semester (Oct)
          </div>

          {roadmap.map((row, idx) => (
            <div
              key={row.month}
              className={`mb-9 grid grid-cols-1 gap-3 pb-9 sm:grid-cols-[88px_1fr] sm:gap-6 ${idx < roadmap.length - 1 ? 'border-b border-[rgba(74,144,217,0.16)]' : ''}`}
            >
              <div className="font-heading text-[12.5px] font-bold text-[#4A90D9] sm:pt-2">{row.month}</div>
              <div className="flex flex-wrap gap-[9px]">
                {row.tasks.map((task) => {
                  const Lead = task.leadIcon
                  return (
                    <div
                      key={task.label}
                      className={`flex items-center gap-[6px] rounded-[4px] border px-[15px] py-2 text-[12.5px] ${
                        task.now
                          ? 'border-[#4A90D9] bg-[#4A90D9] font-semibold text-[#06080F]'
                          : task.done
                            ? 'border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)] text-[#A8C8F0]'
                            : 'border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] text-[#A8C8F0]'
                      }`}
                    >
                      {task.done && !task.now ? (
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#4A90D9]" strokeWidth={2.5} />
                      ) : null}
                      {task.now && !Lead ? <CircleDot className="h-3.5 w-3.5 shrink-0" strokeWidth={2} /> : null}
                      {task.now && Lead ? <Lead className="h-3.5 w-3.5 shrink-0" strokeWidth={2} /> : null}
                      <span className="flex items-center gap-1">
                        {task.label}
                        {task.trailCheck ? <Check className="inline h-3 w-3 shrink-0 opacity-70" strokeWidth={2.5} /> : null}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="mt-11 rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 sm:p-[38px]">
            <h3 className="mb-[26px] flex items-center gap-2 font-heading text-[20px] font-bold">
              <ClipboardList className="h-5 w-5 shrink-0 text-[#4A90D9]" strokeWidth={1.75} />
              Pre-Departure Checklist
            </h3>
            <div className="grid grid-cols-1 gap-[9px] md:grid-cols-2">
              {checklistItems.map((item, i) => (
                <div
                  key={item}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle(i)
                    }
                  }}
                  className={`flex cursor-pointer items-center gap-[11px] rounded-[4px] border px-[11px] py-[9px] text-[13.5px] transition-colors duration-150 ${
                    checked[i] ? 'border-transparent' : 'border-transparent hover:bg-[#06080F]'
                  }`}
                >
                  <div
                    className={`flex h-[19px] w-[19px] min-w-[19px] items-center justify-center rounded-[3px] border transition-all duration-150 ${
                      checked[i] ? 'border-[#4A90D9] bg-[#4A90D9]' : 'border-[rgba(74,144,217,0.32)]'
                    }`}
                  >
                    {checked[i] ? <Check className="h-3 w-3 text-[#06080F]" strokeWidth={3} /> : null}
                  </div>
                  <span className={`text-[#A8C8F0] ${checked[i] ? 'line-through opacity-40' : ''}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-11 text-center">
            <Btn href="/contact">
              <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} />
              Book Your Appointment
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
