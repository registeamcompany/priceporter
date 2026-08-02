const { Button, Badge, Breadcrumb, Card, CTABanner, Icon, Tag, Testimonial } = window.PriceReporterDesignSystem_2cd382;

function ArticlePage({ onNavigate }) {
  return (
    <main>
      <div style={articleStyles.head}>
        <div className="pr-container-narrow">
          <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Resources', href: '#' }, { label: 'GSA contract specialists' }]} />
          <div style={{ display: 'flex', gap: 'var(--space-2)', margin: 'var(--space-5) 0 var(--space-4)' }}>
            <Badge tone="brand">GSA basics</Badge>
            <Badge tone="neutral">8 min read</Badge>
          </div>
          <h1 style={articleStyles.title}>Do you need a GSA contract specialist?</h1>
          <p className="pr-lead">GSA contract specialists can be of great benefit when it comes to navigating the federal marketplace — here is exactly where they earn their keep.</p>
          <div style={articleStyles.meta}>
            <span style={articleStyles.avatar}>PR</span>
            <span>
              <span style={articleStyles.metaName}>Price Reporter GSA desk</span>
              <span style={articleStyles.metaDate}>Updated 12 June 2026</span>
            </span>
          </div>
        </div>
      </div>

      <div className="pr-container" style={articleStyles.layout}>
        <article style={articleStyles.body}>
          <p>GSA contracts require ongoing maintenance and improvement, knowledge of various technical procedures when it comes to modifying the contract and performing uploads of updated catalogs. Moreover, a solid GSA contract specialist can advise on what type of products and services the vendor should offer within their segment, and help price catalogs competitively — increasing sales flow and overall success with the GSA.</p>
          <h2>What the MAS program actually is</h2>
          <p>The General Services Administration works behind the scenes of the U.S. Government, streamlining the administrative work that keeps the country running. One way they do this is through the GSA Multiple Award Schedule Program, which enables government agencies to procure top-quality products and services, at reasonable prices, from commercial businesses.</p>
          <blockquote style={articleStyles.quote}>
            The average GSA Schedule holder wins around $2.3 million worth of business each year through the program.
          </blockquote>
          <h2>Benefits for Schedule holders</h2>
          <ul style={articleStyles.list}>
            {[
              ['Exclusivity', 'The MAS Program is a $45 billion government contract, accessible only to Schedule holders.'],
              ['Longevity', 'Contracts last five years and can be extended up to 20 years in total.'],
              ['Variety', 'There is an opportunity for every type of business, from IT and security to transportation and engineering.'],
              ['Outreach', 'Holders can publish their catalog at online government marketplaces.'],
              ['Streamlining', 'Prices, delivery and other terms are pre-negotiated; GSA manages contract administration.'],
            ].map(([k, v]) => (
              <li key={k} style={articleStyles.listItem}><Icon name="circle-check" size={17} color="var(--blue-400)" /><span><strong>{k}:</strong> {v}</span></li>
            ))}
          </ul>
          <h2>Where it gets hard</h2>
          <p>Accessing these opportunities is not without its challenges: checking eligibility and TAA compliance, preparing the proposal and catalog, negotiating with the GSA, and then marketing your company and staying compliant post-award.</p>
          <p>You don't have to traverse this territory on your own. You can save yourself the stress, time, and money by seeking help from a GSA contract specialist.</p>
          <div style={{ margin: 'var(--space-8) 0' }}>
            <Testimonial quote="They keep our catalogs well maintained and compliant, saving our resources and letting us focus on making sales." name="Contract Manager" company="IT products reseller" />
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
            {['GSA MAS', 'Eligibility', 'TAA compliance', 'Catalog upload', 'Pricing'].map((t) => <Tag key={t} onClick={() => {}}>{t}</Tag>)}
          </div>
        </article>

        <aside style={articleStyles.aside}>
          <Card padding="lg" eyebrow="On this page">
            <ul style={articleStyles.toc}>
              {['What the MAS program is', 'Benefits for Schedule holders', 'Where it gets hard', 'How we help'].map((t, i) => (
                <li key={t} style={articleStyles.tocItem}><a href="#" onClick={(e) => e.preventDefault()} style={i === 0 ? { color: 'var(--brand-primary)', fontWeight: 500 } : undefined}>{t}</a></li>
              ))}
            </ul>
          </Card>
          <Card variant="inverse" padding="lg" title="Free eligibility check">
            <p style={{ color: 'var(--text-on-dark-muted)' }}>We'll tell you in one call whether GSA is worth pursuing for your product line.</p>
            <Button variant="accent" fullWidth onClick={() => onNavigate('contact')}>Talk to a specialist</Button>
          </Card>
          <Card padding="lg" eyebrow="Related">
            <ul style={articleStyles.related}>
              {['How GSA Advantage catalog uploads work', 'What TAA compliance means for resellers', 'Pricing your GSA catalog competitively'].map((t) => (
                <li key={t} style={articleStyles.relatedItem}><a href="#" onClick={(e) => e.preventDefault()}>{t}</a><Icon name="arrow-up-right" size={14} /></li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>

      <div className="pr-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <CTABanner tone="navy" eyebrow="Free consultation" title="Get GSA contract help from people who do this daily"
          description="Hundreds of Schedule contracts secured. Over a million orders processed."
          actions={<Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onNavigate('contact')}>Contact us</Button>} />
      </div>
    </main>
  );
}

const articleStyles = {
  head: { background: 'var(--gradient-wash)', borderBottom: '1px solid var(--border-subtle)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-9)' },
  title: { font: 'var(--type-display-2)', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)', margin: '0 0 var(--space-4)' },
  meta: { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-6)' },
  avatar: { width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--blue-100)', color: 'var(--blue-700)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 },
  metaName: { display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' },
  metaDate: { display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' },
  layout: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 'var(--space-10)', paddingBlock: 'var(--section-y-tight)' },
  body: { maxWidth: '70ch', font: 'var(--type-body)', color: 'var(--text-body)' },
  quote: { margin: 'var(--space-7) 0', padding: 'var(--space-5) var(--space-6)', borderLeft: '3px solid var(--orange-500)', background: 'var(--orange-50)', font: 'var(--type-lead)', color: 'var(--text-strong)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' },
  list: { listStyle: 'none', padding: 0, margin: '0 0 var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  listItem: { display: 'flex', gap: 10, alignItems: 'flex-start', margin: 0 },
  aside: { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', position: 'sticky', top: 120, alignSelf: 'start' },
  toc: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', font: 'var(--type-body)', fontSize: 'var(--text-body-sm)' },
  tocItem: { margin: 0 },
  related: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontSize: 'var(--text-body-sm)' },
  relatedItem: { display: 'flex', gap: 10, alignItems: 'flex-start', justifyContent: 'space-between', color: 'var(--text-muted)', margin: 0 },
};

Object.assign(window, { ArticlePage });
