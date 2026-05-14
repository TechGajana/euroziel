'use client'

import { useState } from 'react'
import { PageHero } from '@/components/ui'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => setSubmitted(true)

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s plan your<br /><em className="text-[#4A90D9] not-italic">European future</em></>}
        subtitle="Book a free 30-minute profile evaluation call or drop us a message. Our team typically responds within 2 hours."
      />

      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[60px]">

            {/* Left — contact info */}
            <div>
              <h3 className="font-heading text-[21px] font-bold mb-[22px]">Reach Us</h3>
              <div className="flex flex-col gap-[13px] mb-7">
                {[
                  { href: 'https://wa.me/917598969875', icon: '💬', name: 'WhatsApp', value: '+91 75989 69875', external: true },
                  { href: 'mailto:yuvasrijagadeesan6983@gmail.com', icon: '📧', name: 'Email', value: 'yuvasrijagadeesan6983@gmail.com', external: false },
                  { href: 'https://www.instagram.com/euro_ziel?igsh=MW9zbWhjYnNjd2FwMA==', icon: '📸', name: 'Instagram', value: '@euro_ziel', external: true },
                  { href: 'https://euroziel.com', icon: '🌐', name: 'Website', value: 'euroziel.com', external: true },
                ].map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noreferrer' : undefined}
                    className="flex items-center gap-[15px] px-[18px] py-[15px] bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] no-underline hover:border-[rgba(74,144,217,0.32)] transition-colors duration-200"
                  >
                    <div className="w-[38px] h-[38px] rounded-[4px] bg-[rgba(74,144,217,0.10)] border border-[rgba(74,144,217,0.32)] flex items-center justify-center text-[17px] shrink-0">
                      {ch.icon}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-[13.5px] text-[#E8EDF5]">{ch.name}</div>
                      <div className="text-[12.5px] text-[#A8C8F0] mt-[2px]">{ch.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="relative bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] h-[175px] flex items-center justify-center text-[13px] text-[#A8C8F0] overflow-hidden">
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(74,144,217,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,144,217,.04) 1px,transparent 1px)',
                    backgroundSize: '28px 28px',
                  }} />
                <span className="relative z-10 text-center leading-[1.7]">
                  📍 EuroZiel Consultancy<br />
                  <span className="text-[12px] text-[#A8C8F0]">Puducherry, India</span>
                </span>
              </div>

              <div className="mt-[22px] p-5 bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px]">
                <div className="font-heading font-bold text-[13.5px] mb-2">Office Hours</div>
                <div className="text-[13px] text-[#A8C8F0] font-light leading-[1.75]">
                  Monday – Saturday: 9:00 AM – 7:00 PM IST<br />
                  WhatsApp responses until 9:00 PM IST
                </div>
              </div>

              <div className="mt-5 p-5 bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px]">
                <div className="font-heading font-bold text-[13.5px] mb-2">Contact Persons</div>
                <div className="text-[13px] text-[#A8C8F0] font-light leading-[1.9]">
                  <strong className="text-[#E8EDF5]">Yuvasri Jagadeesan</strong> — Co-Founder<br />
                  <strong className="text-[#E8EDF5]">Sarathkumar Venkateshwaran</strong> — Co-Founder
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[38px]">
              <h3 className="font-heading text-[21px] font-bold mb-[26px]">📅 Book a Free Counselling Call</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[14px]">
                <FormGroup label="First Name"><input type="text" placeholder="Your first name" className={inputCls} /></FormGroup>
                <FormGroup label="Last Name"><input type="text" placeholder="Your last name" className={inputCls} /></FormGroup>
              </div>
              <FormGroup label="Email Address"><input type="email" placeholder="your@email.com" className={inputCls} /></FormGroup>
              <FormGroup label="Phone / WhatsApp"><input type="tel" placeholder="+91 00000 00000" className={inputCls} /></FormGroup>

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
                  className={`${inputCls} resize-y min-h-[96px]`}
                />
              </FormGroup>

              <button
                onClick={handleSubmit}
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 font-body text-[15px] font-semibold px-8 py-3.5 rounded-[4px] border-none cursor-pointer transition-all duration-200
                  ${submitted
                    ? 'bg-[#22c55e] text-white pointer-events-none'
                    : 'bg-[#4A90D9] text-[#06080F] hover:opacity-[0.87]'
                  }`}
              >
                {submitted ? '✓ Booked! Our Team will reach you within 2 hours.' : '📅 Book My Free Profile Call →'}
              </button>

              <p className="text-[11.5px] text-[#A8C8F0] mt-[14px] text-center font-light">
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
      <label className="block text-[11px] font-semibold text-[#A8C8F0] mb-[6px] tracking-[0.08em] uppercase">
        {label}
      </label>
      {children}
    </div>
  )
}
