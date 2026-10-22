// Transport to the production backend. Leads post to the same Contact Form 7
// endpoint (WordPress + reCAPTCHA v3 + Akismet) that pricereporter.com's own
// "Get Consultation" form uses, so they land in the same inbox/CRM pipeline,
// and Google tracking fires through GTM exactly like on the main site.
//
// Field map (CF7 form 1227): your-name ← name, text-647 ← company,
// your-email ← email, tel-248 ← phone, your-subject ← lead source label.

const CF7 = {
  endpoint: 'https://pricereporter.com/wp-json/contact-form-7/v1/contact-forms/1227/feedback',
  formId: '1227',
  version: '5.8.6',
  locale: 'en_US',
  unitTag: 'wpcf7-f1227-p25759-o1',
  containerPost: '25759',
};
const RECAPTCHA_KEY = '6Le5U40UAAAAADVo_kclFuqfzCguPGSaKUIcYRC0';

const loadedAt = Date.now();
let recaptchaPromise = null;

// Lazy-load reCAPTCHA on first form interaction so it doesn't weigh on page load.
export function warmUpTransport() {
  if (recaptchaPromise) return recaptchaPromise;
  recaptchaPromise = new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`;
    s.async = true;
    s.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha));
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return recaptchaPromise;
}

export async function sendLead({ name, company = '', email, phone, subject }) {
  const grecaptcha = await warmUpTransport();
  let token = '';
  if (grecaptcha) {
    try {
      token = await grecaptcha.execute(RECAPTCHA_KEY, { action: 'contact' });
    } catch {
      // token stays empty; CF7 decides server-side
    }
  }

  const fd = new FormData();
  fd.append('_wpcf7', CF7.formId);
  fd.append('_wpcf7_version', CF7.version);
  fd.append('_wpcf7_locale', CF7.locale);
  fd.append('_wpcf7_unit_tag', CF7.unitTag);
  fd.append('_wpcf7_container_post', CF7.containerPost);
  fd.append('_wpcf7_posted_data_hash', '');
  fd.append('_wpcf7_recaptcha_response', token);
  fd.append('your-name', name);
  fd.append('text-647', company);
  fd.append('your-email', email);
  fd.append('tel-248', phone);
  fd.append('your-subject', subject);
  // Akismet anti-spam fields: honeypot stays empty, timer proves a human pace.
  fd.append('_wpcf7_ak_hp_textarea', '');
  fd.append('_wpcf7_ak_js', String(Date.now() - loadedAt));

  const res = await fetch(CF7.endpoint, { method: 'POST', body: fd });
  const data = await res.json();
  if (data.status !== 'mail_sent') {
    throw new Error(`CF7 ${data.status}: ${data.message || ''}`);
  }

  // Conversion tracking: GTM setups listen for CF7's DOM event; the dataLayer
  // push covers trigger configs that use custom events instead.
  document.dispatchEvent(
    new CustomEvent('wpcf7mailsent', {
      bubbles: true,
      detail: { contactFormId: Number(CF7.formId), unitTag: CF7.unitTag, status: 'mail_sent' },
    })
  );
  (window.dataLayer = window.dataLayer || []).push({ event: 'lead_form_submit', leadSource: subject });

  return data;
}

// One label per lead so sales can tell forms and pages apart in the inbox.
export function leadSubject(formLabel) {
  return `${formLabel} — landing ${window.location.pathname}`;
}
