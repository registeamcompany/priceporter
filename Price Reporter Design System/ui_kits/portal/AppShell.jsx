const { Logo, Icon, IconButton, Badge, Button } = window.PriceReporterDesignSystem_2cd382;

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'chart-column' },
  { id: 'orders', label: 'Orders', icon: 'receipt', count: 32 },
  { id: 'catalog', label: 'Catalog upload', icon: 'upload' },
  { id: 'contracts', label: 'Contracts', icon: 'gavel' },
  { id: 'compliance', label: 'Compliance', icon: 'shield-check', dot: true },
  { id: 'reports', label: 'Reports', icon: 'file-text' },
];

function AppShell({ route, onNavigate, title, subtitle, actions, children }) {
  return (
    <div style={shellStyles.root}>
      <aside style={shellStyles.side}>
        <div style={shellStyles.brand}>
          <Logo variant="mark" height={30} />
          <span style={shellStyles.brandWord}><b style={{ fontWeight: 500, color: 'var(--blue-300)' }}>PRICE</b>REPORTER</span>
        </div>
        <div style={shellStyles.sideLabel}>Order Management</div>
        <nav style={shellStyles.nav}>
          {NAV.map((n) => {
            const on = n.id === route;
            return (
              <button key={n.id} type="button" onClick={() => onNavigate(n.id)}
                style={{ ...shellStyles.navItem, ...(on ? shellStyles.navItemOn : null) }}>
                <Icon name={n.icon} size={17} />
                <span style={{ flex: 1, textAlign: 'left' }}>{n.label}</span>
                {n.count != null ? <span style={shellStyles.navCount}>{n.count}</span> : null}
                {n.dot ? <span style={shellStyles.navDot} /> : null}
              </button>
            );
          })}
        </nav>
        <div style={shellStyles.sideFoot}>
          <div style={shellStyles.helpCard}>
            <Icon name="phone-call" size={18} color="var(--orange-300)" />
            <span style={{ font: 'var(--type-caption)', color: 'var(--text-on-dark-muted)' }}>Your GSA specialist</span>
            <strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 14 }}>Kate M. · ext. 214</strong>
          </div>
        </div>
      </aside>
      <div style={shellStyles.main}>
        <header style={shellStyles.topbar}>
          <div>
            <h1 style={shellStyles.title}>{title}</h1>
            {subtitle ? <p style={shellStyles.subtitle}>{subtitle}</p> : null}
          </div>
          <div style={shellStyles.topActions}>
            {actions}
            <IconButton icon="bell" label="Alerts" variant="outline" />
            <span style={shellStyles.user}>
              <span style={shellStyles.avatar}>AS</span>
              <span>
                <span style={shellStyles.userName}>Acme Supply Co.</span>
                <span style={shellStyles.userMeta}>47QSWA18D008F</span>
              </span>
              <Icon name="chevron-down" size={15} color="var(--text-muted)" />
            </span>
          </div>
        </header>
        <div style={shellStyles.content}>{children}</div>
      </div>
    </div>
  );
}

const shellStyles = {
  root: { display: 'grid', gridTemplateColumns: '256px minmax(0,1fr)', minHeight: '100vh', background: 'var(--surface-subtle)' },
  side: { background: 'var(--surface-inverse)', display: 'flex', flexDirection: 'column', padding: 'var(--space-5) var(--space-4)', gap: 'var(--space-5)' },
  brand: { display: 'flex', alignItems: 'center', gap: 10, padding: '0 var(--space-2)' },
  brandWord: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, letterSpacing: '.02em', color: '#fff' },
  sideLabel: { font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--blue-300)', padding: '0 var(--space-2)' },
  nav: { display: 'flex', flexDirection: 'column', gap: 2 },
  navItem: { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'none', border: 0, cursor: 'pointer', color: 'var(--blue-200)', font: 'var(--type-button)', fontSize: 'var(--text-body-sm)', padding: '10px var(--space-3)', borderRadius: 'var(--radius-sm)', transition: 'var(--transition-control)' },
  navItemOn: { background: 'rgb(255 255 255 / .10)', color: '#fff', boxShadow: 'inset 2px 0 0 var(--orange-500)' },
  navCount: { font: 'var(--type-micro)', fontSize: 11, background: 'rgb(255 255 255 / .14)', padding: '1px 7px', borderRadius: 'var(--radius-pill)' },
  navDot: { width: 7, height: 7, borderRadius: '50%', background: 'var(--orange-500)' },
  sideFoot: { marginTop: 'auto' },
  helpCard: { display: 'flex', flexDirection: 'column', gap: 4, background: 'rgb(255 255 255 / .06)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' },
  main: { display: 'flex', flexDirection: 'column', minWidth: 0 },
  topbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', padding: 'var(--space-5) var(--space-7)', background: 'var(--surface-page)', borderBottom: '1px solid var(--border-subtle)' },
  title: { font: 'var(--type-h2)', margin: 0, color: 'var(--text-strong)' },
  subtitle: { font: 'var(--type-caption)', color: 'var(--text-muted)', margin: '4px 0 0' },
  topActions: { display: 'flex', alignItems: 'center', gap: 'var(--space-3)' },
  user: { display: 'flex', alignItems: 'center', gap: 'var(--space-3)', paddingLeft: 'var(--space-4)', borderLeft: '1px solid var(--border-subtle)', cursor: 'pointer' },
  avatar: { width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--blue-100)', color: 'var(--blue-700)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13 },
  userName: { display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' },
  userMeta: { display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' },
  content: { padding: 'var(--space-7)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' },
};

Object.assign(window, { AppShell });
