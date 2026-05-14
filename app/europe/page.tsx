import { PageHero, EyeBrow, SectionTitle, Rule, Btn } from '@/components/ui'

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] px-[18px] py-7 text-center hover:border-[rgba(74,144,217,0.32)] transition-colors duration-200">
      <div className="font-heading text-[34px] font-bold text-[#4A90D9]">{num}</div>
      <div className="text-[12.5px] text-[#A8C8F0] mt-2">{label}</div>
    </div>
  )
}

function FieldCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[26px] transition-all duration-200 hover:border-[#4A90D9] hover:bg-[#0f2035]">
      <div className="text-[26px] mb-3">{icon}</div>
      <h3 className="font-heading text-[15px] font-bold mb-2">{title}</h3>
      <p className="text-[13px] text-[#A8C8F0] leading-[1.7]">{desc}</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <StatCard num="400K+" label="International Students in Germany" />
          <StatCard num="€0" label="Tuition at Public Universities" />
          <StatCard num="18 Mo." label="Post-Study Job Seeker Visa" />
          <StatCard num="1.7M" label="Skilled Jobs Unfilled in Germany" />
        </div>
      </PageHero>

      {/* Fields */}
      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          <EyeBrow>Fields & Specialisations</EyeBrow>
          <SectionTitle>What can you <em className="text-[#4A90D9] not-italic">study?</em></SectionTitle>
          <Rule />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-12">
            <FieldCard icon="💻" title="Computer Science & IT" desc="AI, Data Science, Cybersecurity, Software Engineering — Germany hosts SAP, Siemens Digital, and Europe's fastest-growing tech scene." />
            <FieldCard icon="⚙️" title="Engineering" desc="Mechanical, Electrical, Automotive, Civil — with direct recruitment pathways into BMW, Bosch, Volkswagen, and Airbus." />
            <FieldCard icon="💼" title="Business & Management" desc="MBA, MSc Finance, International Business — top European B-schools await your profile." />
            <FieldCard icon="🔬" title="Natural Sciences" desc="Physics, Chemistry, Biotechnology — access world-leading research labs and DFG-funded institutes." />
            <FieldCard icon="🎨" title="Design & Architecture" desc="Germany's Bauhaus legacy — globally recognised programmes in design, urban planning, and architecture." />
            <FieldCard icon="⚕️" title="Medicine & Health" desc="Medicine, Pharmacy, Public Health — European qualifications respected in over 100 countries." />
          </div>
        </div>
      </section>

      {/* Alumni Companies */}
      <section className="py-24 px-[5%] bg-[#0D1B2A] border-y border-[rgba(74,144,217,0.16)]">
        <div className="max-w-[1240px] mx-auto">
          <EyeBrow>Career Prospects</EyeBrow>
          <SectionTitle>EuroZiel alumni now<br /><em className="text-[#4A90D9] not-italic">work at</em></SectionTitle>
          <Rule />
          <p className="text-[17px] text-[#A8C8F0] max-w-[560px] font-light leading-[1.85]">
            Germany&apos;s skilled worker shortage means graduates are actively recruited by Europe&apos;s most prestigious companies.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-8">
            {['BMW Group', 'Siemens AG', 'Bosch', 'SAP', 'Volkswagen', 'Deutsche Bahn', 'BASF', 'Airbus',
              'Allianz', 'Daimler Trucks', 'Zalando', 'DeepMind Berlin', 'N26', 'Celonis'].map((co) => (
              <div key={co} className="bg-[#06080F] border border-[rgba(74,144,217,0.16)] rounded-[4px] px-[15px] py-[7px] text-[12.5px] text-[#A8C8F0] hover:border-[rgba(74,144,217,0.32)] hover:text-[#E8EDF5] transition-all duration-200 cursor-default">
                {co}
              </div>
            ))}
          </div>

          <div className="mt-8 p-[22px] bg-[#06080F] border border-[rgba(74,144,217,0.16)] rounded-[10px] inline-grid grid-cols-2 md:grid-cols-4 gap-7 text-center">
            {[['€52K', 'Avg. Graduate Salary'], ['3.4%', 'Graduate Unemployment'], ['18 Mo.', 'Job Seeker Visa'], ['1.7M', 'Unfilled Skilled Jobs']].map(([n, l]) => (
              <div key={l}>
                <div className="font-heading text-[24px] font-bold text-[#4A90D9]">{n}</div>
                <div className="text-[12px] text-[#A8C8F0] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semester Calendar */}
      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          <EyeBrow>Semester Calendar</EyeBrow>
          <SectionTitle>When to <em className="text-[#4A90D9] not-italic">apply?</em></SectionTitle>
          <Rule />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-12">
            {[
              {
                title: '🍂 Winter Semester (Oct/Nov)',
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
                title: '🌸 Summer Semester (Apr/May)',
                items: [
                  'April / May start',
                  'Application opens: July each year',
                  'Application deadline: January 15',
                  'Fewer programmes, less competition',
                  'Great for strong academic profiles',
                  'Selected Masters in Business & Economics',
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[34px]">
                <h3 className="font-heading text-[19px] font-bold text-[#4A90D9] mb-5">{title}</h3>
                <ul className="list-none space-y-0">
                  {items.map((item) => (
                    <li key={item} className="text-[13.5px] text-[#A8C8F0] py-[7px] border-b border-[rgba(74,144,217,0.16)] last:border-b-0 flex items-center gap-[10px]">
                      <span className="text-[#4A90D9] text-[11px]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap mt-12">
            <Btn href="/contact">📥 Download Free Germany Guide</Btn>
            <Btn href="/contact" variant="ghost">Book Counselling Call</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
