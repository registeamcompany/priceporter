const { Card, Button, Badge, DataTable, Alert, Accordion, Icon, StatCard, Tooltip, Breadcrumb } = window.PriceReporterDesignSystem_2cd382;

function ComplianceScreen() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Portal', href: '#' }, { label: 'Contract 47QSWA18D008F', href: '#' }, { label: 'Compliance' }]} />
      <div style={compStyles.stats}>
        <StatCard boxed tone="brand" value="97%" label="Compliance score" icon="shield-check" trend="+3 pts this quarter" />
        <StatCard boxed tone="brand" value="2" label="Open modifications" icon="file-text" />
        <StatCard boxed tone="accent" value="21 days" label="Price list expiry" icon="clock" />
        <StatCard boxed tone="brand" value="5 yrs" label="Option period 2 of 4" icon="calendar" />
      </div>

      <Alert tone="info" title="Your specialist filed EPA modification PA-0042 on 24 July">
        GSA review typically takes 15–30 days. We'll notify you the moment it is awarded.
      </Alert>

      <div style={compStyles.grid}>
        <Card padding="lg" style={{ minWidth: 0 }} title="Contract line items"
          footer={<><span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>6 SINs · 4,182 awarded lines</span><span style={{ marginLeft: 'auto' }}><Button variant="secondary" iconLeft="pencil">Request modification</Button></span></>}>
          <DataTable columns={[
            { key: 'sin', label: 'SIN', strong: true },
            { key: 'name', label: 'Category' },
            { key: 'lines', label: 'Lines', align: 'right' },
            { key: 'sales', label: 'FY26 sales', align: 'right' },
            { key: 'status', label: 'Status', render: (r) => <Badge tone={r.tone}>{r.status}</Badge> },
          ]} rows={[
            { id: 1, sin: '33411', name: 'IT hardware', lines: '2,940', sales: '$1,204,880', status: 'Active', tone: 'success' },
            { id: 2, sin: '511210', name: 'Software licences', lines: '412', sales: '$318,400', status: 'Active', tone: 'success' },
            { id: 3, sin: '339940', name: 'Office supplies', lines: '618', sales: '$142,110', status: 'Price mod pending', tone: 'warning' },
            { id: 4, sin: '561210FS', name: 'Facilities support', lines: '212', sales: '$88,300', status: 'Active', tone: 'success' },
          ]} />
        </Card>

        <div style={{ display: 'grid', gap: 'var(--space-5)', alignContent: 'start' }}>
          <Card padding="lg" eyebrow="Checklist" title="Post-award obligations">
            <ul style={compStyles.list}>
              {[
                ['Quarterly sales reporting (72A)', true],
                ['Industrial Funding Fee remitted', true],
                ['Price list current on GSA Advantage', true],
                ['Country of origin on all lines', false],
                ['Trade Agreements Act compliance', true],
              ].map(([t, ok]) => (
                <li key={t} style={compStyles.item}>
                  <Icon name={ok ? 'circle-check' : 'triangle-alert'} size={17} color={ok ? 'var(--green-500)' : 'var(--amber-500)'} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card padding="lg" eyebrow="Reference" title="What GSA checks">
            <Accordion defaultOpen="a" items={[
              { id: 'a', question: 'Pricing', answer: 'Your GSA prices must remain the best offered to comparable commercial customers.' },
              { id: 'b', question: 'Catalog currency', answer: 'The published price list on GSA Advantage must match your awarded contract at all times.' },
              { id: 'c', question: 'Reporting', answer: 'Sales are reported quarterly and the Industrial Funding Fee remitted within 30 days.' },
            ]} />
            <p style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginTop: 'var(--space-4)' }}>
              Need the source clause? <Tooltip content="Federal Acquisition Regulation"><span style={{ borderBottom: '1px dotted var(--border-strong)', cursor: 'help' }}>FAR</span></Tooltip> 552.238-82 applies.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

const compStyles = {
  stats: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-5)' },
  grid: { display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,.9fr)', gap: 'var(--space-5)', alignItems: 'start' },
  list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  item: { display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', margin: 0 },
};

Object.assign(window, { ComplianceScreen });
