'use client'

import Link from 'next/link'
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

  return (
    <nav>
      <Link href="/" style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: '#E8EDF5', textDecoration: 'none' }}>
        Euro<em style={{ color: '#4A90D9', fontStyle: 'italic' }}>Ziel</em>
      </Link>

      <ul style={{ display: 'flex', listStyle: 'none', gap: 0, alignItems: 'center' }}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontSize: 13.5,
                padding: '8px 13px',
                color: pathname === href ? '#E8EDF5' : 'rgba(232,237,245,0.50)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                display: 'block',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            style={{
              fontSize: 13.5,
              padding: '9px 22px',
              fontWeight: 600,
              borderRadius: 4,
              background: '#4A90D9',
              color: '#06080F',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              display: 'block',
            }}
          >
            Book Free Call
          </Link>
        </li>
      </ul>
    </nav>
  )
}
