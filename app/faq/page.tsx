'use client'

import { useState } from 'react'
import { PageHero, Btn } from '@/components/ui'

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

      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          {/* Category filter */}
          <div className="flex gap-2 mb-11 flex-wrap">
            {cats.map((c) => (
              <button
                key={c.id}
                onClick={() => { setActiveCat(c.id); setOpenIdx(null) }}
                className={`px-[18px] py-[7px] rounded-[4px] border text-[13px] font-body cursor-pointer transition-all duration-200
                  ${activeCat === c.id
                    ? 'bg-[#4A90D9] text-[#06080F] border-[#4A90D9] font-semibold'
                    : 'bg-transparent text-[#A8C8F0] border-[rgba(74,144,217,0.16)] hover:bg-[#4A90D9] hover:text-[#06080F] hover:border-[#4A90D9]'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="max-w-[800px]">
            {visible.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div key={item.q} className="border-b border-[rgba(74,144,217,0.16)]">
                  <div
                    onClick={() => toggle(i)}
                    className="py-[22px] flex justify-between items-center cursor-pointer gap-5 font-heading font-bold text-[15px] text-[#E8EDF5] hover:text-[#4A90D9] transition-colors duration-200"
                  >
                    <span>{item.q}</span>
                    <div className={`w-[26px] h-[26px] min-w-[26px] rounded-full flex items-center justify-center text-[18px] font-light transition-all duration-300
                      ${isOpen
                        ? 'rotate-45 bg-[#4A90D9] text-[#06080F] border border-[#4A90D9]'
                        : 'bg-[#0D1B2A] text-[#4A90D9] border border-[rgba(74,144,217,0.16)]'
                      }`}>
                      +
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-400 text-[13.5px] text-[#A8C8F0] leading-[1.85] font-light
                    ${isOpen ? 'max-h-[320px] pb-[22px]' : 'max-h-0'}`}>
                    {item.a}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-[52px] p-8 bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] max-w-[800px]">
            <h3 className="font-heading text-[19px] font-bold mb-2">Still have questions?</h3>
            <p className="text-[13.5px] text-[#A8C8F0] mb-[22px] font-light">Our counsellors are available Monday–Saturday, 9am–7pm IST.</p>
            <div className="flex gap-3 flex-wrap">
              <Btn href="/contact">Ask Our Experts</Btn>
              <Btn href="https://wa.me/917598969875" variant="ghost" external>💬 WhatsApp Us</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
