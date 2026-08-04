// Lead delivery + analytics contract shared by every form on the landing.
//
// Analytics: after a successful submit we push the SAME dataLayer event the main
// pricereporter.com site uses (see docs/DEPLOY_ANALYTICS.md), so the landing joins
// the existing GTM funnel (GA4 / Ads / Meta / Clarity / …) with no GTM changes.
//
// Lead storage: forms POST to a Google Apps Script Web App that appends rows to a
// Google Sheet (and can forward by email). Paste the deployed Web App URL below.
// While the URL is empty, submissions still show the success state and still fire
// the dataLayer event — only sheet delivery is skipped.

const LEAD_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzc9a68pGpDi-NAHdMDsNDiR-AleCLSZs1c1qGpDmwq2iX2tKkMUvXabk9a_zUxkJ-6/exec';

// Ad-attribution params captured on landing and kept for the session, so a lead
// submitted after scrolling/quizzing still carries the click's UTM tag.
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'msclkid', 'fbclid'];
function currentUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = UTM_KEYS.filter((k) => params.has(k))
      .map((k) => `${k}=${params.get(k)}`)
      .join('&');
    if (found) sessionStorage.setItem('pr_utm', found);
    return sessionStorage.getItem('pr_utm') || '';
  } catch {
    return '';
  }
}

export function trackFormSubmit(formId) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'all_form_submit',
    formId,
    formSubmitUrl: window.location.href,
  });
}

export function sendLead(formId, fields) {
  const payload = {
    formId,
    ...fields,
    page: window.location.href,
    utm: currentUtm(),
    submittedAt: new Date().toISOString(),
  };
  console.info('[lead]', payload);
  if (!LEAD_ENDPOINT) return Promise.resolve();
  // Apps Script Web Apps don't answer CORS preflights: no-cors + text/plain makes
  // the POST a "simple request" (fire-and-forget; the opaque response is expected).
  return fetch(LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch((err) => console.warn('[lead] delivery failed', err));
}
