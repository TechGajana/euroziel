import Link from 'next/link'

// ─── Eyebrow label ───────────────────────────────
export function EyeBrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-[10px] text-[11.5px] font-semibold tracking-[0.12em] uppercase text-[#4A90D9] mb-4">
      <span className="block w-[28px] h-[1px] bg-[#4A90D9]" />
      {children}
    </div>
  )
}

// ─── Section title ───────────────────────────────
export function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-heading text-[clamp(28px,3.8vw,50px)] font-bold mb-[18px] leading-[1.18] ${className}`}>
      {children}
    </h2>
  )
}

// ─── Rule divider ────────────────────────────────
export function Rule() {
  return <div className="w-[40px] h-[2px] bg-[#4A90D9] my-[22px] rounded-full" />
}

// ─── Button components ───────────────────────────
interface BtnProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
}

export function Btn({ href, children, variant = 'primary', className = '', external }: BtnProps) {
  const base = 'inline-flex items-center gap-2 font-body text-[15px] font-semibold px-8 py-3.5 rounded-[4px] border-none cursor-pointer transition-all duration-200'
  const styles = variant === 'primary'
    ? 'bg-[#4A90D9] text-[#06080F] hover:opacity-[0.87] hover:-translate-y-px hover:shadow-[0_4px_40px_rgba(74,144,217,0.18)]'
    : 'bg-transparent text-[#E8EDF5] border border-[rgba(74,144,217,0.32)] hover:border-[#4A90D9] hover:text-[#4A90D9]'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  )
}

// ─── Page Hero ───────────────────────────────────
interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="bg-[#0D1B2A] border-b border-[rgba(74,144,217,0.16)] px-[5%] pt-[90px] pb-[70px]">
      <div className="max-w-[1240px] mx-auto">
        <EyeBrow>{eyebrow}</EyeBrow>
        <h1 className="font-heading text-[clamp(28px,3.8vw,50px)] font-bold mb-[18px] leading-[1.18]">{title}</h1>
        <p className="text-[17px] text-[#A8C8F0] max-w-[560px] font-light leading-[1.85]">{subtitle}</p>
        {children}
      </div>
    </div>
  )
}

// ─── CTA Band ────────────────────────────────────
interface CtaBandProps {
  title: React.ReactNode
  subtitle: string
  btnLabel: string
  btnHref: string
}

export function CtaBand({ title, subtitle, btnLabel, btnHref }: CtaBandProps) {
  return (
    <div className="relative overflow-hidden text-center border-y border-[rgba(74,144,217,0.16)] px-[5%] py-24
      bg-gradient-to-br from-[#0a1520] to-[#06080F]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px]
        bg-[radial-gradient(ellipse,rgba(74,144,217,0.10)_0%,transparent_70%)] pointer-events-none" />
      <h2 className="relative font-heading text-[clamp(26px,3.5vw,46px)] font-bold mb-[14px]">{title}</h2>
      <p className="relative text-[17px] text-[#A8C8F0] mb-[38px] font-light">{subtitle}</p>
      <Btn href={btnHref} className="relative">{btnLabel}</Btn>
    </div>
  )
}

// ─── Glass card ──────────────────────────────────
export function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-[rgba(13,27,42,0.9)] to-[rgba(10,21,32,0.95)]
      border border-[rgba(74,144,217,0.16)] rounded-[10px] backdrop-blur-[12px]
      hover:border-[rgba(74,144,217,0.32)] transition-colors duration-200 ${className}`}>
      {children}
    </div>
  )
}
