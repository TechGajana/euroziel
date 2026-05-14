'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/europe', label: 'Study in Germany' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/stories', label: 'Success Stories' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkCls = (href: string) =>
    `block rounded-md px-3 py-3 text-[15px] no-underline transition-colors duration-200 xl:inline-block xl:px-2.5 xl:py-2 xl:text-[12.5px] 2xl:px-[13px] 2xl:text-[13.5px] ${
      pathname === href ? 'bg-[rgba(74,144,217,0.12)] text-[#E8EDF5] xl:bg-transparent' : 'text-[rgba(232,237,245,0.72)] hover:bg-[rgba(74,144,217,0.08)] hover:text-[#E8EDF5] xl:text-[rgba(232,237,245,0.50)] xl:hover:bg-transparent'
    }`

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[9999] flex h-[66px] items-center justify-between border-b border-[rgba(74,144,217,0.16)] bg-[rgba(6,8,15,0.94)] px-4 backdrop-blur-[18px] sm:px-[5%]">
        <Link
          href="/"
          className="min-w-0 shrink font-heading text-lg font-bold tracking-[-0.02em] text-[#E8EDF5] no-underline sm:text-[22px]"
          onClick={() => setOpen(false)}
        >
          Euro<em className="text-[#4A90D9] not-italic">Ziel</em>
        </Link>

        <ul className="hidden list-none items-center gap-0 xl:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkCls(href)}>
                {label}
              </Link>
            </li>
          ))}
          <li className="pl-1">
            <Link
              href="/contact"
              className="block rounded-[4px] bg-[#4A90D9] px-4 py-2 text-[12.5px] font-semibold text-[#06080F] no-underline transition-opacity duration-200 hover:opacity-90 2xl:px-[22px] 2xl:py-[9px] 2xl:text-[13.5px]"
            >
              Book Free Call
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-[#E8EDF5] xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[10000] xl:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[rgba(74,144,217,0.2)] bg-[#06080F] shadow-2xl">
            <div className="flex h-[66px] shrink-0 items-center justify-between border-b border-[rgba(74,144,217,0.16)] px-4">
              <span className="font-heading text-sm font-bold text-[#A8C8F0]">Menu</span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[#E8EDF5]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-3">
              <ul className="list-none space-y-0.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkCls(href)} onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="shrink-0 border-t border-[rgba(74,144,217,0.16)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-[4px] bg-[#4A90D9] py-3.5 text-[15px] font-semibold text-[#06080F] no-underline"
                onClick={() => setOpen(false)}
              >
                Book Free Call
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
