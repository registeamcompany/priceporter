const { Card, Button, Input, Select, Checkbox, Switch, Badge, DataTable, Alert, Icon, Dialog, Tabs } = window.PriceReporterDesignSystem_2cd382;

const SKUS = [
  { id: 1, sku: 'ACM-1042', desc: 'Ruggedized laptop dock, USB-C', price: '$184.00', gsa: '$161.92', origin: 'USA', ok: true },
  { id: 2, sku: 'ACM-1188', desc: '27" LED monitor, government spec', price: '$312.00', gsa: '$274.56', origin: 'USA', ok: true },
  { id: 3, sku: 'ACM-2231', desc: 'Network switch, 24-port managed', price: '$1,120.00', gsa: '$985.60', origin: '—', ok: false },
  { id: 4, sku: 'ACM-3390', desc: 'Ergonomic task chair, mesh back', price: '$429.00', gsa: '$377.52', origin: 'USA', ok: true },
  { id: 5, sku: 'ACM-4410', desc: 'Toner cartridge, high yield black', price: '$96.50', gsa: '$84.92', origin: '—', ok: false },
];

function CatalogUploadScreen() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState('review');
  return (
    <>
      <div style={uploadStyles.stepper}>
        {[['File', 'circle-check', true], ['Validation', 'circle-check', true], ['Review', 'eye', false], ['Submit to GSA', 'send', false]].map(([label, ic, done], i) => (
          <div key={label} style={uploadStyles.step}>
            <span style={{ ...uploadStyles.stepDot, background: done ? 'var(--green-500)' : i === 2 ? 'var(--brand-primary)' : 'var(--neutral-200)', color: done || i === 2 ? '#fff' : 'var(--text-muted)' }}>
              <Icon name={ic} size={15} />
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: i <= 2 ? 'var(--text-strong)' : 'var(--text-muted)' }}>{label}</span>
            {i < 3 ? <span style={uploadStyles.stepLine} /> : null}
          </div>
        ))}
      </div>

      <div style={uploadStyles.grid}>
        <Card padding="lg" style={{ minWidth: 0 }} title="Catalog file"
          footer={<><Badge tone="success" icon="check">EDI ready</Badge><span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-3)' }}><Button variant="secondary" iconLeft="download">Download errors</Button><Button variant="accent" iconRight="send" onClick={() => setOpen(true)}>Submit to GSA Advantage</Button></span></>}>
          <div style={uploadStyles.dropzone}>
            <span style={uploadStyles.dropIcon}><Icon name="file-check" size={26} /></span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>acme-supply-catalog-jul26.xlsx</div>
              <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>4,182 SKUs · 2.4 MB · uploaded 31 Jul, 01:58 ET</div>
            </div>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-2)' }}>
              <Button variant="ghost" iconLeft="refresh-cw">Replace</Button>
            </span>
          </div>
          <Alert tone="danger" title="12 lines need attention">Country of origin is required for every TAA-compliant line item.</Alert>
          <div style={{ marginTop: 'var(--space-5)' }}>
            <Tabs value={step} onChange={setStep} items={[{ id: 'review', label: 'Flagged lines', count: 12 }, { id: 'all', label: 'All SKUs', count: '4,182' }]} />
          </div>
          <div style={{ marginTop: 'var(--space-5)' }}>
            <DataTable compact striped columns={[
              { key: 'sku', label: 'SKU', strong: true },
              { key: 'desc', label: 'Description' },
              { key: 'price', label: 'List', align: 'right' },
              { key: 'gsa', label: 'GSA price', align: 'right' },
              { key: 'origin', label: 'Origin', align: 'center' },
              { key: 'ok', label: 'Status', render: (r) => r.ok ? <Badge tone="success">Ready</Badge> : <Badge tone="danger">Origin missing</Badge> },
            ]} rows={SKUS} footer={<><span>5 of 4,182 lines</span><Button variant="link" iconRight="download">Export CSV</Button></>} />
          </div>
        </Card>

        <div style={{ display: 'grid', gap: 'var(--space-5)', alignContent: 'start' }}>
          <Card padding="lg" eyebrow="Submission settings" title="Upload options">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Select label="Contract" options={['47QSWA18D008F — MAS', '47QSWA20D009X — MAS']} />
              <Select label="Upload type" options={['Full catalog replace', 'Price change only', 'Add new SKUs']} />
              <Input label="Modification number" hint="Leave blank for routine catalog refresh" placeholder="PA-0042" />
              <Switch label="Auto-submit nightly at 02:00 ET" defaultChecked />
              <Switch label="Email me the EDI response" defaultChecked />
              <Checkbox label="All lines are TAA compliant" description="Required before GSA transmission" />
            </div>
          </Card>
          <Card padding="lg" variant="sunken" eyebrow="Last 3 uploads">
            <ul style={uploadStyles.history}>
              {[['31 Jul', '4,170 accepted', 'warning'], ['24 Jul', '4,182 accepted', 'success'], ['17 Jul', '4,180 accepted', 'success']].map(([d, r, tone]) => (
                <li key={d} style={uploadStyles.historyItem}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{d}</span>
                  <span style={{ font: 'var(--type-body)', fontSize: 'var(--text-body-sm)' }}>{r}</span>
                  <Badge tone={tone}>{tone === 'success' ? 'Clean' : '12 errors'}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <Dialog open={open} icon="upload" title="Submit catalog to GSA Advantage"
        description="4,170 valid SKUs will be transmitted via EDI. The 12 flagged lines will be skipped."
        onClose={() => setOpen(false)}
        footer={<><Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button><Button variant="accent" iconRight="send" onClick={() => setOpen(false)}>Transmit now</Button></>}>
        <Checkbox label="Notify my GSA specialist when GSA responds" defaultChecked />
      </Dialog>
    </>
  );
}

const uploadStyles = {
  stepper: { display: 'flex', gap: 'var(--space-6)', background: 'var(--surface-page)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', padding: 'var(--space-4) var(--space-6)' },
  step: { display: 'flex', alignItems: 'center', gap: 10, position: 'relative', flex: 1 },
  stepDot: { width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', flex: 'none' },
  stepLine: { flex: 1, height: 1, background: 'var(--border-default)', marginLeft: 10 },
  grid: { display: 'grid', gridTemplateColumns: 'minmax(0,1.65fr) minmax(0,.85fr)', gap: 'var(--space-5)', alignItems: 'start' },
  dropzone: { display: 'flex', alignItems: 'center', gap: 'var(--space-4)', background: 'var(--surface-subtle)', border: '1px dashed var(--border-brand)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', marginBottom: 'var(--space-5)' },
  dropIcon: { width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--blue-100)', color: 'var(--brand-primary)', display: 'grid', placeItems: 'center', flex: 'none' },
  history: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  historyItem: { display: 'grid', gridTemplateColumns: '54px 1fr auto', alignItems: 'center', gap: 'var(--space-3)', margin: 0 },
};

Object.assign(window, { CatalogUploadScreen });
