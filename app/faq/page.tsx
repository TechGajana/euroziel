'use client'

import { useState } from 'react'
import { PageHero, Btn } from '@/components/ui'
import { WhatsAppMark } from '@/components/WhatsAppMark'

interface FaqItem {
  q: string
  a: string
  cat: string
}

const faqs: FaqItem[] = [
  { cat: 'eligibility', q: 'Who is eligible to study in Germany?', a: 'Any Indian student with a completed 10+2 (for Bachelors) or a relevant undergraduate degree (for Masters) is eligible. You need an IELTS score of 6.5+ for English-taught programmes, or German B2/C1 for German-taught ones. An APS certificate is mandatory for Indian applicants to German universities.' },
  { cat: 'eligibility', q: 'Can I apply with a low GPA?', a: 'Yes — many German universities consider the holistic profile including work experience, research, and the quality of your SOP. A well-crafted application can offset a lower GPA. EuroZiel counsellors specialise in identifying universities that match your specific profile and maximising your admission chances.' },
  { cat: 'costs', q: 'How much does it cost to study in Germany?', a: 'Public universities charge only a semester contribution of €150–350 (which typically includes a public transport pass) — effectively free tuition. Living costs are €800–1,100/month depending on the city. Munich is more expensive; Berlin, Leipzig, and smaller cities are more affordable.' },
  { cat: 'costs', q: 'What is the blocked account (Sperrkonto)?', a: 'A Sperrkonto is a special German bank account (Fintiba, Expatrio, Deutsche Bank) where you deposit €11,904 before your visa application — proving you can fund your first year. Once in Germany, you withdraw €992/month. EuroZiel guides you through the entire setup process step by step.' },
  { cat: 'visa', q: 'How long does the German student visa take?', a: 'Processing typically takes 6–12 weeks from your embassy appointment. We recommend applying 3–4 months before your semester start. EuroZiel prepares a complete, error-free application to avoid rejections or additional document requests that cause delays.' },
  { cat: 'visa', q: 'Can I work while studying in Germany?', a: 'Yes — international students can work up to 120 full days or 240 half days per year. Student jobs (HiWi, part-time, Werkstudent positions) pay €12–18/hour, covering a significant portion of monthly living costs. Paid internships (Praktikum) are also widely available and excellent for career development.' },
  { cat: 'accommodation', q: 'How do I find accommodation in Germany?', a: 'Options include Studentenwerk dorms (€200–350/month, but competitive waitlists), private shared apartments (WG via WG-Gesucht, €400–600/month), or private studios (€600–900/month). Apply for dorms immediately on receiving your admission offer. EuroZiel\'s on-ground Germany network assists with the search and lease review.' },
  { cat: 'language', q: 'Do I need to learn German to study in Germany?', a: 'Not necessarily — over 2,000 Masters programmes are taught entirely in English. However, A1/A2 German significantly improves daily life, job prospects, and integration. For Ausbildung and some programmes, B1 or B2 German is mandatory. EuroZiel offers IELTS and German language coaching at 50% subsidised fees.' },
  { cat: 'scholarship', q: 'What scholarships are available for Indian students?', a: 'Key scholarships include: DAAD (€861/month, one of the most prestigious), Erasmus+, Deutschlandstipendium (€300/month from universities), Heinrich Böll Foundation, Friedrich Ebert Foundation, and university-specific merit scholarships. EuroZiel has helped students secure over €8M in cumulative scholarship funding.' },
  { cat: 'scholarship', q: 'What education loan options are available?', a: 'Indian students can apply for education loans from SBI, HDFC Credila, Axis Bank, and Avanse to fund living costs and initial setup fees. Amounts typically range ₹20L–75L. EuroZiel helps you compare lenders, prepare documentation, and secure competitive interest rates.' },
]

const cats = [
  { id: 'all', label: 'All' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'costs', label: 'Costs' },
  { id: 'visa', label: 'Visa' },
  { id: 'accommodation', label: 'Accommodation' },
  { id: 'language', label: 'Language' },
  { id: 'scholarship', label: 'Scholarships' },
]

export default function FaqPage() {
  const [activeCat, setActiveCat] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const visible = faqs.filter((f) => activeCat === 'all' || f.cat === activeCat)

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i))

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Got questions?<br /><em className="text-[#4A90D9] not-italic">We&apos;ve got answers.</em></>}
        subtitle="Everything you need to know before starting your journey to Germany."
      />

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-11 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActiveCat(c.id)
                  setOpenIdx(null)
                }}
                className={`min-h-11 cursor-pointer rounded-[4px] border px-4 py-2 font-body text-[13px] transition-all duration-200 sm:px-[18px] sm:py-[7px] ${
                  activeCat === c.id
                    ? 'border-[#4A90D9] bg-[#4A90D9] font-semibold text-[#06080F]'
                    : 'border-[rgba(74,144,217,0.16)] bg-transparent text-[#A8C8F0] hover:border-[#4A90D9] hover:bg-[#4A90D9] hover:text-[#06080F]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="mx-auto max-w-[800px]">
            {visible.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div key={item.q} className="border-b border-[rgba(74,144,217,0.16)]">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggle(i)
                      }
                    }}
                    className="flex min-h-14 cursor-pointer items-start justify-between gap-4 py-4 font-heading text-[14px] font-bold text-[#E8EDF5] transition-colors duration-200 hover:text-[#4A90D9] sm:items-center sm:gap-5 sm:py-[22px] sm:text-[15px]"
                  >
                    <span className="min-w-0 flex-1 pr-2">{item.q}</span>
                    <div className={`w-[26px] h-[26px] min-w-[26px] rounded-full flex items-center justify-center text-[18px] font-light transition-all duration-300
                      ${isOpen
                        ? 'rotate-45 bg-[#4A90D9] text-[#06080F] border border-[#4A90D9]'
                        : 'bg-[#0D1B2A] text-[#4A90D9] border border-[rgba(74,144,217,0.16)]'
                      }`}>
                      +
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden text-[13.5px] font-light leading-[1.85] text-[#A8C8F0] transition-all duration-300 ${
                      isOpen ? 'max-h-[min(70vh,560px)] pb-5 sm:pb-[22px]' : 'max-h-0'
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Still have questions */}
          <div className="mx-auto mt-10 max-w-[800px] rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-5 sm:mt-[52px] sm:p-8">
            <h3 className="font-heading text-[19px] font-bold mb-2">Still have questions?</h3>
            <p className="text-[13.5px] text-[#A8C8F0] mb-[22px] font-light">Our counsellors are available Monday–Saturday, 9am–7pm IST.</p>
            <div className="flex gap-3 flex-wrap">
              <Btn href="/contact">Ask Our Experts</Btn>
              <Btn href="https://wa.me/917598969875" variant="ghost" external>
                <WhatsAppMark className="h-4 w-4 shrink-0 text-[#25D366]" />
                WhatsApp Us
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
