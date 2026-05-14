import { PageHero, Btn } from '@/components/ui'

interface ServiceCardProps {
  icon: string
  title: string
  desc: string
  tag: string
}

function ServiceCard({ icon, title, desc, tag }: ServiceCardProps) {
  return (
    <div className="svc-card relative bg-[#0D1B2A] border border-[rgba(74,144,217,0.16)] rounded-[10px] p-[30px] overflow-hidden transition-all duration-200 hover:border-[rgba(74,144,217,0.32)] hover:-translate-y-[3px]">
      <div className="text-[28px] mb-[14px]">{icon}</div>
      <h3 className="font-heading text-[15.5px] font-bold mb-[10px]">{title}</h3>
      <p className="text-[13px] text-[#A8C8F0] leading-[1.75]" dangerouslySetInnerHTML={{ __html: desc }} />
      <div className="inline-block mt-[14px] bg-[rgba(74,144,217,0.10)] text-[#A8C8F0] text-[10.5px] font-semibold px-[10px] py-[3px] rounded-full tracking-[0.05em] border border-[rgba(74,144,217,0.16)]">
        {tag}
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  { icon: '📁', title: 'Profile Verification & Evaluation', desc: 'Comprehensive analysis of your academic profile, work experience, and goals to identify the best-fit German programmes.', tag: 'Foundation' },
  { icon: '📋', title: 'APS Documentation', desc: 'Full guidance for the Academic Evaluation Centre (APS) — documentation prep, application, and interview coaching. Mandatory for German universities.', tag: 'Germany Required' },
  { icon: '✍️', title: 'SOP / LOR / CV Preparation', desc: "Expert-crafted Statement of Purpose, Letters of Recommendation, and CV tailored specifically to each university's culture and requirements.", tag: 'Documents' },
  { icon: '🏫', title: 'University Application & Registration', desc: 'End-to-end application management via uni-assist and direct portals — shortlisting, applying, tracking, and completing registration formalities.', tag: 'Applications' },
  { icon: '🛂', title: 'Visa Assistance', desc: 'Complete visa documentation, German Consulate appointment booking, financial proof preparation, and mock embassy interview coaching.', tag: 'Visa' },
  { icon: '🏠', title: 'Accommodation Support', desc: 'Student dorm applications, WG search via WG-Gesucht, private housing guidance, and lease review for your destination city in Germany.', tag: 'Housing' },
  { icon: '✈️', title: 'On-Arrival Support', desc: 'Anmeldung (city registration), local SIM, bank account, health insurance enrollment, and campus orientation once you land in Germany.', tag: 'Post-Arrival' },
  { icon: '🗣️', title: 'IELTS & German Language Prep', desc: 'Certified IELTS coaching plus German A1–B2 classes at <strong style="color:#4A90D9">50% subsidised fees</strong> for all EuroZiel enrolled students.', tag: 'Language' },
  { icon: '📊', title: 'GRE / GMAT Preparation', desc: 'Structured GRE and GMAT coaching with mock tests, personalised feedback, and target score planning for business and science programmes.', tag: 'Test Prep' },
  { icon: '💰', title: 'Education Loan Assistance', desc: 'Guidance on SBI, HDFC Credila, Axis, and Avanse loans — documentation support, collateral requirements, and best-rate comparisons.', tag: 'Finance' },
  { icon: '🏦', title: 'Blocked Amount & German Account', desc: 'Complete setup of your Sperrkonto (€11,904 required) with Fintiba, Expatrio, or Deutsche Bank — a mandatory visa requirement handled smoothly.', tag: 'Finance' },
  { icon: '🛡️', title: 'Insurance Support', desc: 'Student health insurance guidance — both Indian travel cover and German public health (GKV) enrollment that meets university and visa requirements.', tag: 'Insurance' },
  { icon: '🎓', title: 'Bachelors & Masters Programs', desc: "Specialised pathways for both undergraduate and postgraduate programmes across Germany's public university network.", tag: 'All Levels' },
  { icon: '🔧', title: 'Ausbildung (Vocational Training)', desc: 'The Ausbildung route — dual vocational training in Germany. Earn while you learn at companies like Bosch, BMW, and Deutsche Bahn partner firms.', tag: 'Vocational' },
  { icon: '🏆', title: 'Scholarships Guidance', desc: 'Identification and application support for DAAD, Erasmus+, Deutschlandstipendium, Heinrich Böll, and university-specific merit scholarships.', tag: 'Scholarships' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Complete support,<br /><em className="text-[#4A90D9] not-italic">zero gaps</em></>}
        subtitle="From your first enquiry to your first day on a German campus — EuroZiel covers every aspect of your study abroad journey."
      />

      <section className="py-24 px-[5%]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Btn href="/contact">🚀 Get Started Today</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
