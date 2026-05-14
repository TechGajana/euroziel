import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Banknote,
  ClipboardList,
  FolderOpen,
  GraduationCap,
  Home,
  Landmark,
  Languages,
  LineChart,
  PenLine,
  Plane,
  Rocket,
  School,
  Shield,
  Stamp,
  Wrench,
} from 'lucide-react'
import { Btn, PageHero } from '@/components/ui'

interface ServiceCardProps {
  Icon: LucideIcon
  title: string
  desc: string
  tag: string
}

function ServiceCard({ Icon, title, desc, tag }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] p-[30px] transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-0.5 before:origin-left before:scale-x-0 before:bg-[#4A90D9] before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:-translate-y-[3px] hover:border-[rgba(74,144,217,0.32)] hover:before:scale-x-100">
      <div className="mb-[14px] flex h-12 w-12 items-center justify-center rounded-lg border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.10)]">
        <Icon className="h-6 w-6 text-[#4A90D9]" strokeWidth={1.65} />
      </div>
      <h3 className="mb-[10px] font-heading text-[15.5px] font-bold">{title}</h3>
      <p className="text-[13px] leading-[1.75] text-[#A8C8F0]" dangerouslySetInnerHTML={{ __html: desc }} />
      <div className="mt-[14px] inline-block rounded-full border border-[rgba(74,144,217,0.16)] bg-[rgba(74,144,217,0.10)] px-[10px] py-[3px] text-[10.5px] font-semibold tracking-[0.05em] text-[#A8C8F0]">
        {tag}
      </div>
    </div>
  )
}

const services: ServiceCardProps[] = [
  { Icon: FolderOpen, title: 'Profile Verification & Evaluation', desc: 'Comprehensive analysis of your academic profile, work experience, and goals to identify the best-fit German programmes.', tag: 'Foundation' },
  { Icon: ClipboardList, title: 'APS Documentation', desc: 'Full guidance for the Academic Evaluation Centre (APS) — documentation prep, application, and interview coaching. Mandatory for German universities.', tag: 'Germany Required' },
  { Icon: PenLine, title: 'SOP / LOR / CV Preparation', desc: "Expert-crafted Statement of Purpose, Letters of Recommendation, and CV tailored specifically to each university's culture and requirements.", tag: 'Documents' },
  { Icon: School, title: 'University Application & Registration', desc: 'End-to-end application management via uni-assist and direct portals — shortlisting, applying, tracking, and completing registration formalities.', tag: 'Applications' },
  { Icon: Stamp, title: 'Visa Assistance', desc: 'Complete visa documentation, German Consulate appointment booking, financial proof preparation, and mock embassy interview coaching.', tag: 'Visa' },
  { Icon: Home, title: 'Accommodation Support', desc: 'Student dorm applications, WG search via WG-Gesucht, private housing guidance, and lease review for your destination city in Germany.', tag: 'Housing' },
  { Icon: Plane, title: 'On-Arrival Support', desc: 'Anmeldung (city registration), local SIM, bank account, health insurance enrollment, and campus orientation once you land in Germany.', tag: 'Post-Arrival' },
  { Icon: Languages, title: 'IELTS & German Language Prep', desc: 'Certified IELTS coaching plus German A1–B2 classes at <strong style="color:#4A90D9">50% subsidised fees</strong> for all EuroZiel enrolled students.', tag: 'Language' },
  { Icon: LineChart, title: 'GRE / GMAT Preparation', desc: 'Structured GRE and GMAT coaching with mock tests, personalised feedback, and target score planning for business and science programmes.', tag: 'Test Prep' },
  { Icon: Banknote, title: 'Education Loan Assistance', desc: 'Guidance on SBI, HDFC Credila, Axis, and Avanse loans — documentation support, collateral requirements, and best-rate comparisons.', tag: 'Finance' },
  { Icon: Landmark, title: 'Blocked Amount & German Account', desc: 'Complete setup of your Sperrkonto (€11,904 required) with Fintiba, Expatrio, or Deutsche Bank — a mandatory visa requirement handled smoothly.', tag: 'Finance' },
  { Icon: Shield, title: 'Insurance Support', desc: 'Student health insurance guidance — both Indian travel cover and German public health (GKV) enrollment that meets university and visa requirements.', tag: 'Insurance' },
  { Icon: GraduationCap, title: 'Bachelors & Masters Programs', desc: "Specialised pathways for both undergraduate and postgraduate programmes across Germany's public university network.", tag: 'All Levels' },
  { Icon: Wrench, title: 'Ausbildung (Vocational Training)', desc: 'The Ausbildung route — dual vocational training in Germany. Earn while you learn at companies like Bosch, BMW, and Deutsche Bahn partner firms.', tag: 'Vocational' },
  { Icon: Award, title: 'Scholarships Guidance', desc: 'Identification and application support for DAAD, Erasmus+, Deutschlandstipendium, Heinrich Böll, and university-specific merit scholarships.', tag: 'Scholarships' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Complete support,<br /><em className="text-[#4A90D9] not-italic">zero gaps</em></>}
        subtitle="From your first enquiry to your first day on a German campus — EuroZiel covers every aspect of your study abroad journey."
      />

      <section className="px-4 py-16 sm:px-[5%] sm:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {services.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Btn href="/contact">
              <Rocket className="h-4 w-4 shrink-0" strokeWidth={2} />
              Get Started Today
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
