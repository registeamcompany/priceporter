const { StatCard, Card, DataTable, Badge, Button, Tabs, Alert, Icon, Tag } = window.PriceReporterDesignSystem_2cd382;

const ORDERS = [
  { id: 1, po: '47QSWA-2261', agency: 'Dept. of Veterans Affairs', lines: 14, total: '$48,210.00', status: 'Shipped', tone: 'success', date: '28 Jul' },
  { id: 2, po: '47QSWA-2260', agency: 'U.S. Army Corps of Engineers', lines: 3, total: '$7,940.50', status: 'Processing', tone: 'brand', date: '28 Jul' },
  { id: 3, po: '47QSWA-2258', agency: 'GSA Federal Acquisition Service', lines: 41, total: '$132,004.00', status: 'Action needed', tone: 'warning', date: '27 Jul' },
  { id: 4, po: '47QSWA-2255', agency: 'Dept. of Homeland Security', lines: 8, total: '$21,880.75', status: 'Invoiced', tone: 'neutral', date: '26 Jul' },
  { id: 5, po: '47QSWA-2251', agency: 'National Park Service', lines: 2, total: '$3,120.00', status: 'Shipped', tone: 'success', date: '25 Jul' },
];

function DashboardScreen() {
  const [tab, setTab] = React.useState('open');
  return (
    <>
      <div style={dashStyles.stats}>
        <StatCard boxed tone="brand" value="32" label="Open orders" icon="receipt" trend="+6 this week" />
        <StatCard boxed tone="accent" value="$213K" label="Order value, July" icon="dollar-sign" trend="+12% vs. June" />
        <StatCard boxed tone="brand" value="4,182" label="Active catalog SKUs" icon="package" />
        <StatCard boxed tone="brand" value="21 days" label="To price list expiry" icon="clock" trend="Mod submitted" trendDirection="down" />
      </div>

      <Alert tone="warning" title="12 SKUs were rejected in last night's upload" onClose={() => {}}>
        Missing country of origin on 12 line items. Fix them in the catalog file and re-submit — your specialist has been notified.
      </Alert>

      <div style={dashStyles.split}>
        <Card padding="lg" style={{ minWidth: 0 }}
          title="Recent GSA orders"
          footer={<><span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Showing 5 of 32 orders</span><span style={{ marginLeft: 'auto' }}><Button variant="link" iconRight="arrow-right">View all orders</Button></span></>}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            <Tabs variant="pill" value={tab} onChange={setTab} items={[{ id: 'open', label: 'Open' }, { id: 'shipped', label: 'Shipped' }, { id: 'all', label: 'All' }]} />
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <Tag active onClick={() => {}}>This month</Tag>
              <Tag onClick={() => {}}>All agencies</Tag>
            </div>
          </div>
          <DataTable compact sortKey="po" onSort={() => {}} columns={[
            { key: 'po', label: 'PO number', strong: true, sortable: true },
            { key: 'agency', label: 'Agency' },
            { key: 'lines', label: 'Lines', align: 'center' },
            { key: 'total', label: 'Total', align: 'right', sortable: true },
            { key: 'date', label: 'Received', align: 'right' },
            { key: 'status', label: 'Status', render: (r) => <Badge tone={r.tone}>{r.status}</Badge> },
          ]} rows={ORDERS} />
        </Card>

        <div style={{ display: 'grid', gap: 'var(--space-5)', alignContent: 'start' }}>
          <Card padding="lg" eyebrow="Catalog health" title="GSA Advantage sync">
            <div style={dashStyles.syncRows}>
              {[['Last successful upload', '31 Jul, 02:14 ET', 'success'], ['SKUs accepted', '4,170 of 4,182', 'success'], ['Rejected lines', '12', 'warning'], ['Next scheduled run', 'Tonight, 02:00 ET', 'neutral']].map(([k, v, tone]) => (
                <div key={k} style={dashStyles.syncRow}>
                  <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{k}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ ...dashStyles.dot, background: tone === 'success' ? 'var(--green-500)' : tone === 'warning' ? 'var(--amber-500)' : 'var(--neutral-300)' }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: 'var(--text-strong)' }}>{v}</span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-5)' }}><Button variant="primary" fullWidth iconLeft="upload">Upload new catalog</Button></div>
          </Card>
          <Card padding="lg" eyebrow="Compliance" title="Open items">
            <ul style={dashStyles.taskList}>
              {[['Price list expires 21 Aug', 'triangle-alert', 'var(--amber-500)'], ['EPA modification pending GSA review', 'clock', 'var(--blue-400)'], ['Annual sales report filed', 'circle-check', 'var(--green-500)']].map(([t, ic, col]) => (
                <li key={t} style={dashStyles.taskItem}><Icon name={ic} size={16} color={col} />{t}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

const dashStyles = {
  stats: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-5)' },
  split: { display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,.9fr)', gap: 'var(--space-5)', alignItems: 'start' },
  syncRows: { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  syncRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)' },
  dot: { width: 8, height: 8, borderRadius: '50%', display: 'inline-block' },
  taskList: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' },
  taskItem: { display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', margin: 0 },
};

Object.assign(window, { DashboardScreen });
