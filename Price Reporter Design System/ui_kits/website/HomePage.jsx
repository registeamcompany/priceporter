const { Button, Input, SectionHeading, BoxedHeading, NumbersBand, ServiceCard, ValueItem, Testimonial, LinkTile, Accordion, Icon } = window.PriceReporterDesignSystem_2cd382;

const HERO_COLUMNS = [
  { depth: 1, head: 'Get GSA Contract', video: true, tiles: [
    { label: 'What is GSA Contract' }, { label: 'How to get GSA Contract' },
    { label: 'What GSA Buys', icon: 'settings' }, { label: 'Do You Qualify?', icon: 'settings' },
    { label: 'GSA Advantage Catalog Upload' }, { label: 'Get VA Contract' },
  ] },
  { depth: 2, head: 'Build Your Success with GSA', video: true, tiles: [
    { label: 'Beat Your Competition', icon: 'settings' }, { label: 'GSA Contract Management' },
    { label: 'Compliance Service' }, { label: 'FedMall and DLA' },
    { label: 'BPA and FSSI' },
  ] },
  { depth: 3, head: 'Deploy Your GSA e-Commerce Suite', video: true, tiles: [
    { label: 'GSA OMS & Automation' }, { label: 'e-Commerce Web Store' },
    { label: 'QuickBook Integration' }, { label: 'Federal Market Intelligence', video: true },
  ] },
];

const NUMBERS = [
  { value: '20+', label: 'Years Working with GSA' },
  { value: '400+', label: 'GSA Contracts Awarded' },
  { value: '1000+', label: 'Companies Served' },
  { value: '1500+', label: 'GSA Contracts under Management' },
  { value: '20K+', label: 'GSA Contract Modifications Completed' },
  { value: '2.5M+', label: 'GSA Orders Processed' },
  { value: '4.9', suffixIcon: 'star', label: 'Customer Rating' },
];

const SERVICES = [
  { title: 'GSA Contract Acquisition', description: 'Price Reporter has been obtaining GSA contracts and opened doors to Government procurement for hundreds of businesses.' },
  { title: 'GSA Contract Management', description: 'Price Reporter will manage your GSA contract and optimize your business potential. We ensure your prices remain competitive, your catalog stays current, and compliant.' },
  { title: 'GSA Order Management', description: "Price Reporter's Order Management System will streamline and automate your Order Life Cycle and the various pertinent transactions with federal buyers." },
  { title: 'GSA Advantage Catalog Upload', description: "Price Reporter's GSA Catalog Upload Portal stands out as the best choice for seamlessly updating your catalogs on GSA Advantage through the efficient utilization of EDI technology." },
];

const FAQ = [
  { id: 'f1', question: 'Should You Use a GSA Contract Specialist, Or Do It Yourself?', answer: 'GSA contracts require ongoing maintenance and knowledge of technical procedures for modifications and catalog uploads. A solid specialist also advises which products to offer and how to price them competitively.' },
  { id: 'f2', question: 'Why get a GSA business contract?', answer: 'The GSA MAS Program is a $45 billion government contract, and the average Schedule holder wins around $2.3 million worth of business each year through the program.' },
  { id: 'f3', question: 'How do we help obtain GSA contracts?', answer: 'We evaluate company credentials, assess competitors, prepare and negotiate the proposal, and keep you compliant after award.' },
  { id: 'f4', question: 'Need help with a GSA schedule?', answer: 'Contact us for a free consultation and we will tell you whether GSA is the right fit for your business.' },
  { id: 'f5', question: 'How long do GSA contracts last?', answer: 'MAS contracts last five years and can be extended thereafter for up to 20 years in total.' },
  { id: 'f6', question: 'Should you hire a GSA schedule consultant?', answer: 'If you want to save the stress, time and money of navigating the federal marketplace alone — yes.' },
  { id: 'f7', question: 'What do GSA schedule consultants do?', answer: 'Eligibility checks, proposal preparation, negotiation, catalog uploads, pricing optimization and compliance services.' },
  { id: 'f8', question: 'Who are GSA schedule consultants?', answer: 'Specialists who work with the GSA daily. Price Reporter has done this since 2006.' },
];

const CLIENTS = ['Dan Kain Trophies, Inc.', 'Lucas Promotional Products', 'Orbis', 'Mensch Supply', 'Supply King USA'];

function HomePage({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <main>
      {/* HERO */}
      <section style={homeStyles.hero}>
        <span style={homeStyles.heroPhoto} aria-hidden="true" />
        <div className="pr-container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={homeStyles.heroTitle}>Expert in business with GSA helping over 1000 GSA contractors to establish and grow Government business</h1>
          <hr className="pr-rule-black" style={{ maxWidth: 1160 }} />
          <div style={homeStyles.heroCols}>
            {HERO_COLUMNS.map((col) => (
              <div key={col.head} style={homeStyles.heroCol}>
                <LinkTile head video={col.video} depth={col.depth} label={col.head} onClick={(e) => { e.preventDefault(); onNavigate('gsa'); }} />
                <div style={homeStyles.tileGrid}>
                  {col.tiles.map((t) => (
                    <LinkTile key={t.label} depth={col.depth} {...t} onClick={(e) => { e.preventDefault(); onNavigate('gsa'); }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES + NUMBERS */}
      <section className="pr-section">
        <div className="pr-container">
          <SectionHeading title="Price Reporter Values" />
          <div style={homeStyles.valuesGrid}>
            <ValueItem title="Founded in 2006">Price Reporter is comprised of a team of experts with many years of experience, doing business with GSA.</ValueItem>
            <ValueItem title="Our Mission">is to serve client's unique needs to effectively establish, grow and maximize their GSA business.</ValueItem>
            <ValueItem title="Our Experts">utilize a full-range of custom marketing intelligence solutions, providing the insight needed to navigate today's complex Government marketplace.</ValueItem>
          </div>
          <BoxedHeading title="Our numbers tell the story" style={{ marginTop: 'var(--space-12)' }}>
            <NumbersBand items={NUMBERS} />
          </BoxedHeading>
        </div>
      </section>

      {/* SERVICES on the grey band */}
      <section className="pr-band pr-section">
        <div className="pr-container">
          <SectionHeading title="Our services" />
          <div style={homeStyles.serviceGrid}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} cta="Learn more" href="#" onClick={(e) => { e.preventDefault(); onNavigate('gsa'); }} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ paddingBlock: 'var(--section-y)' }}>
        <div className="pr-container">
          <Testimonial brand="Price Reporter"
            quote="are helping make my life much easier and helping me feel so much better about our GSA contract. Thanks!!!"
            name="Kristen Briggs" role="President" company="General Mailing & Shipping Systems, Inc."
            moreHref="#" onPrev={() => {}} onNext={() => {}} />
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ paddingBottom: 'var(--section-y)' }}>
        <div className="pr-container">
          <SectionHeading title="Our clients" />
          <div style={homeStyles.clientRow}>
            {CLIENTS.map((c) => <span key={c} style={homeStyles.clientPlate}>{c}</span>)}
          </div>
          <p style={homeStyles.clientNote}>Client logo files were not supplied with this design system — names stand in for the real marks.</p>
        </div>
      </section>

      {/* CONTACT on the grey band */}
      <section className="pr-band" style={{ paddingBlock: 'var(--section-y-tight)' }}>
        <div className="pr-container">
          <div className="pr-inverse" style={homeStyles.contactBlock}>
            <h2 style={homeStyles.contactTitle}>Contact Us</h2>
            <p style={homeStyles.contactLead}>Contact us at 201.567.6646 or provide your details below for one hour free consultation</p>
            {sent ? (
              <p style={{ ...homeStyles.contactLead, color: 'var(--orange-300)' }}>Thank you — a GSA specialist will contact you within one business day.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ width: '100%' }}>
                <div style={homeStyles.contactRow}>
                  {['Name', 'Company', 'Email', 'Phone', 'Subject'].map((p) => (
                    <Input key={p} onDark placeholder={p} aria-label={p} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
                  <Button type="submit" variant="outline-accent-dark" size="lg">Get free consultation</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pr-section">
        <div className="pr-container">
          <SectionHeading title="FAQ" />
          <div style={{ maxWidth: 1000, marginInline: 'auto' }}>
            <Accordion items={FAQ} />
          </div>
        </div>
      </section>
    </main>
  );
}

const homeStyles = {
  hero: { position: 'relative', overflow: 'hidden', background: 'var(--gradient-hero)', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-10)' },
  heroPhoto: { position: 'absolute', inset: 0, backgroundImage: 'url(../../assets/hero-capitol.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', backgroundSize: 'auto 108%', WebkitMaskImage: 'linear-gradient(to right, transparent 42%, #000 72%)', maskImage: 'linear-gradient(to right, transparent 42%, #000 72%)', pointerEvents: 'none' },
  heroTitle: { font: 'var(--type-display-1)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)', margin: 0, maxWidth: '20ch' },
  heroCols: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 300px))', gap: 'var(--space-7)', marginTop: 'var(--space-9)' },
  heroCol: { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' },
  tileGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-8)' },
  serviceGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-8)' },
  clientRow: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-7)' },
  clientPlate: { font: 'var(--type-h4)', color: 'var(--blue-900)', opacity: .55, textAlign: 'center', flex: '1 1 160px' },
  clientNote: { font: 'var(--type-caption)', color: 'var(--text-subtle)', textAlign: 'center', marginTop: 'var(--space-7)' },
  contactBlock: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--space-10) var(--space-8)' },
  contactTitle: { font: 'var(--type-display-2)', color: '#fff', margin: '0 0 var(--space-4)' },
  contactLead: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lead)', color: '#fff', margin: '0 0 var(--space-8)' },
  contactRow: { display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gap: 'var(--space-5)' },
};

Object.assign(window, { HomePage });
