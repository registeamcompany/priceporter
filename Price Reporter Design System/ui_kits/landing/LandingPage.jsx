const { Button, Logo, Icon, Badge, Card, SectionHeading, NumbersBand, ServiceCard, Testimonial, Accordion, CTABanner } = window.PriceReporterDesignSystem_2cd382;

const PROOF = [
  { value: '20+', label: 'Years working with GSA' },
  { value: '400+', label: 'GSA contracts awarded' },
  { value: '1000+', label: 'Companies served' },
  { value: '2.5M+', label: 'GSA orders processed' },
  { value: '4.9', suffixIcon: 'star', label: 'Customer rating' },
];

const QUALIFY = [
  { icon: 'circle-check', title: 'You already sell commercially', body: 'Two years of trading history and financials you can share is the usual bar for a MAS award.' },
  { icon: 'shield-check', title: 'Your products are US or TAA made', body: "If you're unsure, we check country of origin for your whole catalog before you spend a dollar." },
  { icon: 'target', title: 'You want federal revenue, not a trophy', body: 'The average Schedule holder wins around $2.3M a year. It works when someone maintains the contract.' },
];

const SERVICES = [
  { title: 'Win the contract', description: 'Credential evaluation, competitor assessment, proposal, catalog and full GSA negotiation through to award.' },
  { title: 'Keep it compliant', description: 'Pricing optimization, modifications, compliance monitoring and contract extensions for the life of the contract.' },
  { title: 'Automate the orders', description: 'Our Order Management System streamlines your order life cycle and transactions with federal buyers.' },
  { title: 'Upload the catalog', description: 'Our GSA Advantage Catalog Upload Portal keeps your catalog current using EDI technology.' },
];

const STEPS = [
  { n: '1', t: 'Free consultation', d: 'One hour with a GSA specialist. We tell you honestly whether GSA is worth pursuing for your product line.' },
  { n: '2', t: 'Eligibility & pricing review', d: 'We check credentials, TAA compliance and where your prices need to land to be competitive.' },
  { n: '3', t: 'Proposal & negotiation', d: 'We assemble and submit the package, then handle clarifications, resubmissions and price agreement.' },
  { n: '4', t: 'Award & ongoing management', d: 'Catalog uploads, modifications and compliance — so the contract keeps producing revenue.' },
];

const FAQ = [
  { id: 'a', question: 'How long does it take to get a GSA contract?', answer: 'Preparation typically takes a few weeks; GSA review and negotiation then run several months. We give you a realistic timeline for your category on the first call.' },
  { id: 'b', question: 'What does it cost to work with Price Reporter?', answer: 'Scope and fees are agreed after the free consultation, once we know your category, catalog size and whether you need acquisition or management. No commitment before that.' },
  { id: 'c', question: 'Do you guarantee an award?', answer: 'No one honestly can. What we can tell you before you invest is whether your company is a realistic candidate — and we say so when it is not.' },
  { id: 'd', question: 'We already hold a Schedule. Can you take it over?', answer: 'Yes. Contract management, catalog uploads, modifications and compliance are a large part of what we do — 1500+ contracts are under our management.' },
  { id: 'e', question: 'How long do GSA contracts last?', answer: 'Five years initially, extendable up to 20 years in total.' },
];

function LandingPage() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-top');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  };
  return (
    <div data-theme="refresh">
      {/* Slim campaign header — no site navigation, one action */}
      <header style={lpStyles.header}>
        <div className="pr-container" style={lpStyles.headerInner}>
          <Logo height={34} />
          <span style={lpStyles.headerTrust}><Icon name="landmark" size={15} />GSA MAS contract specialists since 2006</span>
          <span style={{ flex: 1 }} />
          <a href="tel:2015676646" style={lpStyles.headerPhone}><Icon name="phone" size={16} />201.567.6646</a>
          <Button variant="accent" onClick={scrollToForm}>Free consultation</Button>
        </div>
      </header>

      {/* HERO — offer left, form right */}
      <section style={lpStyles.hero}>
        <span style={lpStyles.heroPhoto} aria-hidden="true" />
        <div className="pr-container" style={lpStyles.heroGrid}>
          <div>
            <Badge tone="accent" variant="solid">Free 1-hour consultation</Badge>
            <h1 style={lpStyles.heroTitle}>Get on a GSA contract — and actually sell on it</h1>
            <p style={lpStyles.heroLead}>
              We have helped over 1000 contractors establish and grow their Government business: proposal to award,
              then pricing, catalog and compliance for the life of the contract.
            </p>
            <ul style={lpStyles.heroTicks}>
              {['Free eligibility & TAA check', 'We write and negotiate the proposal', 'Catalog uploads and compliance handled after award'].map((t) => (
                <li key={t} style={lpStyles.heroTick}><Icon name="circle-check" size={19} color="var(--brand-accent)" />{t}</li>
              ))}
            </ul>
            <div style={lpStyles.heroProof}>
              {PROOF.slice(0, 3).map((p) => (
                <span key={p.label} style={lpStyles.heroProofItem}>
                  <strong style={lpStyles.heroProofValue}>{p.value}</strong>
                  <span style={lpStyles.heroProofLabel}>{p.label}</span>
                </span>
              ))}
            </div>
          </div>
          <div id="lead-top" style={lpStyles.formCard}><window.LeadForm id="lead-form-top" /></div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section style={lpStyles.proofBar}>
        <div className="pr-container">
          <NumbersBand items={PROOF.map((p) => ({ ...p, tone: 'inverse' }))} />
        </div>
      </section>

      {/* QUALIFY */}
      <section className="pr-section">
        <div className="pr-container">
          <SectionHeading title="Is a GSA Schedule right for your business?" description="Three things we check on the first call — before anyone talks about fees." />
          <div style={lpStyles.grid3}>
            {QUALIFY.map((q) => (
              <Card key={q.title} padding="lg">
                <span style={lpStyles.qIcon}><Icon name={q.icon} size={22} /></span>
                <h3 style={lpStyles.qTitle}>{q.title}</h3>
                <p style={{ margin: 0, color: 'var(--text-body)' }}>{q.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="pr-band pr-section">
        <div className="pr-container">
          <SectionHeading title="What you get" description="The same team that wins the contract is the team that maintains it." />
          <div style={lpStyles.grid4}>
            {SERVICES.map((s) => <ServiceCard key={s.title} {...s} cta="Learn more" href="#" onClick={(e) => { e.preventDefault(); scrollToForm(); }} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="pr-section">
        <div className="pr-container">
          <SectionHeading title="How it works" />
          <div style={lpStyles.steps}>
            {STEPS.map((s) => (
              <div key={s.n} style={lpStyles.step}>
                <span style={lpStyles.stepNum}>{s.n}</span>
                <h3 style={lpStyles.stepTitle}>{s.t}</h3>
                <p style={{ margin: 0, color: 'var(--text-body)' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ paddingBottom: 'var(--section-y-tight)' }}>
        <div className="pr-container">
          <Testimonial brand="Price Reporter"
            quote="are helping make my life much easier and helping me feel so much better about our GSA contract. Thanks!!!"
            name="Kristen Briggs" role="President" company="General Mailing & Shipping Systems, Inc." />
        </div>
      </section>

      {/* FAQ — objection handling */}
      <section className="pr-band pr-section">
        <div className="pr-container" style={{ maxWidth: 940 }}>
          <SectionHeading title="Questions we get before the first call" />
          <Accordion items={FAQ} />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="pr-section">
        <div className="pr-container">
          <div style={lpStyles.closeGrid}>
            <div>
              <h2 style={lpStyles.closeTitle}>Book the free consultation</h2>
              <p className="pr-lead" style={{ maxWidth: '46ch' }}>
                Tell us about your products and federal experience. In one hour you will know whether GSA is worth it,
                what it takes, and how long it should take.
              </p>
              <ul style={lpStyles.closeList}>
                {['No obligation and no commitment', 'You speak to a GSA specialist, not a salesperson', 'Straight answer on whether you qualify'].map((t) => (
                  <li key={t} style={lpStyles.heroTick}><Icon name="check" size={18} color="var(--brand-accent)" />{t}</li>
                ))}
              </ul>
              <p style={{ marginTop: 'var(--space-6)' }}>
                Prefer to talk now? <a href="tel:2015676646" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>201.567.6646</a>
              </p>
            </div>
            <div style={lpStyles.formCard}><window.LeadForm id="lead-form-bottom" compact /></div>
          </div>
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="pr-inverse" style={lpStyles.footer}>
        <div className="pr-container" style={lpStyles.footerInner}>
          <span style={lpStyles.footerBrand}>
            <Logo variant="mark" height={26} />
            <span style={lpStyles.footerWord}><b style={{ fontWeight: 500, color: 'var(--blue-300)' }}>PRICE</b>REPORTER</span>
          </span>
          <span style={{ flex: 1 }} />
          <a href="mailto:salesteam@pricereporter.com">salesteam@pricereporter.com</a>
          <a href="tel:2015676646">201.567.6646</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy policy</a>
          <span style={{ color: 'var(--text-on-dark-muted)' }}>© 2026 Price Reporter</span>
        </div>
      </footer>

      {/* STICKY CONVERSION BAR */}
      <div style={lpStyles.sticky}>
        <span style={lpStyles.stickyText}>Free 1-hour GSA consultation — no obligation</span>
        <span style={lpStyles.stickyActions}>
          <a href="tel:2015676646" style={lpStyles.stickyPhone}><Icon name="phone" size={16} />201.567.6646</a>
          <Button variant="accent" onClick={scrollToForm} iconRight="arrow-right">Get my consultation</Button>
        </span>
      </div>
    </div>
  );
}

const lpStyles = {
  header: { position: 'sticky', top: 0, zIndex: 40, background: 'rgb(255 255 255 / .94)', backdropFilter: 'var(--overlay-blur)', borderBottom: '1px solid var(--border-subtle)' },
  headerInner: { display: 'flex', alignItems: 'center', gap: 'var(--space-6)', minHeight: 76 },
  headerTrust: { display: 'inline-flex', alignItems: 'center', gap: 7, font: 'var(--type-caption)', color: 'var(--text-muted)', paddingLeft: 'var(--space-5)', borderLeft: '1px solid var(--border-subtle)' },
  headerPhone: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--blue-900)' },

  hero: { position: 'relative', overflow: 'hidden', background: 'var(--gradient-hero)', paddingTop: 'var(--space-11)', paddingBottom: 'var(--space-11)' },
  heroPhoto: { position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/hero-capitol.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', backgroundSize: 'auto 112%', WebkitMaskImage: 'linear-gradient(to right, transparent 46%, #000 78%)', maskImage: 'linear-gradient(to right, transparent 46%, #000 78%)', opacity: .8, pointerEvents: 'none' },
  heroGrid: { position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)', gap: 'var(--space-10)', alignItems: 'start' },
  heroTitle: { font: 'var(--type-display-1)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)', margin: 'var(--space-5) 0 var(--space-5)', maxWidth: '22ch' },
  heroLead: { font: 'var(--type-lead)', color: 'var(--text-body)', margin: 0, maxWidth: '52ch' },
  heroTicks: { listStyle: 'none', padding: 0, margin: 'var(--space-7) 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  heroTick: { display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-body)', color: 'var(--text-strong)', margin: 0 },
  heroProof: { display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgb(12 65 102 / .14)' },
  heroProofItem: { display: 'flex', flexDirection: 'column', gap: 2 },
  heroProofValue: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: 'var(--brand-accent)', letterSpacing: '-.02em' },
  heroProofLabel: { font: 'var(--type-caption)', color: 'var(--blue-900)', fontFamily: 'var(--font-display)', fontWeight: 700 },
  formCard: { background: '#fff', border: '1px solid var(--neutral-150)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 'var(--card-pad-lg)' },

  proofBar: { background: 'var(--surface-inverse)', paddingBlock: 'var(--space-8)' },

  grid3: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-6)' },
  grid4: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-7)' },
  qIcon: { width: 46, height: 46, borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: 'var(--orange-50)', color: 'var(--brand-accent)', marginBottom: 'var(--space-5)' },
  qTitle: { font: 'var(--type-h4)', color: 'var(--text-strong)', margin: '0 0 var(--space-3)' },

  steps: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-7)' },
  step: { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingTop: 'var(--space-5)', borderTop: '3px solid var(--brand-accent)' },
  stepNum: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--brand-accent)' },
  stepTitle: { font: 'var(--type-h4)', color: 'var(--text-strong)', margin: 0 },

  closeGrid: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,.9fr)', gap: 'var(--space-10)', alignItems: 'center' },
  closeTitle: { font: 'var(--type-display-2)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)', margin: '0 0 var(--space-4)' },
  closeList: { listStyle: 'none', padding: 0, margin: 'var(--space-6) 0 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },

  footer: { paddingBlock: 'var(--space-7)' },
  footerInner: { display: 'flex', alignItems: 'center', gap: 'var(--space-6)', font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', flexWrap: 'wrap' },
  footerBrand: { display: 'flex', alignItems: 'center', gap: 10 },
  footerWord: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, letterSpacing: '.02em', color: '#fff' },

  sticky: { position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50, background: 'rgb(12 65 102 / .96)', backdropFilter: 'var(--overlay-blur)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', padding: 'var(--space-4) var(--space-7)' },
  stickyText: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-body-sm)' },
  stickyActions: { display: 'flex', alignItems: 'center', gap: 'var(--space-5)' },
  stickyPhone: { display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 },
};

Object.assign(window, { LandingPage });
