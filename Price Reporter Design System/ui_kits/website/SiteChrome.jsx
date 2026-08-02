const { Button, Logo, Icon } = window.PriceReporterDesignSystem_2cd382;

const NAV = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services', children: ['GSA Contract Acquisition', 'GSA Contract Management', 'GSA Order Management', 'GSA Advantage Catalog Upload'] },
  { id: 'gsa', label: 'Get GSA Contract' },
  { id: 'build', label: 'Build Success with GSA' },
  { id: 'automate', label: 'Automate GSA Business' },
  { id: 'tools', label: 'Tools' },
  { id: 'article', label: 'Resources' },
];

function SiteHeader({ route, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={siteChromeStyles.header}>
      <div style={siteChromeStyles.utility}>
        <div className="pr-container" style={siteChromeStyles.utilityInner}>
          <span className="pr-caps-label">Experts in GSA consulting:</span>
          <a href="tel:2015676646" style={siteChromeStyles.phone}>201.567.6646</a>
          <span style={{ flex: 1 }} />
          <Button variant="accent" size="sm" onClick={() => onNavigate('contact')}>Get consultation</Button>
          <button type="button" style={siteChromeStyles.utilityLink}>Log In <Icon name="chevron-down" size={13} /></button>
          <button type="button" style={{ ...siteChromeStyles.utilityLink, fontWeight: 700 }} onClick={() => onNavigate('contact')}>Contact</button>
        </div>
      </div>
      <div className="pr-container" style={siteChromeStyles.bar}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ display: 'flex' }}>
          <Logo height={38} />
        </a>
        <nav style={siteChromeStyles.nav}>
          {NAV.map((item) => (
            <span key={item.id} style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setOpen(true)}
              onMouseLeave={() => item.children && setOpen(false)}>
              <button type="button" onClick={() => onNavigate(item.id === 'services' ? 'gsa' : item.id)}
                style={{ ...siteChromeStyles.navLink, ...(route === item.id ? siteChromeStyles.navLinkActive : null) }}>
                {item.label}
              </button>
              {item.children && open ? (
                <div style={siteChromeStyles.menu}>
                  {item.children.map((c) => (
                    <button key={c} type="button" style={siteChromeStyles.menuItem} onClick={() => { setOpen(false); onNavigate('gsa'); }}>
                      <Icon name="chevron-right" size={14} color="var(--brand-accent)" />{c}
                    </button>
                  ))}
                </div>
              ) : null}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

const FOOT = [
  { h: 'Services', links: ['Get GSA Contract', 'Manage GSA Contract', 'GSA Advantage Catalog Update', 'GSA Contract Modifications', 'GSA Order Management', 'Contractor Assessment Support', 'GSA Transition to FCP'] },
  { h: 'Information', links: ['Testimonials', 'Case Studies', 'Contact Us', 'Terms of use', 'Cookie Policy', 'Privacy Policy', 'Sitemap'] },
  { h: 'Resources', links: ['Blog', 'Webinars', 'Price Reporter OMS Helpdesk', 'Market Intelligence Report', 'Glossary', 'FAQ'] },
];

function SiteFooter({ onNavigate }) {
  return (
    <footer className="pr-inverse" style={{ paddingTop: 'var(--space-11)', paddingBottom: 'var(--space-6)' }}>
      <div className="pr-container" style={siteChromeStyles.footGrid}>
        {FOOT.map((col) => (
          <div key={col.h}>
            <h4 style={siteChromeStyles.footHead}>{col.h}</h4>
            <ul style={siteChromeStyles.footList}>
              {col.links.map((l) => (
                <li key={l} style={{ margin: 0 }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(l === 'FAQ' ? 'home' : l === 'Contact Us' ? 'contact' : 'gsa'); }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 style={siteChromeStyles.footHead}>Contact</h4>
          <ul style={siteChromeStyles.footList}>
            <li style={siteChromeStyles.footContact}><Icon name="mail" size={16} /><a href="mailto:salesteam@pricereporter.com">salesteam@pricereporter.com</a></li>
            <li style={siteChromeStyles.footContact}><Icon name="phone" size={16} /><a href="tel:2015676646">201.567.6646</a></li>
          </ul>
          <p style={siteChromeStyles.footCopy}>Copyright 2026. Price Reporter</p>
        </div>
      </div>
      <div className="pr-container" style={siteChromeStyles.footBottom}>
        <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
      </div>
    </footer>
  );
}

const siteChromeStyles = {
  header: { position: 'sticky', top: 0, zIndex: 30, background: '#fff', borderBottom: '1px solid var(--border-subtle)' },
  utility: { background: 'var(--surface-utility)', color: '#fff' },
  utilityInner: { display: 'flex', gap: 'var(--space-5)', alignItems: 'center', minHeight: 46 },
  phone: { color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '.01em' },
  utilityLink: { display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 0, color: '#fff', cursor: 'pointer', font: 'var(--type-body)', fontSize: 'var(--text-body-sm)' },
  bar: { display: 'flex', alignItems: 'center', gap: 'var(--space-8)', minHeight: 72 },
  nav: { display: 'flex', gap: 'var(--space-1)', marginLeft: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end' },
  navLink: { background: 'none', border: 0, cursor: 'pointer', font: 'var(--type-nav)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--blue-900)', padding: '10px 10px', whiteSpace: 'nowrap' },
  navLinkActive: { color: 'var(--brand-accent)' },
  menu: { position: 'absolute', top: '100%', left: 0, minWidth: 280, background: '#fff', border: '1px solid var(--border-subtle)', padding: 0, display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-md)' },
  menuItem: { display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 0, borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', textAlign: 'left', font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', color: 'var(--blue-900)', padding: '12px 14px' },
  footGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-8)' },
  footHead: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, textTransform: 'uppercase', color: '#fff', marginBottom: 'var(--space-5)' },
  footList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', font: 'var(--type-body)', fontSize: 'var(--text-body-sm)' },
  footContact: { display: 'flex', alignItems: 'center', gap: 10, margin: 0, color: '#fff' },
  footCopy: { font: 'var(--type-body)', fontSize: 'var(--text-body-sm)', color: '#fff', marginTop: 'var(--space-8)' },
  footBottom: { textAlign: 'center', marginTop: 'var(--space-9)', font: 'var(--type-caption)', color: 'var(--text-on-dark-muted)' },
};

Object.assign(window, { SiteHeader, SiteFooter });
