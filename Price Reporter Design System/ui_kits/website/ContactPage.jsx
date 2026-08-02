const { Button, Input, Select, Checkbox, Radio, Card, Icon, Alert, SectionHeading } = window.PriceReporterDesignSystem_2cd382;

function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <main className="pr-section">
      <div className="pr-container" style={contactStyles.grid}>
        <div>
          <SectionHeading align="left" caps={false} eyebrow="Free consultation" title="Tell us about your business"
            description="We'll review your eligibility and come back within one business day with an honest assessment." />
          <div style={contactStyles.channels}>
            {[
              { icon: 'phone', k: 'Call us', v: '201.567.6646' },
              { icon: 'mail', k: 'Email', v: 'salesteam@pricereporter.com' },
            ].map((c) => (
              <div key={c.k} style={contactStyles.channel}>
                <span style={contactStyles.channelIcon}><Icon name={c.icon} size={18} /></span>
                <span>
                  <span style={contactStyles.channelKey}>{c.k}</span>
                  <span style={contactStyles.channelVal}>{c.v}</span>
                </span>
              </div>
            ))}
          </div>
          <Alert tone="info" title="What happens next" icon="info">
            A specialist reviews your products, checks TAA compliance and tells you whether a MAS contract is worth pursuing.
          </Alert>
        </div>
        <Card padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
              <span style={contactStyles.doneIcon}><Icon name="circle-check" size={30} /></span>
              <h3 style={{ marginTop: 'var(--space-5)' }}>Request received</h3>
              <p style={{ color: 'var(--text-muted)' }}>A GSA specialist will contact you within one business day.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another request</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={contactStyles.form}>
              <div style={contactStyles.row}>
                <Input label="Full name" required placeholder="Jane Contractor" />
                <Input label="Company" required placeholder="Acme Supply Co." />
              </div>
              <div style={contactStyles.row}>
                <Input label="Work email" type="email" required icon="mail" placeholder="you@company.com" />
                <Input label="Phone" icon="phone" placeholder="(555) 000-0000" />
              </div>
              <div style={contactStyles.row}>
                <Select label="Annual revenue" options={['Under $1M', '$1M – $10M', '$10M – $50M', 'Over $50M']} />
                <Select label="Product category" options={['IT & software', 'Office & industrial supplies', 'Furniture', 'Professional services', 'Other']} />
              </div>
              <div style={contactStyles.choices}>
                <span style={contactStyles.choiceLabel}>What do you need?</span>
                <Radio name="need" defaultChecked label="A new GSA contract" description="We have never held a Schedule contract" />
                <Radio name="need" label="Help managing an existing contract" description="Catalog, pricing, compliance or mods" />
                <Radio name="need" label="Order management automation" />
              </div>
              <Input label="Anything else we should know?" multiline rows={3} placeholder="Tell us about your products and federal experience…" />
              <Checkbox label="I confirm our products are US-made or TAA compliant" description="We can verify this for you if you're unsure" />
              <Button type="submit" variant="accent" size="lg" fullWidth iconRight="arrow-right">Request my free consultation</Button>
              <p style={contactStyles.fine}>We use your details only to prepare your consultation. No lists, no resale.</p>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}

const contactStyles = {
  grid: { display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 'var(--space-10)', alignItems: 'start' },
  channels: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'var(--space-4)', margin: 'var(--space-2) 0 var(--space-7)' },
  channel: { display: 'flex', gap: 'var(--space-3)', alignItems: 'center' },
  channelIcon: { width: 38, height: 38, flex: 'none', borderRadius: 'var(--radius-sm)', background: 'var(--blue-50)', color: 'var(--brand-primary)', display: 'grid', placeItems: 'center' },
  channelKey: { display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' },
  channelVal: { display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)', whiteSpace: 'nowrap' },
  form: { display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' },
  row: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-4)' },
  choices: { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-5)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)' },
  choiceLabel: { font: 'var(--type-label)', color: 'var(--text-strong)' },
  fine: { font: 'var(--type-caption)', color: 'var(--text-muted)', textAlign: 'center', margin: 0 },
  doneIcon: { width: 62, height: 62, borderRadius: 'var(--radius-pill)', background: 'var(--green-100)', color: 'var(--green-500)', display: 'inline-grid', placeItems: 'center' },
};

Object.assign(window, { ContactPage });
