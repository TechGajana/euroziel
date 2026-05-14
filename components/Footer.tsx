import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 44, marginBottom: 44 }}>
          <div>
            <Link href="/" style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, display: 'block', marginBottom: 14, textDecoration: 'none', color: '#E8EDF5' }}>
              Euro<em style={{ color: '#4A90D9', fontStyle: 'italic' }}>Ziel</em>
            </Link>
            <p style={{ fontSize: 13.5, color: '#A8C8F0', lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
              Germany&apos;s most trusted student bridge — connecting ambitious Indian students to top public universities. Based in Puducherry, India.
            </p>
          </div>
          {[
            { title: 'Pages', links: [['/', 'Home'], ['/about', 'About Us'], ['/europe', 'Study in Germany'], ['/services', 'Services'], ['/process', 'Process']] },
            { title: 'Resources', links: [['/stories', 'Success Stories'], ['/faq', 'FAQ'], ['/contact', 'Contact']] },
            { title: 'Contact', links: [['https://wa.me/917598969875', 'WhatsApp: +91 75989 69875'], ['mailto:info@euroziel.com', 'info@euroziel.com'], ['https://www.instagram.com/euro_ziel', '@euro_ziel'], ['#', 'Puducherry, India']] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 12.5, fontWeight: 700, color: '#E8EDF5', marginBottom: 18, letterSpacing: '0.05em' }}>{title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(([href, label]) => (
                  <li key={label} style={{ marginBottom: 9 }}>
                    <Link href={href} style={{ fontSize: 13, color: '#A8C8F0', textDecoration: 'none' }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(74,144,217,0.16)', paddingTop: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 12.5, color: '#A8C8F0' }}>© 2025 EuroZiel Consultancy. All rights reserved. · Puducherry, India</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['https://wa.me/917598969875', '💬'], ['https://www.instagram.com/euro_ziel', '📸'], ['https://euroziel.com', '🌐']].map(([href, icon]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                style={{ width: 34, height: 34, borderRadius: 4, border: '1px solid rgba(74,144,217,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8C8F0', fontSize: 13, textDecoration: 'none' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
