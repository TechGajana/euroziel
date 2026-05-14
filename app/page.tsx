import Link from 'next/link'

function FloatCard({ icon, title, sub, chip, style }: {
  icon: string; title: string; sub: string; chip: string; style?: React.CSSProperties
}) {
  return (
    <div className="float-card" style={style}>
      <div className="fc-icon">{icon}</div>
      <div className="fc-t">{title}</div>
      <div className="fc-s">{sub}</div>
      <div className="fc-chip">{chip}</div>
    </div>
  )
}

function TestiCard({ initials, quote, name, info }: {
  initials: string; quote: string; name: string; info: string
}) {
  return (
    <div className="t-card">
      <div className="t-stars">★★★★★</div>
      <p className="t-text">&ldquo;{quote}&rdquo;</p>
      <div className="t-author">
        <div className="t-av">{initials}</div>
        <div>
          <div className="t-name">{name}</div>
          <div className="t-info">{info}</div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="grid-texture" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div style={{
          position: 'absolute', top: '-15%', left: '-8%', width: '65%', height: '90%',
          background: 'radial-gradient(ellipse, rgba(74,144,217,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} className="animate-pulse-slow" />

        <div className="inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot animate-blink" />
              Germany&apos;s Trusted Student Bridge
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px,5vw,66px)', fontWeight: 700, marginBottom: 24, lineHeight: 1.13 }}>
              Your <em style={{ color: '#4A90D9', fontStyle: 'italic' }}>European Dream</em><br />Starts Here
            </h1>
            <p style={{ fontSize: 18, color: '#A8C8F0', maxWidth: 490, marginBottom: 38, fontWeight: 300, lineHeight: 1.85 }}>
              EuroZiel connects ambitious Indian students directly to Germany&apos;s top public universities —
              with guidance from students who are already there.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">📞 Book Free Counselling</Link>
              <Link href="/europe" className="btn-ghost">Explore Germany →</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: 52, paddingTop: 36, borderTop: '1px solid rgba(74,144,217,0.16)' }}>
              {[['2,000+', 'Students Placed'], ['200+', 'Universities'], ['98%', 'Visa Success Rate']].map(([n, l]) => (
                <div key={l} style={{ textAlign: 'center', padding: '0 12px', borderRight: '1px solid rgba(74,144,217,0.16)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 700, color: '#4A90D9' }}>{n}</div>
                  <div style={{ fontSize: 11.5, color: 'rgba(232,237,245,0.50)', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <div style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FloatCard icon="🎓" title="Profile Evaluated & Admitted" sub="Technical University of Munich" chip="MSc Engineering · Winter 2025"
              style={{ width: 300, top: '50%', left: '50%' }} />
            <FloatCard icon="🇩🇪" title="Germany" sub="€0 Tuition · Public Uni" chip="400+ Universities"
              style={{ width: 185, top: 30, left: 20 }} />
            <FloatCard icon="🏆" title="DAAD Scholarship" sub="€861/month awarded" chip="Fully Funded"
              style={{ width: 175, top: 20, right: 10 }} />
            <FloatCard icon="✈️" title="Visa Approved" sub="German Student Visa" chip="98% Success Rate"
              style={{ width: 180, bottom: 40, left: 0 }} />
            <FloatCard icon="🤝" title="Peer Mentorship" sub="Live from TU Berlin" chip="Student Network"
              style={{ width: 175, bottom: 30, right: 20 }} />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        {['Free Profile Evaluation', 'APS Documentation', 'SOP & LOR Writing', 'Blocked Amount Setup',
          'DAAD & Scholarship Guidance', 'IELTS & German Coaching (50% Subsidised)',
          'On-Arrival Support in Germany', 'Direct Student Mentors from German Universities'].map((item) => (
          <div key={item} className="tick-item">{item}</div>
        ))}
      </div>

      {/* WHY EUROZIEL */}
      <section className="sec">
        <div className="inner">
          <div className="eyebrow">Why EuroZiel</div>
          <h2 className="sec-title">Everything you need,<br /><em style={{ color: '#4A90D9', fontStyle: 'italic' }}>under one roof</em></h2>
          <p style={{ fontSize: 17, color: '#A8C8F0', maxWidth: 560, fontWeight: 300, lineHeight: 1.85 }}>
            We are not just a consultancy — we are a living bridge between Indian students and Germany&apos;s top universities.
          </p>
          <div className="rule" />
          <div className="why-grid">
            {[
              ['01', 'Germany-Exclusive Focus', "Specialised exclusively in Germany's top public universities — not a generalist agency, but deep domain expertise."],
              ['02', 'Peer Mentors in Germany', 'Direct guidance from students currently enrolled at TU Munich, Berlin, and other top German institutions.'],
              ['03', 'End-to-End Support', 'From SOP writing to on-arrival Anmeldung — every step guided by experts with zero gaps.'],
              ['04', 'Personalised Strategy', 'Every student gets a dedicated counsellor and a bespoke admission strategy, not a template.'],
              ['05', 'Scholarship & Finance', 'DAAD, Erasmus+, university scholarships — plus education loan and blocked account guidance.'],
              ['06', 'Subsidised Language Coaching', 'Premium IELTS, GRE, GMAT & German coaching at 50% subsidised fees for EuroZiel students.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="why-card">
                <div className="why-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(74,144,217,0.16)', borderBottom: '1px solid rgba(74,144,217,0.16)' }}>
        <div className="inner">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">Your journey in <em style={{ color: '#4A90D9', fontStyle: 'italic' }}>6 clear steps</em></h2>
          <div className="rule" />
          <div className="steps">
            {[
              ['1', 'Free Consultation', 'Profile eval & goal mapping'],
              ['2', 'Documentation', 'APS, SOP, LOR, CV crafted'],
              ['3', 'University Selection', 'Apply to best-fit universities'],
              ['4', 'Offer & Scholarship', 'Admission + DAAD/Erasmus+'],
              ['5', 'Visa & Finance', 'Blocked account, embassy prep'],
              ['6', 'Arrive in Germany 🎉', 'Anmeldung, bank, campus'],
            ].map(([n, title, sub]) => (
              <div key={n} className="step">
                <div className="step-n">{n}</div>
                <div className="step-t">{title}</div>
                <div className="step-s">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-band">
        <div className="inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[['2,000+', 'Students Successfully Placed'], ['200+', 'Partner Universities'], ['98%', 'Visa Approval Rate']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center', padding: '0 20px', borderRight: '1px solid rgba(74,144,217,0.16)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 700, color: '#4A90D9', lineHeight: 1, marginBottom: 10 }}>{n}</div>
              <div style={{ fontSize: 14, color: '#A8C8F0' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="inner">
          <div className="eyebrow">Student Voices</div>
          <h2 className="sec-title">What our students <em style={{ color: '#4A90D9', fontStyle: 'italic' }}>say</em></h2>
          <div className="rule" />
          <div className="testi-grid">
            <TestiCard initials="AK"
              quote="EuroZiel connected me with a current TU Munich student who gave me insider tips no brochure could. My SOP was perfect and I got in first round."
              name="Aryan Kumar" info="MSc CS · TU Munich 🇩🇪" />
            <TestiCard initials="PS"
              quote="Got 70% scholarship at TU Delft with EuroZiel's scholarship strategy. The DAAD application support was exceptional — truly student-first."
              name="Priya Sharma" info="MSc Engineering · TU Delft 🇳🇱" />
            <TestiCard initials="RV"
              quote="The peer mentor from RWTH Aachen answered every question I had about campus life. EuroZiel is not just a consultancy — it is a community."
              name="Rahul Verma" info="MSc CS · RWTH Aachen 🇩🇪" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to cross the bridge to <em style={{ color: '#4A90D9', fontStyle: 'italic' }}>Germany?</em></h2>
        <p>Book a free 30-minute profile evaluation. No commitment, just clarity.</p>
        <Link href="/contact" className="btn-primary">📅 Book Your Free Call Today</Link>
      </div>
    </>
  )
}
