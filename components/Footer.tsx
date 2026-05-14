import Link from 'next/link'
import { AtSign, Globe, MessageCircle } from 'lucide-react'

const social = [
  { href: 'https://wa.me/917598969875', Icon: MessageCircle, label: 'WhatsApp' },
  { href: 'https://www.instagram.com/euro_ziel', Icon: AtSign, label: 'Instagram' },
  { href: 'https://euroziel.com', Icon: Globe, label: 'Website' },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(74,144,217,0.16)] bg-[#0D1B2A] px-4 pb-8 pt-14 sm:px-[5%] sm:pb-[30px] sm:pt-[68px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-11 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-11">
          <div>
            <Link
              href="/"
              className="mb-3.5 block font-heading text-[22px] font-bold text-[#E8EDF5] no-underline"
            >
              Euro<em className="text-[#4A90D9] not-italic">Ziel</em>
            </Link>
            <p className="max-w-[280px] text-[13.5px] font-light leading-[1.8] text-[#A8C8F0]">
              Germany&apos;s most trusted student bridge — connecting ambitious Indian students to top public universities. Based in Puducherry, India.
            </p>
          </div>
          {[
            {
              title: 'Pages',
              links: [
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/europe', 'Study in Germany'],
                ['/services', 'Services'],
                ['/process', 'Process'],
              ],
            },
            {
              title: 'Resources',
              links: [
                ['/stories', 'Success Stories'],
                ['/faq', 'FAQ'],
                ['/contact', 'Contact'],
              ],
            },
            {
              title: 'Contact',
              links: [
                ['https://wa.me/917598969875', 'WhatsApp: +91 75989 69875'],
                ['mailto:info@euroziel.com', 'info@euroziel.com'],
                ['https://www.instagram.com/euro_ziel', '@euro_ziel'],
                ['#', 'Puducherry, India'],
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-[18px] font-heading text-[12.5px] font-bold tracking-[0.05em] text-[#E8EDF5]">
                {title}
              </h4>
              <ul className="list-none">
                {links.map(([href, label]) => (
                  <li key={label} className="mb-2">
                    <Link href={href} className="text-[13px] text-[#A8C8F0] no-underline hover:text-[#E8EDF5]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[rgba(74,144,217,0.16)] pt-[26px] sm:flex-row sm:items-center">
          <p className="max-w-full text-balance text-[12.5px] text-[#A8C8F0]">
            © 2025 EuroZiel Consultancy. All rights reserved. · Puducherry, India
          </p>
          <div className="flex gap-2.5">
            {social.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[4px] border border-[rgba(74,144,217,0.16)] text-[#A8C8F0] no-underline transition-colors hover:border-[rgba(74,144,217,0.32)] hover:text-[#E8EDF5]"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
