const { Button, Input, Select, Icon } = window.PriceReporterDesignSystem_2cd382;

function LeadForm({ id = 'lead', compact = false, onSubmit }) {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return (
      <div style={leadFormStyles.done}>
        <span style={leadFormStyles.doneIcon}><Icon name="circle-check" size={28} /></span>
        <h3 style={{ margin: '0 0 8px' }}>Request received</h3>
        <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>A GSA specialist will call you within one business day — usually the same afternoon.</p>
        <Button variant="secondary" onClick={() => setSent(false)}>Send another request</Button>
      </div>
    );
  }
  return (
    <form
      id={id}
      onSubmit={(e) => { e.preventDefault(); setSent(true); if (onSubmit) onSubmit(); }}
      style={leadFormStyles.form}
    >
      <div>
        <h3 style={leadFormStyles.title}>Get your free GSA consultation</h3>
        <p style={leadFormStyles.sub}>One hour with a specialist. No obligation, no sales script.</p>
      </div>
      <div style={leadFormStyles.row}>
        <Input label="Full name" required placeholder="Jane Contractor" autoComplete="name" />
        <Input label="Company" required placeholder="Acme Supply Co." autoComplete="organization" />
      </div>
      <div style={leadFormStyles.row}>
        <Input label="Work email" type="email" required icon="mail" placeholder="you@company.com" autoComplete="email" />
        <Input label="Phone" icon="phone" placeholder="201.567.6646" autoComplete="tel" />
      </div>
      {compact ? null : (
        <Select label="What do you need?" options={[
          'A new GSA contract',
          'Help managing an existing contract',
          'GSA Advantage catalog uploads',
          'Order management automation',
          "I'm not sure yet",
        ]} />
      )}
      <Button type="submit" variant="accent" size="lg" fullWidth iconRight="arrow-right">Get my free consultation</Button>
      <p style={leadFormStyles.fine}>
        <Icon name="lock" size={13} /> Your details are used only to prepare your consultation. No lists, no resale.
      </p>
    </form>
  );
}

const leadFormStyles = {
  form: { display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' },
  title: { font: 'var(--type-h3)', color: 'var(--text-strong)', margin: '0 0 6px' },
  sub: { font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: 0 },
  row: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-4)' },
  fine: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, font: 'var(--type-caption)', color: 'var(--text-muted)', margin: 0 },
  done: { textAlign: 'center', padding: 'var(--space-8) var(--space-4)' },
  doneIcon: { width: 60, height: 60, borderRadius: 'var(--radius-pill)', background: 'var(--green-100)', color: 'var(--green-500)', display: 'inline-grid', placeItems: 'center', marginBottom: 'var(--space-4)' },
};

Object.assign(window, { LeadForm });
