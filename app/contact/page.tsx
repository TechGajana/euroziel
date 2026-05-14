'use client'

import { ArrowRight, AtSign, Calendar, Check, Globe, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { PageHero } from '@/components/ui'
import { WhatsAppMark } from '@/components/WhatsAppMark'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => setSubmitted(true)

  const channels = [
    {
      href: 'https://wa.me/917598969875',
      name: 'WhatsApp',
      value: '+91 75989 69875',
      external: true,
      icon: <WhatsAppMark className="h-[18px] w-[18px] text-[#25D366]" />,
    },
    {
      href: 'mailto:yuvasrijagadeesan6983@gmail.com',
      name: 'Email',
      value: 'yuvasrijagadeesan6983@gmail.com',
      external: false,
      icon: <Mail className="h-[18px] w-[18px] text-[#4A90D9]" strokeWidth={1.75} />,
    },
    {
      href: 'https://www.instagram.com/euro_ziel?igsh=MW9zbWhjYnNjd2FwMA==',
      name: 'Instagram',
      value: '@euro_ziel',
      external: true,
      icon: <AtSign className="h-[18px] w-[18px] text-[#4A90D9]" strokeWidth={1.75} />,
    },
    {
      href: 'https://euroziel.com',
      name: 'Website',
      value: 'euroziel.com',
      external: true,
      icon: <Globe className="h-[18px] w-[18px] text-[#4A90D9]" strokeWidth={1.75} />,
    },
  ] as const

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s plan your<br /><em className="text-[#4A90D9] not-italic">European future</em></>}
        subtitle="Book a free 30-minute profile evaluation call or drop us a message. Our team typically responds within 2 hours."
      />

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h3 className="mb-[22px] font-heading text-[21px] font-bold">Reach Us</h3>
              <div className="mb-7 flex flex-col gap-[13px]">
                {channels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noreferrer' : undefined}
                    className="flex items-center gap-[15px] rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-[18px] py-[15px] no-underline transition-colors duration-200 hover:border-[rgba(74,144,217,0.32)]"
                  >
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[4px] border border-[rgba(74,144,217,0.32)] bg-[rgba(74,144,217,0.10)]">
                      {ch.icon}
                    </div>
                    <div>
                      <div className="font-heading text-[13.5px] font-bold text-[#E8EDF5]">{ch.name}</div>
                      <div className="mt-[2px] text-[12.5px] text-[#A8C8F0]">{ch.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative flex h-[175px] items-center justify-center overflow-hidden rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] text-[13px] text-[#A8C8F0]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(74,144,217,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,144,217,.04) 1px,transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <span className="relative z-10 flex flex-col items-center gap-2 text-center leading-[1.7]">
                  <MapPin className="h-8 w-8 text-[#4A90D9]" strokeWidth={1.5} />
                  <span>
                    EuroZiel Consultancy
                    <br />
                    <span className="text-[12px] text-[#A8C8F0]">Puducherry, India</span>
                  </span>
                </span>
              </div>

              <div className="mt-[22px] rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5">
                <div className="mb-2 font-heading text-[13.5px] font-bold">Office Hours</div>
                <div className="text-[13px] font-light leading-[1.75] text-[#A8C8F0]">
                  Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                  WhatsApp responses until 9:00 PM IST
                </div>
              </div>

              <div className="mt-5 rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5">
                <div className="mb-2 font-heading text-[13.5px] font-bold">Contact Persons</div>
                <div className="text-[13px] font-light leading-[1.9] text-[#A8C8F0]">
                  <strong className="text-[#E8EDF5]">Yuvasri Jagadeesan</strong> — Co-Founder<br />
                  <strong className="text-[#E8EDF5]">Sarathkumar Venkateshwaran</strong> — Co-Founder
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 sm:p-[38px]">
              <h3 className="mb-[26px] flex items-center gap-2 font-heading text-[21px] font-bold">
                <Calendar className="h-5 w-5 shrink-0 text-[#4A90D9]" strokeWidth={1.75} />
                Book a Free Counselling Call
              </h3>

              <div className="mb-[14px] grid grid-cols-1 gap-[14px] md:grid-cols-2">
                <FormGroup label="First Name">
                  <input type="text" placeholder="Your first name" className={inputCls} />
                </FormGroup>
                <FormGroup label="Last Name">
                  <input type="text" placeholder="Your last name" className={inputCls} />
                </FormGroup>
              </div>
              <FormGroup label="Email Address">
                <input type="email" placeholder="your@email.com" className={inputCls} />
              </FormGroup>
              <FormGroup label="Phone / WhatsApp">
                <input type="tel" placeholder="+91 00000 00000" className={inputCls} />
              </FormGroup>

              <FormGroup label="Current Education Level">
                <select className={inputCls}>
                  <option>Select…</option>
                  <option>12th Grade (Planning Bachelor&apos;s)</option>
                  <option>Pursuing Bachelor&apos;s</option>
                  <option>Bachelor&apos;s Completed</option>
                  <option>Working Professional</option>
                </select>
              </FormGroup>

              <FormGroup label="Intended Programme">
                <select className={inputCls}>
                  <option>Select…</option>
                  <option>Bachelor&apos;s Degree</option>
                  <option>Master&apos;s Degree</option>
                  <option>Ausbildung (Vocational)</option>
                  <option>PhD / Research</option>
                  <option>Not Sure Yet</option>
                </select>
              </FormGroup>

              <FormGroup label="Preferred Intake">
                <select className={inputCls}>
                  <option>Select…</option>
                  <option>Winter 2025 (Oct)</option>
                  <option>Summer 2026 (Apr)</option>
                  <option>Winter 2026 (Oct)</option>
                  <option>2027 or later</option>
                </select>
              </FormGroup>

              <FormGroup label="Tell Us About Your Goals">
                <textarea
                  placeholder="Your academic background, target field, budget, and any specific questions…"
                  className={`${inputCls} min-h-[96px] resize-y`}
                />
              </FormGroup>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitted}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-[4px] border-none px-8 py-3.5 font-body text-[15px] font-semibold transition-all duration-200 ${
                  submitted ? 'pointer-events-none bg-[#22c55e] text-white' : 'bg-[#4A90D9] text-[#06080F] hover:opacity-[0.87]'
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                    Booked! Our team will reach you within 2 hours.
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} />
                    Book My Free Profile Call
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
                  </>
                )}
              </button>

              <p className="mt-[14px] text-center text-[11.5px] font-light text-[#A8C8F0]">
                No spam. No commitment. Just honest guidance from Yuvasri &amp; Sarathkumar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const inputCls = `w-full px-[14px] py-[11px] bg-[#06080F] border border-[rgba(74,144,217,0.16)] rounded-[4px] text-[13.5px] text-[#E8EDF5] font-body outline-none transition-colors duration-200 focus:border-[#4A90D9] placeholder:text-[#A8C8F0] placeholder:opacity-55`

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-[14px]">
      <label className="mb-[6px] block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A8C8F0]">{label}</label>
      {children}
    </div>
  )
}
