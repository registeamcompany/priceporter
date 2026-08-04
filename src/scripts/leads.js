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

// TODO: paste the deployed Apps Script Web App URL (see docs/DEPLOY_ANALYTICS.md)
const LEAD_ENDPOINT = '';

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
