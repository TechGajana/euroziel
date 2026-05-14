import { Phone } from 'lucide-react'
import { Btn, EyeBrow, PageHero, Rule, SectionTitle } from '@/components/ui'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EuroZiel"
        title={
          <>
            Built by students,
            <br />
            <em className="text-[#4A90D9] not-italic">for students</em>
          </>
        }
        subtitle="EuroZiel is a Puducherry-based consultancy focused exclusively on Germany and Europe — with peer mentors who live and study there today."
      />

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <EyeBrow>Our story</EyeBrow>
          <SectionTitle>Why we exist</SectionTitle>
          <Rule />
          <div className="mt-10 max-w-[720px] space-y-5 text-[17px] font-light leading-[1.85] text-[#A8C8F0]">
            <p>
              Applying to German public universities from India involves APS, uni-assist, precise documentation, and
              deadlines that are easy to miss. Generic agencies rarely go deep enough — and students deserve guidance
              from people who have walked the same path.
            </p>
            <p>
              Co-founders <strong className="font-semibold text-[#E8EDF5]">Yuvasri Jagadeesan</strong> and{' '}
              <strong className="font-semibold text-[#E8EDF5]">Sarathkumar Venkateshwaran</strong> built EuroZiel as a
              bridge: structured counselling in India, paired with mentors already enrolled at top European
              universities.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                title: 'Germany-first depth',
                body: 'We specialise in public universities, DAAD pathways, blocked accounts, and visa reality — not scattershot “study abroad” lists.',
              },
              {
                title: 'Peer proof',
                body: 'You hear from students at TU Munich, RWTH Aachen, Berlin, and more — not recycled brochures.',
              },
              {
                title: 'End-to-end honesty',
                body: 'From profile evaluation to arrival support, we align timelines and expectations so there are no surprises at the embassy or on campus.',
              },
              {
                title: 'Rooted in Puducherry',
                body: 'We work with families across India with clear communication, documented processes, and WhatsApp access when it matters.',
              },
            ].map((b) => (
              <div
                key={b.title}
                className="flex gap-3 rounded-r-[4px] border-l-2 border-[#4A90D9] bg-[#0D1B2A] px-[18px] py-3.5"
              >
                <div>
                  <h3 className="mb-1 font-heading text-[15px] font-bold text-[#E8EDF5]">{b.title}</h3>
                  <p className="text-[13.5px] leading-[1.75] text-[#A8C8F0]">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Btn href="/contact">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
              Talk to our team
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
