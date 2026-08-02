const { Button, Badge, Breadcrumb, SectionHeading, Card, CTABanner, Icon, Tabs, Alert, DataTable } = window.PriceReporterDesignSystem_2cd382;

function ServicePage({ onNavigate }) {
  const [tab, setTab] = React.useState('what');
  return (
    <main>
      <section style={servicePageStyles.head}>
        <div className="pr-container">
          <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'GSA Contract' }]} />
          <div style={servicePageStyles.headGrid}>
            <div>
              <span className="pr-eyebrow"><span className="pr-accent-rule" style={{ width: 24, height: 3, display: 'inline-block', marginRight: 9, verticalAlign: 2 }} />GSA contract specialists</span>
              <h1 style={servicePageStyles.title}>GSA contract help, from eligibility check to award</h1>
              <p className="pr-lead" style={{ maxWidth: '62ch' }}>
                GSA contracts require ongoing maintenance, knowledge of technical procedures for modifications, and regular catalog
                uploads. A solid specialist advises which products to offer and how to price them competitively.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-7)', flexWrap: 'wrap' }}>
                <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onNavigate('contact')}>Request a free consultation</Button>
                <Button variant="secondary" size="lg" iconLeft="file-text">Download GSA checklist</Button>
              </div>
            </div>
            <Card padding="lg" style={{ alignSelf: 'start' }} eyebrow="At a glance" title="MAS contract facts">
              <dl style={servicePageStyles.facts}>
                {[['Program size', '$45B'], ['Initial term', '5 years'], ['Maximum term', '20 years'], ['Avg. holder sales', '$2.3M / yr']].map(([k, v]) => (
                  <React.Fragment key={k}>
                    <dt style={servicePageStyles.factKey}>{k}</dt>
                    <dd style={servicePageStyles.factVal}>{v}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </Card>
          </div>
        </div>
      </section>

      <section className="pr-section">
        <div className="pr-container">
          <Tabs value={tab} onChange={setTab} items={[
            { id: 'what', label: 'What we do', icon: 'list-checks' },
            { id: 'process', label: 'The process', icon: 'clipboard-list' },
            { id: 'pricing', label: 'Included services', icon: 'percent' },
          ]} />
          <div style={{ paddingTop: 'var(--space-8)' }}>
            {tab === 'what' ? (
              <div style={servicePageStyles.twoCol}>
                <div>
                  <h2>The General Services Administration, in plain terms</h2>
                  <p>The GSA works behind the scenes of the U.S. Government, streamlining the administrative work that keeps the country running. One way it does this is the GSA Multiple Award Schedule Program, which enables agencies to procure top-quality products and services at reasonable prices from commercial businesses.</p>
                  <p>Winning a MAS contract is complex and time-consuming — and it does not end when your contract is awarded. During our years providing GSA contract help we have secured hundreds of Schedule contracts and processed over one million orders.</p>
                  <Alert tone="info" title="Not sure you qualify?">We assess eligibility before you spend anything on a proposal.</Alert>
                </div>
                <div style={servicePageStyles.checkCard}>
                  <h3 style={{ marginBottom: 'var(--space-5)' }}>Our comprehensive services</h3>
                  <ul style={servicePageStyles.checkList}>
                    {['Evaluation of company credentials', 'Competitor assessment', 'Federal market intelligence', 'GSA negotiation', 'Contract management services', 'Pricing optimization', 'Catalog support', 'Compliance services', 'Contract extensions'].map((s) => (
                      <li key={s} style={servicePageStyles.checkItem}><Icon name="check" size={15} color="var(--green-500)" />{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
            {tab === 'process' ? (
              <div style={servicePageStyles.steps}>
                {[
                  { icon: 'search', t: 'Eligibility & TAA review', d: 'We check company credentials, trading history and whether your products are TAA compliant.' },
                  { icon: 'file-text', t: 'Proposal preparation', d: 'Catalog, financials and marketing materials assembled into a submission-ready package.' },
                  { icon: 'handshake', t: 'GSA negotiation', d: 'Clarifications, resubmissions, price agreement and final revisions — handled by our specialists.' },
                  { icon: 'shield-check', t: 'Post-award compliance', d: 'Pricing management, catalog uploads and modifications for the life of the contract.' },
                ].map((s, i) => (
                  <div key={s.t} style={servicePageStyles.step}>
                    <span style={servicePageStyles.stepIcon}><Icon name={s.icon} size={22} /></span>
                    <Badge tone="brand">Step {i + 1}</Badge>
                    <h3 style={{ margin: 'var(--space-3) 0 var(--space-2)', font: 'var(--type-h4)' }}>{s.t}</h3>
                    <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0 }}>{s.d}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {tab === 'pricing' ? (
              <DataTable striped columns={[
                { key: 'svc', label: 'Service', strong: true },
                { key: 'new', label: 'New contract', align: 'center' },
                { key: 'mgmt', label: 'Contract management', align: 'center' },
                { key: 'orders', label: 'Order management', align: 'center' },
              ]} rows={[
                { svc: 'Eligibility & credential review', new: '✓', mgmt: '—', orders: '—' },
                { svc: 'Proposal preparation & negotiation', new: '✓', mgmt: '—', orders: '—' },
                { svc: 'Catalog uploads to GSA Advantage', new: '✓', mgmt: '✓', orders: '✓' },
                { svc: 'Pricing optimization', new: '—', mgmt: '✓', orders: '—' },
                { svc: 'Compliance monitoring & mods', new: '—', mgmt: '✓', orders: '—' },
                { svc: 'Order life-cycle automation', new: '—', mgmt: '—', orders: '✓' },
              ]} footer={<><span>Scope confirmed after the free consultation.</span><Button variant="link" onClick={() => onNavigate('contact')}>Talk to a specialist</Button></>} />
            ) : null}
          </div>
        </div>
      </section>

      <div className="pr-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <CTABanner tone="soft" eyebrow="Next step"
          title="Find out whether GSA is right for your business"
          description="A 30-minute call with a specialist. No obligation."
          actions={<Button variant="primary" size="lg" iconRight="arrow-right" onClick={() => onNavigate('contact')}>Book the call</Button>} />
      </div>
    </main>
  );
}

const servicePageStyles = {
  head: { background: 'var(--gradient-wash)', borderBottom: '1px solid var(--border-subtle)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-11)' },
  headGrid: { display: 'grid', gridTemplateColumns: '1.35fr .65fr', gap: 'var(--space-10)', marginTop: 'var(--space-6)' },
  title: { font: 'var(--type-display-2)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)', margin: '0 0 var(--space-5)' },
  facts: { display: 'grid', gridTemplateColumns: '1fr auto', gap: 'var(--space-3) var(--space-4)', margin: 0 },
  factKey: { font: 'var(--type-caption)', color: 'var(--text-muted)', margin: 0 },
  factVal: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--brand-primary)', margin: 0, textAlign: 'right', fontVariantNumeric: 'tabular-nums' },
  twoCol: { display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 'var(--space-9)', alignItems: 'start' },
  checkCard: { background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', padding: 'var(--card-pad-lg)' },
  checkList: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  checkItem: { display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-body)', color: 'var(--text-body)', margin: 0 },
  steps: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' },
  step: { background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', padding: 'var(--card-pad)', boxShadow: 'var(--shadow-sm)' },
  stepIcon: { width: 44, height: 44, borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: 'var(--blue-50)', color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' },
};

Object.assign(window, { ServicePage });
